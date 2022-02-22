import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { Appbar, Button, TextInput } from 'react-native-paper';
import { HeaderComponent } from '../../compoments/header/header.component';
import { registerStyle } from './register.stlyle';

interface RegisterScreenProps{
    navigation: any;
}

export const RegisterScreen = (props: RegisterScreenProps) => {

    const register = () => props.navigation.navigate("Home")

    return (
        <SafeAreaView>
            <ScrollView>
                <HeaderComponent title="Register" navigation={props.navigation}/>
                <View style={registerStyle.content}>
                    <TextInput label="Name"/>
                    <TextInput label="Email" keyboardType="email-address"/>
                    <TextInput label="Password" secureTextEntry={true} right={<TextInput.Icon name="eye-off-outline" color={registerStyle.icon.color}/>}/>
                    <TextInput label="Confirm password" secureTextEntry={true} right={<TextInput.Icon name="eye-off-outline" color={registerStyle.icon.color}/>}/>
                    <TextInput label="Phone number" keyboardType="phone-pad"/>
                    <Button mode="contained" style={registerStyle.button}
                    onPress={register}>Register</Button>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
