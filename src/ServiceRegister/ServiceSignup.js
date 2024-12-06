import React, { useState } from "react";
import "../CustomerRegister/CustomerSignup.css";
import ServiceLogin from "./ServiceLogin";


const ServiceSignup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
    city: "",
    state: "",
  });

  const [isLoginOpen,setIsLoginOpen]=useState(false)

  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "name":
        if (!value.trim()) {
          error = "Name is required.";
        }
        break;

      case "email":
        if (!value.trim()) {
          error = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          error = "Valid email is required.";
        }
        break;

      case "password":
        if (!value.trim()) {
          error = "Password is required.";
        } else if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(value)) {
          error = "Minimum eight characters, at least one letter, one number and one special character required";
        }
        break;

      case "mobile":
        if (!value.trim()) {
          error = "Mobile number is required.";
        } else if (!/^\d{10}$/.test(value)) {
          error = "Valid 10-digit mobile number is required.";
        }
        break;

      case "city":
        if (!value.trim()) {
          error = "City is required.";
        }
        break;

      case "state":
        if (!value.trim()) {
          error = "State is required.";
        }
        break;

      default:
        break;
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    const error = validateField(name, value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
      }
    });

    if (Object.keys(newErrors).length === 0) {
      console.log("Form Submitted:", formData);
      alert("Signup successful!");
      setFormData({
        name: "",
        email: "",
        password: "",
        mobile: "",
        city: "",
        state: "",
      });
      setErrors({});
    } else {
      setErrors(newErrors);
    }
  };
  if(isLoginOpen){
    return(
      <ServiceLogin setIsLoginOpen={setIsLoginOpen}/>
    )
  }
  else{
    return (
      <div
        style={{
          width: "100%",
          margin: "0",
          padding: "0",
          boxSizing: "border-box",
          height: "100%",
        }}
      >
        <div className="signup-container">
          <form className="signup-form" onSubmit={handleSubmit}>
            <h2 className="form-title">Service Signup</h2>
  
            <div className="form-group">
              <p className="signup-label-text">Name</p>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className={`form-input ${errors.name ? "error-input" : ""}`}
              />
              {errors.name && <p className="error-message">{errors.name}</p>}
            </div>
  
            <div className="form-group">
              <p className="signup-label-text">Email ID</p>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className={`form-input ${errors.email ? "error-input" : ""}`}
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>
  
            <div className="form-group">
              <p className="signup-label-text">Password</p>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a password"
                className={`form-input ${errors.password ? "error-input" : ""}`}
              />
              {errors.password && (
                <p className="error-message">{errors.password}</p>
              )}
            </div>
  
            <div className="form-group">
              <p className="signup-label-text">Mobile Number</p>
              <input
                type="text"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Enter your mobile number"
                className={`form-input ${errors.mobile ? "error-input" : ""}`}
              />
              {errors.mobile && <p className="error-message">{errors.mobile}</p>}
            </div>
  
            <div className="form-group">
              <p className="signup-label-text">City</p>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter your city"
                className={`form-input ${errors.city ? "error-input" : ""}`}
              />
              {errors.city && <p className="error-message">{errors.city}</p>}
            </div>
  
            <div className="form-group">
              <p className="signup-label-text">State</p>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="Enter your state"
                className={`form-input ${errors.state ? "error-input" : ""}`}
              />
              {errors.state && <p className="error-message">{errors.state}</p>}
            </div>
  
            <button type="submit" className="submit-button">
              Signup
            </button>
            <p className="below-text">
              Already Have an Account?{" "}
              <a onClick={()=>setIsLoginOpen(true)}
                style={{
                  cursor: "pointer",
                  color: "#ffffff",
                }}
                onMouseEnter={(e) => (e.target.style.color = "blue")}
                onMouseLeave={(e) => (e.target.style.color = "#ffffff")}
              >
                Login
              </a>
            </p>
          </form>
        </div>
      </div>
    );
  }

 
};

export default ServiceSignup;
