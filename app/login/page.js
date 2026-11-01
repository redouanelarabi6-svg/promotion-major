"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";

export default function LoginPage() {
  const router = useRouter();

  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      if (mode === "signup") {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: window.location.origin
          }
        });

        if (error) throw error;

        if (data.session) {
          router.push("/");
        } else {
          setMessage("Account created! Please check your email.");
        }
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password
        });

        if (error) throw error;

        router.push("/");
      }
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleForgotPassword() {
    if (!email) {
      setMessage("Please enter your email address first.");
      return;
    }

    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`
    });

    setLoading(false);

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Password reset link sent! Please check your email.");
    }
  }

  return (
    <main style={{
      minHeight: "100vh",
      display: "grid",
      placeItems: "center",
      background: "#F6F4ED",
      padding: "20px",
      fontFamily: "Arial, sans-serif"
    }}>
      <section style={{
        width: "100%",
        maxWidth: "420px",
        background: "white",
        padding: "35px",
        borderRadius: "18px",
        boxShadow: "0 10px 40px rgba(20,43,69,0.08)"
      }}>
        <h1 style={{
          color: "#142B45",
          fontSize: "30px",
          marginBottom: "8px"
        }}>
          PM<span style={{ color: "#4B9B91" }}>.</span>
        </h1>

        <h2 style={{ color: "#142B45" }}>
          {mode === "login" ? "Welcome Back" : "Create Your Account"}
        </h2>

        <p style={{ color: "#82909E", marginBottom: "25px" }}>
          Your Major. Your Progress. Your Future.
        </p>

        <form onSubmit={handleSubmit}>
          <label>Email Address</label>
          <input
            type="email"
            placeholder="student@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={inputStyle}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="At least 6 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
            style={inputStyle}
          />

          <button type="submit" disabled={loading} style={buttonStyle}>
            {loading
              ? "Please wait..."
              : mode === "login"
                ? "Sign In"
                : "Create Account"}
          </button>
        </form>

        {mode === "login" && (
          <button
            type="button"
            onClick={handleForgotPassword}
            disabled={loading}
            style={{
              background: "none",
              border: "none",
              color: "#4B9B91",
              cursor: "pointer",
              marginTop: "18px",
              padding: 0
            }}
          >
            Forgot Password?
          </button>
        )}

        {message && (
          <p style={{ marginTop: "20px", color: "#4B9B91", lineHeight: 1.6 }}>
            {message}
          </p>
        )}

        <p style={{ marginTop: "25px", color: "#82909E", fontSize: "14px" }}>
          {mode === "login"
            ? "Don't have an account?"
            : "Already have an account?"}
          {" "}
          <button
            type="button"
            onClick={() => {
              setMode(mode === "login" ? "signup" : "login");
              setMessage("");
            }}
            style={{
              background: "none",
              border: "none",
              color: "#4B9B91",
              fontWeight: "bold",
              cursor: "pointer"
            }}
          >
            {mode === "login" ? "Sign Up" : "Sign In"}
          </button>
        </p>
      </section>
    </main>
  );
}

const inputStyle = {
  display: "block",
  width: "100%",
  padding: "13px",
  margin: "10px 0 20px",
  border: "1px solid #E0E4E7",
  borderRadius: "8px",
  fontSize: "14px",
  boxSizing: "border-box"
};

const buttonStyle = {
  width: "100%",
  padding: "14px",
  background: "#142B45",
  color: "white",
  border: "none",
  borderRadius: "8px",
  fontSize: "15px",
  cursor: "pointer"
};
