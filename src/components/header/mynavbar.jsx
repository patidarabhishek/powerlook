import React, { useEffect, useState, useContext, useRef } from 'react';
import {
  Container,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  ListGroup,
  Dropdown,
} from 'react-bootstrap';
import { FaHeart, FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import '../../styles/custom.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import LoginModal from '../modals/login_modal';
import axios from 'axios';
import { FiSearch } from 'react-icons/fi';
import { LoginContext } from '../../context/LoginContext';

const MyNavbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const { totalQuantity } = useContext(CartContext);
  const [showLogin, setShowLogin] = useState(false);
  const { isLoggedIn, logout } = useContext(LoginContext);
  const [showDropdown, setShowDropdown] = useState(false);

  const navigate = useNavigate();
  const searchRef = useRef(null); // Create a reference for the search area

  // Fetch all product names across categories
  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const endpoints = [
          '/api/tshirtapi.json',
          '/api/shirtapi.json',
          '/api/jacketapi.json',
          '/api/bottomWearapi.json',
          '/api/summerCollectionapi.json',
          '/api/newArrivalapi.json'
        ];

        const responses = await Promise.all(endpoints.map(endpoint => axios.get(endpoint)));
        const combined = responses.flatMap(res => res.data); // Combine all into one array
        setAllProducts(combined);
      } catch (error) {
        console.error('Error fetching products for search:', error);
      }
    };

    fetchAllProducts();
  }, []);

  // Filter suggestions as user types
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSuggestions([]);
      return;
    }

    const matches = allProducts
      .filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
      .slice(0, 5); // limit to 5 suggestions
    setSuggestions(matches);
  }, [searchQuery, allProducts]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (name) => {
    setSearchQuery('');
    // setSuggestions([]);
    navigate(`/search?query=${encodeURIComponent(name)}`);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSuggestions([]); // Hide suggestions
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  return (
    <>
      <Navbar bg="light" expand="xl" fixed="top" className="shadow-sm custom-navbar">
        <Container fluid>
          <Navbar.Brand>
            <NavLink to="/">
              <img
                src="https://www.powerlook.in/images/Logo/pl-logo.png?aio=w-256"
                alt="POWERLOOK Logo"
                height="22"
                className="mb-2"
              />
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/summer_2025" className="navbar-link">SUMMER_2025</NavLink>
              <NavLink to="/new_arrival" className="navbar-link">NEW ARRIVALS</NavLink>
              <NavLink to="/tshirts" className="navbar-link">T-SHIRTS</NavLink>
              <NavLink to="/shirts" className="navbar-link">SHIRTS</NavLink>
              <NavLink to="/bottom_wear" className="navbar-link">BOTTOMS</NavLink>
              <NavLink to="/jacket" className="navbar-link">JACKETS</NavLink>
            </Nav>

            {/* 🔍 Search Bar */}
            <div
              ref={searchRef}
              className="position-relative mx-2"
              style={{ maxWidth: '300px' }}
            >
              <Form onSubmit={handleSearchSubmit}>
                <FormControl
                  type="search"
                  placeholder="Search for products"
                  className="ps-3 pe-5"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoComplete="off"
                  style={{ height: '38px' }}
                />
                <FiSearch
                  onClick={handleSearchSubmit}
                  className="position-absolute end-0 top-50 translate-middle-y me-3"
                  style={{
                    cursor: 'pointer',
                    color: '#666',
                    fontSize: '1rem',
                    opacity: 0.7
                  }}
                />
              </Form>

              {suggestions.length > 0 && (
                <ListGroup
                  className="position-absolute w-100 z-3 shadow-sm mt-1 border-0 rounded-0"
                  style={{
                    maxHeight: '260px',
                    overflowY: 'auto'
                  }}
                >
                  {suggestions.map((item) => (
                    <ListGroup.Item
                      key={item.id}
                      action
                      onClick={() => handleSuggestionClick(item.name)}
                      className="d-flex align-items-center"
                      style={{ borderRadius: '0', gap: '10px' }}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{
                          width: '60px',
                          height: '60px',
                          objectFit: 'cover',
                          flexShrink: 0
                        }}
                      />
                      <span style={{ maxWidth: '220px', fontSize: '14px' }}>
                        {item.name} <br />
                        <span style={{ fontSize: '12px', color: '#666' }}>
                          Regular Price: ₹{item.price}
                        </span>
                      </span>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </div>




            <div className="d-flex align-items-center gap-3">
              <NavLink to="/add_to_wishlist" className="position-relative">
                <FaHeart size={20} style={{ color: "#000" }} />
              </NavLink>
              <NavLink to="/add_to_cart" className="position-relative">
                <FaShoppingCart size={20} style={{ color: "#000" }} />
                {totalQuantity > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '0.6rem' }}>
                    {totalQuantity}
                  </span>
                )}
              </NavLink>
              {isLoggedIn ? (
                <Dropdown show={showDropdown} onToggle={() => setShowDropdown(!showDropdown)}>
                  <Dropdown.Toggle
                    as="div"
                    style={{ cursor: 'pointer' }}
                    id="user-dropdown"
                    onClick={() => setShowDropdown(!showDropdown)}
                  >
                    <FaUser size={20} />
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="dropdown-menu-end mt-2">
                    <Dropdown.Item as={NavLink} to="/profile">Profile</Dropdown.Item>
                    <Dropdown.Item as={NavLink} to="/my_orders">My Orders</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <div onClick={() => setShowLogin(true)} style={{ cursor: 'pointer' }}>
                  <FaUser size={20} />
                </div>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* 👤 Login Modal */}
      <LoginModal show={showLogin} handleClose={() => setShowLogin(false)} />
    </>
  );
};

export default MyNavbar;
