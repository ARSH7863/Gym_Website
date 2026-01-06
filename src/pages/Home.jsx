import { Box } from "@mui/material";
import React, { useState } from "react";
import HeroBanner from "../components/HeroBanner.jsx";
import SearchExercises from "../components/SearchExercises.jsx";
import Exercises from "../components/Exercises.jsx";

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);
  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
      />
    </Box>
  );
};

export default Home;
