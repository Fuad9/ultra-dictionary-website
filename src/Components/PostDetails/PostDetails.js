import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Comments from "../Comments/Comments";

const PostDetails = () => {
  const { userId } = useParams();
  const [posts, setPosts] = useState({});

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${userId}`)
      .then((response) => setPosts(response.data))
      .catch((error) => console.log(error));
  }, [userId]);

  const useStyles = makeStyles({
    root: {
      maxWidth: 1000,
      borderBottom: "2px solid lightgrey",
      margin: "0 8em 0 8em",
    },
  });

  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Card>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {posts.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {posts.body}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Comments posts={posts.id}></Comments>
      </div>
    </>
  );
};

export default PostDetails;
