import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faShoppingBasket, faCommentDots, faPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ isAdmin }) => {
    const { url } = useRouteMatch();

    return (
        <div className="mx-4 my-4">
            <Link to="/">
                <img className="logo mb-5 ml-1" src="https://i.imgur.com/Aq9mvuW.png" alt="" />
            </Link>
            <ul className="ml-n4">
                <li className="mb-4">
                    <Link className="sidebar-link active" to={`${url}/user/order`}>
                        <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />Order
                    </Link>
                </li>
                <li className="mb-4">
                    <Link className="sidebar-link" to={`${url}/user/clientServiceList`}>
                        <FontAwesomeIcon icon={faShoppingBasket} className="mr-2" />Service List
                    </Link>
                </li>
                <li className="mb-4">
                    <Link className="sidebar-link" to={`${url}/user/makeReview`}>
                        <FontAwesomeIcon icon={faCommentDots} className="mr-2" />Review
                    </Link>
                </li>
                <li className="mb-4">
                    <Link className="sidebar-link active" to={`${url}/admin/adminServiceList`}>
                        <FontAwesomeIcon icon={faShoppingBasket} className="mr-2" />Service List
                    </Link>
                </li>
                <li className="mb-4">
                    <Link className="sidebar-link" to={`${url}/admin/addService`}>
                        <FontAwesomeIcon icon={faPlus} className="mr-2" />Add Service
                    </Link>
                </li>
                <li className="mb-4">
                    <Link className="sidebar-link" to={`${url}/admin/makeAdmin`}>
                        <FontAwesomeIcon icon={faUserPlus} className="mr-2" />Make Admin
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;