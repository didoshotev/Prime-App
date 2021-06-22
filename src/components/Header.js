import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link as RouterLink, useHistory } from 'react-router-dom'
import { useContext } from 'react';
import UserContext from '../Context';
import LocalService from '../services/services';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Header = () => {
    const classes = useStyles()
    const history = useHistory()
    const context = useContext(UserContext)
    const { loggedIn } = context


    const handleLogout = () => {
        let currentUserID = LocalService.user.getUserID()
        let isLogged = LocalService.user.logOut(currentUserID)

        if (isLogged) {
            context.logOut()
            history.push('/login')
        }
    }

    const onHireHandler = () => {
        loggedIn ? history.push('/hire') : history.push('/login')
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <RouterLink to="/" className={classes.title}>
                        <Typography variant="h6">
                            Prime Hiring
                        </Typography>
                    </RouterLink>

                    <RouterLink to="/dashboard">
                        <Button color="inherit">Dashboard</Button>
                    </RouterLink>

                    <RouterLink to="/create">
                        <Button color="inherit">Create Developer</Button>
                    </RouterLink>

                    <Button color="inherit">Profile</Button>

                    {
                        loggedIn
                            ?
                            <Button color="inherit" onClick={handleLogout}>Logout</Button>
                            :
                            <>
                                <RouterLink to="login">
                                    <Button color="inherit">
                                        Login
                                    </Button>
                                </RouterLink>

                                <RouterLink to="register">
                                    <Button color="inherit">Register</Button>
                                </RouterLink>
                            </>
                    }

                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header