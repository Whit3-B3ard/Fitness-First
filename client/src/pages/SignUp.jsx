import { useState, useContext } from 'react';
import axios from 'axios';
import './SignUp.css'
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    logMeIn: false,
  });

  // Update formData state when input changes
  const {setUser} = useContext(UserContext);
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;
  
    setFormData({
      ...formData,
      [name]: inputValue,
    });
  };
  
  const handleRegistration = async (e) => {
    e.preventDefault();
    const newUser = { ...formData };
    localStorage.setItem('user', JSON.stringify(newUser))
    setUser({...newUser})
  if (formData.logMeIn) navigate('/')

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
      navigate('/');
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
      <form className="mt-4 w-4/5 flex items-center flex-col">
      <div className="mb-4 w-full ml-16">
        <label className="block text-white">Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="border border-gray-400 w-3/4 h-10 rounded-8 pl-4 focus:border-pink-500 outline-none rounded"
        />
      </div>
      <div className="mb-4 w-full ml-16">
        <label className="block text-white">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="border border-gray-400 w-3/4 h-10 rounded-8 pl-4 focus:border-pink-500 outline-none rounded"
        />
      </div>
      <div className="mb-4 w-full ml-16">
        <label className="block text-white">Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          className="border border-gray-400 w-3/4 h-10 rounded-8 pl-4 focus-border-pink-500 outline-none rounded"
        />
      </div>
      <div className="mb-4 w-full ml-16">
  <label className="block text-white">Confirm Password:</label>
  <input
    type="password"
    name="confirmPassword"
    value={formData.confirmPassword}
    onChange={handleInputChange}
    className="border border-gray-400 w-3/4 h-10 rounded-8 pl-4 focus-border-pink-500 outline-none rounded"
  />
</div>
      <h1 className='font-bold text-white'>Log Me In</h1>
      <div className="checkbox-wrapper-5">
      <div className="check mb-4">
        <input
          type="checkbox"
          id='check-5'
          name="logMeIn"
          checked={formData.logMeIn}
          onChange={handleInputChange}
          
        />
        <label for="check-5" className="block font-bold"></label>
      </div>
      </div>
      <div className="mb-4 w-full flex flex-col relative left-12">
        <Link to='/'>
        <button
          type="button"
          onClick={handleRegistration}
          className="sign-in-button bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 w-2/4 h-10 rounded-3xl relative left-20 text-white font-bold"
        >
          Register
        </button>
        </Link>
      </div>
    </form>
    </div>
  );
};

export default SignUp;
