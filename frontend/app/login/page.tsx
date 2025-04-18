"use client"

import React from 'react';
import LoginForm from '@/components/auth/LoginForm';

const LoginPage: React.FC = () => {
  return <LoginForm callbackUrl="/" />;
};

export default LoginPage;