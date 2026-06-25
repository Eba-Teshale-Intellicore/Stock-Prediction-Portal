"use client";

import { useEffect } from "react";
import axios from "axios";
import styles from "../main.module.scss";

const Dashboard = () => {
  useEffect(() => {
    const fetchProtectedData = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");

        console.log("TOKEN:", accessToken);

        const res = await axios.get(
          "http://127.0.0.1:8000/api/v1/protected-view",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          },
        );

        console.log("Success:", res.data);
      } catch (error) {
        console.log("ERROR RESPONSE:", error.response?.data);
        console.log("STATUS:", error.response?.status);
      }
    };

    fetchProtectedData();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div>Dashboard</div>
      </div>
    </div>
  );
};

export default Dashboard;
