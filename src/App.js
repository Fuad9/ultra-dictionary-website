import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Posts from "./Components/Posts/Posts";
import PostDetails from "./Components/PostDetails/PostDetails";
import NoMatch from "./Components/NoMatch/NoMatch";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

function App() {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
    text: {
      textDecoration: "none",
    },
  }));

  const classes = useStyles();

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <div className={classes.root}>
            <AppBar position="static">
              <Toolbar>
                <Typography variant="h6" className={classes.title}>
                  Social Buddy
                </Typography>
                <Link to="/posts" className={classes.text}>
                  <Button color="inherit" variant="contained">
                    Posts
                  </Button>
                </Link>
              </Toolbar>
            </AppBar>
          </div>
          <Switch>
            <Route path="/posts">
              <Posts></Posts>
            </Route>
            <Route path="/postDetails/:userId">
              <PostDetails></PostDetails>
            </Route>
            <Route exact path="/">
              <Posts></Posts>
            </Route>
            <Route path="*">
              <NoMatch></NoMatch>
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
