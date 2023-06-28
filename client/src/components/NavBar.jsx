import React from 'react'
import {AppBar,Toolbar} from '@mui/material';
import { NavLink } from 'react-router-dom';




const styles={

appbar:{
    backgroundColor:"black",
    position:"static"
},

tools:{
 fontSize:"20px",
 marginRight:"50px",
 color:"white",
 textDecoration:"none"
}


};

const NavBar = () => {
  return (
    <div>
      <AppBar className='appbar' style={styles.appbar}>
        <Toolbar >
            <NavLink to="/" className='tools' style={styles.tools}>Myclint data</NavLink>
            <NavLink to="/all" className='tools' style={styles.tools}>All users</NavLink>
            <NavLink to="/add" className='tools' style={styles.tools}>Add user</NavLink>
            
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar
