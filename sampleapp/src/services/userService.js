const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

export const fetchUsers = async () => {
  const res = await fetch(`${API_URL}/users`);
  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
};