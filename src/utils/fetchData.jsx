// import React from "react";

// export const exerciseOptions = {
//   method: "GET",
//   headers: {
//     // "x-rapidapi-key": import.meta.env.VITE_RAPID_API_KEY,
//     "x-rapidapi-key": "6862a6fb7fmsh24317e10ce7ad67p165fb4jsnff2e9d1f06b7",
//     // "x-rapidapi-host": "exercisedb.p.rapidapi.com",
//   },
// };

// export const fetchData = async (url) => {
//   const response = await fetch(url);
//   const data = await response.json();

//   return data;
// };

// utils/fetchData.js
export const fetchData = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return await response.json();
};
