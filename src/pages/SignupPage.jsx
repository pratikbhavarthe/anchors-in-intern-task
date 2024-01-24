import React, { useState } from "react";
import Emoji from "../components/Emoji";
import { useNavigate } from "react-router-dom";

function SignupPage() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({name: "", email: "" });
    const [showOtpField, setShowOtpField] = useState(false);
    const [otp, setOtp] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [accountCreated, setAccountCreated] = useState(false);
    const [formErrors, setFormErrors] = useState({ name: "", email: "" });
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => e.preventDefault();

    const handleContinue = async () => {

        setShowOtpField(true); //
    };

    const handleVerifyOtp = async () => {
        setSuccessMessage("Account created successfully!");
        setAccountCreated(true);
    };

    const handleCreatePost = () => {
        navigate("/panel");
    };

    return (
        <div className="flex items-center justify-center flex-col mt-40">
            <form 
            onSubmit={handleSubmit}
            className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4 h-[50vh]">
                {!showOtpField ? (
                    <>
                    <div className="mb-4 flex justify-center flex-col items-center">
                        <Emoji symbol="🚀" label="rocket" />
                        <h1>Create Your Account</h1>
                    </div>
                    <div className="mb-4">
                        <input className={`shadow appearance-none focus:bg-slate-900 bg-black border rounded-2xl w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline
                        ${formErrors.name && "border-pink-500"}`}
                        name="name"
                        value={formData.name}
                        onChange={handleChnage}
                        placeholder="Enter Your Name"
                        type="text"
                        />
                        {formErrors.name && (
                            <p className="text-pink-500 text-xs italic">{formErrors.name}</p>
                        )}
                    </div>
                    <div classname="mb-6">
                        <input className={`shadow bg-black focus:bg-slate-900 appearance-none border rounded-2xl w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline
                        ${formErrors.email && "border-pink-500"}`}
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email"
                        placeholder="Enter Email ID"
                        />
                    </div>
                    </>
                )}

            </form>
        </div>
    )
}