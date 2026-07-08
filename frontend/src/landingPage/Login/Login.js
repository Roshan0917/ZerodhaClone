import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import {
  Visibility,
  VisibilityOff,
  Email,
  Lock,
} from "@mui/icons-material";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:3002/login",
        {
          email,
          password,
        }
      );

      toast.success("Login Successful 🎉");

      const token = res.data.token;
      const user = JSON.stringify(res.data.user);

      setTimeout(() => {
        window.location.href =
          `http://localhost:3001/?token=${token}&user=${encodeURIComponent(
            user
          )}`;
      }, 1200);
    } catch (err) {
      console.log(err);

      toast.error(
        err.response?.data ||
          "Invalid Email or Password"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">

      <div className="bg-circle one"></div>
      <div className="bg-circle two"></div>

      <div className="login-card">

        <div className="login-top">

          <img
            src="https://zerodha.com/static/images/logo.svg"
            alt="logo"
            className="logo"
          />

          <h2>Welcome Back 👋</h2>

          <p>
            Login to continue trading
          </p>

        </div>

        <form onSubmit={handleLogin}>

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
      type={showPassword ? "text" : "password"}
      placeholder="Enter Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
    />

    <button
      type="button"
      className="show-password"
      onClick={() => setShowPassword(!showPassword)}
    >
      {showPassword ? <VisibilityOff /> : <Visibility />}
    </button>

  </div>

</div>


          <button
            type="submit"
            className="login-btn"
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="loader"></span>
                Logging In...
              </>
            ) : (
              "Login"
            )}
          </button>

        </form>

        <div className="signup-text">

          Don't have an account?

          <a href="/signup">
            Create Account
          </a>

        </div>

      </div>

    </div>
  );
};

export default Login;