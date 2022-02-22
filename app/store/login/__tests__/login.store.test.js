const { recoverPasword } = require("../login.actions")

describe('Login store', () => {

    it('recoverPassword', () => {
        const initialState = {...AppInitialState};
        const newState = loginReducer(initialState, recoverPasword());

        expect(newState).toEqual({
            ...initialState,
            error: null,
            isRecoveredPassword: false,
            isRecoveringPassword: true
        })
    })

    it('recoverPasswordSuccess', () => {
        const initialState = {
            ...AppInitialState.login,
            isRecoveringPassword: true}
        const newState = loginReducer(initialState, recoverPaswordSuccess());

        expect(newState).toEqual({
            ...initialState,
            error: null,
            isRecoveredPassword: true,
            isRecoveringPassword: false
        })
    })

    it('recoverPasswordFail', () => {
        const initialState = {...AppInitialState.login,
            isRecoveringPassword: true};
        const error = {message: 'error'};
        const newState = loginReducer(initialState, recoverPaswordFail(error));

        expect(newState).toEqual({
            ...initialState,
            error,
            isRecoveredPassword: false,
            isRecoveringPassword: false
        })
    })

    it('recoverPasswordReset', () => {
        const initialState = {...AppInitialState.login,
            error: {error: 'message'},
            isRecoveredPassword: true,
            isRecoveringPassword: true
        };

        const newState = loginReducer(initialState, recoverPasswordReset());

        expect(newState).toEqual({
            ...initialState.login
        })
    })

})