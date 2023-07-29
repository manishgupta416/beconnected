export const initialState = {
  posts: [],
  users: [],
  postId: null,
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

    case "addPostToBookmark":
      console.log(action.payload.user.username, "added in Book");
      return {
        ...state,
        users: state.users.map((user) =>
          user.username === action.payload.user.username
            ? { ...user, bookmarks: action.payload.bookmarks }
            : user
        ),
      };
    // case "removeFromBookmark":
    //   console.log(action.payload.user.username, "added in Book");
    //   return {
    //     ...state,
    //     users: state.users.map((user) =>
    //       user.username === action.payload.user.username
    //         ? {
    //             ...user,
    //             bookmarks: state.bookmarks.filter(
    //               (bp) => action.payload.postId !== bp
    //             ),
    //           }
    //         : user
    //     ),
    //   };
    case "deletePost":
      return { ...state, posts: [...action.payload] };

    case "addNewPost":
      return { ...state, posts: [...action.payload] };
    case "editPost":
      return { ...state, postId: action.payload };
    case "updatedPosts":
      return { ...state, posts: action.payload };
    case "updatedUserDetails":
      return {
        ...state,
        users: state.users.map((user) =>
          user.username === action.payload.username
            ? { ...user, ...action.payload }
            : user
        ),
      };
    case "addComment":
      return { ...state, posts: [...action.payload] };
    case "deleteComment":
      return { ...state, posts: [...action.payload] };
    default:
      return { ...state };
  }
};
