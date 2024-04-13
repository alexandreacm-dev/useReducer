import 'react-native-paper';
import { defaultTheme } from './default-theme';

declare module "react-native-paper" {
    type ThemeType = typeof defaultTheme;

    export interface defaultTheme extends ThemeType { }
}
