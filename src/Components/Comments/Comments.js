import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import CommentIcon from "@material-ui/icons/Comment";

const Comments = (props) => {
  const id = props.posts;
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function getComments() {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/comments/?postId=${id}`
      );
      const cmts = await Promise.all(
        data.map(async (comment) => {
          const { data: users } = await axios.get(
            `https://randomuser.me/api/?results=1`
          );
          return { ...comment, avatar: users.results[0].picture.medium };
        })
      );
      setComments(cmts);
    }
    getComments();
  }, [id]);

  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 1000,
      display: "flex",
    },
    avatar: {
      width: theme.spacing(8),
      height: theme.spacing(8),
      marginTop: theme.spacing(3),
    },
    comment: {
      display: "flex",
      alignItems: "center",
      color: "blue",
    },
  }));

  const classes = useStyles();

  return (
    <>
      <div className={classes.comment}>
        <CommentIcon color="secondary" />
        <h3>Comments</h3>
      </div>
      {comments.map((comment) => (
        <div key={comment.id} className={classes.root}>
          <Avatar alt="" src={comment.avatar} className={classes.avatar} />
          <Card>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h6" component="h2">
                  {comment.name}
                </Typography>
                <Typography variant="body2" color="textPrimary" component="p">
                  {comment.email}
                </Typography>
                <br />
                <Typography variant="body2" color="textPrimary" component="p">
                  {comment.body}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      ))}
    </>
  );
};

export default Comments;
