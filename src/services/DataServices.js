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
    if (response.status === 200) {
      console.log(response.data.user, "res");
      // {_id: 1, firstName: 'Manish', lastName: 'Gupta', username: 'manishgupta', password: 'manishgupta123', …}avatarUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"bio: "Passionate software engineer with a love for coding and problem-solving."bookmarks: []createdAt: "2023-07-27T10:39:13+05:30"firstName: "Manish"followers: []following: (2) [{…}, {…}]id: "1"lastName: "Gupta"password: "manishgupta123"updatedAt: "2023-07-27T10:40:27+05:30"username: "manishgupta"website: "https://manishgupta.in/"_id: 1[[Prototype]]: Object 'res'
      dataDispatch({
        type: "followSuggestedUser",
        payload: response.data.user,
      });
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
