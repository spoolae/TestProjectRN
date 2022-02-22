import { AppState } from "./App.state";


export const AppInitialState: AppState = {
    loading: {
        show: false
    },
    login: {
        error: null,
        isLoggedIn: false,
        isLoggingIn: false,
        isRecoveredPassword: false,
        isRecoveringPassword: false
    }
}