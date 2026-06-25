"use client";
import { useState } from "react";
import styles from "./register.module.scss";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   alert("test");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const userData = {
      username: form.username,
      email: form.email,
      password: form.password,
    };

    // console.log("userData =>", userData);
    // alert(JSON.stringify(userData));

    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/v1/register/",
        userData,
      );

      console.log("res.data =>", res.data);
      console.log("registration Successful");
      setErrors({});
      setSuccess(true);
      router.push("/login");
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        setErrors(error.response?.data);
        console.log("FULL ERROR:", error.response?.data);
      } else {
        console.log("Unknown error:", error);
      }
    } finally {
      setLoading(false);
    }

    // try {
    //   const res = await fetch("http://127.0.0.1:8000/api/v1/register/", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(form),
    //   });

    //   if (res.ok) {
    //     router.push("/login");
    //   } else {
    //     alert("Registration failed");
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
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
            type="email"
            name="email"
            placeholder="Email..."
            className={styles.input}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            value={form.email}
          />
          <small>{errors.email}</small>

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
              Register
            </button>
          )}
        </form>

        <p className={styles.text}>Already have an account? Login</p>
      </div>
    </div>
  );
}
