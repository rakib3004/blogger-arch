import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography
} from "@mui/material";
import axios from "axios";
import Cookies from "js-cookie";
import jwt_decode from 'jwt-decode';
import { useEffect, useState } from "react";
const baseUrl = "http://localhost:8000/api/v1";
const userRoute = "/users";
const blogRoute = "/blogs";


function Account() {
  const [user, setUser] = useState(null);
  const [updatePasswordDialogOpen, setUpdatePasswordDialogOpen] =
    useState(false);
  const [deleteAccountDialogOpen, setDeleteAccountDialogOpen] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [isUpdatingPassword, setIsUpdatingPassword] = useState(false);
  const [isDeletingAccount, setIsDeletingAccount] = useState(false);
  const [passwordError, setPasswordError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const token = Cookies.get("jwt");
      console.log(token);

      const decodedToken = jwt_decode(token);
      console.log(decodedToken);
      const username = decodedToken.username;
      console.log(username);
      const response = await axios.get(baseUrl + userRoute + `/${username}`);
      console.log(response);
      setUser(response.data.user);
    }
    fetchData();
  }, []);

  function handleUpdatePasswordDialogOpen() {
    setUpdatePasswordDialogOpen(true);
  }

  function handleUpdatePasswordDialogClose() {
    setUpdatePasswordDialogOpen(false);
    setCurrentPassword("");
    setNewPassword("");
    setConfirmNewPassword("");
  }

  async function handleUpdatePassword() {
    event.preventDefault();
    setIsUpdatingPassword(true);
    console.log(user.username, newPassword);
    console.log(baseUrl + userRoute + `/${user.username}`);
    const response = await axios.put(
      baseUrl + userRoute + `/${user.username}`,
      { password: newPassword }
    );
    console.log(response);
    setIsUpdatingPassword(false);
    handleUpdatePasswordDialogClose();
  }

  function handleDeleteAccountDialogOpen() {
    setDeleteAccountDialogOpen(true);
  }

  function handleDeleteAccountDialogClose() {
    setDeleteAccountDialogOpen(false);
  }

  function handleConfirm() {
    if (newPassword !== confirmNewPassword) {
      setPasswordError("Passwords do not match");
      return;
    }

    onConfirm();
  }

  function handleCurrentPasswordChange(event) {
    setCurrentPassword(event.target.value);
  }

  function handleNewPasswordChange(event) {
    setNewPassword(event.target.value);
  }

  function handleConfirmNewPasswordChange(event) {
    setConfirmNewPassword(event.target.value);
  }

  async function handleDeleteAccount() {
    setIsDeletingAccount(true);
    const response = axios.delete(baseUrl + userRoute + `/${user.username}`);

    console.log(response);
    setIsDeletingAccount(false);
    handleDeleteAccountDialogClose();
  }
  return (
    <Card>
      <CardHeader title={user?.username} />
      <CardMedia
        component="img"
        src="/users/h.png"
        height={2}
        width={2}
        alt="Profile"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Email : {user?.email}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Created At: {user ? new Date(user.createdAt).toLocaleString() : "-"}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Updated At: {user ? new Date(user.updatedAt).toLocaleString() : "-"}
        </Typography>
      </CardContent>
      <CardContent>
        <Button
          variant="contained"
          color="primary"
          onClick={handleUpdatePasswordDialogOpen}
        >
          Update Password
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleDeleteAccount}
        >
          Delete Account
        </Button>
      </CardContent>

      <Dialog
        open={updatePasswordDialogOpen}
        onClose={handleUpdatePasswordDialogClose}
      >
        <DialogTitle>Update Password</DialogTitle>
        <DialogContent>
          <form onSubmit={handleUpdatePassword}>
            <TextField
              label="Current password"
              type="password"
              value={currentPassword}
              onChange={handleCurrentPasswordChange}
              margin="normal"
              required
              fullWidth
            />
            <TextField
              label="New password"
              type="password"
              value={newPassword}
              onChange={handleNewPasswordChange}
              margin="normal"
              required
              fullWidth
            />
            <TextField
              label="Confirm new password"
              type="password"
              value={confirmNewPassword}
              onChange={handleConfirmNewPasswordChange}
              margin="normal"
              required
              fullWidth
            />
            <DialogActions>
              <Button onClick={handleUpdatePasswordDialogClose}>Cancel</Button>
              <Button type="submit" disabled={isUpdatingPassword}>
                Update password
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </Card>
  );
}

export default Account;
