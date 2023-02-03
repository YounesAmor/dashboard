import work from "../assets/images/icon-work.svg";
import play from "../assets/images/icon-play.svg";
import exercise from "../assets/images/icon-exercise.svg";
import selfCare from "../assets/images/icon-self-care.svg";
import social from "../assets/images/icon-social.svg";
import study from "../assets/images/icon-study.svg";
// import ellipsis from "../assets/images/icon-work.svg";
const data = [
  {
    title: "Work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
    svg: work,
    background: "hsl(15, 100%, 70%)",
  },
  {
    title: "Play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
    svg: play,
    background: "hsl(195, 74%, 62%)",
  },
  {
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
    svg: study,
    background: "hsl(348, 100%, 68%)",
  },
  {
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
    svg: exercise,
    background: "hsl(145, 58%, 55%)",
  },
  {
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
    svg: social,
    background: "hsl(264, 64%, 52%)",
  },
  {
    title: "Self Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
    svg: selfCare,
    background: "hsl(43, 84%, 65%)",
  },
];
export default data;
