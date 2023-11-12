import React, { useContext } from "react";
import myContext from "../../context/data/myContext";
import ShoppingBag from '../../photos/shopping-bag-icon-vector.jpg'
import TruckDelivery from '../../photos/truck-delivery.png'
import Taka from '../../photos/Taka.png'
export default function Track() {
    const context=useContext(myContext)
    const {mode}=context
  return (
    <div>
      <section>
        <div className=" container mx-auto px-5 md:py-5">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div
                className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg"
                style={{
                  backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
               <img src={ShoppingBag} className="w-14 h-14 mb-3 inline-block" alt="" />

                <h2
                  className="title-font font-medium text-lg text-gray-900"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Premium Tshirts
                </h2>
                <p className="leading-relaxed">
                  Our T-Shirts are 100% made of cotton.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div
                className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg"
                style={{
                  backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <img src={TruckDelivery} alt="" className="w-14 h-14 mb-3 inline-block"/>

                <h2
                  className="title-font font-medium text-lg text-gray-900"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Premium Tshirts
                </h2>
                <p className="leading-relaxed">
                  Our T-Shirts are 100% made of cotton.
                </p>
              </div>
            </div>

            <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div
                className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg"
                style={{
                  backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
               <img src={Taka} className="w-14 h-14 mb-3 inline-block" alt="" />

                <h2
                  className="title-font font-medium text-lg text-gray-900"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Premium Tshirts
                </h2>
                <p className="leading-relaxed">
                  Our T-Shirts are 100% made of cotton.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
