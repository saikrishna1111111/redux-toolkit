import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <></>
          </IconButton>
          <Typography 
            onClick={()=>{navigate("/")}}
           variant="h6" component="div" sx={{ flexGrow: 1,cursor:"pointer" }}>
            CRUD
          </Typography>
          <Button
          onClick={()=>{navigate("/add-new-item")}}
           color="inherit">Add</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}