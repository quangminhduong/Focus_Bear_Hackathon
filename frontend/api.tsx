import axios from "axios";

const api = axios.create({
  baseURL: "http://10.0.2.2:3000", // Correct for Android Emulator
});

export const getUser = async () => {
  try {
    const response = await api.post(`/user`);
    return response.data; // Return data directly
  } catch (error) {
    console.error('Error in API call:', error); // Log errors for debugging
    throw error;
  }
};

export const logInUser = async () => {
  try {
    const response = await api.post(`/auth/login`);
    return response.data; // Return data directly
  } catch (error) {
    console.error('Error in API call:', error); // Log errors for debugging
    throw error;
  }
};
