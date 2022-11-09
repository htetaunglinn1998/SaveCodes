import React from 'react'
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert'
import styled from "styled-components";

const SnackbarStyles = styled(Snackbar)`
  .MuiPaper-root {
    min-width: 20%;
    padding: 10px;
  }
`;

const CustomSnackbar = ({ message, sneakOpen, setSneakOpen, type }) => {

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSneakOpen(false);
        return;
    };

    return (
        <>
            {/* Snackbar on click */}
            <SnackbarStyles open={sneakOpen} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{
                vertical: "top",
                horizontal: "center"
            }}>
                <MuiAlert elevation={6} variant="filled" onClose={handleClose} severity={type}>
                    {message}
                </MuiAlert>
            </SnackbarStyles>
        </>
    )
}

export default CustomSnackbar