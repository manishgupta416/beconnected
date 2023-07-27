export const initialState = {
  posts: [],
  users: [],
};

export const DataReducer = (state, action) => {
  switch (action.type) {
    case "getAllPosts":
      return { ...state, posts: [...action.payload] };
    case "getAllUsers":
      return { ...state, users: [...action.payload] };
    case "followSuggestedUser":
      return {
        ...state,
        users: state.users.map((user) =>
          user.username === action.payload?.username
            ? { ...user, following: action.payload?.following }
            : user
        ),
      };
    default:
      return { ...state };
  }
};
