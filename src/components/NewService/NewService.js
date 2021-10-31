import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const NewService = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('data added to server');
                    reset();
                }
            })
    }

    return (
        <div>
            <h2>Add New Service</h2>
            <div className="my-5 d-flex justify-content-center">
                <form className="w-50" onSubmit={handleSubmit(onSubmit)}>
                    <input className="form-control" {...register("serviceName", { required: true, maxLength: 20 })} placeholder="name" />
                    <input className="form-control" {...register("description")} placeholder="description" />
                    <input className="form-control" {...register("image")} placeholder="image url" />
                    <input className="btn btn-info form-control" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default NewService;