import axios from "axios";

// API URL'si (örneğin public/data.json dosyası)
const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Ürünleri getiren fonksiyon
export const fetchProducts = async () => {
  try {
    if (!API_URL) {
      throw new Error("API_URL is not defined");
    }
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Veriler alınırken bir hata oluştu:", error);
    throw error;
  }
};
