import { NextResponse } from 'next/server';

// Add this line to fix the error
export const dynamic = 'force-dynamic';

export async function GET() {
  // Redirect to your backend Google OAuth endpoint
  const backendUrl = process.env.NODE_ENV === 'development' 
    ? 'http://127.0.0.1:8000/auth/google/login'
    : 'https://train5d.com/auth/google/login';
    
  return NextResponse.redirect(backendUrl);
}