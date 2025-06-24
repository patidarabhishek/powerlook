import React, { useState } from 'react';
import '../../styles/custom.css';

const reviews = [
  {
    title: 'good',
    name: 'Meet',
    product: 'Black and White Stripes Full Sleeves Shirt',
    date: '2025-03-31',
    rating: 5,
    comment: 'good',
  },
  {
    title: 'Nice',
    name: 'Its',
    product: 'Cream Waffle Baggy Fit Track Pant',
    date: '2025-03-31',
    rating: 5,
    comment: 'Cream pant is little visible but comfortable and worth to buy !!',
  },
  {
    title: 'Loved it !!',
    name: 'Its',
    product: 'Black Track Pant Baggy Fit',
    date: '2025-03-31',
    rating: 5,
    comment: 'Quality is good and comfortable, definitely a buy!',
  },
  {
    title: 'Amazing fit',
    name: 'Rahul',
    product: 'White Slim Fit Shirt',
    date: '2025-03-30',
    rating: 5,
    comment: 'Perfect fitting and great material!',
  },
];

const HappyCustomers = () => {
  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 2 >= reviews.length ? 0 : prev + 2));
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 2 < 0 ? reviews.length - 2 : prev - 2));
  };

  return (
    <div className="py-5 text-center bg-white">
      <h3 className="mb-2">Happy Customers</h3>
      <div
        className="mb-4"
        style={{ height: '3px', width: '40px', background: 'red', margin: '0 auto' }}
      ></div>

      <div className="container">
        <div className="row justify-content-center text-start">
          {/* Left section */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold ">OUR CUSTOMERS</h5>
            <div className="text-muted">OUR INFLUENCERS —</div>
            <div className="d-flex align-items-baseline mt-2">
              <span className="badge bg-danger me-2">4.77/5</span>
              <small className="text-muted">based on 5866 reviews.</small>
            </div>
            <div className="text-success mt-2">{'★'.repeat(5)}</div>
            <button className="btn btn-outline-danger mt-3 px-5 py-2 border-radius-none" style={{ fontSize: '12px',fontWeight: '700' }}>
                    SEE MORE →
                </button>
          </div>

          {/* Review slider (2 items) */}
          <div className="col-md-8">
            <div className="row">
              {reviews.slice(startIndex, startIndex + 2).map((rev, idx) => (
                <div className="col-md-6 mb-4" key={idx}>
                  <div className="p-3 border rounded shadow-sm h-100">
                    <div className="text-success mb-2">{'★'.repeat(rev.rating)}</div>
                    <div className="fw-bold">{rev.title}</div>
                    <div className="small mb-2">{rev.comment}</div>
                    <div className="fw-bold">{rev.name}</div>
                    <div className="text-muted small">{rev.product}</div>
                    <div className="text-muted small">{rev.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Arrows */}
        <div className="mt-3 d-flex justify-content-center gap-3">
          <button onClick={prevSlide} className="btn btn-outline-danger px-3 fw-bold">
            ←
          </button>
          <button onClick={nextSlide} className="btn btn-outline-danger px-3 fw-bold">
            →
          </button>
        </div>
      </div>
      <div className="container" style={{marginTop:'100px'}}>
                <img
                    src="https://media.powerlook.in/mycustomfolder/Untitled-6.jpg?aio=w-1200"
                    alt="Download App"
                    className="img-fluid  shadow"
                    style={{ width: '100%', maxHeight: '100%', objectFit: 'cover' }}
                />
            </div>
    </div>
  );
};

export default HappyCustomers;


           