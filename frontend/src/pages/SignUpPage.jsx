import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare, User } from "lucide-react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { signup, isSigningUp } = useAuthStore();

  const validateForm = () => {
    if (!formData.fullName.trim()) return toast.error("Full name is required");
    if (!formData.email.trim()) return toast.error("Email is required");
    if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Invalid email format");
    if (!formData.password) return toast.error("Password is required");
    if (formData.password.length < 6) return toast.error("Password must be at least 6 characters");

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const success = validateForm();

    if (success === true) signup(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-base-100 to-primary/5">
      <div className="container px-4 mx-auto py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12">
          {/* Left side - Branding */}
          <div className="flex-1 text-center lg:text-left space-y-8 max-w-xl">
            <div className="inline-flex items-center justify-center gap-3 px-6 py-3 rounded-2xl bg-base-200">
              <div className="size-3 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-sm font-medium">1,234 users online now</span>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-5xl font-bold leading-tight">
                Start chatting with your friends instantly
              </h2>
              <p className="text-xl text-base-content/70">
                Create your account in seconds and join the conversation.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-base-200">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <MessageSquare className="size-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Real-time Chat</div>
                  <div className="text-sm text-base-content/60">Instant messaging</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-base-200">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <User className="size-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">User Friendly</div>
                  <div className="text-sm text-base-content/60">Easy to use</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Signup Form */}
          <div className="w-full max-w-md">
            <div className="bg-base-100 rounded-3xl shadow-xl p-8 border border-base-200">
              <div className="mb-8 text-center">
                <h3 className="text-2xl font-bold">Create your account</h3>
                <p className="text-base-content/60 mt-2">Join our community today</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <div className="relative">
                      <input
                        type="text"
                        className="input input-bordered w-full pl-12 bg-base-200/50"
                        placeholder="alexander"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      />
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-base-content/40" />
                    </div>
                  </div>

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
                  disabled={isSigningUp}
                >
                  {isSigningUp ? (
                    <>
                      <Loader2 className="size-5 animate-spin" />
                      Creating account...
                    </>
                  ) : (
                    "Create Account"
                  )}
                </button>
              </form>

              <div className="mt-8 text-center">
                <p className="text-base-content/60">
                  Already have an account? {" "}
                  <Link to="/login" className="text-primary hover:underline font-medium">
                    Sign in
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

export default SignUpPage;