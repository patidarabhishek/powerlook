import React, { useContext, useState } from 'react';
import { Container, Row, Col, Button, Card, ListGroup, Modal, Form } from 'react-bootstrap';
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { toast } from 'react-toastify';
import LoginModal from '../modals/login_modal';
import { LoginContext } from '../../context/LoginContext';
import ApplyCouponModal from '../modals/Apply_Coupen_modal';

const Hero = () => {
    const { category, id } = useParams();
    const [showCouponModal, setShowCouponModal] = useState(false);
    const handleClose = () => setShowCouponModal(false);
    const handleShow = () => setShowCouponModal(true);
    const [showLogin, setShowLogin] = useState(false);
    const [selectedCoupon, setSelectedCoupon] = useState('');
    const [discount, setDiscount] = useState(0);
    const [couponApplied, setCouponApplied] = useState(false);
    const coupons = [
        { code: 'SUMMER25', discountPercent: 25 },
        { code: 'FREEDOM15', discountPercent: 15 },
        { code: 'SAVE10', discountPercent: 10 }
    ];
    const { cartItems, updateQuantity, removeFromCart, totalQuantity } = useContext(CartContext);
    const { loggedInPhone } = useContext(LoginContext);
    const navigate = useNavigate();
    const handleUpdateQuantity = (id, size, type) => {
        updateQuantity(id, size, type);
    };

    const handleRemoveItem = (id, size) => {
        removeFromCart(id, size);
        toast.dismiss();
        toast.success('🗑️ Product removed from cart!');
    };


    const totalAmount = cartItems.reduce((sum, item) => {
        let price = typeof item.price === 'string'
            ? parseInt(item.price.replace(/[^\d]/g, ''))
            : item.price;

        return sum + price * item.qty;
    }, 0);

    const applyCoupon = () => {
        const selected = coupons.find((c) => c.code === selectedCoupon);
        if (selected) {
            setDiscount(selected.discountPercent);
            setCouponApplied(true);
            toast.success(`${selected.code} Applied!`);
        } else {
            setDiscount(0);
            setCouponApplied(false);
            toast.error('Invalid Coupon');
        }
        handleClose();
    };
    const removeCoupon = () => {
        setSelectedCoupon('');
        setDiscount(0);
        setCouponApplied(false);
        toast.info('Coupon removed');
    };

    const deliveryCharge = totalAmount >= 1200 ? 0 : 70;

    const finalAmount = totalAmount - (totalAmount * discount) / 100 + deliveryCharge;

    const handleCheckout = () => {
        if (loggedInPhone) {
            navigate('/'); // Redirect to homepage (or change to /checkout if needed)
        } else {
            setShowLogin(true); // Show login modal
        }
    };
    return (
        <>
            {/* Coupon Modal */}
            <ApplyCouponModal
                show={showCouponModal}
                handleClose={handleClose}
                selectedCoupon={selectedCoupon}
                setSelectedCoupon={setSelectedCoupon}
                applyCoupon={applyCoupon}
                coupons={coupons}
            />

            {/* Cart Container */}
            <Container style={{ marginTop: '120px', minHeight: '100vh' }}>
                {cartItems.length === 0 ? (
                    <div className="d-flex flex-column justify-content-center align-items-center text-center" style={{ minHeight: '70vh' }}>
                        <img src="https://www.powerlook.in/images/shopping-bag.png?aio=w-96" alt="cart empty" />
                        <h4 className="text-muted mt-3">🛒 Your cart is empty</h4>
                        <p className="mt-2">Looks like you haven't added anything yet.</p>
                        <Button
                            variant="danger"
                            as={NavLink}
                            to="/"
                            className="mt-3 py-3 px-5 rounded-0 fw-semibold"
                            style={{ letterSpacing: '1px' }}
                        >
                            START SHOPPING
                        </Button>
                    </div>
                ) : (
                    <>
                        <h6 className="mb-4">Shopping Cart ({totalQuantity} Items)</h6>
                        <Row>
                            {/* Left - Cart Items */}
                            <Col md={8}>
                                {cartItems.map((item) => (
                                    <Card className="mb-3 rounded-0" key={`${item.id}-${item.size}`}>
                                        <Card.Body className="d-flex align-items-start">
                                            {/* <img src={item.image} alt={item.name} width="120" className="me-3 rounded" /> */}
                                            <Link to={`/product/${item.category}/${item.id}`}>
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    width="120"
                                                    className="me-3 rounded"
                                                    style={{ cursor: 'pointer' }}
                                                />
                                            </Link>
                                            <div className="flex-grow-1 w-100">
                                                {/* Top section with name and price on opposite ends */}
                                                <div className="d-flex justify-content-between align-items-start">
                                                    <Card.Text className="fs-medium fw-semibold">{item.name}</Card.Text>
                                                    <Card.Text className="fs-5 fw-semibold text-end">{item.price}.00</Card.Text>
                                                </div>
                                                <Card.Text className="text-muted mb-1">Size: {item.size} {item.code}</Card.Text>

                                                {/* Quantity controls */}
                                                <div className="d-flex align-items-center gap-2 mt-2">
                                                    <p className="mb-0 fs-sm fw-semibold">QTY</p>
                                                    <Button variant="outline-secondary rounded-0" onClick={() => handleUpdateQuantity(item.id, item.size, 'dec')}>-</Button>
                                                    <span>{item.qty}</span>
                                                    <Button variant="outline-secondary rounded-0" onClick={() => handleUpdateQuantity(item.id, item.size, 'inc')}>+</Button>
                                                </div>

                                                <hr />
                                                <Button variant="outline-danger rounded-0" onClick={() => handleRemoveItem(item.id, item.size)}
                                                >REMOVE</Button>
                                            </div>
                                        </Card.Body>
                                    </Card>

                                ))}
                            </Col>

                            {/* Vertical Divider */}
                            <Col md={1} className="d-flex justify-content-center">
                                <div style={{ borderLeft: '1px solid #ccc', height: '100%' }}></div>
                            </Col>

                            {/* Right - Price Details */}
                            <Col md={3}>
                                <Card className="border-0">
                                    <Card.Header className="bg-white fw-bold fs-5m border-bottom">PRICE DETAILS</Card.Header>
                                    <ListGroup variant="flush" className="p-3">
                                        <ListGroup.Item className="d-flex justify-content-between border-0 px-0">
                                            <span>Total Items</span>
                                            <span className="fw-semibold">{totalQuantity}</span>
                                        </ListGroup.Item>
                                        <ListGroup.Item className="d-flex justify-content-between border-0 px-0">
                                            <span>Total MRP</span>
                                            <span className="fw-semibold">₹{totalAmount}</span>
                                        </ListGroup.Item>

                                        {discount > 0 && (
                                            <ListGroup.Item className="d-flex justify-content-between border-0 px-0 text-success">
                                                <span>Coupon ({selectedCoupon})</span>
                                                <span className="fw-semibold">- ₹{((totalAmount * discount) / 100).toFixed(2)}</span>
                                            </ListGroup.Item>
                                        )}

                                        <ListGroup.Item className="border-0 px-0">
                                            <div className="d-flex justify-content-between">
                                                <span>Delivery</span>
                                                <span className={`fw-semibold ${totalAmount >= 1200 ? 'text-danger' : ''}`}>
                                                    {totalAmount >= 1200 ? 'Free Delivery' : '₹70'}
                                                </span>
                                            </div>
                                            {totalAmount < 1200 && (
                                                <small style={{ fontSize: '13px', color: '#f54133', fontWeight: '400' }}>
                                                    Free delivery on orders above ₹1200
                                                </small>
                                            )}
                                        </ListGroup.Item>


                                        <hr />
                                        <ListGroup.Item className="border-0 px-0 mt-2">
                                            {couponApplied ? (
                                                <Button
                                                    variant="outline-success rounded-0"
                                                    className="w-100"
                                                    onClick={removeCoupon}
                                                >
                                                    REMOVE COUPON
                                                </Button>
                                            ) : (
                                                <Button
                                                    variant="outline-success rounded-0"
                                                    className="w-100"
                                                    onClick={handleShow}
                                                >
                                                    APPLY COUPON
                                                </Button>
                                            )}
                                        </ListGroup.Item>

                                        <hr />
                                        <ListGroup.Item className="d-flex justify-content-between border-0 px-0 fs-5 fw-semibold">
                                            <span>Total Amount</span>
                                            <span className="fw-semibold text-success">₹{finalAmount.toFixed(2)}</span>
                                        </ListGroup.Item>
                                        <hr />
                                        <ListGroup.Item className="border-0 px-0">
                                            <Button variant="danger" className="w-100 fw-semibold py-2 rounded-0"
                                                onClick={handleCheckout}
                                            >
                                                CHECKOUT
                                            </Button>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Card>
                            </Col>
                        </Row>
                    </>
                )}
            </Container>
            <LoginModal show={showLogin} handleClose={() => setShowLogin(false)} />
        </>
    );
};

export default Hero;
