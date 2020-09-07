import React, { useEffect, useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setPosts(response.data))
      .catch((error) => console.log(error));
  }, []);

  const useStyles = makeStyles({
    root: {
      maxWidth: 1000,
      borderBottom: "2px solid lightgrey",
    },
    text: {
      textDecoration: "none",
    },
  });

  const classes = useStyles();

  return (
    <>
      {posts.map((post) => (
        <Card className={classes.root}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {post.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {post.body}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Link to={`/postDetails/${post.id}`} className={classes.text}>
              <Button color="primary" variant="contained">
                Show Details
              </Button>
            </Link>
          </CardActions>
        </Card>
      ))}
    </>
  );
};

export default Posts;
