import { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";
export const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = ({ target }) => {
    setFormData((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const { name, email, password, confirmPassword } = formData;

  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Login and start setting goals</p>
      </section>
      <section className="form">
        <form className="form-group" onSubmit={handleSubmit}>
          <input
            type="email"
            className="from-control"
            id="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleChange}
          />
          <input
            type="password"
            className="from-control"
            id="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleChange}
          />
          <button type="submit" className="btn btn-block">
            Login
          </button>
        </form>
      </section>
    </>
  );
};
