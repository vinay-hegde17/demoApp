const API_BASE_URL = 'http://localhost:3000';

export const fetchUsers = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/users`);
    console.log(response);
    
    if (!response.ok) throw new Error('Failed to fetch users');
    return await response.json();
  } catch (error) {
    console.error('Error in fetchUsers:', error);
    return [];
  }
};