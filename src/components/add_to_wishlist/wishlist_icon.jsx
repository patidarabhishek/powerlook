import { useState, useEffect, useContext } from 'react';
import { toast } from 'react-toastify';
import { LoginContext } from '../../context/LoginContext';
import LoginModal from '../modals/login_modal';

const WishlistIcon = ({ product }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [loginTriggeredFromWishlist, setLoginTriggeredFromWishlist] = useState(false);

  const { user, setPostLoginRedirect } = useContext(LoginContext);

  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const exists = wishlist.some(
      (item) =>
        item.id === product.id &&
        item.category === product.category &&
        (item.size === product.size || !product.size)
    );
    setIsWishlisted(exists);
  }, [product]);

  const toggleWishlist = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (!user) {
      setLoginTriggeredFromWishlist(true);
      setShowLogin(true);
      setPostLoginRedirect(null); // Optionally redirect to wishlist after login
      return;
    }

    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const existsIndex = wishlist.findIndex(
      (item) =>
        item.id === product.id &&
        item.category === product.category &&
        (item.size === product.size || !product.size)
    );

    if (existsIndex !== -1) {
      wishlist.splice(existsIndex, 1);
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
      toast.dismiss();
      toast.info('💔 Removed from Wishlist');
      setIsWishlisted(false);
    } else {
      const updatedWishlist = [...wishlist, product];
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
      toast.dismiss();
      toast.success('❤️ Added to Wishlist');
      setIsWishlisted(true);
    }
  };

  const handleModalClose = () => {
    setShowLogin(false);
    setLoginTriggeredFromWishlist(false); // Reset flag
  };

  return (
    <>
      <LoginModal show={showLogin} handleClose={handleModalClose} />

      {/* Use a span instead of div if you're inside a <Link> to avoid navigation issues */}
      <span
        className="position-absolute top-0 end-0 m-2 bg-white rounded-circle p-2 py-1"
        onClick={toggleWishlist}
        style={{ cursor: 'pointer', zIndex: 10 }}
      >
        <i
          className={`bi ${isWishlisted ? 'bi-heart-fill text-danger' : 'bi-heart'}`}
          style={{ fontSize: '1rem' }}
        ></i>
      </span>
    </>
  );
};

export default WishlistIcon;
