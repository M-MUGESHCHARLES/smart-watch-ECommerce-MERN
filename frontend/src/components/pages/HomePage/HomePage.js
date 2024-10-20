import React, { useEffect } from 'react'
import '../../sections/sections.css';
import './HomePageSections/HomePage.css';

import Header from '../../sections/header/Header';
import Hero from './HomePageSections/hero/Hero';
import Explore from "./HomePageSections/Explore/Explore";
import Features from "./HomePageSections/Features/Features";
import ProductDisplay from "./HomePageSections/productDisplay/ProductDisplay";
import FAQ from "./HomePageSections/FAQ/FAQ";
import FeedBack from "./HomePageSections/feedback/FeedBack";
import Footer from "../../sections/footer/Footer";

export default function HomePage() {
  
  return (
    <>
      <Header />
      <Hero />
      <Explore />
      <Features />
      <ProductDisplay />
      <FeedBack />
      <FAQ />
      <Footer />
    </>
  );
}
