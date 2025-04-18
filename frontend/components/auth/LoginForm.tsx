// components/auth/LoginForm.tsx
"use client"

import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import './LoginForm.scss';

interface LoginFormProps {
  callbackUrl?: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ callbackUrl = '/' }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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

    try {
      const result = await signIn('credentials', {
        redirect: false,
        email: formData.email,
        password: formData.password,
      });
      
      if (result?.error) {
        throw new Error(result.error || 'Login failed');
      }
      
      router.push(callbackUrl);
    } catch (error) {
      setErrorMsg(error instanceof Error ? error.message : 'An unexpected error occurred');
    }
  };

  return (
    <div className="login-form-container">
      <div className="login-form-inner">
        <h1 className="login-title">Login</h1>
        
        {errorMsg && (
          <div className="login-error">
            {errorMsg}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="login-form">
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
            />
            
            <div className="form-links">
              <Link href="/forgot-password" className="form-link">
                Forgot Password
              </Link>
              <div>
                <span className="help-text">Not a member?</span>{' '}
                <Link href="/register" className="form-link">
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
          
          <button type="submit" className="submit-button">
            Login
          </button>
        </form>

        <button onClick={handleGoogleSignIn} className="google-button">
          <img 
            src="https://www.vectorlogo.zone/logos/google/google-icon.svg" 
            alt="Google logo" 
            className="google-icon" 
          />
          Sign in with Google
        </button>
        
        <div className="terms-text">
          By logging in, you agree to our Terms of Service and Privacy Policy
        </div>
      </div>
    </div>
  );
};

export default LoginForm;