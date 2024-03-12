// import { createSlice } from "@reduxjs/toolkit";
// // import Dashboard from "../../../Pages/DashboardPage";

// export const SliceForm = createSlice({
//   name: "user",
//   initialState: {
//     isAuthenticated: false,
//     currentUser: null,
//     users: [],
//     error: null,
//   },
//   reducers: {
//     register: (state, action) => {
//       const { username, password } = action.payload;
//       console.log(username, password);
//       const existingUser = state.users.find(
//         (user) => user.username === username
//       );
//       console.log(existingUser);
//       if (username !== "") {
//         if (!existingUser) {
//           state.users.push({ username, password });
//         } else {
//           // alert("User already exists");
//         }
//       }
//     },
//   },
// });

// export const { register } = SliceForm.actions;

// export default SliceForm.reducer;
