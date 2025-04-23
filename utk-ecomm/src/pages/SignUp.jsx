import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { axiosInstance } from '../api/axiosInstance';


export const SignUp = () => {
    const { register, handleSubmit, watch, setValue, formState: { errors, isSubmitting } } = useForm();
    const [roles, setRoles] = useState([]);
    const [selectedRole, setSelectedRole] = useState('3');
    const history = useHistory();

    useEffect(() => {
        axiosInstance.get('/roles').then(res => {
        setRoles(res.data);
        setSelectedRole('3');
        setValue('role_id', 3);
        });
    }, [setValue]);

    const onSubmit = async (data) => {
        console.log(data)
        try {
            delete data.confirmPassword;
        if (selectedRole !== '2') {
            delete data.store;
        }

        await axiosInstance.post('/signup', data);
        alert('You need to click link in email to activate your account!');
        history.push('/');
        } catch {
        alert(errors.response?.data?.message || 'An error occurred.');
        }
    };

    return (
        <div className='bg-cyan-100 flex w-screen md:w-auto'>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 my-20 p-8 mx-auto space-y-2 bg-white rounded-xl shadow-md text-black">
                <h2 className="text-xl font-bold text-center p-3">Sign Up</h2>
                {/* Name */}
                <div className='sign-up-form'>
                    <label>Name:</label>
                    <input {...register("name", { required: true, minLength: 3 })} />
                    {errors.name && <p className="text-red-500">Name must be at least 3 characters</p>}
                </div>

                {/* Email */}
                <div className='sign-up-form'>
                    <label>Email:</label>
                    <input {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                    {errors.email && <p className="text-red-500">Enter a valid email</p>}
                </div>

                {/* Password */}
                <div className='sign-up-form'>
                    <label>Password:</label>
                    <input type="password" {...register("password", {
                    required: true,
                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\d\s:]).{8,}$/
                    })} />
                    {errors.password && <p className="text-red-500">Must include upper, lower, number, special char, 8+ chars</p>}
                </div>

                {/* Confirm Password */}
                <div className='sign-up-form'>
                    <label>Confirm Password:</label>
                    <input type="password" {...register("confirmPassword", {
                    required: true,
                    validate: val => val === watch("password") || "Passwords do not match"
                    })} />
                    {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
                </div>

                {/* Role Dropdown */}
                <div className='sign-up-form'>
                    <label>Role</label>
                    <select
                    {...register("role_id", { required: true })}
                    onChange={(e) => {
                        setSelectedRole(e.target.value);
                        setValue("role_id", parseInt(e.target.value));
                    }}
                    >
                    {roles.map((role) => (
                        <option key={role.id} value={role.id}>{role.name}</option>
                    ))}
                    </select>
                </div>

                {/* Store Fields (If role is 'store') */}
                {selectedRole === '2' && (
                    <div className="border p-2 rounded-md">
                    <h3 className="font-medium mb-2">Store Info</h3>

                    <div className='sign-up-form'>
                        <label>Store Name</label>
                        <input {...register("store.name", { required: true, minLength: 3 })} />
                        {errors.store?.name && <p className="text-red-500">Store name must be at least 3 characters</p>}
                    </div>

                    <div className='sign-up-form'>
                        <label>Store Phone</label>
                        <input {...register("store.phone", {
                        required: true,
                        pattern: /^05\d{9}$/
                        })} />
                        {errors.store?.phone && <p className="text-red-500">Enter valid Turkish phone number</p>}
                    </div>

                    <div className='sign-up-form'>
                        <label>Tax No</label>
                        <input {...register("store.tax_no", {
                        required: true,
                        pattern: /^T\d{4}V\d{6}$/
                        })} />
                        {errors.store?.tax_no && <p className="text-red-500">Format: T1234V123456</p>}
                    </div>

                    <div className='sign-up-form'>
                        <label>IBAN</label>
                        <input {...register("store.bank_account", {
                        required: true,
                        pattern: /^TR\d{24}$/
                        })}
                        onChange={(e) => {
                            e.target.value = e.target.value.toUpperCase();
                        }} />
                        {errors.store?.bank_account && <p className="text-red-500">Enter valid IBAN (TR...)</p>}
                    </div>
                    </div>
                )}

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700 transition"
                >
                    {isSubmitting ? "Submitting..." : "Sign Up"}
                </button>
            </form>
        </div>
    );
};

