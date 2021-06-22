import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { DatePicker } from '@material-ui/pickers'
import { Box, Checkbox, FormControlLabel } from '@material-ui/core';
import { useState } from 'react';
import { useEffect } from 'react';
import UserContext from '../../../Context';

const HireDialog = ({ developers, checkBoxes }) => {
    const [open, setOpen] = useState(false);
    const [boxes, setBoxes] = useState({
        checkboxes: checkBoxes
    })
    const [selectedStartDate, setSelectedStartDate] = useState(new Date());
    const [selectedEndDate, setSelectedEndDate] = useState(new Date());
    
    const context = useContext(UserContext)

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
        console.log(boxes);
        console.log(selectedStartDate);
        console.log(selectedEndDate);
        
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
                    return (
                        <FormControlLabel
                            key={index}
                            control={<Checkbox checked={checkbox.checked} onChange={() => onHandleCheckboxChange(index)} />}
                            label={checkbox.name}
                        />
                    )
                }
                )
            )
        }

    }
    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Hire Developers
            </Button>
            <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Hire Developers</DialogTitle>

                {
                    boxes.checkboxes.length === 0
                        ?
                        <DialogContent>There are no active developer profiles right now</DialogContent>
                        :
                        <DialogContent>
                            <DialogContentText>
                                Please select the developers you want to hire and specify a period for the
                                engagment
                            </DialogContentText>
                            {
                                renderCheckboxes()
                            }
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
                                    minDate={new Date(selectedStartDate)}
                                    value={selectedEndDate}
                                    onChange={(date) => setSelectedEndDate(date)}
                                    margin="normal"
                                    id="date-picker"
                                    disablePast
                                    label="Select end date"
                                    animateYearScrolling
                                />
                            </Box>
                        </DialogContent>
                }
                <DialogActions>
                    <Button onClick={() => setOpen(false)} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleHire} disabled={boxes.checkboxes.length === 0} color="primary">
                        HIRE
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default HireDialog