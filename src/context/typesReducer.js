const TypesReducer = (state, action) => {
    switch (action.type) {
      case "ADD_CAR_TYPE":
        return {
            // selectedTypes: state.selectedTypes.push(action.payload),
            selectedTypes: [...state.selectedTypes, action.payload]
        };
        case "REMOVE_CAR_TYPE":
          return {
            selectedTypes: state.selectedTypes.filter(
              (type) => type !== action.payload
            )

            // selectedTypes: [],

            // selectedTypes: {
              
            //   followings: state.user.followings.filter(
            //     (following) => following !== action.payload
            //   ),
            // },
          };
      case "RESET_TYPES":
        return {
            selectedTypes: [],
        };
    //   case "LOGIN_FAILURE":
    //     return {
    //       user: null,
    //       isFetching: false,
    //       error: true,
    //     };
    //   case "FOLLOW":
    //     return {
    //       ...state,
    //       user: {
    //         ...state.user,
    //         followings: [...state.user.followings, action.payload],
    //       },
    //     };
      default:
        return state;
    }
  };
  
  export default TypesReducer;

 