import { FormControl, FormGroup, InputLabel, Input,Typography, Button } from '@mui/material'
import React from 'react'
import { useState } from 'react'

import {useNavigate} from 'react-router-dom'
import { addUser } from '../service/api'

const styles={
    form:{
        marginTop:'20px'
    }
}

const deafultvalue={
    name:'',
    email:'',
    username:'',
    phone:''
}



const AddUser = () => {
    

    const navigate=useNavigate();

     const [user , setUser]=useState(deafultvalue);
     
    const onValueChange=(e)=>{
        setUser({...user , [e.target.name] : e.target.value});
        console.log(user);
    }
    
    const Adduserdetails= async()=>{
          await addUser(user);
          navigate('/all');
    }
    return (
        <FormGroup style={{width:'50%',margin:'auto'}}>
            <Typography variant="h4">Add User</Typography>
        <FormControl className="form" style={styles.form}>
            <InputLabel>Name</InputLabel>
            <Input onChange={(e)=>onValueChange(e)}  name="name"/>
        </FormControl>
        <FormControl className="form" style={styles.form}>
            <InputLabel>UserName</InputLabel>
            <Input  onChange={(e)=>onValueChange(e)}  name="username"/>
        </FormControl>
        <FormControl className="form" style={styles.form}>
            <InputLabel>Email</InputLabel>
            <Input  onChange={(e)=>onValueChange(e)}  name="email"/>
        </FormControl>
        <FormControl className="form" style={styles.form}>
            <InputLabel>Phon</InputLabel>
            <Input  onChange={(e)=>onValueChange(e)}  name="phone"/>
        </FormControl>
        <FormControl className="form" style={styles.form}>
        <Button variant="contained"  onClick={()=>Adduserdetails()}>Add Uccser</Button>
        </FormControl>
        </FormGroup>
    )
}

export default AddUser
