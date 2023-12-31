import axios from "axios";

//User

export const getAllUsers = async (dataDispatch) => {
  try {
    const response = await axios.get("/api/users");
    if (response.status === 200) {
      console.log(response.data.users);
      dataDispatch({ type: "getAllUsers", payload: response.data.users });
    }
  } catch (error) {
    console.error(error);
  }
};

export const getUser = async (_id) => {
  try {
    const response = await axios.get(`/api/users/${_id}`);
    if (response.status === 200) {
      console.log(response.data.user);
    }
  } catch (error) {
    console.error(error);
  }
};

export const editUserHandler = async (
  currentUserDetails,
  loginToken,
  dataDispatch
) => {
  try {
    const response = await axios.post(
      "/api/users/edit",
      { userData: { ...currentUserDetails } },
      {
        headers: {
          authorization: loginToken,
        },
      }
    );
    if (response.status === 200 || response.status === 201) {
      console.log(response);
      dataDispatch({ type: "updatedUserDetails", payload: response.data.user });
    }
  } catch (error) {
    console.error(error);
  }
};

//Post

export const getAllPosts = async (dataDispatch) => {
  try {
    const response = await axios.get("/api/posts");
    if (response.status === 200) {
      console.log(response.data.posts);
      dataDispatch({ type: "getAllPosts", payload: response.data.posts });
    }
  } catch (error) {
    console.error(error);
  }
};

export const getPost = async (postId) => {
  try {
    const response = await axios.get(`/api/posts/${postId}`);
    if (response.status === 200) {
      console.log(response.data.post);
    }
  } catch (error) {
    console.error(error);
  }
};

export const getPostByUserName = async (username) => {
  try {
    const response = await axios.get(`/api/posts/user/${username}`);
    if (response.status === 200) {
      console.log(response.data.posts);
    }
  } catch (error) {
    console.error(error);
  }
};

export const createNewPostHandler = async (post, loginToken, dataDispatch) => {
  try {
    const response = await axios.post(
      "/api/posts",
      { postData: { ...post } },
      {
        headers: {
          authorization: loginToken,
        },
      }
    );
    if (response.status === 200 || response.status === 201) {
      console.log(response);
      dataDispatch({ type: "addNewPost", payload: response.data.posts });
    }
  } catch (error) {
    console.error(error);
  }
};

export const deletePostHandler = async (postId, loginToken, dataDispatch) => {
  try {
    const response = await axios.delete(
      `/api/posts/${postId}`,

      {
        headers: {
          authorization: loginToken,
        },
      }
    );
    if (response.status === 200 || response.status === 201) {
      console.log(response);
      dataDispatch({ type: "deletePost", payload: response.data.posts });
    }
  } catch (error) {
    console.error(error);
  }
};

export const editPostHandler = async (
  postId,
  postData,
  loginToken,
  dataDispatch
) => {
  try {
    const response = await axios.post(
      `/api/posts/edit/${postId}`,
      { postData: { ...postData } },

      {
        headers: {
          authorization: loginToken,
        },
      }
    );
    if (response.status === 200 || response.status === 201) {
      console.log(response);
      dataDispatch({ type: "updatedPosts", payload: response.data.posts });
    }
  } catch (error) {
    console.error(error);
  }
};

// Like/Dislike

export const likePostHandler = async (postId, loginToken, dataDispatch) => {
  try {
    const response = await axios.post(
      `/api/posts/like/${postId}`,
      {},
      {
        headers: {
          authorization: loginToken,
        },
      }
    );
    if (response.status === 200 || response.status === 201) {
      console.log(response.data.posts, "lik res");
      dataDispatch({ type: "getAllPosts", payload: response.data.posts });
    }
  } catch (error) {
    console.error(error);
  }
};

export const disLikePostHandler = async (postId, loginToken, dataDispatch) => {
  try {
    const response = await axios.post(
      `/api/posts/dislike/${postId}`,
      {},
      {
        headers: {
          authorization: loginToken,
        },
      }
    );
    if (response.status === 200 || response.status === 201) {
      console.log(response.data.posts, "dislik res");
      dataDispatch({ type: "getAllPosts", payload: response.data.posts });
    }
  } catch (error) {
    console.error(error);
  }
};

// Bookmark

export const getBookMarkPost = async (loginToken) => {
  try {
    const response = await axios.get(`/api/users/bookmark`, {
      headers: {
        authorization: loginToken,
      },
    });
    if (response.status === 200) {
      console.log(response.data.bookmarks);
    }
  } catch (error) {
    console.error(error);
  }
};

