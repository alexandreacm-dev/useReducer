import { MD3LightTheme as DefaultTheme } from 'react-native-paper';

const palette = {
    PRIMARY: '#161621',
    SECONDARY: '#C4C4C4',
    PRIMARY_900: '#f38c1d',
    PRIMARY_800: "#F3F3F3",
    PRIMARY_700: "#38A69D",
    PRIMARY_600: '#D0421B',
    PRIMARY_500: "#a1a1a1",
    SECONDARY_900: '#FFFFFF',
    SUCCESS: '#138000',
    BUTTON: "#0C8CE9",
    HOME_PRIMARY_900: '#0a2034',
    HOME_PRIMARY_800: '#37a8a1'
}

export const defaultTheme = {
    ...DefaultTheme,
    //TOKENS
    colors: {
        ...DefaultTheme.colors,
        ui: {
            primary: palette.PRIMARY,
            secondary: palette.PRIMARY_900,
        },
        text: {
            secondary: palette.SECONDARY_900
        },
        buttons: {}
    },
    fonts_weight: {
        regular: 400,
        medium: 500,
        bold: 700,
    },
    fonts_size: {
        caption: '12px',
        button: '14px',
        body: '16px',
        title: '20px',
    },
    sizes: ['8px', '16px', '32px', '64px', '128px'],
    spaces: ['0px', '4px', '8px', '16px', '32px', '64px']
}