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
  Avatar,
} from "@mui/material";
import axios from "axios";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";
import { getBlogByAuthorId } from "../services/BlogService";
import {
  getUserByUsername,
  updateUserPassword,
  deleteUser,
} from "../services/UserService";
import { useNavigate } from "react-router-dom";

function Account() {
  const [user, setUser] = useState(null);
  const [updatePasswordDialogOpen, setUpdatePasswordDialogOpen] =
    useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [isUpdatingPassword, setIsUpdatingPassword] = useState(false);
  const [passwordError, setPasswordError] = useState(null);
  const [deleteUserDialogOpen, setDeleteUserDialogOpen] = useState(false);
  const [deleteUserDialogClose, setDeleteUserDialogClose] = useState(false);

  const nevigateTo = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const token = Cookies.get("jwt");
      const decodedToken = jwt_decode(token);
      const username = decodedToken.username;
      const response = await getUserByUsername(username);
      setUser(response.user);
    };
    fetchData();
  }, []);

  const handleUpdatePassword = async () => {
    event.preventDefault();
    setIsUpdatingPassword(false);
    handleConfirm();

    const username = user.username;
    const password = newPassword;
    const response = await updateUserPassword(username, password);

    setIsUpdatingPassword(false);
    handleUpdatePasswordDialogClose();
  };

  const handleUpdatePasswordDialogOpen = () => {
    setUpdatePasswordDialogOpen(true);
  };

  const handleUpdatePasswordDialogClose = () => {
    setUpdatePasswordDialogOpen(false);
    setCurrentPassword("");
    setNewPassword("");
    setConfirmNewPassword("");
  };

  const handleConfirm = () => {
    if (newPassword !== confirmNewPassword) {
      setPasswordError("Passwords do not match");
      return;
    }
    setPassword(newPassword);
  };

  const handleCurrentPasswordChange = () => {
    setCurrentPassword(event.target.value);
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const showAuthorAllBlog = () => {
    nevigateTo(`/blogs/author/${user.id}`);
  };
  const handleConfirmNewPasswordChange = (event) => {
    setConfirmNewPassword(event.target.value);
  };

  const submitFormToDeleteUser = async () => {
    event.preventDefault();
    const username = user.username;
    const response = await deleteUser(username);
    setDeleteUserDialogClose(false);
    handleDeleteUserDialogClose();
    nevigateTo(`/login`);
  };

  const handleDeleteUserDialogClose = () => {
    setDeleteUserDialogOpen(false);
  };

  const deletingUser = async (UserId) => {
    setDeleteUserDialogOpen(true);
  };



  return (
    <>
      <Card>
        <CardContent>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Avatar alt="User" src="/user.png" />
            <CardHeader title={user?.username} />
          </div>
          <Typography variant="body2" color="textSecondary" component="p">
            Email : {user?.email}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Created At: {user ? new Date(user.createdAt).toLocaleString() : "-"}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Updated At: {user ? new Date(user.updatedAt).toLocaleString() : "-"}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={showAuthorAllBlog}
          >
            Show Blogs
          </Button>
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
            onClick={deletingUser}
          >
            Delete Account
          </Button>
        </CardContent>
      </Card>

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

      <Dialog open={deleteUserDialogOpen} onClose={deleteUserDialogClose}>
        <DialogTitle>Are you sure to delete this Account?</DialogTitle>
        <DialogContent>
          <form onSubmit={submitFormToDeleteUser}>
            <DialogActions>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleDeleteUserDialogClose}
              >
                Cancel
              </Button>
              <Button variant="contained" color="primary" type="submit">
                Delete Account
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default Account;
