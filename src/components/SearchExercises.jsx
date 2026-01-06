import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { fetchData } from "../utils/fetchData";
import HorizontalScrollBar from "./HorizontalScrollBar.jsx";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  // 🔹 Load body parts from local JSON
  useEffect(() => {
    const loadBodyParts = async () => {
      const data = await fetchData("/exercises.json");
      const parts = [...new Set(data.map((ex) => ex.bodyPart))];
      setBodyParts(["all", ...parts]);
    };

    loadBodyParts();
  }, []);

  // 🔹 Search logic
  const handleSearch = async () => {
    if (!search.trim()) return;

    const data = await fetchData("/exercises.json");

    const searchedExercises = data.filter(
      (exercise) =>
        exercise.name.toLowerCase().includes(search) ||
        exercise.target.toLowerCase().includes(search) ||
        exercise.bodyPart.toLowerCase().includes(search)
    );

    setExercises(searchedExercises);
    setSearch("");
  };

  // 🔹 Enter key support
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises You Should Know
      </Typography>

      {/* 🔥 Search Input + Button */}
      <Box width="100%" mb="72px">
        <Stack
          direction={{ lg: "row", xs: "column" }}
          spacing={2}
          alignItems="center"
          justifyContent="center"
        >
          <TextField
            fullWidth
            autoFocus
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            onKeyDown={handleKeyDown}
            placeholder="Search exercises (e.g. deadlift)"
            type="search"
            inputProps={{
              inputMode: "search",
              enterKeyHint: "search",
            }}
            sx={{
              maxWidth: { lg: "800px" },
              backgroundColor: "#fff",
              borderRadius: "40px",
              input: { fontWeight: 600 },
            }}
          />

          <Button
            disabled={!search.trim()}
            onClick={handleSearch}
            sx={{
              bgcolor: "#FF2625",
              color: "#fff",
              textTransform: "none",
              width: { lg: "175px", xs: "100%" },
              height: "56px",
              fontSize: { lg: "20px", xs: "16px" },
              borderRadius: "30px",
              opacity: search.trim() ? 1 : 0.6,
              "&:hover": { bgcolor: "#e02020" },
            }}
          >
            Search
          </Button>
        </Stack>
      </Box>

      {/* 🔹 Body parts scroll */}
      <Box sx={{ width: "100%", p: "20px" }}>
        <HorizontalScrollBar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
