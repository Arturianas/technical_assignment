const TypesReducer = (state, action) => {
    switch (action.type) {
      case "ADD_CAR_TYPE":
        return {
            selectedTypes: [...state.selectedTypes, action.payload]
        };
        case "REMOVE_CAR_TYPE":
          return {
            selectedTypes: state.selectedTypes.filter(
              (type) => type !== action.payload
            )
          };
      case "RESET_TYPES":
        return {
            selectedTypes: [],
        };
      default:
        return state;
    }
  };
  
  export default TypesReducer;

 