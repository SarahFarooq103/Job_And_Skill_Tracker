import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../components/common/Card'
import Input from '../../components/common/Input'
import Button from '../../components/common/Button' 

const Login = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">

      <div className="w-full max-w-md">

        {/* Logo / Brand */}

        <div className="mb-8 text-center">

          <h1 className="text-2xl font-bold text-indigo-600">
            JobReady AI
          </h1>

          <h2 className="mt-6 text-2xl font-bold text-slate-900">
            Welcome back
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Sign in to continue your career journey.
          </p>

        </div>


        {/* Login Card */}

        <Card>

          <form className="space-y-5">

            <Input
              label="Email"
              type="email"
              name="email"
              placeholder="you@example.com"
              required
            />

            <Input
              label="Password"
              type="password"
              name="password"
              placeholder="Enter your password"
              required
            />

            <div className="flex justify-end">

              <Link
                to="/forgot-password"
                className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
              >
                Forgot password?
              </Link>

            </div>

            <Button type="submit">
              Sign In
            </Button>

          </form>


          {/* Register Link */}

          <div className="mt-6 border-t border-slate-200 pt-6 text-center">

            <p className="text-sm text-slate-500">
              Don't have an account?{" "}

              <Link
                to="/register"
                className="font-medium text-indigo-600 hover:text-indigo-700"
              >
                Create account
              </Link>

            </p>

          </div>

        </Card>

      </div>

    </div>
  )
}

export default Login
