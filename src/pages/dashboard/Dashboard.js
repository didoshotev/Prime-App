import { TextField, Container, Box, Typography } from "@material-ui/core"
import Footer from "../../components/Footer"
import Header from "../../components/Header"

import HireDialog from "../../components/dashboard/hire-dialog/HireDialog"
import { useEffect } from "react"
import { useState } from "react"
import LocalService from "../../services/services"
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { Grid as MUIGrid } from '@material-ui/core';
import GridItem from '../../components/dashboard/GridItem';
import Grid from '../../components/dashboard/Grid';
import { useHistory } from "react-router-dom"

const Dashboard = () => {
    const [developers, setDevelopers] = useState([])
    const history = useHistory()
    const checkBoxes = []

    useEffect(() => {
        let devs = LocalService.developers.getMany();
        setDevelopers(devs)
    }, [])

    developers.map(item => {
        checkBoxes.push({ name: item.name, checked: false, id: item.id })
    })

    const onHandleDelete = (id) => {
        LocalService.developers.remove(id)
        let devs = LocalService.developers.getMany();
        setDevelopers(devs)
    }

    const onHandleEdit = (id) => {
        const item = LocalService.developers.getOne(id)
        history.push('/edit', { item })
    }

    return (
        <section>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Container maxWidth="lg">
                    <Box textAlign="center" paddingTop={'20px'} paddingBottom={'20px'}>
                        <Typography variant="h4">Our Developers</Typography>
                        {
                            checkBoxes
                                ?
                                <HireDialog developers={developers} checkBoxes={checkBoxes} />
                                :
                                null
                        }
                    </Box>
                    <Grid developers={developers} />
                    <Grid>
                        {
                            developers.map(dev => {
                                return (
                                    <MUIGrid item xs={12} sm={6} md={4} key={dev.id}>
                                        <GridItem  {...dev} handleDelete={onHandleDelete} handleEdit={onHandleEdit}/>
                                    </MUIGrid>
                                )
                            })
                        }
                    </Grid>
                </Container>
            </MuiPickersUtilsProvider>
        </section>

    )
}

export default Dashboard