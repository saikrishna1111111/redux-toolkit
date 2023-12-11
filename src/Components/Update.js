import * as React from 'react';
import {  useSelector } from 'react-redux';
import { update } from '../ReduxToolkit/slice/CRUDSlice';
import Form from './Form';
import { useParams } from 'react-router-dom';
export default function Update() {

    const {itemId} = useParams()
    const items =  useSelector(React.useCallback((state)=>state.items[itemId]),[])

    return (
        <Form method ={update} initialData = {items}/>
    );
}