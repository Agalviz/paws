import $avatarOne from "../../assets/img_51367.png";
import $shoeOne from "../../assets/air.jpeg";
import $shoeTwo from "../../assets/dunk.jpeg";
import $shoeThree from "../../assets/taxi.jpeg";
import $shoeFour from "../../assets/Harden.png";

const DATA = [
  {
    id: Math.random().toString(8).substr(2, 9),
    avatar: $avatarOne,
    name: "Jhonathan Angus",
    handle: "johnzy916",
    location: "Miami, FL",
    image: $shoeOne,
    title: 'Nike Air More Uptempo "Bulls"',
    story:
      "The ‘Bulls’ aren’t technically a new drop, they are just coming back in men’s sizes. I must admit that I wasn’t a fan of the Uptempo releases until recently. Don’t get me wrong—I’m all for a bold sneaker, but I never liked the huge ‘AIR’ lettering engrained across the shoe. That said, these are slowly starting to win me over, and if I had to pick a pair to start my Uptempo collection, it would definitely be the ‘Bulls.’ Do you guys own a pair? It would be interesting to hear different perspectives.",
    url: "nike.com",
    comments: 7,
    retweets: 147,
    hearts: 87,
    messages: 4,
  },
  {
    id: Math.random().toString(8).substr(2, 9),
    avatar: $avatarOne,
    name: "Bobby Gates",
    handle: "BobGates",
    location: "Portland, OR",
    image: $shoeTwo,
    title: 'Nike Dunk Low WMNS "Green Glow"',
    story:
      "Here we go again. Trying to get Dunks is an interesting experience as of late. These have been rumored for a couple of months now, so I expect them to go sellout quickly as usual. Right now I’m a little over Dunks. Not because I don’t like them, but because I can’t get them. I never hit on drop day, and I’m not paying $400 resell, when the retail price was originally $100. I’m not. I’m happy for those that do get Ws though!",
    url: "nike.com",
    comments: 24,
    retweets: 364,
    hearts: "2k",
    messages: 6,
  },
  {
    id: Math.random().toString(8).substr(2, 9),
    avatar: $avatarOne,
    name: "Bert Stein",
    handle: "BertBoy",
    location: "Queens, NY",
    image: $shoeThree,
    title: `Nike Air Max "Taxi"`,
    story:
      "I'm thinking a white contrast would work best. Maybe white joggers with a springtime hoodie or a tank/crop. Or perhaps all-black would do (but it would have to be the right outfit). Either way, these are on my list as a must cop at some point..",
    url: "nike.com",
    comments: 876,
    retweets: "4k",
    hearts: 99,
    messages: 12,
  },
  {
    id: Math.random().toString(8).substr(2, 9),
    avatar: $avatarOne,
    name: "Stephen Jobs",
    handle: "stephJobs",
    location: "Boulder, CO",
    image: $shoeFour,
    title: "McDonald’s All-American Harden Vol. 5",
    story:
      "I don’t know about you guys, but I like the All-Americans! These have such a nostalgic vibe to them, and they remind me of the McDonald’s play area, and those toys that you get with Happy Meals. Childhood vibes aside, this is a unique sneaker with all of McDonald’s theme colors, and while they may not be for everyday wear, it’s a good collectors item. Actually you know what? These could go with some black joggers, or anything black really..",
    url: "nike.com",
    comments: 492,
    retweets: "22k",
    hearts: "4k",
    messages: 91,
  },
];

export default DATA;
