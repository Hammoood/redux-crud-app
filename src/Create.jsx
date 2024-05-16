import React, { useState } from "react";
import { addUser } from './UserReducer';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const users = useSelector((state) => state.users)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmite = (event) => {
        event.preventDefault();
        dispatch(addUser({
            id: users[users.length -1].id + 1,
            name,
            email
        }));
        navigate('/');
    };

    return (
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
            <div className="w-50 border bg-secondary text-white p-5">
                <h3>Add New User</h3>
                <form onSubmit={handleSubmite}>
                    <div>
                        <label htmlFor="name">Name :</label>
                        <input onChange={(e) => setName(e.target.value)} type="text" name="name" className="form-control" placeholder="enter name"/>
                    </div>
                    <div>
                        <label htmlFor="email">Email :</label>
                        <input onChange={(e) => setEmail(e.target.value)} type="text" name="email" className="form-control" placeholder="enter email"/>
                    </div>
                    <div style={{paddingTop: 6}}>
                        <button className="btn btn-info">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Create;