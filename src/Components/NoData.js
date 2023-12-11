import * as React from 'react';
import { styled } from '@mui/material/styles';

const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
  textAlign:'center',
  margin:"200px 0px",
  fontSize:"50px"

}));

export default function NoData() {
  return <Div>{"No Data Available"}</Div>;
}