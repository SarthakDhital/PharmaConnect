import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      console.log("Token found:", token);

      if (!token) {
        console.log("No token found, redirecting to login...");
        setUser(null);
        setLoading(false);
        router.push("/login");
        return;
      }

      try {
        console.log("Fetching user data...");
        const res = await axios.get("https://pharmaconnect-backend.onrender.com/user/me", {
          headers: { "Authorization": `Bearer ${token}` },
          withCredentials: true,
        });

        console.log("Response data ofuser:", res);

        if (res.data.success) {
          console.log("User data fetched successfully:", res.data.data);
          setUser(res.data.data);
        } 
        // else {
        //   console.log("Failed to fetch user:", res.data.message);
        //   setUser(null);
        // }
      } catch (err) {
        console.error("Error fetching user:", err);

        if (err.response && err.response.status === 401) {
          console.log("Session expired, logging out...");
          localStorage.removeItem("token");
          router.push("/login");
        }

        setUser(null);
      } finally {
        console.log("Fetching user completed.");
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  console.log("user in last line of userauth", user)

  return { user, loading };
};

export default useAuth;