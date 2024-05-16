import React, { useState } from "react";
import { updateUser } from './UserReducer';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
    const {id} = useParams();
    const users = useSelector((state) => state.users);
    const user = users.filter(u => u.id == id);
    const {name, email} = user[0];
    const [uname, setUname] = useState(name);
    const [uemail, setUemail] = useState(email);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleUpdate = (event) => {
        event.preventDefault();
        dispatch(updateUser({
            id: id,
            name: uname,
            email: uemail
        }));
        navigate('/');
    };

    return (
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
            <div className="w-50 border bg-secondary text-white p-5">
                <h3>Update User</h3>
                <form onSubmit={handleUpdate}>
                    <div>
                        <label htmlFor="name">Name :</label>
                        <input onChange={(e) => setUname(e.target.value)} type="text" name="name" className="form-control" value={uname} />         
                    </div>
                    <div>
                        <label htmlFor="email">Email :</label>
                        <input onChange={(e) => setUemail(e.target.value)} type="text" name="email" className="form-control" value={uemail} />
                    </div>
                    <div style={{paddingTop: 6}}>
                        <button className="btn btn-info">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Edit;