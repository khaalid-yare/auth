// src/utils/auth.js

// Function to check if the user is logged in
export const isLoggedIn = () => JSON.parse(localStorage.getItem("isLoggedIn"));

// Function to log in the user
// export const loginUser = (username) => {
//   localStorage.setItem("isLoggedIn", "true");   i don't these i just use inthat place ok
//   localStorage.setItem("username", username);
// };

// Function to log out the user
export const logoutUser = () => {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("username");
};
