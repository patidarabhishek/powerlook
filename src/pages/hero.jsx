import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../styles/custom.css';
import Slide from '../components/hero/slide';
import CategoryCollection from '../components/hero/categorycollection';
import NewTrends from '../components/hero/newtrends';
import NewArrivals from '../components/hero/newarrival';
import HappyCustomers from '../components/hero/happycustomer';

const Hero = () => {
  return (
    <>
        <Slide/>
        <CategoryCollection/>
        <NewTrends/>
        <NewArrivals/>
        <HappyCustomers/>
    </>
  );
};

export default Hero;
