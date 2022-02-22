import React from 'react';
import { Appbar } from 'react-native-paper';

interface HeaderComponentParams {
    title:string;
    navigation?:any;
}

export const HeaderComponent = (props: HeaderComponentParams) => {

    const goBack = () => props.navigation?.goBack();

    return(
        <Appbar>
            <Appbar.BackAction onPress={goBack}/>
            <Appbar.Content title={props.title}/>
        </Appbar>
    )
}

