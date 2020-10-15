import React, { useContext, useState } from 'react';
import './Order.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import { UserContext } from '../../../App';
import popUp from '../../../Utilities/popUp';
import '../../../Utilities/popUp.css';

const Order = () => {
    const { orderedService } = useContext(UserContext);
    const [orderInfo, setOrderInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = (e) => {
        const newInfo = { ...orderInfo };
        newInfo[e.target.name] = e.target.value;
        setOrderInfo(newInfo);
    }

    const handleChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = (e) => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', orderInfo.name);
        formData.append('email', orderInfo.email);
        formData.append('category', orderedService.title);
        formData.append('description', orderedService.description);
        formData.append('iconContentType', orderedService.icon.contentType);
        formData.append('iconImg', orderedService.icon.img);
        formData.append('productDetails', orderInfo.productDetails);
        formData.append('price', orderInfo.price);
        formData.append('status', 'Pending');

        fetch('https://calm-savannah-67550.herokuapp.com/addOrder', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if(data){
                    popUp();
                }
            })
            .catch(error => console.error(error))

        e.preventDefault();
    }

    return (
        <div>
            <DashboardHeader><p>Order</p></DashboardHeader>
            <form onSubmit={handleSubmit} className="user-form" action="">
                <input onBlur={handleBlur} type="text" className="form-control mb-3" name="name" placeholder="Your name / company's name" required/>
                <input onBlur={handleBlur} type="email" className="form-control mb-3" name="email" placeholder="Your email address" required/>
                <input onBlur={handleBlur} type="text" value={orderedService.title} className="form-control mb-3" name="category" placeholder="Your Category" />
                <textarea onBlur={handleBlur} name="productDetails" className="form-control mb-3" placeholder="Product Details" required></textarea>
                <div className="d-flex mb-2">
                    <input onBlur={handleBlur} type="text" className="form-control inline" name="price" placeholder="Price" required/>
                    <label htmlFor="image" className="file-input-label">
                        <FontAwesomeIcon className="mr-2" icon={faCloudUploadAlt} />
                        Upload project file
                    </label>
                    <input onChange={handleChange} type="file" className="file-input" name="image" id="image" required/>
                </div>
                <div className="flex justify-content-between align-items-center">
                    <button type="submit" className="main-btn">Send</button>
                    <p id="popUp">Order Added</p>
                </div>
            </form>
        </div>
    );
};

export default Order;