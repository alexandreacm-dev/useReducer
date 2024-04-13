
export interface IReducerType {
    email: string;
    password: string;
    error: string;
    isLoggedIn: boolean;
    isLoading: boolean;
}

export type AppState = {
    email: string;
    password: string;
    error: string;
    isLoggedIn: boolean;
    isLoading: boolean;
};

export type AppAction = {
    type: string;
    payload: any;
};