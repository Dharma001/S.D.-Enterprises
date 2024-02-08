import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleRegistration = async (e) => {
    e.preventDefault();
    setErrors({});

    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
    } else if (
      !/(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])/.test(formData.password)
    ) {
      newErrors.password =
        "Password must contain at least one uppercase letter, one number, and one special character";
    }
    if (formData.password !== formData.confPassword) {
      newErrors.confPassword = "Passwords do not match";
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const successData = await response.json();
        navigate("/login");
        toast.success(successData.msg);
      } else {
        const errorData = await response.json();
        toast.error(errorData.msg);
      }
    } catch (error) {
      console.error("Error during registration:", error.message);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col gap-5 p-4 rounded bg-white lg:w-1/4 md:w-1/2 sm:w-4/5 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <div className="flex flex-col justify-center items-center">
            <p className="font-serif text-4xl font-bold text-center text-black">
              SignUp
            </p>
          </div>
          <form onSubmit={handleRegistration} className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-black">First Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="h-12 pl-2 text-black bg-white border rounded outline-none shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
                autoComplete="off"
                autoFocus="on"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-black">Email</label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="h-12 pl-2 text-black bg-white border rounded outline-none shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
                autoComplete="off"
                autoFocus="on"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div className="relative flex flex-col gap-2">
              <label className="text-black">Set Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="h-12 pl-2 text-black bg-white border rounded outline-none shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
                autoComplete="off"
                autoFocus="off"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </div>
            <div className="relative flex flex-col gap-2">
              <label className="text-black">Confirm Password</label>
              <input
                type={showPassword ? "text" : "password"}
                className="h-12 pl-2 text-black bg-white border rounded outline-none shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
                name="confPassword"
                value={formData.confPassword}
                onChange={handleInputChange}
                autoComplete="off"
                autoFocus="off"
              />
              {errors.confPassword && (
                <p className="text-red-500 text-sm">{errors.confPassword}</p>
              )}
            </div>
            <button className="bg-blue-500 text-white h-10">Signup</button>
          </form>
          <hr></hr>
          <div className="flex justify-center items-center">
            <p>Already have an account? </p>
            <Link className="font-bold hover:text-blue-800" to="/login">
              Click here to login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
