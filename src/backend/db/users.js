import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: 1,
    firstName: "Manish",
    lastName: "Gupta",
    username: "manishgupta",
    password: "manishgupta123",
    bio: "Passionate software engineer with a love for coding and problem-solving.",
    bookmarks: [],
    followers: [],
    following: [],
    avatarUrl:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
    website: "https://manishgupta.in/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: 2,
    firstName: "Olivia",
    lastName: "Walker",
    username: "oliviawalker",
    password: "oliviawalker456",
    bio: "Foodie and culinary enthusiast",
    bookmarks: [],
    followers: [],
    following: [],
    avatarUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
    website: "https://oliviawalkerfoodblog.com/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: 3,
    firstName: "William",
    lastName: "Anderson",
    username: "williamanderson",
    password: "williamanderson123",
    bio: "Sports enthusiast and football fan",
    bookmarks: [],
    followers: [],
    following: [],
    avatarUrl:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    website: "https://williamandersonsports.com/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: 4,
    firstName: "Sophia",
    lastName: "Rodriguez",
    username: "sophiarodriguez",
    password: "sophiarodriguez234",
    bio: "Music lover and aspiring musician",
    bookmarks: [],
    followers: [],
    following: [],
    avatarUrl:
      "https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    website: "https://sophiamusic.com/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: 5,
    firstName: "Daniel",
    lastName: "Thompson",
    username: "danielthompson",
    password: "danielthompson789",
    bio: "Tech enthusiast and software developer",
    bookmarks: [],
    followers: [],
    following: [],
    avatarUrl:
      "https://images.unsplash.com/photo-1544168190-79c17527004f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHVzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    website: "https://danielthompson.dev/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: 6,
    firstName: "Emily",
    lastName: "Davis",
    username: "emilydavis",
    password: "emilydavis987",
    bio: "Passionate about art and creativity",
    bookmarks: [],
    followers: [],
    following: [],
    avatarUrl:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHVzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    website: "https://emilydavisart.com/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: 7,
    firstName: "David",
    lastName: "Wilson",
    username: "davidwilson",
    password: "davidwilson654",
    bio: "Fitness enthusiast and personal trainer",
    bookmarks: [],
    followers: [],
    following: [],
    avatarUrl:
      "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHVzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    website: "https://davidwilsonfitness.com/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: 8,
    firstName: "John",
    lastName: "Doe",
    username: "johndoe",
    password: "johndoe123",
    bio: "Hello World",
    bookmarks: [],
    followers: [],
    following: [],
    avatarUrl:
      "https://images.unsplash.com/photo-1621592484082-2d05b1290d7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHVzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    website: "https://google.com/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: 9,
    firstName: "Jane",
    lastName: "Smith",
    username: "janesmith",
    password: "janesmith456",
    bio: "Coding enthusiast",
    bookmarks: [],
    followers: [],
    following: [],
    avatarUrl:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHVzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    website: "https://example.com/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
