import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link as RouterLink, useHistory } from 'react-router-dom'
import Core from '../../components/core/Core'
import { useState } from 'react';
import { useContext } from 'react';
import UserContext from '../../Context';
import Header from '../../components/Header';
import LocalService from '../../services/services';


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

const Login = () => {
  const classes = useStyles()
  const history = useHistory()
  const context = useContext(UserContext)

  const [inputValue, setInputValue] = useState({
    name: '',
    password: ''
  })
  const [error, setError] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setInputValue((prev) => ({
      ...prev,
      [name]: value
    }))

  }

  const handleForm = async (e) => {
    e.preventDefault();
    let user;
    user = LocalService.user.loginUser(inputValue)
    if (user === null) {
      setError(true)
      setInputValue({
        ...inputValue,
        name: '',
        password: ''
      })
    } else {
      context.logIn(user)
      history.push('/')
    }
  }

  return (
    <section>
      <Header />
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
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
            {
              error
                ?
                <Typography variant="h6" color="secondary">Invalid credentials</Typography>
                :
                null
            }
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <RouterLink to="/register">
                  {"Don't have an account? Sign Up"}
                </RouterLink>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Core.Copyright />
        </Box>
      </Container>
    </section>

  );
}

export default Login