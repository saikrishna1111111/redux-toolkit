import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { post } from '../ReduxToolkit/slice/CRUDSlice';
import { useNavigate } from 'react-router-dom';
import Form from './Form';
export default function AddNewItem() {
    const [item, setItem] = React.useState({})
    const dispatch = useDispatch()
    const navigate = useNavigate()
    return (
        // <Box
        //     sx={{
        //         width: "50%",
        //         maxWidth: '100%',
        //         margin: "auto"
        //     }}
        // >
        //     <TextField  margin="normal" fullWidth label="Name *" id="Name" onChange={(e) => { setItem({ ...item, name: e.target.value }) }} />
        //     <TextField margin="normal" fullWidth label="Number *" id="fullWidth" onChange={(e) => { setItem({ ...item, number: e.target.value }) }} />
        //     <TextField margin="normal" fullWidth label="Age *" id="fullWidth" onChange={(e) => { setItem({ ...item, age: e.target.value }) }} />
        //     <Button variant="contained" color="success"
        //     onClick={()=>{dispatch(post(item));navigate("/")}}
        //     >
        //         Save
        //     </Button>
        // </Box>
        <Form method= {post} />
    );
}