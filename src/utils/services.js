import axios from "axios";

export const getUsers = async () => {
  const url = "https://api.github.com/users";
  const token = "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";
  try {
    const usersResp = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return usersResp.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export const getUserFollowers = async (url) => {
  const token = "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";
  try {
    const usersResp = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return usersResp.data;
  } catch (error) {
    console.error("Error fetching users followers:", error);
    throw error;
  }
};

export const getUserFollowings = async (url) => {
  const token = "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";
  try {
    const usersResp = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return usersResp.data;
  } catch (error) {
    console.error("Error fetching users Followings:", error);
    throw error;
  }
};

export const getUserByUsername = async (url) => {
  const token = "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";
  try {
    const usersResp = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return usersResp.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};
