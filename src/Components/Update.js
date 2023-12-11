import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { update } from '../ReduxToolkit/slice/CRUDSlice';
import Form from './Form';
import { useParams } from 'react-router-dom';
export default function Update() {
    const {itemId} = useParams()
    console.log(useSelector(state=>state.items))
    const items =  useSelector(React.useCallback((state)=>state.items[itemId]),[])

    console.log(items,"---------items---------------")
    return (
        <Form method ={update} initialData = {items}/>
        // <Box
        //     sx={{
        //         width: "50%",
        //         maxWidth: '100%',
        //         margin: "auto"
        //     }}
        // >
        //     <TextField margin="normal" value={editData.name} fullWidth label="Name" id="Name" onChange={(e) => { setEditData({ ...editData, name: e.target.value }) }} />
        //     <TextField margin="normal"  value={editData.number}  fullWidth label="Number" id="fullWidth" onChange={(e) => { setEditData({ ...editData, number: e.target.value }) }} />
        //     <TextField margin="normal"  value={editData.age}  fullWidth label="Age" id="fullWidth" onChange={(e) => { setEditData({ ...editData, age: e.target.value }) }} />
        //     <Button variant="contained" color="success"
        //     onClick={()=>{dispatch(update(editData));navigate("/")}}
        //     >
        //         Update
        //     </Button>
        // </Box>
    );
}