// export const translations = {
//   en: {
//     title: "Hello World",
//     posts: "Posts",
//     toggle: "Change Language",
//   },

//   am: {
//     title: "ሰላም ዓለም",
//     posts: "ፖስቶ",
//     toggle: "ቋንቋ ቀይ",
//   },
// };
export const translations = {
  en: {
    title: "Hello World",
    posts: "Posts",
    toggle: "Change Language",
  },

  am: {
    title: "ሰላም ዓለም",
    posts: "ፖስቶ",
    toggle: "ቋንቋ ቀይ",
  },
} as const;

export type Lang = keyof typeof translations;
