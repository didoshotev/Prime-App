import { TextField, Container, Box, Typography } from "@material-ui/core"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Grid from "../../components/dashboard/Grid"
import HireDialog from "../../components/dashboard/hire-dialog/HireDialog"
import { useEffect } from "react"
import { useState } from "react"
import LocalService from "../../services/services"
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { useContext } from "react"
import DeveloperContext from "../../DeveloperContext"

const Dashboard = () => {
    const [developers, setDevelopers] = useState([])
    const checkBoxes = []
    const developerContext = useContext(DeveloperContext)

    useEffect(() => {
        // let devs = developerContext.developers
        let devs = LocalService.developers.getMany();
        setDevelopers(devs)
    }, [])

    developers.map(item => {
        checkBoxes.push({ name: item.name, checked: false, id: item.id })
    })

    

    return (
        <section>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Header />
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
                </Container>
                <Footer />
            </MuiPickersUtilsProvider>
        </section>

    )
}

export default Dashboard