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
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import FoodCard from './../components/FoodCard';
import { encodeGetParams, TEST, SERVER_URL } from './../constants/constants';
import Cart from './../pages/Cart';
import Nav from './../components/Nav';


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
    fragment: {
        // marginTop: '80px'
        minWidth: '200px',
        minHeight: '80px'
      }
});

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

class RestaurantPage extends React.Component {
    constructor(props) {
        super(props);
        const restaurantProps = props.history.location.state.props;
        this.state = {
            restaurantProps: restaurantProps,
            foodItems: [],
            ordered: [],
            cartOpen: false,
        }

    }

    componentDidMount() {
        const { restaurantProps } = this.state;
        const req = new Request(`${SERVER_URL}/restaurants/${restaurantProps.rid}/menu`, {
            method: 'GET',
        });
        fetch(req)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            this.setState({
                foodItems: data.result
            });
        })
        .catch(error => {
            console.log("error");

        });
    }

    addFoodItem(item) {
        const { ordered } = this.state;
        let newArray;
        let change = false;
        for (let i = 0; i < ordered.length; i++) {
            if (ordered[i].foodID === item.foodID) {
                const existingItem = ordered[i];
                existingItem.quantity++;
                ordered.splice(i, 1);
                ordered.push(existingItem);
                newArray = ordered;
                change = true;
            }
        }
        if (!change) {
            console.log('here')
            const newItem = {
                // foodID: item.id, 
                quantity: 1,

            };
            Object.assign(newItem, item)
            ordered.push(newItem);
            newArray = ordered;
        }
        console.log(newArray)
        this.setState({
            ordered: newArray
        });
    }

    deleteFoodItem(item) {
        const { ordered } = this.state;
        console.log("delete", item)
        let newArray;
        for (let i = 0; i < ordered.length; i++) {
            if (ordered[i].foodID === item.foodID) {
                ordered.splice(i, 1);
                newArray = ordered;
            }
        }
        console.log(newArray)
        this.setState({
            ordered: newArray
        });
    }

    minusFoodItem(item) {
        const { ordered } = this.state;
        console.log("minus", item)
        let newArray;
        for (let i = 0; i < ordered.length; i++) {
            if (ordered[i].foodID === item.foodID) {
                const existingItem = ordered[i];
                existingItem.quantity--;
                if (existingItem.quantity === 0) {
                    this.deleteFoodItem(item);
                    return;
                }
                ordered.splice(i, 1);
                ordered.push(existingItem);
                newArray = ordered;
            }
        }
        console.log(newArray)
        this.setState({
            ordered: newArray
        });
    }

    openCart() {
        this.setState({
            cartOpen: true,
        });
    }

    handleClose() {
        this.setState({
            cartOpen: false
        })
    }

    render() {
        const { classes } = this.props;
        const { foodItems, ordered, cartOpen } = this.state;
        console.log(this.state.ordered)
        return (
            <React.Fragment>
                {/* Hero unit */}
                <Nav />
                <div className={classes.heroContent}>
                <Container maxWidth="sm">
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        {this.state.restaurantProps.title}
                    </Typography>
                    <Button variant="contained"
              color="primary" onClick={this.openCart.bind(this)}>Cart</Button>
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
                    {foodItems.map((item) => (
                    <Grid item key={item.foodID} xs={12} sm={6} md={4}>
                        <FoodCard
                            imageUrl="https://source.unsplash.com/JorKKx5rvA0/640x426"
                            title={item.fname}
                            fid={item.foodID}
                            foodItemObject={item}
                            description=""
                            addFoodItem={this.addFoodItem.bind(this)}
                        >
                        </FoodCard>
                    </Grid>
                    ))}
                </Grid>
                </Container>
                <Dialog
                onClose={this.handleClose.bind(this)}
                open={cartOpen}>
                    
                    {/* <Cart 
                        cartOpen={cartOpen}
                        ordered={ordered}
                        handleClose={this.handleClose.bind(this)}
                        deleteFoodItem={this.deleteFoodItem.bind(this)}
                        addFoodItem={this.addFoodItem.bind(this)}
                        minusFoodItem={this.minusFoodItem.bind(this)}
                    /> */}
                    <div className={classes.fragment}>
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
            Cart
        </Typography>
        {ordered.length === 0 &&
          <Typography>Your cart is empty</Typography>
          }
      {ordered.length > 0 && <Table size="small">
        <TableHead>
          <TableRow>
            {/* <TableCell>Date</TableCell> */}
            <TableCell>Food Item</TableCell>
            <TableCell >Price</TableCell>
            <TableCell>Amount</TableCell>
            
            {/* <TableCell></TableCell> */}
            <TableCell></TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {ordered.length > 0 && ordered.map((row) => (
            <TableRow key={row.foodID}>
              {/* <TableCell>{row.date}</TableCell> */}
              {/* <TableCell>{row.name}</TableCell> */}
              <TableCell>{row.fname}</TableCell>
              <TableCell>{row.price}</TableCell>
              <TableCell><Button color="primary" onClick={this.addFoodItem.bind(this, row)}>
                      +
                    </Button>
                    {row.quantity}
                    <Button color="primary" onClick={this.minusFoodItem.bind(this, row)}>
                      -
                    </Button>
                </TableCell>
              <TableCell>
                  {/* <Button color="primary" onClick={addFoodItem(row)}>
                      +1
                    </Button>
                    <Button color="primary" onClick={minusFoodItem(row)}>
                      -1
                    </Button> */}
                </TableCell>
              <TableCell>
                    {/* <Button color="primary">
                      +1
                    </Button>
                    <Button color="primary">
                      -1
                    </Button> */}
                    <DialogActions>
                        <Button color="primary" onClick={this.deleteFoodItem.bind(this, row)}>
                        Delete
                        </Button>
                    </DialogActions>
                    
                </TableCell>
            </TableRow>
          ))}
         
        </TableBody>
      </Table>}
      {/* <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div> */}
      <DialogActions>
      {/* <Button color="primary" 
      onClick={this.deleteFoodItem(ordered[0])}
      >
                        Delete
                        </Button> */}
      </DialogActions>
      
    </div>
                </Dialog>
            {/* Footer */}
            {/* <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                Footer
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                Something here to give the footer a purpose!
                </Typography>
            </footer> */}
            {/* End footer */}
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(RestaurantPage);