import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom'
import {Box} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    heroContent: {
        padding: theme.spacing(8, 0, 6),
    },
    cardHeader: {
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
    },
    cardPricing: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: theme.spacing(2),
    },
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
        },
    },


}));

const tiers = [
    {
        title: 'Web Developers',
        price: '15',
        description: ['JavaScript experts', 'C# experts', 'Full Stack', 'Detail oriented'],
        buttonText: 'More information',
        buttonVariant: 'outlined',
    },
    {
        title: 'Team Leads',
        subheader: 'Most popular',
        price: '50',
        description: [
            'Code quality control',
            'Managing resources',
            'Resolving conflicts',
            'Conducting team meetings',
        ],
        buttonText: 'More information',
        buttonVariant: 'contained',
    },
    {
        title: 'Cyber Security',
        price: '25',
        description: [
            'Conducting penetration testing',
            'Finding vulnerabilities',
            'Leading incident response activities',
            'Best standarts and practices',
        ],
        buttonText: 'More information',
        buttonVariant: 'outlined',
    },
];

const WelcomeSection = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Container maxWidth="sm" component="main" className={classes.heroContent}>
                <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
                    Looking for a Developer?
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" component="p">
                    We've got you in Prime Hiring. Here you can find developers with a wide variety of skills
                    at different levels starting from Interns to Team Leads.
                </Typography>
            </Container>
            <Container maxWidth="md" component="main">
                <Grid container spacing={5} alignItems="flex-end">
                    {tiers.map((tier) => (
                        <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
                            <Card>
                                <CardHeader
                                    title={tier.title}
                                    subheader={tier.subheader}
                                    titleTypographyProps={{ align: 'center' }}
                                    subheaderTypographyProps={{ align: 'center' }}
                                    action={tier.title === 'Pro' ? <StarIcon /> : null}
                                    className={classes.cardHeader}
                                />
                                <CardContent>
                                    <div className={classes.cardPricing}>
                                        <Typography component="h2" variant="h3" color="textPrimary">
                                            ${tier.price}
                                        </Typography>
                                        <Typography variant="h6" color="textSecondary">
                                            /hour
                                        </Typography>
                                    </div>
                                    <ul>
                                        {tier.description.map((line) => (
                                            <Typography component="li" variant="subtitle1" align="center" key={line}>
                                                {line}
                                            </Typography>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardActions>
                                    <Box width="100%">
                                        <Link to="/dashboard">
                                            <Button fullWidth variant={tier.buttonVariant} color="primary">
                                                {tier.buttonText}
                                            </Button>
                                        </Link>
                                    </Box>

                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </React.Fragment>
    );
}
export default WelcomeSection