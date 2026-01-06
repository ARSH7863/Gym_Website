import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Stack,
  Box,
} from "@mui/material";

const ExerciseCard = ({ exercise }) => {
  const youtubeSearchUrl = `https://www.youtube.com/results?search_query=${exercise.name} exercise`;

  return (
    <Card
      sx={{
        width: 220,
        cursor: "pointer",
        transition: "transform 0.2s ease",
        "&:hover": { transform: "scale(1.08)" },
      }}
      onClick={() => window.open(youtubeSearchUrl, "_blank")}
    >
      <CardMedia
        component="img"
        height="160"
        image={exercise.gifUrl || "/fallback.png"}
        alt={exercise.name}
        sx={{ objectFit: "cover" }}
      />

      <CardContent>
        {/* Tags */}
        <Stack direction="row" gap={1} mb={1}>
          <Box
            sx={{
              px: 1.5,
              py: 0.5,
              bgcolor: "#ffa9a9",
              color: "#fff",
              borderRadius: "12px",
              fontSize: "12px",
              textTransform: "capitalize",
              fontWeight: 500,
            }}
          >
            {exercise.bodyPart}
          </Box>

          <Box
            sx={{
              px: 1.5,
              py: 0.5,
              bgcolor: "#fcc757",
              color: "#fff",
              borderRadius: "12px",
              fontSize: "12px",
              textTransform: "capitalize",
              fontWeight: 500,
            }}
          >
            {exercise.target}
          </Box>
        </Stack>

        {/* Exercise Name */}
        <Typography
          variant="body1"
          fontWeight={600}
          sx={{
            textTransform: "capitalize",
            lineHeight: 1.3,
          }}
        >
          {exercise.name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ExerciseCard;
