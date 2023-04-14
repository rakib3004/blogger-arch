import '../styles/HomePage.css';
import Button from '@mui/material/Button';
import * as React from 'react';


function HomePage() {
  
     return (
        <div  align="center">
            <div><Button variant="contained" onClick={findAllUser}>Get all users</Button> </div>
            <div><Button variant="contained" onClick={findOneUser}>Get one user</Button> </div>
            <div><Button variant="contained" onClick={updateUser}>Update user</Button> </div>
            <div><Button variant="contained" onClick={deleteUser}>Delete user</Button> </div>
            <div><Button variant="contained" onClick={findAllBlog}>Get all blogs</Button></div>
            <div><Button variant="contained" onClick={findOneBlog}>Get one blog</Button></div>
            <div><Button variant="contained" onClick={updateBlog}>Update blog</Button> </div>
            <div><Button variant="contained" onClick={deleteBlog}>Delete blog</Button> </div>

  

    </div>
     );
}

export default HomePage;

