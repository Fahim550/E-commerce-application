import  { useContext } from 'react'
import Layout from '../../Component/layout/Layout'
import myContext from '../../context/data/myContext';
import HeroSection from '../../Component/heroSection/HeroSection';
import Filter from '../../Component/filter/Filter';
import ProductsCard from '../../Component/productsCard/ProductsCard';
import Track from '../../Component/track/Track';
import Testmonials from '../../Component/testimonials/Testmonials';
import Cart from '../cart/Cart';
import AllProducts from '../allproducts/AllProducts';

export default function Home() {
  const context=useContext(myContext)
  console.log(context);
  return (
    <Layout>
      <div className='max-w-[1150px] justify-center mr-auto ml-auto mt-2'>
    <HeroSection/>
    <Filter/>
    <AllProducts/>
    {/* <ProductsCard/> */}
    <Track/>
    <Testmonials/>
    {/* <Cart /> */}
    
    </div>
    </Layout>
  )
}
