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
  });
  
