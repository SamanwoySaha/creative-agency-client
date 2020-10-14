import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import './AdminServiceList.css';

const AdminServiceList = () => {
    const [serviceStatus, setServiceStatus] = useState('Pending');

    const handleChange = e => setServiceStatus(e.target.value);

    return (
        <div>
            <DashboardHeader><p>Service List</p></DashboardHeader>
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
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td className="text-center">
                                <div class="input-group">
                                    <select class="custom-select" onChange={handleChange}>
                                        <option selected='selected' value="Pending" className="red">Pending</option>
                                        <option value="Ongoing" className="yellow">On going</option>
                                        <option value="Done" className="green">Done</option>
                                    </select>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default AdminServiceList;