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
import "../styles/Users.css";

import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProfileSetting = () => {
    const { setLoggedStatusInLogout, username, isLoggedIn } =
    useContext(AuthContext);
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

  const handleUpdatePassword = async () => {
    event.preventDefault();

    if (newPassword !== confirmNewPassword) {
      setPasswordError("Passwords do not match");
      return;
    }
    setPassword(newPassword);
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

  const handleCurrentPasswordChange = (event) => {
    setCurrentPassword(event.target.value);
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };


  const handleConfirmNewPasswordChange = (event) => {
    setConfirmNewPassword(event.target.value);
  };

  const submitFormToDeleteUser = async () => {
    event.preventDefault();
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
    <div className="settingButton">
     <Typography variant="h5" color="primary">Profile Settings</Typography>
      <Button 
        variant="contained"
        color="success"
        onClick={handleUpdatePasswordDialogOpen}
      >
        Update Password
      </Button>
      <Button className="settingButton"
       variant="contained" color="error" onClick={deletingUser}>
        Delete Account
      </Button>

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
              <Button type="submit">
                Update password
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog open={deleteUserDialogOpen} onClose={handleDeleteUserDialogClose}>
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

    </div>
  );
};

export default ProfileSetting;
