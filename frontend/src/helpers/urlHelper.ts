import axios from 'axios';

const baseUrl = "http://127.0.0.1:8000";

export const shortenUrl = async (longUrl: string): Promise<string> => {
  try {
    const response = await axios.post(`${baseUrl}/shorten/`, {
      long_url: longUrl,
    });
    return response.data.short_url as string;
  } catch (error) {
    console.error("Error:", error);
    return error as string;
  }
};

export const getLongUrl = async (shortCode: string): Promise<string> => {
  try {
    const response = await axios.get(`${baseUrl}/${shortCode}`);
    console.log(response.data.original_url);
    return response.data.original_url;
  } catch (error) {
    console.error("Error fetching URL:", error);
    return "";
  }
};