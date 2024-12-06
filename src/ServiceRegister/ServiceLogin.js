import React, { useState } from 'react'

const ServiceLogin = ({setIsLoginOpen}) => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
      });
    
   
    
      const [errors, setErrors] = useState({});
    
      const validateField = (name, value) => {
        let error = "";
    
        switch (name) {
          
    
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
            } else if (value.length < 6) {
              error = "Password must be at least 6 characters long.";
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
            <h2 className="form-title">Service Login</h2>
  
            
  
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
  
           
  
            
  
          
  
            <button type="submit" className="submit-button">
              Login
            </button>
            <p className="below-text">
              Don't Have an Account?{" "}
              <a onClick={()=>setIsLoginOpen(false)}
                style={{
                  cursor: "pointer",
                  color: "#ffffff",
                }}
                onMouseEnter={(e) => (e.target.style.color = "blue")}
                onMouseLeave={(e) => (e.target.style.color = "#ffffff")}
              >
                Signup
              </a>
            </p>
          </form>
        </div>
      </div>
  )
}

export default ServiceLogin