import React, { useEffect, useRef, useState } from 'react';
import '../../styles/custom.css'; // for extra styles if needed
import { Link, NavLink } from 'react-router-dom';
import { Badge } from 'react-bootstrap';



const NewArrivals = () => {
    
    const [newArrivalProducts, setNewArrivalProducts] = useState([]);
    console.log(newArrivalProducts,'newArrivalProducts');
    const firstLoad = useRef(true);
    useEffect(() => {
      const fetchNewArrivalProducts = async () => {
        try {
          const response = await fetch('/api/newArrivalapi.json');
          const data = await response.json();
          setNewArrivalProducts(data);
        } catch (error) {
          console.error('Failed to load new arrival products:', error);
        }
      };
      fetchNewArrivalProducts();
    }, []);
    return (
        <div className="py-5 bg-white text-center">
            <h3 className="mb-2">New Arrivals</h3>
            <div className="mb-4 mt-3" style={{ height: '3px', width: '40px', background: 'red', margin: '0 auto' }}></div>

            <div className="container mt-4">
                <div className="row justify-content-center">
                    {newArrivalProducts.map((product, index) => (
                        <div className="col-6 col-md-3 mb-4" key={index}>
                            <Link
                            to={`/product/newarrival/${product.id}`} // ✅ add link with category + id
                              style={{ textDecoration: 'none', color: 'inherit' }}
                            >
                            <div className="card border-0 shadow-sm h-100">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="card-img-top"
                                    style={{ height: '100%', objectFit: 'cover' }}
                                />
                                <Badge bg="dark" className="position-absolute top-0 start-0 m-2">NEW ARRIVAL</Badge>
                                <div className="card-body p-2 text-start">
                                    <p className="card-title mb-1" style={{ fontSize: '0.9rem', fontWeight: '500' }}>{product.name}</p>
                                    <p className="text-danger" style={{ fontWeight: '600' }}>₹{product.price}</p>
                                </div>
                            </div>
                        </Link>
                        </div>
                    ))}
                </div>

                <NavLink to="/new_arrival"><button className="btn btn-outline-danger mt-3 px-5 py-2" style={{ fontSize: '12px',fontWeight: '700' }}>
                    VIEW ALL PRODUCTS →
                </button></NavLink>
            </div>
        </div>
    );
};

export default NewArrivals;
