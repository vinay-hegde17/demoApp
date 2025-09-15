const API_URL = process.env.REACT_APP_API_URL;
console.log("API_URL:", API_URL);

export const fetchUsers = async () => {
  try {
    const res = await fetch(`${API_URL}/users`);
    console.log("Response:", res);

    if (!res.ok) {
      throw new Error(`Server responded with status ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching users:", error.message);
    throw error;
  }
};