"use client"

import React, { useState } from 'react';
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.detail || 'Login failed');
      }
      
      // Store token
      if (typeof window !== 'undefined') {
        localStorage.setItem('token', data.access_token);
      }
      
      // Redirect to home page
      router.push('/');
    } catch (error) {
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
          
          {/* Links under password field */}
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
                href="/signup"
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
<button
  onClick={() => window.location.href = '/api/auth/google'}
  style={{
    width: '100%',
    padding: '10px',
    backgroundColor: '#ffffff',
    color: '#5F6368',
    border: '1px solid #DADCE0',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    fontSize: '14px',
    fontWeight: '500',
    fontFamily: '"Roboto", sans-serif',
  }}
>
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
    alt="Google Icon"
    style={{ width: '20px', height: '20px' }}
  />
  Continue with Google
</button>

 
      </form>
    </div>
  );
};

export default LoginPage;