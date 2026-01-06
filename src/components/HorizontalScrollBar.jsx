import React from "react";
import { Box, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";

const HorizontalScrollBar = ({ data, bodyPart, setBodyPart }) => {
  return (
    <Box
      className="scroll-container"
      sx={{
        display: "flex",
        overflowX: "auto",
        gap: "20px",
        pb: "10px",
        "&::-webkit-scrollbar": { height: "8px" },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#ff2625",
          borderRadius: "4px",
        },
      }}
    >
      {data.map((item) => (
        <Box
          key={item}
          className="scroll-item bodyPart-card"
          sx={{
            minWidth: "265px",
            height: "280px",
            flex: "0 0 auto",
            bgcolor: bodyPart === item ? "#ffe5e5" : "#fff",

            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "transform 0.3s",
            "&:hover": {
              transform: "scale(0.8)",
              borderTop: "4px solid #ff2625",
            },
          }}
          onClick={() => setBodyPart(item)}
        >
          <img
            src={Icon} // replace with your actual icon
            alt={item}
            style={{ width: "40px", height: "40px", marginBottom: "10px" }}
          />
          <Typography fontWeight={700} textAlign="center">
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default HorizontalScrollBar;
