
import { Button, Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText } from '@mui/material' 
import { useState } from 'react'

export const MuiDialog = () => {

    const [ open, setOpen ] = useState(false)

    return(
        <>MuiDialog <br /><br />
            <Button onClick={() => setOpen(true)} >Open Dialog</Button>
            <Dialog open={open} aria-labelledby='dialog-title' 
            aria-describedby='dialog-description' 
            onClose={() => setOpen(false)} >
                <DialogTitle id='dialog-title' >Submit the test?</DialogTitle>
                <DialogContent>
                    <DialogContentText id='dialog-description' >
                        Are you sure you wan to submit the test? You will not be able to edit after submitting.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)} >Cancel</Button>
                    <Button autoFocus onClick={() => setOpen(false)} >Submit</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}