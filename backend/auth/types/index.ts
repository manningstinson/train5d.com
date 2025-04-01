import { Document } from 'mongoose';
import { Request } from 'express';

// User related types
export interface UserDocument extends Document {
  name: string;
  email: string;
  googleId?: string;
  facebookId?: string;
  avatar?: string;
  createdAt: Date;
  generateAuthToken: () => string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

// Auth configuration
export interface AuthConfig {
  SESSION_SECRET: string;
  MAIN_DOMAIN: string;
  COOKIE_DOMAIN: string;
  GOOGLE_CLIENT_ID: string;
  GOOGLE_CLIENT_SECRET: string;
  FACEBOOK_APP_ID: string;
  FACEBOOK_APP_SECRET: string;
  JWT_SECRET: string;
  JWT_EXPIRES_IN: string;
  NODE_ENV: string;
}

// JWT token
export interface DecodedToken {
  id: string;
  email: string;
  iat: number;
  exp: number;
}

// Express request with user
export interface AuthRequest extends Request {
  user?: UserDocument;
}

// OAuth profile data
export interface OAuthProfile {
  id: string;
  displayName: string;
  emails?: Array<{ value: string }>;
  photos?: Array<{ value: string }>;
}

// Auth response types
export interface AuthResponse {
  token?: string;
  user?: UserProfile;
  error?: string;
}

// React context types
export interface AuthContextType {
  user: UserProfile | null;
  loading: boolean;
  error: string | null;
  isAuthenticated: boolean;
  login: (provider: 'google' | 'facebook') => void;
  logout: () => void;
  fetchUser: () => Promise<void>;
}

// Cookie options
export interface CookieOptions {
  httpOnly: boolean;
  secure: boolean;
  domain: string;
  maxAge: number;
}