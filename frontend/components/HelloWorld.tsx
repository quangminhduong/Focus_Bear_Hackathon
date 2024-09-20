import { useEffect, useState } from "react";
import { getHelloWorldMessage } from "../api";
import { Text } from "react-native"; // Import Text and View

const HelloWorld = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await getHelloWorldMessage();
        setMessage(response.message); // Use message directly
      } catch (error) {
        console.error('Error fetching message:', error);
      }
    };

    fetchMessage();
  }, []);

  return (
    <Text>{message}</Text>
  );
};

export default HelloWorld;
