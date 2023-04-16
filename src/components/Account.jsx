import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  TextField,
  CircularProgress,
  Avatar
} from '@mui/material';
const baseUrl = 'http://localhost:8000/api/v1';
const userRoute = '/users';
const blogRoute = '/blogs';

function Account() {
  const [user, setUser] = useState(null);
  const [updatePasswordDialogOpen, setUpdatePasswordDialogOpen] = useState(false);
  const [deleteAccountDialogOpen, setDeleteAccountDialogOpen] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [isUpdatingPassword, setIsUpdatingPassword] = useState(false);
  const [isDeletingAccount, setIsDeletingAccount] = useState(false);

  useEffect(() => {
    async function fetchData(){
        const response =  await axios.get(baseUrl+userRoute);
        console.log(response.data[0].user);
        setUser(response.data[0].user);
    }
fetchData();
  }, []);

  function handleUpdatePasswordDialogOpen() {
    setUpdatePasswordDialogOpen(true);
  }

  function handleUpdatePasswordDialogClose() {
    setUpdatePasswordDialogOpen(false);
    setCurrentPassword('');
    setNewPassword('');
    setConfirmNewPassword('');
  }

  function handleUpdatePassword() {
    setIsUpdatingPassword(true);
    axios.put('/api/user/password', { currentPassword, newPassword })
      .then(response => {
        console.log(response);
        setIsUpdatingPassword(false);
        handleUpdatePasswordDialogClose();
      })
      .catch(error => {
        console.error(error);
        setIsUpdatingPassword(false);
      });
  }

  function handleDeleteAccountDialogOpen() {
    setDeleteAccountDialogOpen(true);
  }

  function handleDeleteAccountDialogClose() {
    setDeleteAccountDialogOpen(false);
  }

  function handleDeleteAccount() {
    setIsDeletingAccount(true);
    // Implement delete account logic using Axios
    axios.delete('/api/user')
      .then(response => {
        console.log(response);
        setIsDeletingAccount(false);
        handleDeleteAccountDialogClose();
      })
      .catch(error => {
        console.error(error);
        setIsDeletingAccount(false);
      });
  }
  return (
    <Card>
      <CardHeader
        title={user?.username}
      />
       <CardMedia
        component="img"
         src="/users/h.png" height={2} width={2}
        alt="Profile"
      /> 
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Email : {user?.email}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Created At: {user ? new Date(user.createdAt).toLocaleString() : '-'}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Updated At: {user ? new Date(user.updatedAt).toLocaleString() : '-'}
        </Typography>
      </CardContent>
      <CardContent>
        <Button variant="contained" color="primary" onClick={handleUpdatePasswordDialogOpen}>
          Update Password
        </Button>
        <Button variant="contained" color="secondary" onClick={handleDeleteAccount}>
          Delete Account
        </Button>
      </CardContent>
    </Card>
  );
};

export default Account;