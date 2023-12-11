import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { delete1 } from '../ReduxToolkit/slice/CRUDSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function DenseTable({ items }) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    return (
        <div style={{width:"70%",margin:"auto"}}>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>S.No</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Number</TableCell>
                            <TableCell align="right">Age</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {items.map((item, index) => (
                            <TableRow
                                key={item.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {index + 1}
                                </TableCell>
                                <TableCell align="right">{item.name}</TableCell>
                                <TableCell align="right">{item.number}</TableCell>
                                <TableCell align="right">{item.age}</TableCell>
                                <TableCell align="right">
                                    <Button sx={{margin:"5px"}} variant="contained" color="success"
                                    onClick={()=>{navigate(`/update-item/${index}`)}}>
                                        Edit
                                    </Button>
                                    <Button margin="normal" variant="contained" color="error"
                                    onClick={()=>{dispatch(delete1(item))}}
                                    >
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}