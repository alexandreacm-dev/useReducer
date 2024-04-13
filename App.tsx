import React from "react";
import { StyleSheet } from "react-native";
import ThemeProvider from "./src/components/ThemeProvider";

import SignIn from "./src/screens/SignIn";
import CustomSignIn from "./src/screens/CustomSignIn";

export default function App() {
  return (
    <>
      <ThemeProvider>
        <CustomSignIn />
      </ThemeProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});
