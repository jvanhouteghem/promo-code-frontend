import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";

export function DialogCongratz({isDialogOpen, setIsDialogOpen}: {isDialogOpen: boolean; setIsDialogOpen: Function}): JSX.Element {
    return <Dialog
        open={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
    >
        <DialogTitle id="alert-dialog-title">
            Congrats!
        </DialogTitle>
        <DialogContent>
            <DialogContentText id="alert-dialog-description">
                Hi ! Use <code>promo50</code> and get a 50% Welcome discount !
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button data-test-id="DialogCongratsWelcomePromo" onClick={() => setIsDialogOpen(false)} autoFocus>
                Close
            </Button>
        </DialogActions>
    </Dialog>
}