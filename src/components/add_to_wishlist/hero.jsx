import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import WishlistNavbar from './wishlist_navbar';
import { CartContext } from '../../context/CartContext';
import { LoginContext } from '../../context/LoginContext'; // ✅ Import LoginContext
import { toast } from 'react-toastify';
import LoginModal from '../modals/login_modal';

const Hero = () => {
  const [wishlist, setWishlist] = useState([]);
  const { addToCart } = useContext(CartContext);
  const { user } = useContext(LoginContext); // ✅ Access login state
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    if (user) {
      const stored = JSON.parse(localStorage.getItem('wishlist')) || [];
      setWishlist(stored);
    } else {
      setShowLogin(true); // ✅ Show login modal if not logged in
    }
  }, [user]);

  const removeFromWishlist = (id, size) => {
    const updated = wishlist.filter(item => !(item.id === id && item.size === size));
    localStorage.setItem('wishlist', JSON.stringify(updated));
    setWishlist(updated);
    toast.dismiss();
    toast.success('Product removed from wishlist!');
  };

  const moveToBag = (item) => {
    const itemToAdd = {
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      size: item.size,
      category: item.category,
    };

    addToCart(itemToAdd);
    removeFromWishlist(item.id, item.size);
    toast.dismiss();
    toast.success('🛒 Product moved to bag!');
  };

  return (
    <>
      <LoginModal show={showLogin} handleClose={() => setShowLogin(false)} />

      {user && (
        <div className="container" style={{ marginTop: '120px' }}>
          <div className="row">
            <WishlistNavbar />
            <div className="col-md-8 mr-5">
              <h3 className="mb-4">My Wishlist</h3>
              {wishlist.length === 0 ? (
                <p>No items in wishlist.</p>
              ) : (
                wishlist.map((item, index) => (
                  <div className="card mb-3" key={index}>
                    <div className="row g-0">
                      <div className="col-md-3">
                        <Link to={`/product/${item.category}/${item.id}`}>
                          <img
                            src={item.image}
                            alt={item.name}
                            width="120"
                            className="me-3 rounded"
                            style={{
                              cursor: 'pointer',
                              marginTop: '10px',
                              marginRight: '10px',
                            }}
                          />
                        </Link>
                      </div>
                      <div className="col-md-9">
                        <div className="card-body">
                          <h5 className="card-title">{item.name}</h5>
                          <p className="card-text mb-1">Size: {item.size}</p>
                          <p className="card-text fw-bold">₹{item.price}</p>
                          <button
                            className="btn btn-outline-secondary me-2"
                            onClick={() => removeFromWishlist(item.id, item.size)}
                          >
                            Remove
                          </button>
                          {!item.size ? (
                            <Link to={`/product/${item.category}/${item.id}`}>
                              <button
                                className="btn btn-danger"
                                onClick={() => {
                                  toast.dismiss();
                                  toast.warn('Please select a size!');
                                }}
                              >
                                Move to Bag
                              </button>
                            </Link>
                          ) : (
                            <button className="btn btn-danger" onClick={() => moveToBag(item)}>
                              Move to Bag
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
