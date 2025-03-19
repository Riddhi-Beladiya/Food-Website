import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

const Register = () => {
  const [isLoading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!", {
        position: "bottom-right",
        autoClose: 3000,
      });
      setLoading(false);
      return;
    }

    try {
      // Mock API call or actual registration logic
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulating API request

      toast.success("Registration successful! Redirecting...", {
        position: "bottom-right",
        autoClose: 2000,
      });

      setTimeout(() => {
        navigate("/login"); // Navigate after toast is shown
      }, 2000);
    } catch (error) {
      toast.error("Registration failed! Please try again.", {
        position: "bottom-right",
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-10">
      <ToastContainer />
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="bg-gray-100 p-8 rounded-2xl shadow-lg w-96">
          <h2 className="text-4xl font-semibold text-center text-gray-800">
            Registration
          </h2>
          <form className="mt-6" onSubmit={handleRegister}>
            <div>
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter your email here..."
                required
              />
            </div>
            <div className="mt-4">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="mt-4">
              <label>Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Confirm your password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full mt-6 bg-red-500 text-white py-2 rounded-lg hover:bg-blue-500 transition duration-200 flex justify-center items-center"
              disabled={isLoading}
            >
              {isLoading ? (
                <Oval
                  visible={true}
                  height={24}
                  width={24}
                  color="#ffffff"
                  ariaLabel="oval-loading"
                />
              ) : (
                "Submit"
              )}
            </button>
          </form>
          <p className="mt-4 text-sm text-center">
            Already have an account?{" "}
            <button
              onClick={() => navigate("/login")}
              className="text-red-500 hover:underline"
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
