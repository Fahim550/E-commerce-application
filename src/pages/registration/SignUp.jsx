import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import myContext from "../../context/data/myContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase/FireBaseConfig";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import Loader from "../../Component/loader/Loader";
import Layout from "../../Component/layout/Layout";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [address, setAddress] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();
  const context = useContext(myContext);
  const { loading, setLoading, mode } = context;

  const signUp = async (e) => {
    e.preventDefault();
    console.log(e.target.email.value);
    setLoading(true);

    if (name === "" || email === "" || password === "") {
       toast.error("All fields are required",{
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
       });
    }
    try {
       await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        
        const user = userCredential.user;
        // const initialcartvalue=0;
        addDoc(collection(db, "users"), {
            name:name,
            email:email,
            phonenumber:phonenumber,
            password:password,
            address:address,
            uid:user.uid,
          })
      .then(()=>{
        toast.success("Signup Succesfully");
        setName("");
        setEmail("");
        setPassword("");
        setLoading(false);
        navigate("/login");
      })

    })
      // console.log("😘😘😘", name, password, phonenumber);
    }catch (error) {
      console.log("😊😊😊",error);
      if (error.message == "Firebase: Error (auth/email-already-in-use).") {
        setErrorMsg("User already exist");
      }
      setLoading(false);
    }
  };
  return (
    <Layout>
      <div className="w-full relative p-5 bg-slate-950 ">

      <div className="h-[10rem] w-[10rem]  bg-gradient-to-r from-pink-400 to-blue-500 rounded-full absolute left-96 -top-26 transform rotate-180 animate-pulse"></div>
      <div className="h-[20rem] w-[20rem]  bg-gradient-to-r from-green-400 to-blue-500 rounded-full absolute -right-10 -top-36 transform rotate-180 animate-pulse"></div>
      <div className="h-[25rem] w-[25rem] bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full absolute -bottom-10 -left-20 transform rotate-180 animate-pulse"></div>
      <div
        className="flex flex-col mx-auto max-w-sm m-5 p-3 bg-white bg-opacity-10 rounded-2xl shadow-5xl relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm"
        style={{
          backgroundColor: mode === "dark" ? "rgb(32 33 34)" : "",
          color: mode === "dark" ? "white" : "",
        }}
      >
        {loading && <Loader />}
        {errorMsg && (
         
         <div className="flex w-100 justify-center bg-slate-200 p-2.5 rounded-md text-red-600">
           <h3>{errorMsg}</h3>
         </div>
       
     )}
        <div className="mb-2 text-center">
          <h1 className="my-3 text-4xl font-bold text-white font-poppins  tracking-widest">Sign Up</h1>
          <p
            className="text-sm text-white"
            style={{ color: mode === "dark" ? "white" : "" }}
          >
            Sign up to access your account
          </p>
        </div>
        
        <form className="space-y-12" onSubmit={(e) => signUp(e)}>
          <div className="space-y-4">
            <div>
              <label className="block mb-2 text-sm text-white">Your Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                name="name"
                required
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700  dark:text-gray-950"
              />
            </div>
            <div>
              <label
                className="block mb-2 text-sm text-white"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                id="email"
                required
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700  dark:text-gray-950"
              />
            </div>
            <div>
              <label
                className="block mb-2 text-sm text-white"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                Mobile Number
              </label>
              <input
                value={phonenumber}
                onChange={(e) => setPhonenumber(e.target.value)}
                type="number"
                name="number"
                id="number"
                required
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700  dark:text-gray-950"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2 text-white">
                <label
                  className="text-sm"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Password
                </label>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs hover:underline dark:text-gray-400"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Forgot password?
                </a>
              </div>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                id="password"
                required
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:text-gray-950"
              />
            </div>
            <div>
              <label
                className="block mb-2 text-sm text-white"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                Address
              </label>
              <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                name="address"
                id="address"
                required
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:text-gray-950"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="submit"
                className="w-full px-8 py-3 font-semibold rounded-md bg-blue-600 text-white"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                Sign Up
              </button>
            </div>
            <div>
              <h2
                className="text-white"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                Have an account{" "}
                <Link className=" text-blue-600 font-bold" to={"/login"}>
                  Login
                </Link>
              </h2>
            </div>
          </div>
        </form>
        <ToastContainer />
      </div>
    
    </div>
    </Layout>
  );
}
