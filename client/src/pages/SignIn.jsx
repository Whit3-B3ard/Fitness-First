// LoginPage.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/member/login', { email, password });
      console.log("🚀 ~ handleSubmit ~ response:", response.data)
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userName', response.data.user.name);
      localStorage.setItem('allUserInfo', JSON.stringify(response.data.user));

      navigate('/homepage'); // Navigate to the dashboard or home page upon successful login
    } catch (error) {
      alert(error.response?.data.message || 'Login failed ');
    }
  };

  return (
    <div className="min-h-screen bg-gray-600 flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        {/* Email field */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium">Email</label>
          <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 p-2 w-full border rounded-md" />
        </div>
        {/* Password field */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium">Password</label>
          <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 p-2 w-full border rounded-md" />
        </div>
        {/* Submit button */}
        <Link to="/" type="submit" className="text-blue-500 hover:text-blue-700">Login</Link>
      </form>
    </div>
  );
};

export default SignIn;
