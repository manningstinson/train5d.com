"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const RegisterPage: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleGoogleSignIn = async () => {
    try {
      console.log("Starting Google Sign-In with NextAuth");

      // Use NextAuth's signIn function for Google
      await signIn("google", {
        callbackUrl: "/",
        redirect: true,
      });

      // Note: No need for redirect code here as NextAuth handles it
    } catch (error) {
      console.error("Google Sign-In Error");
      console.error(
        "Error Name: " + (error instanceof Error ? error.name : "Unknown")
      );
      console.error(
        "Error Message: " +
          (error instanceof Error ? error.message : "Unknown error")
      );

      setErrorMsg("Failed to initiate Google Sign-In");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    // Simple validation
    if (formData.password !== formData.confirmPassword) {
      setErrorMsg("Passwords do not match");
      return;
    }

    try {
      console.log("Attempting Signup:", {
        email: formData.email,
        firstName: formData.firstName,
        lastName: formData.lastName,
      });

      // Here you would typically have an API call to register the user
      // For example:
      // const response = await fetch('/api/auth/signup', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     firstName: formData.firstName,
      //     lastName: formData.lastName,
      //     email: formData.email,
      //     password: formData.password
      //   })
      // });

      // const data = await response.json();
      // if (!response.ok) {
      //   throw new Error(data.message || 'Signup failed');
      // }

      // After successful signup, sign them in
      const result = await signIn("credentials", {
        redirect: false,
        email: formData.email,
        password: formData.password,
      });

      if (result?.error) {
        throw new Error(result.error || "Login after signup failed");
      }

      // Redirect to home page on success
      router.push("/");
    } catch (error) {
      console.error("Signup Error:", error);
      setErrorMsg(
        error instanceof Error ? error.message : "An unexpected error occurred"
      );
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}>
      <h1>Create Account</h1>

      {errorMsg && (
        <div
          style={{
            color: "red",
            backgroundColor: "#ffeeee",
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "5px",
          }}
        >
          {errorMsg}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "10px",
            fontSize: "0.9em",
          }}
        >
          <span style={{ marginRight: "5px", color: "#666" }}>
            Already have an account?
          </span>
          <Link
            href="/login"
            style={{
              color: "#007BFF",
              textDecoration: "none",
            }}
          >
            Log in
          </Link>
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "15px",
          }}
        >
          Sign Up
        </button>
      </form>

      <div style={{ marginTop: "15px", textAlign: "center" }}>
        <button
          onClick={handleGoogleSignIn}
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#fff",
            color: "#757575",
            border: "1px solid #757575",
            borderRadius: "5px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="https://www.vectorlogo.zone/logos/google/google-icon.svg"
            alt="Google logo"
            style={{
              width: "20px",
              marginRight: "10px",
            }}
          />
          Sign up with Google
        </button>
      </div>

      <div
        style={{
          marginTop: "20px",
          textAlign: "center",
          fontSize: "0.85em",
          color: "#666",
        }}
      >
        By signing up, you agree to our Terms of Service and Privacy Policy
      </div>
    </div>
  );
};

export default RegisterPage;