import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { DatePicker } from '@material-ui/pickers'
import { Box, Checkbox, FormControlLabel } from '@material-ui/core';
import { useState } from 'react';
import { useEffect } from 'react';
import LocalService from '../../../services/services';

const HireDialog = ({ developers, checkBoxes }) => {
    const [open, setOpen] = useState(false);
    const [boxes, setBoxes] = useState({
        checkboxes: checkBoxes
    })
    const [selectedStartDate, setSelectedStartDate] = useState(new Date());
    const [selectedEndDate, setSelectedEndDate] = useState(new Date());

    const [isTimeSelected, setIsTimeSelected] = useState(false)
    const [freeDevelopersAtTime, setFreeDevelopersAtTime] = useState([])
    
    useEffect(() => {
        setBoxes({
            ...boxes,
            checkboxes: checkBoxes
        })
    }, [checkBoxes])


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleHire = () => {
        const newDevelopers = [];
        boxes.checkboxes.filter(dev => dev.checked === true)
            .map(dev => {
                newDevelopers.push({
                    name: dev.name,
                    id: dev.id,
                })
            })
        // let startDate = (selectedStartDate.toLocaleDateString()).slice(0, -3);
        // let endDate = (selectedEndDate.toLocaleDateString()).slice(0, -3);
        let start = selectedStartDate.toUTCString();
        let end = selectedEndDate.toUTCString();

        LocalService.developers.addToSchedule(newDevelopers, start, end);
        setOpen(false);
    };

    const onHandleCheckboxChange = (index) => {
        const { checkboxes } = boxes
        checkboxes[index].checked = !checkboxes[index].checked
        setBoxes({ checkboxes })
    }

    const renderCheckboxes = () => {
        const { checkboxes } = boxes
        if (checkboxes === undefined) {
            return <p>Loading...</p>
        } else {
            return (
                checkboxes.map((checkbox, index) => {
                    if (freeDevelopersAtTime.includes(checkbox.id)) {
                        return (
                            <FormControlLabel
                                key={index}
                                control={
                                    <Checkbox checked={checkbox.checked} onChange={() => onHandleCheckboxChange(index)} />}
                                label={checkbox.name}
                            />
                        )
                    }
                }
                )
            )
        }

    }

    const handleEndDateSelect = (date) => {
        setSelectedEndDate(date)
    }

    const handeTimeSelect = () => {
        let start = selectedStartDate.toUTCString()
        let end = selectedEndDate.toUTCString()
        let freeDevsArr = LocalService.developers.checkSchedule(start, end)
        setFreeDevelopersAtTime(freeDevsArr)
        setIsTimeSelected(true)
    }

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Hire Developers
            </Button>
            <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Hire Developers</DialogTitle>

                {
                    isTimeSelected
                        ?
                        <DialogContent>
                            <DialogContentText>
                                These are the developers which are free in that period of time
                            </DialogContentText>
                            {
                                renderCheckboxes()
                            }

                            <DialogActions>
                                <Button onClick={() => setOpen(false)} color="primary">
                                    Cancel
                                </Button>
                                <Button onClick={handleHire} disabled={boxes.checkboxes.length === 0} color="primary">
                                    HIRE
                                </Button>

                                <Button onClick={() => setIsTimeSelected(false)} color="secondary">
                                    back
                                </Button>

                            </DialogActions>

                        </DialogContent>
                        :
                        <DialogContent>
                            <DialogContentText>
                                Please select the time range you are looking for developers
                            </DialogContentText>
                            <Box display="flex" justifyContent="space-around">
                                <DatePicker
                                    label="Basic example"
                                    disableToolbar
                                    variant="inline"
                                    format='MM/dd/yyy'
                                    value={selectedStartDate}
                                    onChange={(date) => setSelectedStartDate(date)}
                                    margin="normal"
                                    id="date-picker"
                                    disablePast
                                    label="Select starting date"
                                    animateYearScrolling
                                />


                                <DatePicker
                                    label="Basic example"
                                    disableToolbar
                                    variant="inline"
                                    format='MM/dd/yyy'
                                    minDate={new Date(selectedStartDate).toUTCString()}
                                    value={selectedEndDate}
                                    onChange={handleEndDateSelect}
                                    margin="normal"
                                    id="date-picker"
                                    disablePast
                                    label="Select end date"
                                    animateYearScrolling
                                />
                            </Box>

                            <DialogActions>
                                <Button onClick={() => setOpen(false)} color="primary">
                                    Cancel
                                </Button>

                                <Button onClick={handeTimeSelect} color="primary">
                                    apply
                                </Button>
                            </DialogActions>


                        </DialogContent>
                }
            </Dialog>
        </div>
    );
}

export default HireDialog