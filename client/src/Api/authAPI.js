import axios from "axios";

const baseURL = "http://10.106.24.163:8000";

const authApi = axios.create({
  baseURL,
  withCredentials: true,
});

export const login = async (phoneNumber, password) => {
  try {
    const response = await authApi.post("/login", { phoneNumber, password });

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

export const signup = async (formData) => {
  try {
    const response = await authApi.post("/signup", formData);

    if (response && response.data) {
      return response.data;
    } else {
      throw new Error("Invalid response from the server");
    }
  } catch (error) {
    console.error("Signup error:", error);
    throw (
      error.response?.data || "An error occurred during staff registration."
    );
  }
};

export default authApi;
