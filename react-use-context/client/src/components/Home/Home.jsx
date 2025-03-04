import { Container, Grow, Grid2 } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";

const Item = styled(Paper)(({ theme }) => ({
  background: "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

const Home = () => {
  return (
    <Grow in>
      <Container sx={{ padding: "0px" }}>
        <Grid2
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}>
          <Grid2 size={{ xs: 12, sm: 7 }}>
            <Item sx={{ textAlign: "left", boxShadow: "none", color: "black" }}>
              <Posts />
            </Item>
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 4 }}>
            <Item sx={{ textAlign: "left", boxShadow: "none", color: "black" }}>
              <Form />
            </Item>
          </Grid2>
        </Grid2>
      </Container>
    </Grow>
  );
};

export default Home;
