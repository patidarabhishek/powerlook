import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import './App.css'
import Hero from './pages/hero'
import MyNavbar from './components/header/mynavbar'
import Footer from './components/footer/footer'
import Summer2025 from './pages/summer_2025';
import NewArrival from './pages/new_arrival';
import Tshirt from './pages/tshirt';
import ScrollToTop from './components/scrollToTop';
import Shirt from './pages/shirt';
import BottomWear from './pages/bottom_wear';
import Jacket from './pages/jacket';
import ProductDetail from './pages/productDetailed';
import AddToCart from './pages/add_to_cart';
import AddToWishlist from './pages/add_to_wishlist';
import SearchBar from './components/header/search_bar';
import Profile from './components/add_to_wishlist/profile/profile';
import MyOrders from './components/add_to_wishlist/my_orders/my_orders';
import Returns from './components/add_to_wishlist/returns/returns';
import Addresses from './components/add_to_wishlist/my_address/my_address';
import MyAddress from './components/add_to_wishlist/my_address/my_address';
import AboutUs from './components/common/about_us';
import BlogPage from './components/common/blog';
import AffiliateProgram from './components/common/affilate_program';
import StoreLocator from './components/common/store_locator';
import ContactUs from './components/common/contact_us';
import ReturnAndExchange from './components/common/return_and_exchange';
import CancellationPolicy from './components/common/cancellation_policy';
import ShippingPolicy from './components/common/shipping_policy';
import PrivacyPolicy from './components/common/privacy_policy';
import TermsAndConditions from './components/common/term_and_condition';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ScrollToTop />
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/summer_2025" element={<Summer2025 />} />
        <Route path="/new_arrival" element={<NewArrival />} />
        <Route path="/tshirts" element={<Tshirt />} />
        <Route path="/shirts" element={<Shirt />} />
        <Route path="/bottom_wear" element={<BottomWear />} />
        <Route path="/jacket" element={<Jacket />} />
        <Route path="/product/:category/:id" element={<ProductDetail />} />
        <Route path="/add_to_cart" element={<AddToCart />} />
        <Route path="/add_to_wishlist" element={<AddToWishlist />} />
        <Route path="/search" element={<SearchBar />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/my_orders" element={<MyOrders />} />
        <Route path="/returns" element={<Returns />} />
        <Route path="/my_addresses" element={<MyAddress />} />
        <Route path="/about_us" element={<AboutUs />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/affiliate_program" element={<AffiliateProgram />} />
        <Route path="/store_locator" element={<StoreLocator />} />
        <Route path="/contact_us" element={<ContactUs />} />
        <Route path="/return_and_exchange" element={<ReturnAndExchange />} />
        <Route path="/cancellation_policy" element={<CancellationPolicy />} />
        <Route path="/shipping_policy" element={<ShippingPolicy />} />
        <Route path="/privacy_policy" element={<PrivacyPolicy />} />
        <Route path="/terms_and_conditions" element={<TermsAndConditions />} />
        {/* <Route path="/wishlist/mywishlist" element={<AddToWishlist />} /> */}
      </Routes>
      <Footer />

      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  )
}

export default App
