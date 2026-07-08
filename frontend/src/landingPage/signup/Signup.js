import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import {
  Person,
  Email,
  Lock,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import "./SignUp.css";

const SignUp = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!fullname || !email || !password) {
      toast.error("Please fill all fields");
      return;
    }

    if (password.length < 6) {
      toast.error(
        "Password must be at least 6 characters"
      );
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:3002/signup",
        {
          fullname,
          email,
          password,
        }
      );

      toast.success("Account Created Successfully 🎉");

      setFullname("");
      setEmail("");
      setPassword("");

      setTimeout(() => {
        window.location.href = "/login";
      }, 1500);
    } catch (err) {
      console.log(err);

      toast.error(
        err.response?.data || "Signup Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-page">

      <div className="bg-circle one"></div>
      <div className="bg-circle two"></div>

      <div className="signup-card">

        <div className="signup-top">

          <img
            src="https://zerodha.com/static/images/logo.svg"
            alt="logo"
            className="logo"
          />

          <h2>Create Account 🚀</h2>

          <p>
            Start your investing journey today
          </p>

        </div>

        <form onSubmit={handleSignup}>

          <div className="input-group">

            <label>Full Name</label>

            <div className="input-box">

              <Person className="icon" />

              <input
                type="text"
                placeholder="Enter your full name"
                value={fullname}
                onChange={(e) =>
                  setFullname(e.target.value)
                }
                required
              />

            </div>

          </div>

          <div className="input-group">

            <label>Email Address</label>

            <div className="input-box">

              <Email className="icon" />

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                required
              />

            </div>

          </div>

          <div className="input-group">

            <label>Password</label>

            <div className="input-box">

              <Lock className="icon" />

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="Create Password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                required
              />
                            <button
                type="button"
                className="show-password"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? (
                  <VisibilityOff />
                ) : (
                  <Visibility />
                )}
              </button>

            </div>

          </div>

          <button
            type="submit"
            className="signup-btn"
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="loader"></span>
                Creating Account...
              </>
            ) : (
              "Create Account"
            )}
          </button>

        </form>

        <div className="login-text">

          Already have an account?

          <a href="/login">
            Login
          </a>

        </div>

      </div>

    </div>
  );
};

export default SignUp;