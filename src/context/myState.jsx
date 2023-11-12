import { useEffect, useState } from "react";
import MyContext from "./data/myContext";
import {
  Timestamp,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../firebase/FireBaseConfig";
export default function MyState(props) {
  const [mode, setMode] = useState("light");
  const [loading, setLoading] = useState(false);
  // const navigate=useNavigate()
  const toggleMode = () => {
    if (mode == "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(17,24,39)";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  const [products, setProducts] = useState({
    title: null,
    price: null,
    imageUrl: null,
    category: null,
    description: null,
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });
  // add product
  const addProduct = async (e) => {
    e.preventDefault();
    if (
      products.title == null ||
      products.price == null ||
      products.imageUrl == null ||
      products.category == null ||
      products.description == null
    ) {
      return toast.error("all field are required");
    }
    setLoading(true);
    try {
      // const productRef = collection(fireDB, 'products');
      await addDoc(collection(db, "products"), products).then(() => {
        toast.success("Add product successfully");
        setTimeout(() => {
          window.location.href = "/dashboard";
          // navigate('/dashboard')
        }, 800);
        getProductData();
        setLoading(false);
      });
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const [product, setProduct] = useState([]);
  const getProductData = async () => {
    setLoading(true);
    try {
      const q = query(collection(db, "products"), orderBy("time"));
      const data = onSnapshot(q, (querySnapshot) => {
        const productArray = [];
        querySnapshot.forEach((doc) => {
          productArray.push({ ...doc.data(), id: doc.id });
        });
        setProduct(productArray);
        setLoading(false);
      });
      return () => data;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // update product funcation
  const edithandle = (item) => {
    setProducts(item);
  };

  const updateProduct = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await setDoc(doc(db, "products", products.id), products);

      toast.success("Product Update Successfully");
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 800);
      getProductData();
      setLoading(false);
    } catch (error) {
      // console.log(error)
      setLoading(false);
    }
    setProducts("");
  };
  //  delete product
  const deleteProduct = async (item) => {
    try {
      await deleteDoc(doc(db, "products", item.id));
      toast.success("Product Deleted successfully");
      getProductData();
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  // order
  const [order, setOrder] = useState([]);
  // console.log("😒😒order",order[1])
  const getOrderData = async () => {
    setLoading(true);
    try {
      const result = await getDocs(collection(db, "order"));
      const ordersArray = [];
      result.forEach((doc) => {
        ordersArray.push(doc.data());
        setLoading(false);
      });
      setOrder(ordersArray);
      // console.log(ordersArray)
      setLoading(false);

      return () => data;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  //user
  const [user, setUser] = useState([]);
  const getUserData = async () => {
    setLoading(true);
    try {
      const result = await getDocs(collection(db, "users"));
      const usersArray = [];
      result.forEach((doc) => {
        usersArray.push(doc.data());
        setLoading(false);
      });
      setUser(usersArray);
      // console.log(ordersArray)
      setLoading(false);

      return () => data;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductData();
    getOrderData();
    getUserData();
  }, []);
  const [searchkey, setSearchkey] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filterPrice, setFilterPrice] = useState("");
  return (
    <MyContext.Provider
      value={{
        mode,
        toggleMode,
        loading,
        setLoading,
        products,
        setProducts,
        addProduct,
        product,
        edithandle,
        updateProduct,
        deleteProduct,
        order,
        user,
        searchkey,
        setSearchkey,
        filterType,
        setFilterType,
        filterPrice,
        setFilterPrice,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
}
