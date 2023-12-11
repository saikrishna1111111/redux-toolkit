import { Box, Button, TextField } from '@mui/material'
import React from 'react'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Form = ({initialData , method}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const initialValues={
        name:"",
        number:"",
        age:""
    }
    console.log(initialData)
    const validate = (values)=>{
        const errors = {}
        var nameRegex = /^[a-zA-Z ]{2,30}$/;
        const ageRegex = /^\S[0-9]{0,3}$/;
        const numberRegex = /^[6789]\d{9}$/;
        if(!values.name){
            errors.name='Name field required'
        }
        // else if(nameRegex.test(values.name)){
        //     errors.name = 'name Invalid'
        // }
        if(!values.number){
            errors.number='number field required'
        }
        // else if(numberRegex.test(values.number)){
        //     errors.number = 'number Invalid'
        // }
        if(!values.age){
            errors.age='age field required'
        }
        // else if(ageRegex.test(values.age)){
        //     errors.age = 'age Invalid'
        // }
        return errors
    }
    const onSubmit = (values)=>{
        dispatch(method(values));
        navigate("/")
    }
    const formik = useFormik({
        initialValues : initialData &&  initialData || initialValues,
        validate,
        onSubmit
    })
  return (
         <Box
            sx={{
                width: "50%",
                maxWidth: '100%',
                margin: "auto"
            }}
        >
            <TextField margin="normal" name='name' value={formik.values.name} fullWidth label="Name" id="Name"   onChange={formik.handleChange} />
            <span>{formik.errors.name && formik.errors.name}</span>
            <TextField margin="normal" name='number' value={formik.values.number} fullWidth label="Number" id="fullWidth"  onChange={formik.handleChange} />
            <span>{formik.errors.number && formik.errors.number}</span>
            <TextField margin="normal" name='age' value={formik.values.age} fullWidth label="Age" id="fullWidth"  onChange={formik.handleChange} />
            <span>{formik.errors.age && formik.errors.age}</span> <br />
            <Button variant="contained" margin="normal" color="success"
            onClick={formik.handleSubmit}
            >
                Save
            </Button>
        </Box>
  )
}

export default Form