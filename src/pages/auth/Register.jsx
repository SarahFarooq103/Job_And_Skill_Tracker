import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("Please complete all fields.");
      return;
    }

    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Temporary frontend behavior.
    // Later this will call the backend registration API.
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="grid min-h-screen lg:grid-cols-2">

        {/* Left Branding Section */}
        <div className="relative hidden overflow-hidden bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-700 lg:flex lg:flex-col lg:justify-between lg:p-12">

          <Link
            to="/"
            className="relative z-10 text-xl font-bold text-white"
          >
            RolePath AI
          </Link>

          <div className="relative z-10 max-w-lg">
            <p className="text-sm font-semibold uppercase tracking-wider text-indigo-200">
              Your career path starts here
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight text-white">
              Turn your target job into a clear path forward.
            </h1>

            <p className="mt-5 leading-7 text-indigo-100">
              Understand your skill gaps, follow a personalized roadmap,
              build relevant projects, and prepare for interviews in one
              place.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Analyze job requirements",
                "Discover your skill gaps",
                "Build a personalized roadmap",
                "Practice for interviews",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm text-indigo-50"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 text-xs">
                    ✓
                  </span>

                  {item}
                </div>
              ))}
            </div>
          </div>

          <p className="relative z-10 text-xs text-indigo-200">
            Build skills. Prove them. Get ready.
          </p>

          {/* Decorative circles */}
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-white/5" />
          <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-violet-400/10" />
        </div>

        {/* Register Form */}
        <div className="flex items-center justify-center px-6 py-12 sm:px-10">
          <div className="w-full max-w-md">

            {/* Mobile Logo */}
            <Link
              to="/"
              className="mb-10 block text-xl font-bold text-indigo-600 lg:hidden"
            >
              RolePath AI
            </Link>

            <div>
              <p className="text-sm font-semibold text-indigo-600">
                GET STARTED
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                Create your account
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Start building a personalized path toward your target role.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Full name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Email address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Password
                </label>

                <input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Minimum 8 characters"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Confirm password
                </label>

                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Enter your password again"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              {/* Error */}
              {error && (
                <div className="rounded-lg border border-red-100 bg-red-50 px-4 py-3">
                  <p className="text-sm text-red-600">
                    {error}
                  </p>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 active:scale-[0.99]"
              >
                Create Account →
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-slate-500">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-indigo-600 hover:text-indigo-700"
              >
                Log in
              </Link>
            </p>

            <p className="mt-8 text-center text-xs leading-5 text-slate-400">
              Account creation is currently part of the frontend demo.
              Authentication will be connected to the backend later.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;