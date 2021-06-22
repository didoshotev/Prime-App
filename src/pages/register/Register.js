import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link as RouterLink, useHistory } from 'react-router-dom'
import Core from '../../components/core/Core'
import { useState } from 'react';
import { localUserService } from '../../services/user'
import { useContext } from 'react';
import UserContext from '../../Context';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
const Register = () => {
  const classes = useStyles()
  const history = useHistory()
  const context = useContext(UserContext)
  const [inputValue, setInputValue] = useState({
    name: '',
    password: ''
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setInputValue((prev) => ({
        ...prev,
        [name]: value
    }))
    
}

const handleForm = async (e) => {
    e.preventDefault();
    if(inputValue) {
        const user = localUserService.registerUser(inputValue)
        context.logIn(user)
        history.push('/')
    }
}

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={handleForm}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={handleChange}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item xs>
              <RouterLink to="/login">
                {"Already have an account? Sign In"}
              </RouterLink>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Core.Copyright />
      </Box>
    </Container>
  )
}

export default Register