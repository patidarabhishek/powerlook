import WishlistNavbar from '../wishlist_navbar';
import { Row } from 'react-bootstrap';
const Returns = () => {
    return (
        <div className="container" style={{ marginTop: '120px', paddingBottom: '60px' }}>
            <Row>
            <WishlistNavbar />

            <div className="col-md-8 px-4">
                <h3 className="mb-3 ">Returns / Exchange</h3>
                <p className='text-muted px-3 '>No records found!</p>
            </div>
            </Row>
        </div>
    );
};

export default Returns;