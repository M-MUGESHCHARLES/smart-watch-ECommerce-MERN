import React from 'react';
import '../../Shop.css';

import HeroBanner from '../ShopComponents/Banners1';
import { ExploreCategories } from '../ShopComponents/ExploreCategories';
import IconsCarousel from "../ShopComponents/IconsCarousel.js";
import ProductListCarousel from "../ShopComponents/ProductListCarousel.js";
import TrendingNowCarousel from "../ShopComponents/TrendingNowCarousel.js";
import {ProductDisplay} from '../ShopComponents/ProductDisplay.js';
import {BrandPartners} from '../ShopComponents/BrandPartners.js';
import FeedBack from '../../../HomePage/HomePageSections/feedback/FeedBack.js';
import FAQ from '../../../HomePage/HomePageSections/FAQ/FAQ.js';
import { useShop } from '../../ShopContext.js';



function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export default function ShopHomePage() {
  
  const {products} = useShop();

  const SmartWatches = shuffle(
    products.filter(
      (product) => product.category === "smart-watches"
    )
  ).slice(0, 5);
  
  const BestSelling_SmartWatches = shuffle(
    products.filter(
      (product) => product.bestSeller && product.category === "smart-watches"
    )
  ).slice(0, 5);

  const Wireless = shuffle(
    products.filter(
      (product) => product.category === 'wireless' 
    )
  ).slice(0,5);

  return (
    <>
      <HeroBanner />

      <ExploreCategories />

      <IconsCarousel />

      <ProductListCarousel
        title="New Launches"
        product_list={SmartWatches}
        path="/shop/smart-watches"
      />

      <TrendingNowCarousel />

      <ProductListCarousel
        title="Best Sellers"
        product_list={BestSelling_SmartWatches}
        path="/shop/smart-watches"
      />

      <ProductDisplay />

      <ProductListCarousel 
        title='True Wireless'
        product_list={Wireless}
        path='/shop/wireless'
      />

      <BrandPartners />

      <FeedBack />

      <FAQ />
    </>
  );
}
