import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
export const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
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
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>
      <section className="form">
        <form className="form-group" onSubmit={handleSubmit}>
          <input
            type="text"
            className="from-control"
            id="name"
            name="name"
            value={name}
            placeholder="Enter your name"
            onChange={handleChange}
          />
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
          <input
            type="password"
            className="from-control"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            placeholder="Confirm your password"
            onChange={handleChange}
          />
          <button type="submit" className="btn btn-block">
            Submit
          </button>
        </form>
      </section>
    </>
  );
};
