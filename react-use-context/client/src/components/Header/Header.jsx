import { AppBar, Typography } from "@mui/material";
import memories from "../../images/memories.png";

const Header = () => {
  return (
    <AppBar
      position="static"
      color="inherit"
      sx={{
        borderRadius: "15px !important",
        margin: "20px 0",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Typography
        variant="h2"
        align="center"
        sx={{
          color: "#487346",
          fontWeight: "200",
        }}>
        Memories
      </Typography>
      <img
        src={memories}
        alt="memories"
        height="60"
        style={{
          marginLeft: "15px",
        }}
      />
    </AppBar>
  );
};

export default Header;
