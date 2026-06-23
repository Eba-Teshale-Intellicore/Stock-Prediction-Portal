"use client";
import { useState } from "react";
import styles from "./login.module.scss";
import axios from "axios";
// import { useRouter } from "next/navigation";

export default function RegisterPage() {
  // const router = useRouter();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("test");

    // const handleSubmit = async (e) => {
    //   e.preventDefault();
    //   setLoading(true);

    //   const userData = {
    //     username: form.username,
    //     email: form.email,
    //     password: form.password,
    //   };

    //   try {
    //     const res = await axios.post(
    //       "http://127.0.0.1:8000/api/v1/register/",
    //       userData,
    //     );

    //     console.log("res.data =>", res.data);
    //     console.log("registration Successful");
    //     setErrors({});
    //     setSuccess(true);
    //   } catch (error) {
    //     setErrors(error.response.data);
    //     console.log("FULL ERROR:", error.response?.data);
    //     console.log("not found");
    //   } finally {
    //     setLoading(false);
    //   }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formBox}>
        <h1 className={styles.title}>Create Account</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className={styles.input}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            value={form.username}
          />
          <small>{errors.username}</small>

          <input
            type="password"
            name="password"
            placeholder="Password"
            className={styles.input}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            value={form.password}
          />
          <small>{errors.password}</small>
          {success && <small>Registration Successful</small>}
          {loading ? (
            <button type="submit" className={styles.button} disabled>
              Please Wait...
            </button>
          ) : (
            <button type="submit" className={styles.button}>
              Login
            </button>
          )}
        </form>

        <p className={styles.text}>Already have an account? Login</p>
      </div>
    </div>
  );
}
