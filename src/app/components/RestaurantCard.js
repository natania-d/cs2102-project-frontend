import React from 'react';
import { Route, Link, useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { styled } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      "&:hover": {
        cursor: 'pointer'
    }
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
    let history = useHistory();

    function handleClick() {
        history.push({
            pathname: props.restaurantUrl, 
            state: { props }
        });
    }
  
    return (
        <Card className={classes.card} onClick={handleClick}>
            {props.imageUrl && <CardMedia
            className={classes.cardMedia}
            image={props.imageUrl}
            />}
            <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
                {props.title}
            </Typography>
            {props.description && <Typography>
                {props.description}
            </Typography>}
            </CardContent>
            {/* <CardActions>
            <Button size="small" color="primary">
                View
            </Button>
            <Button size="small" color="primary">
                Edit
            </Button>
            </CardActions> */}
            {/* <Route path="/:id" component={RestaurantPage}/> */}
        </Card>
    );
}
// export default class RestaurantCard extends React.Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//         }

//     }

//     handleClick() {
//         let history = useHistory();
//         history.push("/restaurant");
//     }

//     render() {
//         return (
//             <RCard onClick={this.handleClick}>
//                 <RCardMedia
//                 image={this.props.imageUrl}
//                 />
//                 <RCardContent>
//                 <Typography gutterBottom variant="h5" component="h2">
//                     {this.props.title}
//                 </Typography>
//                 <Typography>
//                     {this.props.description}
//                 </Typography>
//                 </RCardContent>
//                 {/* <CardActions>
//                 <Button size="small" color="primary">
//                     View
//                 </Button>
//                 <Button size="small" color="primary">
//                     Edit
//                 </Button>
//                 </CardActions> */}
//                 {/* <Route path="/:id" component={RestaurantPage}/> */}
//             </RCard>
//         );
//     }
// }