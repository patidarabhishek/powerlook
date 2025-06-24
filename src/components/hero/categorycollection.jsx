import React from 'react';
import { NavLink } from 'react-router-dom'; // For internal routing
import '../../styles/custom.css';

const categories = [
    {
        title: 'T-SHIRT',
        img: 'https://cdn-media.powerlook.in/mycustomfolder/t-shirt_6_.jpg?aio=w-640',
        link: '/tshirts',
    },
    {
        title: 'SHIRT',
        img: 'https://cdn-media.powerlook.in/mycustomfolder/shirt_7_.jpg?aio=w-640',
        link: '/shirts',
    },
    {
        title: 'CARGO',
        img: 'https://cdn-media.powerlook.in/mycustomfolder/cargo_4_.jpg?aio=w-640',
        link: '/bottom_wear',
    },
    {
        title: 'DENIM',
        img: 'https://cdn-media.powerlook.in/mycustomfolder/Denim_1_.jpg?aio=w-640',
        link: '/bottom_wear',
    },
    {
        title: 'JACKET',
        img: 'https://cdn-media.powerlook.in/mycustomfolder/jackets_4_.jpg?aio=w-640',
        link: '/jacket',
    },
    {
        title: 'SHOP UNDER ₹699',
        img: 'https://cdn-media.powerlook.in/mycustomfolder/350x461.png?aio=w-640',
        link: '/summer_2025',
    },
];

const CategoryCollection = () => {
    return (
        <div className="py-5 pt-5 text-center bg-white">
            <h3 className="mb-2">Category Collections</h3>
            <div className="mb-4 mt-4" style={{ height: '3px', width: '40px', background: 'red', margin: '0 auto' }}></div>
            <div className="container mt-5">
                <div className="row justify-content-center g-4">
                    {categories.map((cat, index) => (
                        <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={index}>
                            <NavLink to={cat.link} className="text-decoration-none text-dark">
                                <div className="position-relative">
                                    <img
                                        src={cat.img}
                                        alt={cat.title}
                                        className="img-fluid rounded shadow-sm"
                                        style={{ height: '220px', objectFit: 'cover', width: '100%' }}
                                    />
                                    <div className="mt-2 fw-semibold">{cat.title}</div>
                                </div>
                            </NavLink>
                        </div>
                    ))}
                </div>
            </div>

            <div className="container" style={{ marginTop: '100px' }}>
                <a href="https://play.google.com/store/apps/details?id=com.powerlook.in.android" target="_blank">
                    <img
                        src="https://cdn-media.powerlook.in/mycustomfolder/app_banner.jpg?aio=w-1200"
                        alt="Download App"
                        className="img-fluid shadow"
                        style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }}
                    />
                </a>
            </div>
        </div>
    );
};

export default CategoryCollection;
