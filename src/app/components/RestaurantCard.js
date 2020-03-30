import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { styled } from '@material-ui/core/styles';


const RCard = styled(Card)({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    "&:hover": {
        cursor: 'pointer'
    }
});

const RCardMedia = styled(CardMedia)({
    paddingTop: '56.25%', // 16:9
});

const RCardContent = styled(CardContent)({
    flexGrow: 1,
});

export default class RestaurantCard extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
        }

    }

    render() {
        return (
            <RCard onClick={() => {alert("Hello from here")}}>
                <RCardMedia
                image={this.props.imageUrl}
                />
                <RCardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {this.props.title}
                </Typography>
                <Typography>
                    {this.props.description}
                </Typography>
                </RCardContent>
                {/* <CardActions>
                <Button size="small" color="primary">
                    View
                </Button>
                <Button size="small" color="primary">
                    Edit
                </Button>
                </CardActions> */}
            </RCard>
        );
    }
}