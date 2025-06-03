import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// import '../assets/css/page-auth.css';
// import '../assets/css/core.css';
// import '../assets/css/theme-default.css';

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        profile_picture: null,
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

     const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      profile_picture: file,
    }));
  };

    const handleSubmit = async (e) => {
        e.preventDefault();

//          const submitData = new FormData();
//   submitData.append('name', formData.name);
//   submitData.append('email', formData.email);
//   submitData.append('password', formData.password);
//   if (formData.profile_picture) {
//     submitData.append('profile_picture', formData.profile_picture);
//   }

        try {
            const { data } = await axios.post('http://localhost:5000/api/register', formData);
            navigate('/dashboard');
        } catch (err) {
            const message =
                err.response?.data?.message ||
                err.message ||
                'Something went wrong. Please try again.';
            setError(message);
        }
    };

return (
  <div className="container-xxl">
    <div className="authentication-wrapper authentication-basic container-p-y">
      <div className="authentication-inner">
        <div className="card">
          <div className="card-body">
            <div className="app-brand justify-content-center">
              <a href="#" className="app-brand-link gap-2">
                <span className="app-brand-text demo text-body fw-bold">
                  Locofy
                </span>
              </a>
            </div>
            <h4 className="mb-2">Welcome to Locofy! 👋</h4>
            <p className="mb-4">Please create your account to get started</p>

            {error && <div className="alert alert-danger">{error}</div>}

            <form onSubmit={handleSubmit} className="mb-3">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email or Username
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email or username"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                />
              </div>

              <div className="mb-3 form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="remember-me"
                />
                <label className="form-check-label" htmlFor="remember-me">
                  Remember Me
                </label>
              </div>
              <div className="mb-3">
                <label htmlFor="profile_picture" className="form-label">Profile Picture</label>
                <input
                    type="file"
                    className="form-control"
                    id="profile_picture"
                    name="profile_picture"
                    onChange={handleFileChange}
                    accept="image/*"
                />
                </div>
              <div className="mb-3">
                <button className="btn btn-primary d-grid w-100" type="submit">
                  Register
                </button>
              </div>
            </form>

            <p className="text-center">
              <span>Already have an account?</span>
              <a href="/login">
                <span> Sign in</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
};

export default Register;