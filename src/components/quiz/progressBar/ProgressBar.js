import React from "react";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

function ProgressBar(props) {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? "#6a5be2" : "#308fe8",
    },
  }));
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ width: "100%", mr: 1 }}>
          <BorderLinearProgress
            variant="determinate"
            value={props.percentage}
          />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2">{props.percentage}%</Typography>
        </Box>
      </Box>
      <Typography variant="subtitle1" color="#000">
        Ваша скидка: {props.percentage * 50} руб.
      </Typography>
    </>
  );
}

export default ProgressBar;
