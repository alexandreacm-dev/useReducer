import React, { useState } from "react";
import { SafeAreaView, View } from "react-native";
import { Text, TextInput, Button, useTheme, Avatar } from "react-native-paper";

import { SighIn } from "../../services/signing.service";
import { styles } from "./styles";

export default function SignIn() {
  const theme = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSignIn = async () => {
    if (email == "" && password == "") {
      setError("Email and Password is required");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      await SighIn(email.toLowerCase(), password.toLowerCase());
      setIsLoggedIn(true);
      setIsLoading(false);
    } catch (err: any) {
      setError(`${err}`);
      setIsLoading(false);
    }
  };

  const onLogout = () => {
    setEmail("");
    setPassword("");
    setIsLoggedIn(false);
  };

  return (
    <SafeAreaView style={{ flex: 1, margin: 10 }}>
      {isLoggedIn ? (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text variant="headlineLarge">Welcome, {email}</Text>
          <Button mode="contained" onPress={onLogout}>
            <Text style={styles.text} variant="bodyLarge">
              Logout
            </Text>
          </Button>
        </View>
      ) : (
        <>
          <View style={styles.containerLogo}>
            <Avatar.Image
              size={100}
              source={require("../../assets/unlock.jpeg")}
            />
          </View>
          <View style={styles.containerForm}>
            <Text style={{ textAlign: "center" }} variant="headlineMedium">
              Please, Sign In
            </Text>

            <TextInput
              mode="outlined"
              label="Email"
              value={email}
              onChangeText={setEmail}
              style={styles.input}
            />
            <TextInput
              secureTextEntry
              mode="outlined"
              label="Password"
              value={password}
              onChangeText={setPassword}
              style={styles.input}
              error={isLoggedIn}
            />

            {error && (
              <Text style={styles.error} variant="titleSmall">
                {error}
              </Text>
            )}

            <Button mode="contained" onPress={onSignIn}>
              <Text
                style={{ color: theme.colors.text.secondary }}
                variant="bodyLarge"
              >
                {isLoading ? "Loading..." : "Sign In"}
              </Text>
            </Button>
          </View>
        </>
      )}
    </SafeAreaView>
  );
}
