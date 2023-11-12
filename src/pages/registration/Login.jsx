import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import myContext from '../../context/data/myContext';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';
import { auth } from '../../firebase/FireBaseConfig';
import Loader from '../../Component/loader/Loader';
import Layout from '../../Component/layout/Layout';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const context = useContext(myContext);
    const { loading, setLoading, mode } = context;
    const navigate=useNavigate()
    const handleLogin=(e)=>{
      e.preventDefault();
      setLoading(true)
      try{
        signInWithEmailAndPassword(auth,email,password)
        .then((result)=>{
          toast.success("Login Successfull",{
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          })
          localStorage.setItem('user',JSON.stringify(result.user))
          setEmail(''),
          setPassword(''),
          navigate('/')
          setLoading(false)
        })
          .catch((error)=>{setErrorMsg(error.message)})
        

      }catch(error){
        console.log(error)
        if (error.message=='Firebase:Error (auth/invalid-email).')
        {
            setErrorMsg('please fill all required fields')
        }
        setLoading(false)
      }
    }
  return (
    
      <Layout>
        <div  className="w-full relative p-5 bg-slate-950 ">
        <div className="h-[10rem] w-[10rem]  bg-gradient-to-r from-pink-400 to-blue-500 rounded-full absolute left-96 -top-26 transform rotate-180 animate-pulse"></div>
      <div className="h-[20rem] w-[20rem]  bg-gradient-to-r from-green-400 to-blue-500 rounded-full absolute -right-10 -top-36 transform rotate-180 animate-pulse"></div>
      <div className="h-[25rem] w-[25rem] bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full absolute -bottom-10 -left-20 transform rotate-180 animate-pulse"></div>
        
        <div className="flex flex-col mx-auto mt-5  max-w-md p-6 bg-white bg-opacity-10 rounded-2xl shadow-5xl relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm">
          {loading && <Loader/>}
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl text-white font-poppins  tracking-widest">Login</h1>
            <p className="text-sm  text-white">
              Login to access your account
            </p>
          </div>
          <form className="space-y-12" >
          {
                    errorMsg&&
                    <div className="flex w-100 justify-center bg-slate-200 p-2.5 rounded-md text-red-600">
                        {
                            errorMsg
                        }
                        </div>
          }
            <div className="space-y-4">
              <div>
                <label className="block mb-2 text-sm  text-white">Email address</label>
                <input
                value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="leroy@jenkins.com"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:text-gray-900 "
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm  text-white">Password</label>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="text-xs hover:underline dark:text-gray-400"
                  >
                    Forgot password?
                  </a>
                </div>
                <input
                value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="off"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:text-gray-900 "
                />
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <button 
                 onClick={(e)=>handleLogin(e)}
                  className="w-full px-8 py-3 font-semibold rounded-md bg-blue-600 text-white"
                >
                  Sign in
                </button>
              </div>
              <h2 className='text-white'>Don't have an account <Link className=' text-blue-500 font-bold' to={'/signup'}>Signup</Link></h2>
            </div>
          </form>
        </div>
        </div>
        </Layout>
    
  )
}
