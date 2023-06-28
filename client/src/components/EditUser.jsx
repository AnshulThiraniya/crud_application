import { FormControl, FormGroup, InputLabel, Input,Typography, Button } from '@mui/material'
import React from 'react'
import { useState,useEffect } from 'react'

import {useNavigate,useParams} from 'react-router-dom'
import { editUser ,getUser} from '../service/api'
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



const EditUser = () => {
    

    const navigate=useNavigate();

    useEffect(()=>{
        loadUserDetails();
    },[]);
      
    const {id}=useParams();

    const loadUserDetails=async()=>{
        const response=await getUser(id);
        setUser(response.data);
    }

     const [user , setUser]=useState(deafultvalue);

    const onValueChange=(e)=>{
        setUser({...user , [e.target.name] : e.target.value});
        console.log(user);
    }
    
    const Edituserdetails= async()=>{
          await editUser(user,id);
          navigate('/all');
    }
    return (
        <FormGroup style={{width:'50%',margin:'auto'}}>
            <Typography variant="h4">Edit User</Typography>
        <FormControl className="form" style={styles.form}>
            <InputLabel>Name</InputLabel>
            <Input onChange={(e)=>onValueChange(e)}  name="name" value={user.name}/>
        </FormControl>
        <FormControl className="form" style={styles.form}>
            <InputLabel>UserName</InputLabel>
            <Input  onChange={(e)=>onValueChange(e)}  name="username" value={user.username}/>
        </FormControl>
        <FormControl className="form" style={styles.form}>
            <InputLabel>Email</InputLabel>
            <Input  onChange={(e)=>onValueChange(e)}  name="email" value={user.email}/>
        </FormControl>
        <FormControl className="form" style={styles.form}>
            <InputLabel>Phon</InputLabel>
            <Input  onChange={(e)=>onValueChange(e)}  name="phone" value={user.phone}/>
        </FormControl>
        <FormControl className="form" style={styles.form}>
        <Button variant="contained"  onClick={()=>Edituserdetails()}>Edit User</Button>
        </FormControl>
        </FormGroup>
    )
}

export default EditUser
