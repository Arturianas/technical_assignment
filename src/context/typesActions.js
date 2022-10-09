export const addCarType = (carType) => ({
    type: "ADD_CAR_TYPE",
    payload: carType,
  });

  export const removeCarType = (carType) => ({
    type: "REMOVE_CAR_TYPE",
    payload: carType,
  });
  
  export const resetTypes = () => ({
    type: "RESET_TYPES",
    // payload: user,
  });
  
//   export const LoginFailure = () => ({
//     type: "LOGIN_FAILURE",
//   });
  
//   export const Follow = (userId) => ({
//     type: "FOLLOW",
//     payload: userId,
//   });
  
//   export const Unfollow = (userId) => ({
//     type: "UNFOLLOW",
//     payload: userId,
//   });