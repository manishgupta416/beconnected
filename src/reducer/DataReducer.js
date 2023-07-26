export const initialState = {
  posts: [],
  users: [],
};

export const DataReducer = (state, action) => {
  switch (action.type) {
    case "getAllPosts":
      console.log("s");
      return { ...state, posts: [...action.payload] };
    case "getAllUsers":
      console.log(action.payload);
      return { ...state, users: [...action.payload] };

    default:
      return { ...state };
  }
};
