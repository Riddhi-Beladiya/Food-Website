import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

const LoginPage = () => {
  const [isLoading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      // Mock API call or actual login logic
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulating API request

      // Simulate successful login (Replace with actual authentication logic)
      if (email === "test@example.com" && password === "1234") {
        toast.success("Login successful! Redirecting...", {
          position: "bottom-right",
          autoClose: 2000, // 2 seconds before redirect
        });

        setTimeout(() => {
          navigate("/home"); // Navigate after toast is shown
        }, 2000); // Delay for toast visibility
      } else {
        throw new Error("Invalid credentials"); // Simulate failed login
      }
    } catch (error) {
      toast.error("Login failed! Please try again.", {
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
            Login
          </h2>
          <form className="mt-6" onSubmit={login}>
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

            {/* Login Button with Loader */}
            <button
              type="submit"
              className="w-full mt-6 bg-red-500 text-white py-2 rounded-lg hover:bg-blue-500 transition duration-200 flex justify-center items-center"
              disabled={isLoading} // Disable button when loading
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
                "Login"
              )}
            </button>
          </form>

          <p className="mt-4 text-sm text-center">
            Don't have an account?{" "}
            <button
              onClick={() => navigate("/register")}
              className="text-red-500 hover:underline"
            >
              Register
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
