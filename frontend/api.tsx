import axios from "axios";

const api = axios.create({
  baseURL: "http://10.0.2.2:3000", // Correct for Android Emulator
});

export const getHelloWorldMessage = async () => {
  try {
    const response = await api.get(`/api/hello`);
    return response.data; // Return data directly
  } catch (error) {
    console.error('Error in API call:', error); // Log errors for debugging
    throw error;
  }
};
