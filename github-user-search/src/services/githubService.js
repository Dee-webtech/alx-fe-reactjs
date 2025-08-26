import axios from "axios";

const BASE_URL = "https://api.github.com/users";

// Basic search by username (checker requires this)
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
};

// Advanced search by username + location + min repos
export const searchUsers = async ({ username, location, minRepos }) => {
  let query = "";
  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos}`;

  try {
    const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
    return response.data.items; // returns array of users
  } catch (error) {
    console.error("Error performing advanced search:", error);
    return [];
  }
};
