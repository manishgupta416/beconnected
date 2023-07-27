import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: 1,
    content: "👋🌟 Greetings, Everyone! Let's Connect and Engage! 🤝💬",
    mediaUrl: "",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "manishgupta",
    firstName: "Manish",
    lastName: "Gupta",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: 2,
    content: "👋🌸 How's Everyone Doing Today? Let's Check-In! 💬😊",
    mediaUrl: "",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "johndoe",
    firstName: "John",
    lastName: "Doe",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: 3,
    content: "Hey there, tech enthusiasts and curious minds! 🤩💡 ",
    mediaUrl: "",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "manishgupta",
    firstName: "Manish",
    lastName: "Gupta",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  // food
  {
    _id: 4,
    content:
      "Litti Choka - the pride of Bihar's culinary heritage. 😋👌 If you haven't tried this delightful dish yet, you're missing out! 🤤🔥",
    mediaUrl:
      "https://www.holidify.com/blog/wp-content/uploads/2015/09/Litti_chokha_dipped_in_Ghee.jpg",
    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "manishgupta",
    firstName: "Manish",
    lastName: "Gupta",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: 5,
    content:
      "Chandrakala - a timeless Indian dessert that fills hearts with joy and taste buds with delight. 😋👌 If you haven't savored this heavenly treat yet, you're in for a sugary surprise! 🤤🍬",
    mediaUrl:
      "https://www.holidify.com/blog/wp-content/uploads/2015/09/Chandrakala_sweet.jpg",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "oliviawalker",
    firstName: "Olivi",
    lastName: "Walker",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: 6,
    content:
      "Dal Pitha - a cherished delicacy from the heartland of India. 😋👌 If you haven't experienced this flavorful delight yet, you're in for a treat! 🤤🍲 ",
    mediaUrl:
      "https://www.holidify.com/blog/wp-content/uploads/2015/09/Dal-Pitha-closeup.jpg",
    likes: {
      likeCount: 8,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "manishgupta",
    firstName: "Manish",
    lastName: "Gupta",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: 7,
    content:
      "Tilkut - an age-old Indian delight that leaves a lasting impression on your taste buds. 😋👌 If you haven't indulged in this scrumptious treat yet, you're in for a sugary delight! 🤤 A perfect blend of nostalgia and sweet memories that warms the heart with every bite. 🙌🌟 ",
    mediaUrl:
      "https://www.holidify.com/images/cmsuploads/compressed/Tilkut__Sweet_savoury_made_from_jaggery_paste_and_sesame_seeds_20190304060607.jpg",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "johndoe",
    firstName: "John",
    lastName: "Doe",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: 8,
    content:
      "🍴 Embracing the flavors of the streets! 🚶🏻‍♂️✨.a delightful Indian street food that's a burst of flavors in every bite. 😋👌 If you haven't tried this lip-smacking dish yet, you're in for a treat! 🤤🍲",
    mediaUrl:
      "https://media.istockphoto.com/id/1438867572/photo/pav-bhaji-is-a-fast-food-dish-from-india-consisting-of-a-thick-vegetable-curry-served-with.jpg?s=612x612&w=0&k=20&c=vMD1YWTq7tf5iGtUAa4IqsfGY-QjDLW3ii0OdiZWHuc=",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "janesmith",
    firstName: "Jane",
    lastName: "Smith",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: 9,
    content:
      "Grab a slice and let's share this delightful cheesy goodness together! 🙌🍕",
    mediaUrl:
      "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
    likes: {
      likeCount: 4,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "manishgupta",
    firstName: "Manish",
    lastName: "Gupta",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  // nature
  {
    _id: 10,
    content:
      "🌲🏞️ Embracing Nature's Majesty at Yoho National Park! 🏔️🍁.Let's explore the scenic trails, marvel at the turquoise beauty of Emerald Lake, and stand in awe of the thundering Takakkaw Falls—Yoho is nature's gift waiting to be unwrapped! 🚶🌄",
    mediaUrl:
      "https://images.unsplash.com/photo-1585016495481-91613a3ab1bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJhbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
    likes: {
      likeCount: 4,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "williamanderson",
    firstName: "William",
    lastName: "Anderson",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: 11,
    content:
      "🌊 Exploring the Beauty of the Kentucky River! 🚣‍♀️🌄.The Kentucky River - a serene waterway flowing through the heart of the Bluegrass State. 🌿🌅 Its tranquil waters and scenic landscapes weave tales of history and adventure, beckoning us to embark on an unforgettable journey!",
    mediaUrl:
      "https://images.unsplash.com/photo-1546587348-d12660c30c50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJhbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
    likes: {
      likeCount: 4,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "danielthompson",
    firstName: "Daniel",
    lastName: "Thompson",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: 12,
    content:
      "🌅🌇 Chasing the Golden Hour: Capturing the Magic of Sunset! 📸🌄. Let's pause for a moment, soak in the magic of this natural spectacle, and cherish the memories it etches in our hearts. 🙏🧡",
    mediaUrl:
      "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fG5hdHVyYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    likes: {
      likeCount: 4,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "oliviawalker",
    firstName: "Olivi",
    lastName: "Walker",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  // animal
  {
    _id: 13,
    content:
      "🐾🏠 Rescued with Love: Meet Our Beloved Rescue Dog! 🐶❤️. Let's raise a paw to all the rescue dogs out there and the incredible transformation they undergo when given a chance to be loved and cherished. 🐕🏠",
    mediaUrl:
      "https://plus.unsplash.com/premium_photo-1665952050051-8fc03087677a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGN1dGUlMjBhbmltYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    likes: {
      likeCount: 4,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "manishgupta",
    firstName: "Manish",
    lastName: "Gupta",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: 14,
    content:
      "🐹🌟 Meet the Adorable Hamster! 🐾🏠. Let's share the love for these tiny furry friends and appreciate the joy they bring into our homes. 🏠🌈",
    mediaUrl:
      "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y3V0ZSUyMGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
    likes: {
      likeCount: 4,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "williamanderson",
    firstName: "William",
    lastName: "Anderson",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: 15,
    content:
      "Get ready to be charmed by the cutest creature on Earth—the adorable panda! 🐼💖 With its iconic black and white coat, endearing eyes, and playful nature, the panda is simply irresistible! 😍🌟",
    mediaUrl:
      "https://media.istockphoto.com/id/1221133425/photo/giant-panda-bear-eating-bamboo.jpg?s=612x612&w=0&k=20&c=0stdf5jkOYOvbe4wmfLHLmG02cip-gDAOipSmdW-fg0=",
    likes: {
      likeCount: 4,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "manishgupta",
    firstName: "Manish",
    lastName: "Gupta",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  // bird
  {
    _id: 16,
    content:
      "Fun Fact: Did you know that cygnets is the name for baby swans? These little ones will grow into beautiful adult swans just like their parents.",
    mediaUrl:
      "https://images.unsplash.com/photo-1522926970010-0f971d7220ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGN1dGUlMjBiaXJkfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    likes: {
      likeCount: 4,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "davidwilson",
    firstName: "David",
    lastName: "Wilson",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: 17,
    content:
      "Fun Fact: Did you know that cygnets is the name for baby swans? These little ones will grow into beautiful adult swans just like their parents.",
    mediaUrl:
      "https://images.unsplash.com/photo-1522926970010-0f971d7220ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGN1dGUlMjBiaXJkfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    likes: {
      likeCount: 4,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "emilydavis",
    firstName: "Emily",
    lastName: "Davis",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: 18,
    content:
      "🦜🌈 Vibrant Feathers, Endless Charms: Meet the Majestic Parrot!💡 Fun Fact: Parrots are highly intelligent birds and are known for their ability to learn words and phrases.",
    mediaUrl:
      "https://images.unsplash.com/photo-1583840024136-64e17a1f9c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGN1dGUlMjBiaXJkfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    likes: {
      likeCount: 4,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "manishgupta",
    firstName: "Manish",
    lastName: "Gupta",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: 21,
    content: "Do you know what is the name of this bird?",
    mediaUrl:
      "https://images.unsplash.com/photo-1632103825146-8aff3b18fe2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEzfHxjdXRlJTIwYmlyZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
    likes: {
      likeCount: 4,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "sophiarodriguez",
    firstName: "Sophia",
    lastName: "Rodriguez",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  //js react
  {
    _id: 19,
    content:
      "🚀✨ Exciting JavaScript Adventures Await! 💻🌈. Let's embark on this coding journey together! ",
    mediaUrl:
      "https://www.freecodecamp.org/news/content/images/2023/04/JavaScript-Blog-Cover.png",
    likes: {
      likeCount: 4,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "davidwilson",
    firstName: "David",
    lastName: "Wilson",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: 20,
    content:
      "🔥🚀 Unleash the Power of React.js! ⚛️💻.🌈 Embrace the React.js magic and join the vibrant community of developers crafting innovative web applications. Share your React.js projects, tips, and favorite libraries below, and let's learn and grow together! 🚀💬",
    mediaUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE-HX6p9AzHLCaYoCUn8o5JxW39dydYdn8hg&usqp=CAU",
    likes: {
      likeCount: 4,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "sophiarodriguez",
    firstName: "Sophia",
    lastName: "Rodriguez",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
//sophiarodriguez oliviawalker
