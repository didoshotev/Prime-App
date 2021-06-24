import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import avatar from "../../images/avatarIcon.png"
import { Box } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 350,
    },
});

const GridItem = (props) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.profilePicture || avatar}
                    title="Avatar"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.name}
                    </Typography>

                    <Box display="flex" justifyContent="space-between">
                        <Typography variant="body2" color="textPrimary" component="p">
                            Technology:
                        </Typography>
                        <Typography variant="body1" color="textPrimary" component="p">
                            {props.technology}
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="space-between">
                        <Typography variant="body2" color="textPrimary" component="p">
                            Years experience:
                        </Typography>
                        <Typography variant="body1" color="textPrimary" component="p">
                            {props.experience} 
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="space-between">
                        <Typography variant="body2" color="textPrimary" component="p">
                            Location:
                        </Typography>
                        <Typography variant="body1" color="textPrimary" component="p">
                            {props.location}
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="space-between">
                        <Typography variant="body2" color="textPrimary" component="p">
                            Salary per hour:
                        </Typography>
                        <Typography variant="body1" color="textPrimary" component="p">
                            ${props.salary}
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="space-between" flexWrap="wrap">
                        <Typography variant="body2" color="textPrimary" component="p">
                            Mobile Phone:
                        </Typography>
                        <Typography variant="body1" color="textPrimary" component="p">
                            {props.phone}
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="space-between" flexWrap="wrap">
                        <Typography variant="body2" color="textPrimary" component="p">
                            Email:
                        </Typography>
                        <Typography variant="body1" color="textPrimary" component="p">
                            {props.email}
                        </Typography>
                    </Box>
                    
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="secondary" variant="outlined" onClick={(e) => props.handleDelete(props.id)}>
                    Delete
                </Button>

                <Button size="small" color="secondary" variant="outlined" onClick={(e) => props.handleEdit(props.id)}>
                    Edit
                </Button>

            </CardActions>
        </Card>
    );
}

export default GridItem