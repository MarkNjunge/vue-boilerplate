// const API_URL: string = (process.env.VUE_APP_API_URL as string) || window.location.origin;
const API_URL = import.meta.env.VITE_API_URL || "https://jsonplaceholder.typicode.com";

export const config = {
  apiUrl: API_URL,
};
