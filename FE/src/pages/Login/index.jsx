import * as React from "react";
import { AppProvider } from "@toolpad/core/AppProvider";
import { SignInPage } from "@toolpad/core/SignInPage";
import { useTheme } from "@mui/material/styles";
import axios from "axios";

const providers = [{ id: "credentials", name: "Email and Password" }];

export default function SlotPropsSignIn() {
  const theme = useTheme();

  const handleSignIn = async (provider, formData) => {
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/login",
        {
          username: email,
          password,
        }
      );

      const { token } = response.data;

      localStorage.setItem("authToken", token);
    } catch (error) {
      console.error(
        "Login error:",
        error.response?.data?.message || error.message
      );
      alert(error.response?.data?.message || "Failed to login");
    }
  };

  return (
    <AppProvider theme={theme}>
      <SignInPage
        signIn={(provider, formData) => handleSignIn(provider, formData)}
        slotProps={{
          emailField: { variant: "standard" },
          passwordField: { variant: "standard" },
          submitButton: { variant: "outlined" },
        }}
        providers={providers}
      />
    </AppProvider>
  );
}
