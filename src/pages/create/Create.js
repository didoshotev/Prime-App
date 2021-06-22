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
import CodeIcon from '@material-ui/icons/Code';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link as RouterLink, useHistory } from 'react-router-dom'
import MenuItem from '@material-ui/core/MenuItem';
import { useState } from 'react';
import Core from '../../components/core/Core';
import Header from '../../components/Header'

import { technologies, nativeLanguages } from '../../utils/options'
import { developerProfileValidator } from '../../utils/validator'
// import { localUserService } from '../../services/user'

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const Create = () => {
    const [inputValue, setInputValue] = useState({
        name: '',
        email: '',
        location: '',
        salary: '',
        experience: '',
        language: '',
        linkedin: '',
        description: '',
        technology: '',
        profilePicture: '',
        phone: ''

    })

    const [isError, setIsError] = useState({ error: false, field: "" });

    const { technology, language } = inputValue;
    const classes = useStyles();
    let history = useHistory()

    const handleChange = (event) => {
        const { name, value } = event.target
        setInputValue((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleForm = async (e) => {
        e.preventDefault();
        const error = developerProfileValidator(inputValue)
        if (error === false) {
            let currentData = JSON.parse(localStorage.getItem('developers'));
            currentData.push(inputValue);
            localStorage.setItem('developers', JSON.stringify(currentData))
            history.push('/')
        } else {
            setIsError({ error: true, field: error })
        }
    }

    return (
        <div>
            <Header />
            <Container component="main" maxWidth="md">
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <CodeIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Create Developer Profile
                    </Typography>
                    <form className={classes.form} noValidate onSubmit={handleForm}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Name"
                                    name="name"
                                    autoComplete="name"
                                    onChange={handleChange}
                                    error
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="phone"
                                    label="Phone number"
                                    type="phone"
                                    id="phone"
                                    autoComplete="current-password"
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="location"
                                    label="Location"
                                    name="location"
                                    autoComplete="location"
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    variant="outlined"
                                    fullWidth
                                    id="salary"
                                    label="USD Salary per Hour"
                                    type="number"
                                    name="salary"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    id="technology"
                                    select
                                    required
                                    fullWidth
                                    label="Technology"
                                    value={technology}
                                    name="technology"
                                    onChange={handleChange}
                                >
                                    {technologies.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    variant="outlined"
                                    id="experience"
                                    label="Years Experience"
                                    name="experience"
                                    type="number"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    id="language"
                                    select
                                    required
                                    fullWidth
                                    label="Native language"
                                    name="language"
                                    value={language}
                                    onChange={handleChange}
                                >
                                    {nativeLanguages.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="linkedin"
                                    name="linkedin"
                                    variant="outlined"
                                    fullWidth
                                    id="linkedin"
                                    label="Linkedin link"
                                    autoFocus
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id="profilePicture"
                                    label="Profile picture"
                                    fullWidth
                                    variant="outlined"
                                    name="profilePicture"
                                    onChange={handleChange}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id="description"
                                    label="Description"
                                    multiline
                                    fullWidth
                                    rows={5}
                                    variant="outlined"
                                    name="description"
                                    onChange={handleChange}
                                />
                            </Grid>
                        </Grid>
                        {
                            isError.error
                                ?
                                <Box textAlign="center" mt="20px">
                                    <Typography variant={'h6'} color="secondary">Please provide a valid information at {(isError.field)} field</Typography>

                                </Box>
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

                            Confirm
                        </Button>

                    </form>
                </div>
                <Box mt={5}>
                    <Core.Copyright />
                </Box>
            </Container>
        </div>


    )
}

export default Create
