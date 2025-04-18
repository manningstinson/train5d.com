// app/register/page.tsx
"use client"

import React from 'react';
import RegisterForm from '@/components/auth/RegisterForm';

const RegisterPage: React.FC = () => {
  return <RegisterForm callbackUrl="/login?registered=true" />;
};

export default RegisterPage;