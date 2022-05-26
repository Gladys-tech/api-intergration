import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../services/authService";


const Logout = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const user = await authService.loginUser(formData);
    if(user) {
      navigate("/");
    }
  }

  useEffect(() => {
    const access_token = localStorage.getItem("access_token");
    if(access_token) {
      navigate("/login");
    }
  }, [navigate])

  return (
    <div className="logout">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="enter your email"
        />
        <label htmlFor="password">password</label>
        <input
          name="password"
          type="password"
          required
          value={formData.password}
          onChange={handleChange}
          placeholder="enter your password"
        />
        <button type="submit">Logout</button>
      </form>
    </div>
  );
};

export default Logout;