import {
  useLoginUserMutation,
  useRegisterUserMutation,
} from "@/features/api/authApi";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Loader2, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [mode, setMode] = useState("login"); // "login" or "register"
  const [showPassword, setShowPassword] = useState(false);

  const [signupInput, setSignupInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loginInput, setLoginInput] = useState({ email: "", password: "" });

  const [
    registerUser,
    {
      data: registerData,
      error: registerError,
      isLoading: registerIsLoading,
      isSuccess: registerIsSuccess,
    },
  ] = useRegisterUserMutation();

  const [
    loginUser,
    {
      data: loginData,
      error: loginError,
      isLoading: loginIsLoading,
      isSuccess: loginIsSuccess,
    },
  ] = useLoginUserMutation();

  const navigate = useNavigate();

  const changeInputHandler = (e, type) => {
    const { name, value } = e.target;
    if (type === "signup") {
      setSignupInput({ ...signupInput, [name]: value });
    } else {
      setLoginInput({ ...loginInput, [name]: value });
    }
  };

  const handleAction = async () => {
    if (mode === "register") {
      if (!signupInput.name || !signupInput.email || !signupInput.password) {
        toast.error("All fields are required for registration!");
        return;
      }
      await registerUser(signupInput);
    } else {
      if (!loginInput.email || !loginInput.password) {
        toast.error("Email and password are required!");
        return;
      }
      await loginUser(loginInput);
    }
  };

  useEffect(() => {
    if (registerIsSuccess && registerData) {
      toast.success(registerData.message || "Signup successful");
      setMode("login");
    }
    if (registerError) {
      toast.error(registerError.data?.message || "Signup failed");
    }
    if (loginIsSuccess && loginData) {
      toast.success(loginData.message || "Login successful");
      navigate("/");
    }
    if (loginError) {
      toast.error(loginError.data?.message || "Login failed");
    }
  }, [
    registerIsSuccess,
    registerData,
    registerError,
    loginIsSuccess,
    loginData,
    loginError,
    navigate,
  ]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f5f6fb] relative z-0 dark:bg-gray-800">
      <div className="flex w-full min-h-screen">
        <div className="w-1/2 hidden md:flex items-center justify-center bg-[#4c55b7] relative overflow-hidden z-0">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full animate-float-bounce"></div>

          <div className="flex flex-col items-center text-center space-y-6 z-10">
            <h1 className="text-white text-2xl font-bold animate-fade-in-down dark:text-black">
              Shape your career with Learnova
            </h1>
            <img
              src={mode === "login" ? "/man.png" : "/women.png"}
              alt="Auth Illustration"
              className="w-4/5 h-auto animate-float"
            />
          </div>
        </div>

        <div className="md:hidden absolute top-0 left-0 w-full h-60 bg-[#4c55b7] flex items-center justify-center z-0 overflow-hidden">
          <img
            src={mode === "login" ? "/man.png" : "/women.png"}
            alt="Auth Illustration"
            className="w-40 h-40 animate-float"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-10 md:px-20 lg:px-36 py-10 relative z-10">
          {mode === "login" ? (
            <>
              <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center dark:text-white">
                Welcome Back!
              </h2>
              <p className="text-sm text-gray-500 mb-6 text-center">
                Login with your email and password.
              </p>

              <input
                type="email"
                name="email"
                autoComplete="off"
                autoCorrect="off"
                spellCheck="false"
                value={loginInput.email}
                onChange={(e) => changeInputHandler(e, "login")}
                placeholder="Email"
                className="text-black mb-4 w-full px-4 py-3 rounded-full border border-blue-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />

              <div className="relative mb-4">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  autoComplete="new-password"
                  value={loginInput.password}
                  onChange={(e) => changeInputHandler(e, "login")}
                  placeholder="Password"
                  className="text-black w-full px-4 py-3 rounded-full border border-blue-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              <button
                disabled={loginIsLoading}
                onClick={handleAction}
                className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-3 rounded-full border border-blue-500 flex items-center justify-center"
              >
                {loginIsLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please
                    wait
                  </>
                ) : (
                  "Login"
                )}
              </button>

              <p className="mt-6 text-center text-sm text-gray-600 dark:text-white">
                Don’t have an account?{" "}
                <button
                  onClick={() => setMode("register")}
                  className="text-indigo-600 font-medium hover:underline"
                >
                  Register
                </button>
              </p>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-gray-800 mt-10 text-center dark:text-white">
                Create your account
              </h2>
              <p className="text-sm text-gray-500 mb-6 text-center">
                Fill in your details to get started.
              </p>

              <input
                type="text"
                name="name"
                value={signupInput.name}
                onChange={(e) => changeInputHandler(e, "signup")}
                placeholder="Enter name"
                className="text-black mb-4 w-full px-4 py-3 rounded-full border border-blue-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <input
                type="email"
                name="email"
                autoComplete="off"
                autoCorrect="off"
                spellCheck="false"
                value={signupInput.email}
                onChange={(e) => changeInputHandler(e, "signup")}
                placeholder="eg. xyz@gmail.com"
                className="text-black mb-4 w-full px-4 py-3 rounded-full border border-blue-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />

              <div className="relative mb-4">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  autoComplete="new-password"
                  value={signupInput.password}
                  onChange={(e) => changeInputHandler(e, "signup")}
                  placeholder="Password"
                  className="text-black w-full px-4 py-3 rounded-full border border-blue-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              <button
                disabled={registerIsLoading}
                onClick={handleAction}
                className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-3 rounded-full border border-blue-500 flex items-center justify-center"
              >
                {registerIsLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please
                    wait
                  </>
                ) : (
                  "Register"
                )}
              </button>

              <p className="mt-6 text-center text-sm text-gray-600 dark:text-white">
                Already have an account?{" "}
                <button
                  onClick={() => setMode("login")}
                  className="text-indigo-600 font-medium hover:underline"
                >
                  Login
                </button>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
