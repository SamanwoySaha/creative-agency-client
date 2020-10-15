import React, { useEffect, useRef, useState } from 'react';
import Table from 'react-bootstrap/Table';
import popUp from '../../../Utilities/popUp';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import './AdminServiceList.css';

const AdminServiceList = () => {
    const [orders, setOrders] = useState([]);

    const handleChange = (e, orderId) => {
        fetch(`https://calm-savannah-67550.herokuapp.com/updateOrder/${orderId}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status: e.target.value })
        })
            .then(res => res.json())
            .then(data => {
                if(data){
                    popUp();
                }
            })
            .catch(err => console.log(err))
    };

    useEffect(() => {
        fetch('https://calm-savannah-67550.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {
                setOrders(data);
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <DashboardHeader>
                <p>Service List <span className="ml-3" id="popUp">Order Updated</span></p>
            </DashboardHeader>
            <div className="servicelist-table">
                <Table borderless>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email ID</th>
                            <th>Service</th>
                            <th>Product Details</th>
                            <th className="text-center">status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => {
                                const { name, email, category, productDetails, status } = order;
                                return (
                                    <tr>
                                        <td>{name}</td>
                                        <td>{email}</td>
                                        <td>{category}</td>
                                        <td>{productDetails}</td>
                                        <td className="text-center">
                                            <div class="input-group">
                                                <select class="custom-select" onChange={(e) => handleChange(e, order._id)}>
                                                    <option selected={status === 'Pending' && 'selected'} value="Pending" className="red">Pending</option>
                                                    <option selected={status === 'Ongoing' && 'selected'} value="Ongoing" className="yellow">On going</option>
                                                    <option selected={status === 'Done' && 'selected'} value="Done" className="green">Done</option>
                                                </select>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default AdminServiceList;