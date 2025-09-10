import axios from "axios";

const BASE_URL = "https://api.github.com/search/users?q";
const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

export const fetchUserData = async ({ username, location, minRepos, page = 1 }) => {
  try {
    let query = `${username}`;
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>${minRepos}`;

    const response = await axios.get(`${BASE_URL}?q=${query}&page=${page}&per_page=10`, {
      headers: {
        Authorization: `token ${API_KEY}`,
      },
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Something went wrong");
  }
};
