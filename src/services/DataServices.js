import axios from "axios";

//User

export const getAllUsers = async () => {
  try {
    const response = await axios.get("/api/users");
    if (response.status === 200) {
      console.log(response.data.users);
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

export const editUserHandler = async (currentUserDetails, loginToken) => {
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
    if (response.status === 200) {
      console.log(response);
    }
  } catch (error) {
    console.error(error);
  }
};

//Post

export const getAllPosts = async (currentUserDetails, loginToken) => {
  try {
    const response = await axios.get("/api/posts");
    if (response.status === 200) {
      console.log(response.data.posts);
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

export const createNewPostHandler = async (post, loginToken) => {
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
    if (response.status === 200) {
      console.log(response);
    }
  } catch (error) {
    console.error(error);
  }
};

export const deletePostHandler = async (postId, loginToken) => {
  try {
    const response = await axios.delete(
      `/api/posts/${postId}`,

      {
        headers: {
          authorization: loginToken,
        },
      }
    );
    if (response.status === 200) {
      console.log(response);
    }
  } catch (error) {
    console.error(error);
  }
};

export const editPostHandler = async (postId, postData, loginToken) => {
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
    if (response.status === 200) {
      console.log(response);
    }
  } catch (error) {
    console.error(error);
  }
};

// Like/Dislike

export const likePostHandler = async (postId, loginToken) => {
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
    if (response.status === 200) {
      console.log(response);
    }
  } catch (error) {
    console.error(error);
  }
};

export const disLikePostHandler = async (postId, loginToken) => {
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
    if (response.status === 200) {
      console.log(response);
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

export const bookMarkPostHandler = async (postId, loginToken) => {
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
    }
  } catch (error) {
    console.error(error);
  }
};
// TODO:fix remove bookmark

export const removeBookMarkPostHandler = async (postId, loginToken) => {
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
    if (response.status === 200) {
      console.log(response);
    }
  } catch (error) {
    console.error(error);
  }
};

// follow/unfollow

export const followUserHandler = async (followUserId, loginToken) => {
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
    if (response.status === 200) {
      console.log(response);
    }
  } catch (error) {
    console.error(error);
  }
};

export const unfollowUserHandler = async (followUserId, loginToken) => {
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
    if (response.status === 200) {
      console.log(response);
    }
  } catch (error) {
    console.error(error);
  }
};

//for testing json
// "userData": {
//     "_id": "9",
//     "firstName": "Jane",
//     "lastName": "Smith",
//     "username": "janesmith",
//     "password": "janesmith456",
//     "bio": "Coding enthusiast",
//     "bookmarks": "[]",
//     "followers": "[]",
//     "following": "[]",
//     "website": "https://example.com/"
//   }

//username cannot be changed
// { "userData": {
//     "_id": "1",
//     "firstName": "Manish",
//     "lastName": "Smithcs",
//     "username": "manish@gmail.com",
//     "password": "manishgupta",
//     "bio": "Coding enthusiast",
//     "bookmarks": "[]",
//     "followers": "[]",
//     "following": "[]",
//     "website": "https://example.com/"
//   }
// }

// {"userData":{"_id":"1","firstName":"mahak","lastName":"gupta","username":"manish@gmail.com","password":"manishguptass","bio":"Coding enthusiast","bookmarks":"[]","followers":"[]","following":"[]","website":"https://example.com/"}}

// {"postData":{
//     "_id": "2",
//     "content": "priya",

//     "username": "priya"
//   }}
//username is taken as current user loggedIn
// {you can delete only your post cannot delete other username person post}"
// like other user post by id
// one use can like only once
// can not decremnt less than zero disllie handler karta hai

//bookmark ham kisi bhi user ke post ko kar skte hai

//  // responsefollow unfollow
// :
// "{\"errors\":[\"You cannot follow yourself\"]}"
// \"User Already following\"]}"
