import React from "react";
import {
  ThemeProvider as DefaultThemeProvider,
  MD3LightTheme,
} from "react-native-paper";
import { defaultTheme } from "../../styles/theme/default-theme";

type Props = {
  children: React.ReactNode;
};

export default function ThemeProvider({ children }: Props) {
  return (
    <DefaultThemeProvider theme={defaultTheme}>{children}</DefaultThemeProvider>
  );
}
