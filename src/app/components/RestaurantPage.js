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


class RestaurantPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        }

    }

    render() {
        const { classes } = this.props;
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
                    {cards.map((card) => (
                    <Grid item key={card} xs={12} sm={6} md={4}>
                        <RestaurantCard
                            imageUrl="https://source.unsplash.com/JorKKx5rvA0/640x426"
                            redirectUrl=""
                            title="Genki Sushi"
                            description="Japanese, Delivery, Sushi"
                        >
                        </RestaurantCard>
                    </Grid>
                    ))}
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
            </footer>
            {/* End footer */}
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(RestaurantPage);