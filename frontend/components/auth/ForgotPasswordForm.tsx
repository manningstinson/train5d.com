// components/auth/ForgotPasswordForm.tsx
"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import './ForgotPasswordForm.scss';

interface ForgotPasswordFormProps {
  callbackUrl?: string;
}

const ForgotPasswordForm: React.FC<ForgotPasswordFormProps> = ({ callbackUrl = '/login' }) => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');
    setIsLoading(true);

    try {
      // Make API call to request password reset
      const response = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send reset email');
      }

      setSuccessMsg('Password reset instructions have been sent to your email');
      // Optional: redirect after success
      // setTimeout(() => router.push('/login'), 3000);
    } catch (error) {
      setErrorMsg(error instanceof Error ? error.message : 'An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-inner">
        <h1 className="forgot-password-title">Reset Your Password</h1>
        
        <p className="forgot-password-description">
          Enter your email address and we'll send you instructions to reset your password.
        </p>
        
        {errorMsg && (
          <div className="forgot-password-error">
            {errorMsg}
          </div>
        )}
        
        {successMsg && (
          <div className="forgot-password-success">
            {successMsg}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="forgot-password-form">
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleChange}
              required
            />
          </div>
          
          <button 
            type="submit" 
            className="submit-button"
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Reset Password'}
          </button>
          
          <div className="form-links">
            <Link href="/login" className="form-link">
              Back to Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;