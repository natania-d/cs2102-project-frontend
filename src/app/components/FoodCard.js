import React from 'react';
import { Route, Link, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
}));


export default function RestaurantCard(props) {
    const classes = useStyles();

    function handleClick() {
    }
  
    return (
        <Card className={classes.card} onClick={handleClick}>
            <CardMedia
            className={classes.cardMedia}
            image={props.imageUrl}
            />
            <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
                {props.title}
            </Typography>
            <Typography>
                {props.description}
            </Typography>
            </CardContent>
            <CardActions>
            <Button size="small" color="primary">
                Add
            </Button>
            {/* <Button size="small" color="primary">
                Edit
            </Button> */}
            </CardActions>
        </Card>
    );
}