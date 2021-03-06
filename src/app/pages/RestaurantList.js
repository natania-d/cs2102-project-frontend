import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

import RestaurantCard from './../components/RestaurantCard';
import Nav from './../components/Nav';

import { encodeGetParams, TEST, SERVER_URL } from './../constants/constants';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const styles = (theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
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
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
});

const cards = [1, 2, 3, 4];

class RestaurantList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            restaurants: []
        }

    }

    componentDidMount() {
        const { restaurants } = this.state;

        const req = new Request(`${SERVER_URL}/restaurants/all`, {
            method: 'GET',
            // headers: {
            //     'Content-Type': 'application/json',
            // },
        });
        fetch(req)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            this.setState({
                restaurants: data.result
            });
        })
        .catch(error => {
        console.log("error");

        });

        // if (TEST) {
        //   window.location.assign('/restaurantlist')
        // }
    }

    render() {
        const { classes } = this.props;
        const { restaurants } = this.state;
   
        return (
            <React.Fragment>
            <CssBaseline />
            {/* <AppBar position="relative">
                <Toolbar>
                <CameraIcon />
                <Typography variant="h6" color="inherit" noWrap>
                    Album layout
                </Typography>
                </Toolbar>
            </AppBar> */}
            {/* <Nav /> */}
            <main>
                {/* Hero unit */}
                <div className={classes.heroContent}>
                <Container maxWidth="sm">
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        Our Restaurants
                    </Typography>
                    {/* <Typography variant="h5" align="center" color="textSecondary" paragraph>

                    </Typography>
                    <div className={classes.heroButtons}>
                        <Grid container spacing={2} justify="center">
                            <Grid item>
                            <Button variant="contained" color="primary">
                                Main call to action
                            </Button>
                            </Grid>
                            <Grid item>
                            <Button variant="outlined" color="primary">
                                Secondary action
                            </Button>
                            </Grid>
                        </Grid>
                    </div> */}
                </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                {/* End hero unit */}
                <Grid container spacing={4}>
                    {restaurants.map((restaurant)=> {
                        if (restaurant.rname === 'McDonalds') {
                            return <Grid item key={restaurant.rid} xs={12} sm={6} md={4}>
                            <RestaurantCard
                                imageUrl="https://source.unsplash.com/wqyanQ8ibTE/640x480"
                                restaurantUrl={"/" + restaurant.rname}
                                title={restaurant.rname}
                                location={restaurant.location}
                                minOrderPrice={restaurant.minimumOrderPrice}
                                rid={restaurant.rid}
                            >
                            </RestaurantCard>
                        </Grid>
                        } else if (restaurant.rname === 'Domino Pizza') {
                            return <Grid item key={restaurant.rid} xs={12} sm={6} md={4}>
                            <RestaurantCard
                                imageUrl="https://source.unsplash.com/SU1LFoeEUkk/640x423"
                                restaurantUrl={"/" + restaurant.rname}
                                title={restaurant.rname}
                                location={restaurant.location}
                                minOrderPrice={restaurant.minimumOrderPrice}
                                rid={restaurant.rid}
                            >
                            </RestaurantCard>
                        </Grid>
                        } else if (restaurant.rname === 'Pizza Hut') {
                            return <Grid item key={restaurant.rid} xs={12} sm={6} md={4}>
                            <RestaurantCard
                                imageUrl="https://source.unsplash.com/SU1LFoeEUkk/640x423"
                                restaurantUrl={"/" + restaurant.rname}
                                title={restaurant.rname}
                                location={restaurant.location}
                                minOrderPrice={restaurant.minimumOrderPrice}
                                rid={restaurant.rid}
                            >
                            </RestaurantCard>
                        </Grid>
                        }
                        return <Grid item key={restaurant.rid} xs={12} sm={6} md={4}>
                            <RestaurantCard
                                imageUrl="https://source.unsplash.com/HYpXP6Zk1dw/640x428"
                                restaurantUrl={"/" + restaurant.rname}
                                title={restaurant.rname}
                                location={restaurant.location}
                                minOrderPrice={restaurant.minimumOrderPrice}
                                rid={restaurant.rid}
                            >
                            </RestaurantCard>
                        </Grid>

                    })}
                    {/* <Grid item key={"kfc"} xs={12} sm={6} md={4}>
                        <RestaurantCard
                            imageUrl="https://source.unsplash.com/HYpXP6Zk1dw/640x428"
                            restaurantUrl="/kfc"
                            title="KFC"
                            description="Fast Food"
                        >
                        </RestaurantCard>
                    </Grid>
                    <Grid item key={"mcdonalds"} xs={12} sm={6} md={4}>
                        <RestaurantCard
                            imageUrl="https://source.unsplash.com/wqyanQ8ibTE/640x480"
                            restaurantUrl="/mcdonalds"
                            title="McDonalds"
                            // description="Fast Food"
                        >
                        </RestaurantCard>
                    </Grid>
                    <Grid item key={"domino-pizza"} xs={12} sm={6} md={4}>
                        <RestaurantCard
                            imageUrl="https://source.unsplash.com/SU1LFoeEUkk/640x423"
                            restaurantUrl="/domino-pizza"
                            title="Domino Pizza"
                            description="Pizza"
                        >
                        </RestaurantCard>
                    </Grid>
                    <Grid item key={"pizza-hut"} xs={12} sm={6} md={4}>
                        <RestaurantCard
                            imageUrl="https://source.unsplash.com/SU1LFoeEUkk/640x423"
                            restaurantUrl="/pizza-hut"
                            title="Pizza Hut"
                            description="Pizza"
                        >
                        </RestaurantCard>
                    </Grid> */}
                </Grid>
                </Container>
            </main>
            {/* Footer */}
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                Footer
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                Something here to give the footer a purpose!
                </Typography>
                <Copyright />
            </footer>
            {/* End footer */}
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(RestaurantList);