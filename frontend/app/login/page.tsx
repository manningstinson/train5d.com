// File: app/login/page.tsx
"use client"

import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const LoginPage: React.FC = () => {
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
      console.log('Starting Google Sign-In with NextAuth');
      
      // Use NextAuth's signIn function for Google
      await signIn('google', { 
        callbackUrl: '/',
        redirect: true
      });
      
      // Note: No need for redirect code here as NextAuth handles it
      
    } catch (error) {
      console.error('Google Sign-In Error');
      console.error('Error Name: ' + (error instanceof Error ? error.name : 'Unknown'));
      console.error('Error Message: ' + (error instanceof Error ? error.message : 'Unknown error'));
      
      setErrorMsg('Failed to initiate Google Sign-In');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    try {
      console.log('Attempting Login:', { email: formData.email });
      
      // Use NextAuth's signIn function for credentials
      const result = await signIn('credentials', {
        redirect: false,
        email: formData.email,
        password: formData.password,
      });
      
      console.log('Login Response:', result);
      
      if (result?.error) {
        throw new Error(result.error || 'Login failed');
      }
      
      // Redirect to home page on success
      router.push('/');
      
    } catch (error) {
      console.error('Login Error:', error);
      setErrorMsg(error instanceof Error ? error.message : 'An unexpected error occurred');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <h1>Login</h1>
      
      {errorMsg && (
        <div style={{ 
          color: 'red', 
          backgroundColor: '#ffeeee', 
          padding: '10px', 
          marginBottom: '15px',
          borderRadius: '5px'
        }}>
          {errorMsg}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
          
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '10px',
            fontSize: '0.9em'
          }}>
            <Link 
              href="/forgot-password"
              style={{ 
                color: '#007BFF', 
                textDecoration: 'none' 
              }}
            >
              Forgot Password
            </Link>
            <div>
              <span style={{ marginRight: '5px', color: '#666' }}>Not a member?</span>
              <Link 
                href="/register"
                style={{ 
                  color: '#007BFF', 
                  textDecoration: 'none' 
                }}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
        
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#007BFF',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginTop: '15px'
          }}
        >
          Login
        </button>
      </form>

      <div style={{ marginTop: '15px', textAlign: 'center' }}>
        <button
          onClick={handleGoogleSignIn}
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#fff',
            color: '#757575',
            border: '1px solid #757575',
            borderRadius: '5px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <img 
            src="https://www.vectorlogo.zone/logos/google/google-icon.svg" 
            alt="Google logo" 
            style={{ 
              width: '20px', 
              marginRight: '10px' 
            }} 
          />
          Sign in with Google
        </button>
      </div>
      
      <div style={{ 
        marginTop: '20px', 
        textAlign: 'center',
        fontSize: '0.85em',
        color: '#666' 
      }}>
        By logging in, you agree to our Terms of Service and Privacy Policy
      </div>
    </div>
  );
};

export default LoginPage;