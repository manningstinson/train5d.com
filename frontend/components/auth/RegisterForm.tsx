// components/auth/RegisterForm.tsx
"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import './RegisterForm.scss';

interface RegisterFormProps {
  callbackUrl?: string;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ callbackUrl = '/' }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleGoogleSignIn = async () => {
    try {
      await signIn('google', { 
        callbackUrl,
        redirect: true
      });
    } catch (error) {
      console.error('Google Sign-In Error:', error);
      setErrorMsg('Failed to initiate Google Sign-In');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      setErrorMsg("Passwords don't match");
      return;
    }

    try {
      // Make API call to register the user
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }

      // Redirect to login page or directly log the user in
      router.push('/login?registered=true');
    } catch (error) {
      setErrorMsg(error instanceof Error ? error.message : 'An unexpected error occurred');
    }
  };

  return (
    <div className="register-form-container">
      <div className="register-form-inner">
        <h1 className="register-title">Create an Account</h1>
        
        {errorMsg && (
          <div className="register-error">
            {errorMsg}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="register-form">
          <div className="form-group">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              minLength={8}
            />
          </div>
          
          <div className="form-group">
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-links">
            <div className="login-link">
              <span className="help-text">Already have an account?</span>{' '}
              <Link href="/login" className="form-link">
                Login
              </Link>
            </div>
          </div>
          
          <button type="submit" className="submit-button">
            Create Account
          </button>
        </form>

        <button onClick={handleGoogleSignIn} className="google-button">
          <img 
            src="https://www.vectorlogo.zone/logos/google/google-icon.svg" 
            alt="Google logo" 
            className="google-icon" 
          />
          Sign up with Google
        </button>
        
        <div className="terms-text">
          By creating an account, you agree to our Terms of Service and Privacy Policy
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;