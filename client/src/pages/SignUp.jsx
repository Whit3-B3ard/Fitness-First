import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // Update formData state when input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
   // Client-side validation for matching passwords
if (formData.password !== formData.confirmPassword) {
  alert('Passwords do not match');
  return;
}

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        confirmPassword :formData.confirmPassword 
      };

      // Using Axios to make the POST request
      const response = await axios.post('http://localhost:5000/api/member/register', payload);

      // Registration successful
      console.log('Registration successful:', response.data);
      navigate('/login');
      localStorage.setItem('token', response.data.token);
      
    } catch (error) {
      // Axios wraps the response error in error.response
      const errorMessage = error.response && error.response.data.message ? error.response.data.message : 'Something went wrong frontend';
      alert(errorMessage);
      console.error('Registration error:', errorMessage);
    }
  };

  return (
    <div className="min-h-screen bg-gray-600 flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        {/* Name field */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium">Name</label>
          <input type="text" id="name" name="name" onChange={handleChange} value={formData.name} className="mt-1 p-2 w-full border rounded-md" />
        </div>
        {/* Email field */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium">Email</label>
          <input type="email" id="email" name="email" onChange={handleChange} value={formData.email} className="mt-1 p-2 w-full border rounded-md" />
        </div>
        {/* Password field */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium">Password</label>
          <input type="password" id="password" name="password" onChange={handleChange} value={formData.password} className="mt-1 p-2 w-full border rounded-md" />
        </div>
        {/* Confirm Password field */}
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-sm font-medium">Confirm Password</label>
          <input type="password" id="confirmPassword" name="confirmPassword" onChange={handleChange} value={formData.confirmPassword} className="mt-1 p-2 w-full border rounded-md" />
        </div>
        {/* Submit button */}
        <button type="submit" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">Register</button>
      </form>
    </div>
  );
};

export default SignUp;
