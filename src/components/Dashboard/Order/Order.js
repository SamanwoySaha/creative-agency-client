import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import './Order.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import DashboardHeader from '../DashboardHeader/DashboardHeader';

const Order = () => {


    return (
        <div>
            <DashboardHeader><p>Order</p></DashboardHeader>
            <form className="user-form" action="">
                <input type="text" className="form-control mb-3" name="name" placeholder="Your name / company's name" />
                <input type="email" className="form-control mb-3" name="email" placeholder="Your email address" />
                <input type="text" className="form-control mb-3" name="category" placeholder="Your Category" />
                <textarea name="productDetails" className="form-control mb-3" placeholder="Product Details"></textarea>
                <div className="d-flex mb-2">
                    <input type="text" className="form-control inline" name="price" placeholder="Price" />
                    <label htmlFor="image" className="file-input-label">
                        <FontAwesomeIcon className="mr-2" icon={faCloudUploadAlt} />
                    Upload project file
                    </label>
                    <input type="file" className="file-input" name="image" id="image" />
                </div>
                <button type="submit" className="main-btn">Send</button>
            </form>
        </div>
    );
};

export default Order;