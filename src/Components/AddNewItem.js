import * as React from 'react';
import { post } from '../ReduxToolkit/slice/CRUDSlice';
import Form from './Form';
export default function AddNewItem() {

    return (
        <Form method= {post} />
    );
}