export const bookMarkPostHandler = async (
  postId,
  loginToken,
  dataDispatch,
  loggedInuser
) => {
  try {
    const response = await axios.post(
      `/api/users/bookmark/${postId}`,
      {},
      {
        headers: {
          authorization: loginToken,
        },
      }
    );
    if (response.status === 200) {
      console.log(response.data.bookmarks);
      console.log(loggedInuser, "from serv");
      dataDispatch({
        type: "addPostToBookmark",
        payload: { bookmarks: response.data.bookmarks, user: loggedInuser },
      });
    }
  } catch (error) {
    console.error(error);
  }
};
// TODO:fix remove bookmark

export const removeBookMarkPostHandler = async (
  postId,
  loginToken,
  dataDispatch,
  loggedInuser
) => {
  try {
    const response = await axios.post(
      `/api/users/remove-bookmark/${postId}`,
      {},
      {
        headers: {
          authorization: loginToken,
        },
      }
    );
    if (response.status === 200 || response.status === 201) {
      console.log(response);
      dataDispatch({
        type: "addPostToBookmark",
        payload: { bookmarks: response.data.bookmarks, user: loggedInuser },
      });
    }
  } catch (error) {
    console.error(error);
  }
};

// follow/unfollow

export const followUserHandler = async (
  followUserId,
  loginToken,
  dataDispatch
) => {
  try {
    const response = await axios.post(
      `/api/users/follow/${followUserId}`,
      {},
      {
        headers: {
          authorization: loginToken,
        },
      }
    );
    if (response.status === 200 || response.status === 201) {
      console.log(response, "res follow");
      // {_id: 1, firstName: 'Manish', lastName: 'Gupta', username: 'manishgupta', password: 'manishgupta123', …}avatarUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"bio: "Passionate software engineer with a love for coding and problem-solving."bookmarks: []createdAt: "2023-07-27T10:39:13+05:30"firstName: "Manish"followers: []following: (2) [{…}, {…}]id: "1"lastName: "Gupta"password: "manishgupta123"updatedAt: "2023-07-27T10:40:27+05:30"username: "manishgupta"website: "https://manishgupta.in/"_id: 1[[Prototype]]: Object 'res'
      dataDispatch({
        type: "followSuggestedUser",
        payload: response.data.user,
      });
      dataDispatch({
        type: "addInFollower",
        payload: response.data.followUser,
      });
    }
  } catch (error) {
    console.error(error);
  }
};

export const unfollowUserHandler = async (
  followUserId,
  loginToken,
  dataDispatch
) => {
  try {
    const response = await axios.post(
      `/api/users/unfollow/${followUserId}`,
      {},
      {
        headers: {
          authorization: loginToken,
        },
      }
    );
    if (response.status === 200 || response.status === 201) {
      console.log(response, "unfollow");
      dataDispatch({
        type: "unfollowUser",
        payload: response.data.user,
      });
      dataDispatch({
        type: "removeFollower",
        payload: response.data.followUser,
      });
    }
  } catch (error) {
    console.error(error);
  }
};

// add comments , delete comments

export const addCommentHandler = async (
  postId,
  commentData,
  loginToken,
  dataDispatch
) => {
  try {
    const response = await axios.post(
      `/api/comments/add/${postId}`,
      { commentData },
      {
        headers: {
          authorization: loginToken,
        },
      }
    );
    if (response.status === 200 || response.status === 201) {
      console.log(response);
      dataDispatch({ type: "addComment", payload: response.data.posts });
    }
  } catch (error) {
    console.error(error);
  }
};
export const deleteCommentHandler = async (
  postId,
  commentId,
  commentData,
  loginToken,
  dataDispatch
) => {
  try {
    const response = await axios.delete(
      `/api/comments/delete/${postId}/${commentId}`,
      {
        headers: {
          authorization: loginToken,
        },
      }
    );
    if (response.status === 200 || response.status === 201) {
      console.log(response);
      dataDispatch({ type: "deleteComment", payload: response.data.posts });
    }
  } catch (error) {
    console.error(error);
  }
};

export const editCommentHandler = async (
  postId,
  commentId,
  commentData,
  loginToken,
  dataDispatch
) => {
  try {
    const response = await axios.post(
      `/api/comments/edit/${postId}/${commentId}`,
      { commentData },
      {
        headers: {
          authorization: loginToken,
        },
      }
    );
    if (response.status === 200 || response.status === 201) {
      console.log(response);
      dataDispatch({ type: "updatedComments", payload: response.data.posts });
    }
  } catch (error) {
    console.error(error);
  }
};
