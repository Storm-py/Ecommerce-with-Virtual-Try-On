import React from 'react'
import Slider from '../components/Slider/Slider'
import Categories from '../components/Categories/Categories'
import FashionBannerGrid from '../components/FashionBannerGrid/FashionBannerGrid'
import BestSellerProducts from '../components/BestSellerProducts/BestSellerProducts'
import DealOfTheWeek from '../components/DealOfTheWeek/DealOfTheWeek'
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts'
import FashionSection from '../components/FashioSection/FashionSection'
import Testomonials from '../components/Testomonials/Testomonials'
import Articles from '../components/Articles/Articles'

function Home() {
  return (
  <>
    <div className='flex justify-between py-8'>
    <Categories/>
    <Slider/>
    </div>
    <FashionBannerGrid/>
    <BestSellerProducts/>
    <DealOfTheWeek/>
    <FeaturedProducts/>
    <FashionSection/>
    <Testomonials/>
    <Articles/>
  </>
  )
}

export default Home