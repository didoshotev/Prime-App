import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Typography, Box, Container } from '@material-ui/core';
import { useState } from 'react';
import { useEffect } from 'react';
import LocalService from '../../services/services';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const Profile = () => {
  const classes = useStyles();
  const [hiredDevs, setHiredDevs] = useState([])

  useEffect(() => {
    let hiredDevs = LocalService.user.getHiredDevelopers()
    let devInfo = LocalService.developers.getManyByIDsArr(hiredDevs)
    setHiredDevs(devInfo)
  }, [])

  if (hiredDevs === []) {
    return (
      <div>Loadin...</div> //spinner
    )
  }
  return (
    <Container maxWidth="lg">
      <Box margin="20px 0 30px 0">
        <Typography variant="h6" align="center">Hired Developers</Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Skill</TableCell>
              <TableCell align="right">Experience</TableCell>
              <TableCell align="right">LinkedIn</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {hiredDevs.map((dev) => (
              <TableRow key={dev.name}>
                <TableCell component="th" scope="row">
                  {dev.name}
                </TableCell>
                <TableCell align="right">{dev.email}</TableCell>
                <TableCell align="right">{dev.technology}</TableCell>
                <TableCell align="right">{dev.experience} years</TableCell>
                <TableCell align="right">{dev.linkedin ? dev.linkedin : 'not provided'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default Profile