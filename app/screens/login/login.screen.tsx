import { bindActionCreators } from '@reduxjs/toolkit';
import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import { Button, Card, Snackbar, Text, TextInput } from 'react-native-paper';
import { connect } from 'react-redux';
import AuthService from '../../services/AuthService';
import { AppState } from '../../store/App.state';
import { hide, show } from '../../store/loading/loading.actions';
import { LoadingState } from '../../store/loading/LoadingState';
import { recoverPassword, recoverPasswordFail, recoverPasswordReset, recoverPasswordSuccess } from '../../store/login/login.actions';
import { LoginState } from '../../store/login/LoginState';
import { loginForm } from './login.form';
import { loginStyle } from './login.style';


interface LoginScreenProps {
    loadingState: LoadingState;
    loginState: LoginState;
    recoverPassword:Function;
    navigation: any;
    hideLoading: Function;
    showLoading: Function;
    recoverPasswordReset: Function;
    recoverPasswordSuccess: Function;
    recoverPasswordFail: Function;
}

const LoginScreen = (props: LoginScreenProps) => {

    const [recoveryEmail, setRecoveryEmail] = useState("");

    useEffect(() => {
        if(props.loginState.isRecoveringPassword){
            props.showLoading();

            AuthService.recoverPassword(recoveryEmail).then(() => {
                props.recoverPasswordSuccess();
            }).catch(error => {
                props.recoverPasswordFail(error);
            })
        }
        else {
            props.hideLoading();
        }
    }, [props.loginState.isRecoveringPassword])

    const login = () => props.navigation.navigate("Home")
    const register = () => props.navigation.navigate("Register")
    const forgotEmailPassword = (email:string) => {
        setRecoveryEmail(email);
        props.showLoading();
        setTimeout(()=>{
           props.hideLoading(); 
        }, 3000)
    }

    return (
    <SafeAreaView style={loginStyle.content}>
        <View style={loginStyle.view}>
        <Card>
            <Card.Title title="Login Screen" titleStyle={loginStyle.cardTitle}></Card.Title>
            <Card.Content>
                <Formik 
                    initialValues={{email:"",password:""}}
                    onSubmit={login}
                    validationSchema={loginForm}>
                    {({handleSubmit, handleChange, errors, setFieldTouched, touched, values}) => (
                    <>
                        <TextInput 
                            label="Email" 
                            keyboardType="email-address"
                            testID="email"
                            onFocus={() => setFieldTouched('email')}
                            onChangeText={handleChange('email')}>
                        </TextInput>
                        {
                            touched.email && errors.email ?  
                            <Text testID='error-email'>
                                {errors.email}
                            </Text>
                            : null
                        }
                        <TextInput 
                            label="Password" 
                            secureTextEntry={true}
                            testID="password"
                            onFocus={() => setFieldTouched('password')}
                            onChangeText={handleChange('password')}>    
                        </TextInput>
                        {
                            touched.password && errors.password ?  
                            <Text testID='error-password'>
                                {errors.password}
                            </Text>
                            : null
                        }
                        <Button 
                            onPress={() => forgotEmailPassword(values.email)}
                            uppercase={false} 
                            style={loginStyle.cardButton}
                            testID="recoveryButton"
                            disabled={values.email == '' || errors.email ? true : false}>
                            Forgot password?
                        </Button>
                        <Button 
                            mode="contained" 
                            style={loginStyle.cardButton}
                            onPress={handleSubmit}
                            testID="loginButton">
                            Login
                        </Button>
                        <Button 
                            style={loginStyle.cardButton}
                            onPress={register}
                            testID="registerButton">
                            Register
                        </Button>
                    </>
                    )}  
                </Formik>
            </Card.Content>
        </Card>
        </View>
        {
            props.loginState.isRecoveredPassword ? 
            <Snackbar 
                duration={5000}
                visible={true}
                onDismiss={() => props.recoverPasswordReset()}
                testID="recoverPasswordSuccess">
                Recovery email sent
            </Snackbar>
            : null
        }
        {
            props.loginState.error ? 
            <Snackbar 
                duration={5000}
                visible={true}
                onDismiss={() => props.recoverPasswordReset()}
                testID="recoverPasswordFail">
                {props.loginState.error.message}
            </Snackbar>
            : null
        }
       
    </SafeAreaView>
    )
}

const mapStateToProps = (store: AppState) => ({
    loadingState: store.loading,
    loginState: store.login
})

const mapDispatchToProps = (dispatch: any) => (
    bindActionCreators({
        recoverPassword: recoverPassword,
        recoverPasswordFail: recoverPasswordFail,
        recoverPasswordReset: recoverPasswordReset,
        recoverPasswordSuccess: recoverPasswordSuccess,
        hideLoading: hide,
        showLoading: show
    }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);