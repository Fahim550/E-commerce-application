import React, { useContext } from "react";
import myContext from "../../context/data/myContext";

export default function Testmonials() {
  const context = useContext(myContext);
  const { mode } = context;
  return (
    <div className="container  mx-auto px-2 py-5 sm:w-full">
      <div
        className="bg-white py-10 sm:py-10 "
        style={{
          backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
          color: mode === "dark" ? "white" : "",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto lg:mx-0 ">
            <h2
              className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center"
              style={{ color: mode === "dark" ? "white" : "" }}
            >
              Testimonial
            </h2>
            <p
              className="mt-2 text-xl font-semibold leading-8 text-gray-800 text-center"
              style={{ color: mode === "dark" ? "white" : "" }}
            >
              What our <span className="text-blue-500">customers</span> are
              saying
            </p>
          </div>
          <div className=" flex-wrap mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 sm:grid-cols-3 ">
            <article className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs"></div>
              <div className="group relative">
              
                <p className="mt-5 line-clamp-3 text-sm font-semibold leading-6 text-gray-900"  style={{color: mode === 'dark' ? 'white' : ''}}>
                  Edison bulb retro cloud bread echo park, helvetica stumptown
                  taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                  ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                  adaptogen squid fanny pack vaporware.
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  src="https://image.freepik.com/free-photo/man-office-portrait-male-worker_118454-194.jpg"
                  alt=""
                  className="h-10 w-10 rounded-full bg-gray-50"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900"  style={{color: mode === 'dark' ? 'white' : ''}}>
                    <a href="#">
                      <span className="absolute inset-0"></span>
                      Kamal Nayan Upadhyay
                    </a>
                  </p>
                  <p className="text-gray-900"  style={{color: mode === 'dark' ? 'white' : ''}}>Senior Product Designer</p>
                </div>
              </div>
            </article>
            <article className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs"></div>
              <div className="group relative">
              
                <p className="mt-5 line-clamp-3 text-sm font-semibold leading-6 text-gray-900"  style={{color: mode === 'dark' ? 'white' : ''}}>
                  Edison bulb retro cloud bread echo park, helvetica stumptown
                  taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                  ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                  adaptogen squid fanny pack vaporware.
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                  className="h-10 w-10 rounded-full bg-gray-50"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900"  style={{color: mode === 'dark' ? 'white' : ''}}>
                    <a href="#">
                      <span className="absolute inset-0"></span>
                      Michael Foster
                    </a>
                  </p>
                  <p className="text-gray-900"  style={{color: mode === 'dark' ? 'white' : ''}}>UI Develeoper</p>
                </div>
              </div>
            </article>
            <article className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs"></div>
              <div className="group relative">
              
                <p className="mt-5 line-clamp-3 text-sm font-semibold leading-6 text-gray-900"  style={{color: mode === 'dark' ? 'white' : ''}}>
                  Edison bulb retro cloud bread echo park, helvetica stumptown
                  taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                  ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                  adaptogen squid fanny pack vaporware.
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  src="https://scontent.fdac37-1.fna.fbcdn.net/v/t39.30808-6/366594489_1338398563775433_9013211594371023962_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHDpTynPY1Ur9MYyb3HSYPGIdp6POp36l8h2no86nfqXw640tzrzFO_YgDOZPyhltAVgytm5dQ9n2bJjmBsBTjQ&_nc_ohc=g5GbfGl9sskAX8E7iEq&_nc_ht=scontent.fdac37-1.fna&oh=00_AfCyKx2u5D2-FyvSEiWe_-dOrJgOW2Gf-7FTazb9vUYf3g&oe=6543C47F"
                  alt=""
                  className="h-10 w-10 rounded-full bg-gray-50"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900"  style={{color: mode === 'dark' ? 'white' : ''}}>
                    <a href="#">
                      <span className="absolute inset-0"></span>
                      Abdul Ahed Linkon
                    </a>
                  </p>
                  <p className="text-gray-900"  style={{color: mode === 'dark' ? 'white' : ''}}>Co-Founder Crack-Coder</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
