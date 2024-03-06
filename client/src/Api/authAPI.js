import axios from "axios";

const baseURL = "http://10.106.24.163:8000";

const authApi = axios.create({
  baseURL,
  withCredentials: true,
});

export const login = async (mobile, password) => {
  try {
    const response = await authApi.post("/login", { mobile, password });

    if (response && response.data) {
      return response.data;
    } else {
      throw new Error("Invalid response from the server");
    }
  } catch (error) {
    console.error("Login error:", error);
    throw error.response?.data || "An error occurred during login.";
  }
};

export default authApi;
