import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Accordion, Card, useAccordionButton } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';
import { toast } from 'react-toastify';

const apiMap = {
    summer: '/api/summerCollectionapi.json',
    shirt: '/api/shirtapi.json',
    tshirt: '/api/tshirtapi.json',
    jacket: '/api/jacketapi.json',
    bottoms: '/api/bottomWearapi.json',
    newarrival: '/api/newArrivalapi.json'
};
const AccordionItem = ({ title, children, isOpen, onClick }) => {
    return (
        <div className="border-top">
            <button
                onClick={onClick}
                className="w-100 bg-white border-0 d-flex justify-content-between align-items-center py-3 px-2"
                style={{ fontSize: '15px', fontWeight: '600', color: "rgb(56, 56, 56)" }}
            >
                {title}
                <span style={{ fontSize: '20px' }}>{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen && <div className="px-3 pb-3" style={{ fontSize: '13px', fontWeight: '600', color: "rgb(126, 126, 126)" }} >{children}</div>}
        </div>
    );
};
const ProductDetail = () => {
    const { category, id } = useParams();
    console.log(category, 'category');
    const [product, setProduct] = useState(null);
    const [mainImage, setMainImage] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [openIndex, setOpenIndex] = useState(null); // Nothing open initially
    const [isAddedToCart, setIsAddedToCart] = useState(false);
    const [itemCategory, setItemCategory] = useState(null);
    const [isWishlisted, setIsWishlisted] = useState(false);

    useEffect(() => {
        setItemCategory(category);
    }, [category]);
    useEffect(() => {
        setIsAddedToCart(false);
    }, [selectedSize]);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // Check if product is already in wishlist on mount or when selectedSize changes
    useEffect(() => {
        if (selectedSize && product) {
            const existing = JSON.parse(localStorage.getItem('wishlist')) || [];
            const found = existing.some(w => w.id === product.id && w.size === selectedSize);
            setIsWishlisted(found);
        }
    }, [selectedSize, product]);


    const toggleWishlist = () => {
        if (!product || !selectedSize) {
            toast.dismiss();
            toast.warn('❗ Please select a size before adding to wishlist.');
            return;
        }

        const item = {
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            size: selectedSize,
            category: itemCategory,
        };

        const existing = JSON.parse(localStorage.getItem('wishlist')) || [];

        if (isWishlisted) {
            const updatedWishlist = existing.filter(w => !(w.id === item.id && w.size === item.size));
            localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
            toast.dismiss();
            toast.info('💔 Removed from wishlist');
            setIsWishlisted(false);
        } else {
            const updatedWishlist = [...existing, item];
            localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
            toast.dismiss();
            toast.success('❤️ Added to wishlist');
            setIsWishlisted(true);
        }
    };



    useEffect(() => {
        const fetchProduct = async () => {
            const url = apiMap[category.toLowerCase()];
            if (!url) return;

            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            const found = data.find((item) => item.id === parseInt(id));
            setProduct(found);
            setMainImage(found?.image || null);
        };

        fetchProduct();
    }, [category, id]);

    if (!product) return <p>Loading...</p>;

    const { addToCart } = useContext(CartContext);


    return (
        <div className="container-fluid mt-5" style={{ paddingTop: '80px', paddingRight: '100px', paddingLeft: '50px', paddingBottom: '50px' }}>
            <h6 className="text-muted mb-3" style={{ fontSize: '14px', fontWeight: '500', color: "rgb(167, 166, 166)" }}>
                {category} &gt; <span className="" style={{ color: "rgb(128, 128, 128)", fontWeight: '400' }}>{product.name}</span>
            </h6>
            <div className="row" style={{ height: 'calc(100vh - 120px)', overflow: 'hidden' }}>
                {/* Left: Image Section */}
                <div className="col-md-6 d-flex" style={{ overflowY: 'auto', height: '100%', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                    {/* Left Side Thumbnails */}
                    <div className="d-flex flex-column gap-2 me-3">
                        {product.images?.map((img, idx) => (
                            <img
                                key={idx}
                                src={img}
                                width="140"
                                alt={`thumb-${idx}`}
                                className="img-thumbnail"
                                style={{ cursor: 'pointer' }}
                                onClick={() => setMainImage(img)}
                            />
                        ))}
                    </div>

                    {/* Main Image */}
                    <div className="flex-grow-1">
                        <img
                            src={mainImage || product.image}
                            className="img-fluid object-fit-cover w-100"
                            alt={product.name}
                        />

                    </div>
                </div>


                {/* Right: Info Section */}
                <div className="col-md-6 no-scrollbar" style={{ overflowY: 'auto', height: '100%', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                    <h4>{product.name}</h4>
                    <p className="text-muted">SKU: {product.code}</p>
                    <h4>₹{product.price}</h4>
                    <p className="text-success" style={{ fontWeight: '600' }}>Inclusive of all taxes</p>
                    <div className="alert alert-success p-2">
                        <small>{product.offer}</small>
                    </div>

                    {/* Sizes */}
                    <div className="mb-3">
                        <strong>
                            Select Size <span className="text-danger">Size Chart</span>
                        </strong>
                        <div className="d-flex gap-2 flex-wrap mt-2">
                            {product.sizes.map((size) => (
                                <button
                                    key={size}
                                    className={`btn btn-outline-dark px-3 py-2 fs-6 fw-semibold product-detailed-size-btn ${selectedSize === size ? 'selected' : ''
                                        }`}
                                    onClick={() => setSelectedSize(size)}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>


                    {/* Quantity */}
                    <div className="mb-3 d-flex align-items-center gap-2 mt-4">
                        <strong style={{ fontWeight: '600', fontSize: '20px' }}>Quantity: </strong>

                        <button
                            className="btn btn-outline-dark px-3 py-2 fs-6 fw-semibold product-detailed-size-btn"
                            onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
                            disabled={quantity === 1}
                        >
                            -
                        </button>

                        <span style={{ fontWeight: '600', fontSize: '20px' }}>{quantity}</span>

                        <button
                            className="btn btn-outline-dark px-3 py-2 fs-6 fw-semibold product-detailed-size-btn"
                            onClick={() => setQuantity((prev) => prev + 1)}
                        >
                            +
                        </button>
                    </div>

                    {/* Add to Cart */}
                    {selectedSize && (
                        <div className="mt-4 d-flex gap-3">
                            <button
                                className={`btn ${isWishlisted ? 'btn-outline-dark' : 'btn-outline-dark'} px-5 py-3 product-detailed-wishlist-btn`}
                                onClick={toggleWishlist}
                            >
                                {isWishlisted ? 'WISHLISTED' : 'ADD TO WISHLIST'}
                            </button>


                            {!isAddedToCart ? (
                                <button
                                    className="btn btn-danger px-5 py-3 product-detailed-cart-btn"
                                    onClick={() => {
                                        const itemToAdd = {
                                            id: product.id,
                                            name: product.name,
                                            price: product.price,
                                            image: product.image,
                                            size: selectedSize,
                                            category: itemCategory,
                                        };

                                        addToCart(itemToAdd);
                                        toast.dismiss();
                                        toast.success('🛒 Product added to cart!');
                                        setIsAddedToCart(true); // switch the button
                                    }}
                                >
                                    ADD TO BAG
                                </button>
                            ) : (
                                <Link to="/add_to_cart" className="btn btn-danger px-5 py-3 product-detailed-cart-btn">
                                    VIEW BAG
                                </Link>
                            )}
                        </div>
                    )}
                    <hr />
                    {/* Delivery */}
                    <div className="mt-4">
                        <strong>Delivery Options</strong>
                        <div className="d-flex mt-2 gap-2 mt-3">
                            <input type="text" className="form-control w-50" placeholder="Enter Pincode" />
                            <button className="btn btn-danger">CHECK</button>
                        </div>
                        <small className="d-block mt-3" style={{ lineHeight: '1.4', fontSize: '13px', color: 'black', fontWeight: '400' }}>
                            Please enter the PIN code to check cash/card delivery available. <br />
                            Return and Exchange will be available for 7 days from the date of delivery.
                        </small>
                    </div>
                    <hr />
                    <div className="mt-4 mb-5">
                        <h5 className="mb-3 fw-bold">More Details</h5>

                        <div className="border rounded">


                            <AccordionItem
                                title="Description"
                                isOpen={openIndex === 1}
                                onClick={() => toggleAccordion(1)}
                            >
                                {product.description}
                            </AccordionItem>

                            <AccordionItem
                                title="Return & refund policy"
                                isOpen={openIndex === 2}
                                onClick={() => toggleAccordion(2)}
                            >
                                Returns and exchanges are available within 7 days from the delivery date. For more details, please visit our <span className="text-danger">Returns, Exchange & Refund Policy</span> page.
                            </AccordionItem>

                            <AccordionItem
                                title="Manufactured By"
                                isOpen={openIndex === 3}
                                onClick={() => toggleAccordion(3)}
                            >
                                Country of origin : India <br /> <br />
                                Manufacture detail : Powerlook Apparels Pvt Ltd Lotus Corporate Park Wing G02 - 1502, Ram Mandir Lane, off Western Express Highway, Goregaon, Mumbai, 400063
                            </AccordionItem>

                            <AccordionItem
                                title="Save extra with Offers"
                                isOpen={openIndex === 4}
                                onClick={() => toggleAccordion(4)}
                            >
                                Enjoy special discounts or choose easy EMI options with our exclusive payment offers.
                            </AccordionItem>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
