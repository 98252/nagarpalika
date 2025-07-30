"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AdminLogin() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Check if admin is already logged in
  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    const adminData = localStorage.getItem("adminData");

    if (token && adminData) {
      // Verify token format (basic check)
      try {
        const decoded = Buffer.from(token, "base64").toString();
        if (decoded.includes(":")) {
          router.push("/admin/dashboard");
          return;
        }
      } catch (error) {
        // Invalid token, clear it
        localStorage.removeItem("adminToken");
        localStorage.removeItem("adminData");
      }
    }
  }, [router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        // Store the token in localStorage
        localStorage.setItem("adminToken", data.token);
        localStorage.setItem("adminData", JSON.stringify(data.admin));
        router.push("/admin/dashboard");
      } else {
        const data = await response.json();
        setError(data.error || "Login failed");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='min-h-screen bg-[#F5F5F5] flex items-center justify-center py-12'>
      <div className='max-w-2xl w-full mx-auto px-8'>
        <div
          style={{
            background: "#F5F5F5",
            border: "8px solid #222222",
            boxShadow: "8px 8px 0px #222222",
            padding: "80px 100px",
            position: "relative",
            minHeight: "600px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <Link
              href='/'
              style={{
                fontFamily: "var(--font-space-mono), monospace",
                fontSize: "2.5rem",
                fontWeight: "700",
                color: "#222222",
                textDecoration: "none",
                display: "block",
                marginBottom: "20px",
              }}
            >
              NagarPalika
            </Link>
            <h2
              style={{
                fontFamily: "var(--font-space-mono), monospace",
                fontSize: "1.75rem",
                fontWeight: "700",
                color: "#222222",
                marginBottom: "16px",
              }}
            >
              Admin Login
            </h2>
            <p
              style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontSize: "1rem",
                color: "#111111",
                lineHeight: "1.6",
              }}
            >
              Access the administrative dashboard
            </p>
          </div>

          <form onSubmit={handleSubmit} style={{ marginBottom: "40px" }}>
            {error && (
              <div
                style={{
                  background: "#FF6B6B",
                  border: "4px solid #222222",
                  color: "white",
                  padding: "16px",
                  marginBottom: "32px",
                  textAlign: "center",
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontWeight: "600",
                }}
              >
                {error}
              </div>
            )}

            <div style={{ marginBottom: "32px" }}>
              <label
                htmlFor='email'
                style={{
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontSize: "1rem",
                  fontWeight: "600",
                  color: "#222222",
                  display: "block",
                  marginBottom: "12px",
                }}
              >
                Email Address
              </label>
              <input
                id='email'
                name='email'
                type='email'
                autoComplete='email'
                required
                value={formData.email}
                onChange={handleChange}
                style={{
                  background: "#F5F5F5",
                  border: "4px solid #222222",
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontSize: "1rem",
                  padding: "16px 20px",
                  width: "100%",
                  boxShadow: "4px 4px 0px #222222",
                  transition: "all 0.2s ease",
                }}
                placeholder='admin@example.com'
              />
            </div>

            <div style={{ marginBottom: "40px" }}>
              <label
                htmlFor='password'
                style={{
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontSize: "1rem",
                  fontWeight: "600",
                  color: "#222222",
                  display: "block",
                  marginBottom: "12px",
                }}
              >
                Password
              </label>
              <input
                id='password'
                name='password'
                type='password'
                autoComplete='current-password'
                required
                value={formData.password}
                onChange={handleChange}
                style={{
                  background: "#F5F5F5",
                  border: "4px solid #222222",
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontSize: "1rem",
                  padding: "16px 20px",
                  width: "100%",
                  boxShadow: "4px 4px 0px #222222",
                  transition: "all 0.2s ease",
                }}
                placeholder='Enter your password'
              />
            </div>

            <div
              style={{
                margin: "32px 0 0 0",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Link href='/' className='neo-button-secondary'>
                Back to Home
              </Link>
              <button
                type='submit'
                disabled={loading}
                className='neo-button-primary'
              >
                {loading ? (
                  <>
                    <div className='neo-spinner' />
                    Signing in...
                  </>
                ) : (
                  "Sign in"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
