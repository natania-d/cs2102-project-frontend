import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(0, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44),
  createData(1, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99),
  createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
  createData(3, '16 Mar, 2019', 'Michael Jackson', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39),
  createData(4, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  fragment: {
    // marginTop: '80px'
    minWidth: '200px',
    minHeight: '80px'
  }
}));

export default function Cart(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  

    function deleteItem(item) {
        // props.deleteFoodItem(item);
        console.log("here")
        // props.handleClose();

    }

    function addItem() {

    }
    function minusItem() {

    }
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        (false);
    };

  return (
    <div className={classes.fragment}>
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
            Cart
        </Typography>
        {props.ordered.length === 0 &&
          <Typography>Your cart is empty</Typography>
          }
      {props.ordered.length > 0 && false && <Table size="small">
        <TableHead>
          <TableRow>
            {/* <TableCell>Date</TableCell> */}
            <TableCell>Food Item</TableCell>
            <TableCell >Price</TableCell>
            <TableCell>Amount</TableCell>
            
            <TableCell></TableCell>
            <TableCell></TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {props.ordered.length > 0 && props.ordered.map((row) => (
            <TableRow key={row.foodID}>
              {/* <TableCell>{row.date}</TableCell> */}
              {/* <TableCell>{row.name}</TableCell> */}
              <TableCell>{row.fname}</TableCell>
              <TableCell>{row.price}</TableCell>
              <TableCell>{row.quantity}</TableCell>
              <TableCell>
                  {/* <Button color="primary" onClick={props.addFoodItem(row)}>
                      +1
                    </Button>
                    <Button color="primary" onClick={props.minusFoodItem(row)}>
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
                        {/* <Button color="primary" onClick={props.deleteFoodItem(row)}>
                        Delete
                        </Button> */}
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
      <Button color="primary" 
      onClick={deleteItem(props.ordered[0])}
      >
                        Delete
                        </Button>
      </DialogActions>
      
    </div>
  );
}