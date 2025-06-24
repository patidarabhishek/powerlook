import React from 'react';
import '../../styles/custom.css'; // if you want to style further
import { NavLink } from 'react-router-dom';

const categories = [
    {
        img: 'https://media.powerlook.in/mycustomfolder/Artboard_1_copy_3_1_.png?aio=w-640',
        link: '/summer_2025',
    },
    {
        img: 'https://media.powerlook.in/mycustomfolder/1_37_.jpg?aio=w-640',
        link: '/new_arrival',
    },
    {
        img: 'https://media.powerlook.in/mycustomfolder/2_22_.jpg?aio=w-640',
        link: '/jacket',
    },
];

const NewTrends = () => {
    return (
        <div className="py-5 pt-5 text-center bg-white">
            <h3 className=" mb-2">New Deals, New Trends</h3>
            <div className="mb-4 mt-4" style={{ height: '3px', width: '40px', background: 'red', margin: '0 auto' }}></div>
            <div className="container mt-5">
                <div className="row justify-content-center g-4">
                    {categories.map((cat, index) => (
                        <div className="col-12 col-sm-8 col-md-6 col-lg-4" key={index}>
                            <NavLink to={cat.link} className="text-decoration-none text-dark">
                            <div className="position-relative">
                                <img
                                    src={cat.img}
                                    alt={cat.title}
                                    className="img-fluid rounded shadow-sm"
                                    style={{ height: '100%', objectFit: 'cover', width: '100%' }}
                                />

                            </div>
                            </NavLink>
                        </div>
                    ))}
                </div>
            </div>
            <div className="container" style={{marginTop:'100px'}}>
                <NavLink to="/bottom_wear">
                <img
                    src="https://media.powerlook.in/mycustomfolder/small_banner_5_.jpg?aio=w-1200"
                    alt="Download App"
                    className="img-fluid  shadow"
                    style={{ width: '100%', maxHeight: '100%', objectFit: 'cover' }}
                />
                </NavLink>
            </div>
        </div>
    );
};

export default NewTrends;
