import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";
import ExerciseCard from "./ExerciseCard.jsx";

import { fetchData } from "../utils/fetchData.jsx";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 8;

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;

  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (e, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchExercisesData = async () => {
      const data = await fetchData("/exercises.json");

      if (bodyPart === "all") {
        setExercises(data);
      } else {
        const filteredExercises = data.filter(
          (exercise) =>
            exercise.bodyPart.toLowerCase() === bodyPart.toLowerCase()
        );
        setExercises(filteredExercises);
      }
    };

    fetchExercisesData();
  }, [bodyPart, setExercises]);

  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h3" mb="46px">
        Showing Results - Click on each exercise to get correct form video
        links.
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "120px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > 8 && (
          <Pagination
            color="standard"
            shape="circular"
            defaultPage={exercisesPerPage}
            count={Math.ceil(exercises.length / 8)}
            page={currentPage}
            onChange={paginate}
            size="large"
          ></Pagination>
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
