"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const GoogleAuthCallback = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleOAuthCallback = async () => {
      const code = searchParams.get("code");
      const error = searchParams.get("error");

      if (error) {
        console.error("OAuth Error:", error);
        router.push("/login");
        return;
      }

      if (code) {
        try {
          const response = await fetch("/api/auth/google/callback", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ code }),
          });

          const data = await response.json();
          if (response.ok) {
            localStorage.setItem("access_token", data.access_token);
            router.push("/dashboard"); // Redirect to the dashboard
          } else {
            console.error("Authentication failed:", data);
            router.push("/login");
          }
        } catch (err) {
          console.error("Error during authentication:", err);
          router.push("/login");
        }
      }
    };

    handleOAuthCallback();
  }, [router, searchParams]);

  return <p>Processing authentication...</p>;
};

export default GoogleAuthCallback;
