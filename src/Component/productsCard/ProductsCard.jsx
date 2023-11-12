import React, { useContext, useEffect } from "react";
import myContext from "../../context/data/myContext";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addToCart } from "../../redux/CartSlice";


export default function ProductsCard() {
  const context = useContext(myContext);
  const {
    mode,
    product,
    searchkey,
    setSearchkey,
    filterType,
    setFilterType,
    filterPrice,
    setFilterPrice,
  } = context;
  // console.log("😘😘",product)
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  // console.log("🙌🙌", cartItems);
  const addCart = (item) => {
    dispatch(addToCart(item));
    toast.success("add to cart");
  };
  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <div className="container px-5 py-8 md:py-16 mx-auto">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-10">
        <h1
          className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
          style={{ color: mode === "dark" ? "white" : "" }}
        >
          Our Latest Collection
        </h1>
        <div className="h-1 w-20 bg-blue-600 rounded"></div>
      </div>
      <div className="flex flex-wrap ">
        {product
          .filter((obj) => obj.title.toLowerCase().includes(searchkey))
          .filter((obj) => obj.category.toLowerCase().includes(filterType))
          .filter((obj) => obj.price.includes(filterPrice))
          .slice(0, 8)
          .map((item, index) => (
            <div
              onClick={() => (window.location.href = `/productinfo/${item.id}`)}
              key={index}
              className="mr-5 bg-slate-100 m-1.5 w-[250px] border-2  border-solid border-slate-150 shadow-xl p-2.5 justify-center items-center h-[420px]  transition-shadow duration-300 ease-in-out  border-gray-200 border-opacity-60 rounded-2xl overflow-hidden "
              style={{
                backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                color: mode === "dark" ? "white" : "",
              }}
            >
              <div className="h-[220px] flex justify-center items-center">
                <img
                  src={item.imageUrl}
                  className="max-w-[220px] max-h-[200px] hover:scale-110 transition-scale-110  duration-300 ease-in-out rounded-2xl"
                />
              </div>
              <div className="h-[120px]">
                <h1 className="font-bold text-gray-600">E-Shop</h1>
                <p className="text-md font-bold">{item.title}</p>

                <div className="flex m-0 p-0 flex-col">
                  <div className="flex m-0 p-1.5">
                    <p className="flex text-blue-500 font-bold text-xl">
                      <span className="text-3xl -mt-2">৳</span>
                      {item.price}
                    </p>
                  </div>
                </div>
                </div>
                <div>
                  <button
                    className="bg-slate-100 w-full text-xl  text-blue-600 font-bold border-2 border-solid border-blue-500 p-1.5 mt-2.5 hover:bg-blue-600 hover:text-white rounded-2xl"
                    onClick={() => addCart(item)}
                  >
                    Add to Cart
                  </button>
                
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
// /product/${p.productType}/${p.id}
