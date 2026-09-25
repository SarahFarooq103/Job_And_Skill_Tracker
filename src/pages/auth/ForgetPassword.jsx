import { useState } from "react";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    setError("");
    setSubmitted(true);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
      <div className="w-full max-w-md">

        {/* Brand */}
        <div className="mb-8 text-center">
          <Link
            to="/"
            className="text-xl font-bold text-indigo-600"
          >
            Skillora AI
          </Link>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

          {!submitted ? (
            <>
              {/* Header */}
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-xl">
                  🔐
                </div>

                <h1 className="mt-5 text-2xl font-bold text-slate-900">
                  Forgot your password?
                </h1>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Enter your email address and we'll send you a link to
                  reset your password.
                </p>
              </div>

              {/* Form */}
              <form
                onSubmit={handleSubmit}
                className="mt-7"
              >
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Email address
                  </label>

                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError("");
                    }}
                    placeholder="you@example.com"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-slate-200
                      bg-white
                      px-4
                      py-3
                      text-sm
                      outline-none
                      transition
                      placeholder:text-slate-400
                      focus:border-indigo-500
                      focus:ring-2
                      focus:ring-indigo-100
                    "
                  />
                </div>

                {error && (
                  <p className="mt-2 text-sm text-red-600">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  className="
                    mt-5
                    w-full
                    rounded-xl
                    bg-indigo-600
                    px-4
                    py-3
                    text-sm
                    font-semibold
                    text-white
                    transition
                    hover:bg-indigo-700
                    active:scale-[0.99]
                  "
                >
                  Send Reset Link
                </button>
              </form>

              <div className="mt-6 text-center">
                <Link
                  to="/login"
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
                >
                  ← Back to login
                </Link>
              </div>
            </>
          ) : (
            /* Success State */
            <div className="py-4 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-50 text-xl">
                ✓
              </div>

              <h2 className="mt-5 text-2xl font-bold text-slate-900">
                Check your email
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                If an account exists for
                <span className="font-medium text-slate-700">
                  {" "}
                  {email}
                </span>
                , you'll receive password reset instructions.
              </p>

              <Link
                to="/login"
                className="mt-6 inline-flex rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
              >
                Return to Login
              </Link>
            </div>
          )}

        </div>

        <p className="mt-6 text-center text-xs text-slate-400">
          Password reset is currently part of the frontend demo.
        </p>
      </div>
    </div>
  );
};

export default ForgetPassword;