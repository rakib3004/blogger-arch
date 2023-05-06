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
  Snackbar,
  Alert,
} from "@mui/material";
import {
  getUserByUsername,
  updateUserPassword,
  deleteUser,
} from "../services/UserService";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Profile = () => {
  const { setLoggedStatusInLogout, username, isLoggedIn } = useContext(AuthContext);
  const [user, setUser] = useState(null);
  const [updatePasswordDialogOpen, setUpdatePasswordDialogOpen] =
    useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [deleteUserDialogOpen, setDeleteUserDialogOpen] = useState(false);
  const [deleteUserDialogClose, setDeleteUserDialogClose] = useState(false);
  const [updatePasswordSnackbarOpen, setUpdatePasswordSnackbarOpen] =
    useState(false);
  const [deleteAccountSnackbarOpen, setDeleteAccountSnackbarOpen] =
    useState(false);

  const navigateTo = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      if(!isLoggedIn){
        navigateTo('/login');
      }
      const response = await getUserByUsername(username);
      setUser(response.user);
    };
    fetchData();
  }, []);

  const handleUpdatePassword = async () => {
    event.preventDefault();

    if (newPassword !== confirmNewPassword) {
      setPasswordError("Passwords do not match");
      return;
    }
    setPassword(newPassword);
    const username = user.username;
    const password = newPassword;
    const response = await updateUserPassword(username, password);
    setUpdatePasswordSnackbarOpen(true);
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

  const handleCurrentPasswordChange = () => {
    setCurrentPassword(event.target.value);
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const showAuthorAllBlog = () => {
    navigateTo(`/blogs/author/${user.id}`);
  };
  const handleConfirmNewPasswordChange = (event) => {
    setConfirmNewPassword(event.target.value);
  };

  const submitFormToDeleteUser = async () => {
    event.preventDefault();
    const username = user.username;
    const response = await deleteUser(username);
    setDeleteAccountSnackbarOpen(true);
    setDeleteUserDialogClose(false);
    handleDeleteUserDialogClose();
    setLoggedStatusInLogout();
    navigateTo(`/login`);
  };

  const handleDeleteUserDialogClose = () => {
    setDeleteUserDialogOpen(false);
  };

  const deletingUser = async (UserId) => {
    setDeleteUserDialogOpen(true);
  };

  const handleUpdatePasswordSnackbarClose = (event, action) => {
    if (action === "clickaway") {
      return;
    }
    setUpdatePasswordSnackbarOpen(false);
  };

  const handleDeleteAccountSnackbarClose = (event, action) => {
    if (action === "clickaway") {
      return;
    }
    setDeleteAccountSnackbarOpen(false);
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
          <Button variant="contained" color="secondary" onClick={deletingUser}>
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
            <div>
              <Typography variant="h7" color="error">
                {passwordError}
              </Typography>
            </div>
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
        <DialogTitle>Are you sure to delete this account?</DialogTitle>
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

      <Snackbar
        open={updatePasswordSnackbarOpen}
        autoHideDuration={2000}
        onClose={handleUpdatePasswordSnackbarClose}
      >
        <Alert
          onClose={handleUpdatePasswordSnackbarClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          Password Updated Successfully!
        </Alert>
      </Snackbar>

      <Snackbar
        open={deleteAccountSnackbarOpen}
        autoHideDuration={2000}
        onClose={handleDeleteAccountSnackbarClose}
      >
        <Alert
          onClose={handleDeleteAccountSnackbarClose}
          severity="error"
          sx={{ width: "100%" }}
        >
          Account Deleted Successfully!
        </Alert>
      </Snackbar>
    </>
  );
};

export default Profile;
