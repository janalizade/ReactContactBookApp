import {
  GET_POST,
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
} from "../actions/types";

const initialState = {
  posts: [
    {
      userId: 1,
      id: 1,
      title:
        "The Rings of Saturn",
      body:
      "This book blends beguiling descriptions\n of the places and people he encounters\n with meditations that range from the history of herring fishing,\n to colonialism in the Congo,\n to the reign of a Chinese empress"
     },
    {
      userId: 1,
      id: 2,
      title: "A Moveable Feast",
      body:
        "A Moveable Feast” \nhas got you covered with\n this celebration of 38 foodie tales\n from around the world,\n said Debbie Arcangeles,\n host of the podcast The Offbeat Life,\n which highlights the lives of location-independent professionals. ",
    },
    {
      userId: 1,
      id: 3,
      title: "The Art Of Travel",
      body:
        "Many travel-themed books play to our daydreams about travel,\n but de Botton takes a brutally honest and philosophical look at\n why we travel and brings to light truths\n that we don't want to see or believe,\n namely that the fantasies we have about a place can often be better than\n the reality we encounter once we arrive",
    },
    {
      userId: 1,
      id: 4,
      title: "Lands Of The Lost Borders",
      body:
        "This book was like no other travelogue I've ever\n read—a meditation on remote places very rarely written about, history and borders,”\n said travel enthusiast Elizabeth Sile, senior editor at Real Simple.\n “Harris perfectly captures what it feels like to want to explore—not to take the perfect Instagram or tick off the top sights,\n but to be exposed to wildness and discomfort.”",
    },
    {
      userId: 1,
      id: 5,
      title: "A Women Alone",
      body:
        "My initial issue with wanderlust was that \nI never had anyone to take trips with me.\n I spent years pushing adventures to the back burner due to my fear of traveling alone,” she said. “‘A Woman Alone’ is filled with relatable stories from solo female travelers that are real, transparent and uplifting. This book will give you the push you need to face your fears and see the world all by yourself.",
    },
    {
      userId: 1,
      id: 6,
      title: "The Adventure Of TinTin",
      body:
        "The Adventures of Tintin’ by Belgian cartoonist Hergé was a comic series\n that took me to Egypt, Congo, Tibet and even the moon before I turned 8 years old.\n They gave me such great memories and I highly recommended the series for all ages,”\n she said.",
    },
    {
      userId: 1,
      id: 7,
      title: "Blue HighWays A Jurney Into America",
      body:
        "Big cities draw the majority of tourists,\n but smaller towns have just as much to offer,\n according to author William Least Heat-Moon.\n His book “Blue Highways” inspired travel writer Chris Clemens,\n founder of Exploring Upstate, to focus on places around Upstate New York that you might not find on every map. ",
    },
    {
      userId: 2,
      id: 11,
      title: "Dark Star Safari: Overland from Cairo to Cape Town",
      body:
        "African safaris top many travelers’ bucket lists.\n But Paul Theroux’s book “Dark Star Safari” shows a deeper,\n more vibrant side of this fascinating continent,\n as he shares what happens on a road trip from Cairo to Cape Town, said Nicole LaBarge, who runs the adventure travel blog Travelgal Nicole. ",
    },
    
  ],
  post: null,
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_POST:
      console.log(payload);
      return {
        ...state,
        posts: [payload, ...state.posts],
      };
    case GET_POST:
      return {
        ...state,
        post: state.posts.find((postItem) => postItem.id == payload),
      };
    case UPDATE_POST:
      return {
        ...state,
        posts: state.posts.map((postItem) =>
          postItem.id == payload.id ? payload : postItem
        ),
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((postItem) => postItem.id != payload),
      };
    default:
      return state;
  }
};
