import React from 'react';
import { Route, Link, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
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
    const [open, setOpen] = React.useState(false);

    function handleClick() {
        alert("This item has been added to your order")
    }

    const handleClickOpen = () => {
        props.addFoodItem(props.foodItemObject)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
  
    return (
        <Card className={classes.card}>
            <CardMedia
            className={classes.cardMedia}
            image={props.imageUrl}
            />
            <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
                {props.title}
            </Typography>
            {props.description && <Typography>
                {props.description}
            </Typography>}
            </CardContent>
            <CardActions>
            <Button size="small" color="primary" onClick={handleClickOpen}>
                Add
            </Button>
            {/* <Button size="small" color="primary">
                Edit
            </Button> */}
            </CardActions>
            <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"This food item has been added to your order."}</DialogTitle>
        {/* <DialogContent>
          <DialogContentText id="alert-dialog-description">
            
          </DialogContentText>
        </DialogContent> */}
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            GOT IT!
          </Button>
        </DialogActions>
      </Dialog>
        </Card>
    );
}