import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { loginUserThunk } from '../store/actions/clientActions';
import { toast } from 'react-toastify'; 

export const Login = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
    const dispatch = useDispatch();
    const history = useHistory();

    const onSubmit = async (data) => {
        console.log(data);
        try {
            await dispatch(loginUserThunk({ email: data.email, password: data.password }, data.remember));
            toast.success('Login successful!');
            history.push('/');
        } catch (errorMessage) {
            toast.error(errorMessage);
        }
    };

    return (
        <div className="flex w-screen md:w-auto justify-center items-center bg-cyan-100 p-48">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 p-8 bg-white rounded-xl shadow-md text-black w-96">
                <h2 className="text-xl font-bold text-center">Login</h2>

                <div className="flex flex-col log-in-form">
                    <label>Email</label>
                    <input {...register("email", { required: "Email is required", pattern: /^\S+@\S+$/i })} />
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                </div>

                <div className="flex flex-col log-in-form">
                    <label>Password</label>
                    <input type="password" {...register("password", { required: "Password is required" })} />
                </div>

                <div className="flex items-center gap-2">
                    <input type="checkbox" {...register("remember")} />
                    <label>Remember Me</label>
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                    >
                    {isSubmitting ? "Logging in..." : "Login"}
                </button>
            </form>
        </div>
    );
};
