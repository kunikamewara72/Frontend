import React, { useState, useEffect } from 'react';
import './Home.css';
import axios from 'axios';

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        const response = await axios.get("http://localhost:5000/users");
        if (response.status === 200) {
            setData(response.data);
        }
    };

    console.log('data=>', data);

    return (
        <div style={{ marginTop: '150px' }}>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th style={{ textAlign: 'center' }}>No.</th>
                        <th style={{ textAlign: 'center' }}>Name</th>
                        <th style={{ textAlign: 'center' }}>Email</th>
                        <th style={{ textAlign: 'center' }}>Contact</th>
                        <th style={{ textAlign: 'center' }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td style={{ textAlign: 'center' }}>{index + 1}</td>
                                <td style={{ textAlign: 'center' }}>{item.name}</td>
                                <td style={{ textAlign: 'center' }}>{item.email}</td>
                                <td style={{ textAlign: 'center' }}>{item.contact}</td>
                                <td style={{ textAlign: 'center' }}>
                                    <button className="btn btn-edit">Edit</button>
                                    <button className="btn btn-delete">Delete</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <h2>Welcome to my Home</h2>
        </div>
    );
};

export default Home;
