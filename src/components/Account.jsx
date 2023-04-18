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
  Typography,
} from "@mui/material";
import axios from "axios";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
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
    const fetchData = async () => {
      const token = Cookies.get("jwt");
      console.log(token);

      const decodedToken = jwt_decode(token);
      console.log(decodedToken);
      const username = decodedToken.username;
      console.log(username);
      const response = await axios.get(baseUrl + userRoute + `/${username}`);
      console.log(response);
      setUser(response.data.user);
    };
    fetchData();
  }, []);

  const handleUpdatePasswordDialogOpen = () => {
    setUpdatePasswordDialogOpen(true);
  };

  const handleUpdatePasswordDialogClose = () => {
    setUpdatePasswordDialogOpen(false);
    setCurrentPassword("");
    setNewPassword("");
    setConfirmNewPassword("");
  };

  const handleUpdatePassword = async () => {
    event.preventDefault();
    setIsUpdatingPassword(false);
    handleConfirm();
    console.log(user.username, password);
    console.log(baseUrl + userRoute + `/${user.username}`);
    console.log(currentPassword, newPassword, confirmNewPassword, password);
    try {
      const response = await axios.put(
        baseUrl + userRoute + `/${user.username}`,
        { password: newPassword },
        { withCredentials: true }
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }

    setIsUpdatingPassword(false);
    handleUpdatePasswordDialogClose();
  };

  const handleDeleteAccountDialogOpen = () => {
    setDeleteAccountDialogOpen(true);
  }

  const handleDeleteAccountDialogClose = () => {
    setDeleteAccountDialogOpen(false);
  }

  const handleConfirm = () => {
    if (newPassword !== confirmNewPassword) {
      setPasswordError("Passwords do not match");
      return;
    }
    setPassword(newPassword);
  }

  const handleCurrentPasswordChange = () => {
    setCurrentPassword(event.target.value);
  }

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  }

  const handleConfirmNewPasswordChange= (event) => {
    setConfirmNewPassword(event.target.value);
  }

  const handleDeleteAccount= async () => {
    setIsDeletingAccount(true);
    const response = axios.delete(baseUrl + userRoute + `/${user.username}`, {
      withCredentials: true,
    });

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
              <Button type="submit" /*disabled={isUpdatingPassword}*/>
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
