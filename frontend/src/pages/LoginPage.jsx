import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Eye, Send, EyeOff, Loader2, Lock, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";


const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { login, isLoggingIn } = useAuthStore();

  const validateForm = () => {
    if (!formData.email.trim()) return toast.error("Email is required");
    if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Invalid email format");
    if (!formData.password) return toast.error("Password is required");

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const success = validateForm();

    if (success === true) login(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-base-100 to-primary/5">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12">
          {/* Left side - Branding */}
          <div className="flex-1 text-center lg:text-left space-y-8 max-w-xl">
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <div className="p-3 bg-primary/10 rounded-2xl rotate-6">
              <Send className="size-8 text-secondary animate-pulse" />
              </div>
              <h1 className="text-4xl font-bold">ChatterBox</h1>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-5xl font-bold leading-tight">
                Connect with friends in real-time
              </h2>
              <p className="text-xl text-base-content/70">
                Join millions of users worldwide and stay connected with your loved ones.
              </p>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <div className="stat bg-base-200 rounded-2xl p-4 flex-1 min-w-48">
                <div className="stat-title">Active Users</div>
                <div className="stat-value text-primary">10K+</div>
              </div>
              <div className="stat bg-base-200 rounded-2xl p-4 flex-1 min-w-48">
                <div className="stat-title">Messages Sent</div>
                <div className="stat-value text-primary">1M+</div>
              </div>
            </div>
          </div>

          {/* Right side - Login Form */}
          <div className="w-full max-w-md">
            <div className="bg-base-100 rounded-3xl shadow-xl p-8 border border-base-200">
              <div className="mb-8 text-center">
                <h3 className="text-2xl font-bold">Welcome Back!</h3>
                <p className="text-base-content/60 mt-2">Please sign in to continue</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address</label>
                    <div className="relative">
                      <input
                        type="email"
                        className="input input-bordered w-full pl-12 bg-base-200/50"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-base-content/40" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Password</label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        className="input input-bordered w-full pl-12 pr-12 bg-base-200/50"
                        placeholder="••••••••"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      />
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-base-content/40" />
                      <button
                        type="button"
                        className="absolute right-4 top-1/2 -translate-y-1/2"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="size-5 text-base-content/40" />
                        ) : (
                          <Eye className="size-5 text-base-content/40" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary w-full h-12 text-lg"
                  disabled={isLoggingIn}
                >
                  {isLoggingIn ? (
                    <>
                      <Loader2 className="size-5 animate-spin" />
                      Signing in...
                    </>
                  ) : (
                    "Sign in"
                  )}
                </button>
              </form>

              <div className="mt-8 text-center">
                <p className="text-base-content/60">
                  New to Chatty? {" "}
                  <Link to="/signup" className="text-primary hover:underline font-medium">
                    Create an account
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
