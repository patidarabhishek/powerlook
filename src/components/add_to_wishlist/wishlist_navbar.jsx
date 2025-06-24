import React from 'react';
import { NavLink } from 'react-router-dom';


const WishlistNavbar = () => {
  return (
    <>
          <div className="col-md-3 border-end">
          <ul className="list-group border-0" style={{ border: 'none' }}>
            <NavLink
              to="/profile"
              className={({ isActive }) => `list-group-item border-0 py-3 ${isActive ? 'fw-bold border-start border-3 border-danger text-dark bg-white' : 'text-muted'}`}
            >
              Profile
            </NavLink>
            <NavLink
              to="/returns"
              className={({ isActive }) => `list-group-item border-0 py-3 ${isActive ? 'fw-bold border-start border-3 border-danger text-dark bg-white' : 'text-muted'}`}
            >
              Returns / Exchange
            </NavLink>
            <NavLink
              to="/my_orders"
              className={({ isActive }) => `list-group-item border-0 py-3 ${isActive ? 'fw-bold border-start border-3 border-danger text-dark bg-white' : 'text-muted'}`}
            >
              My Orders
            </NavLink>
            <NavLink
              to="/add_to_wishlist"
              className={({ isActive }) => `list-group-item border-0 py-3 ${isActive ? 'fw-bold border-start border-3 border-danger text-dark bg-white' : 'text-muted'}`}
            >
              My Wishlist
            </NavLink>
            <NavLink
              to="/my_addresses"
              className={({ isActive }) => `list-group-item border-0 py-3 ${isActive ? 'fw-bold border-start border-3 border-danger text-dark bg-white' : 'text-muted'}`}
            >
              Addresses
            </NavLink>
            {/* <NavLink
              to="/wishlist/wallet"
              className={({ isActive }) => `list-group-item border-0 py-3 ${isActive ? 'fw-bold border-start border-3 border-danger text-dark bg-white' : 'text-muted'}`}
            >
              Powerlook Wallet
            </NavLink> */}
          </ul>
        </div>
    </>
  );
};

export default WishlistNavbar;  