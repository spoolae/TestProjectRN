import React from 'react';
import { Alert, SafeAreaView, StyleSheet, View } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';

interface ProfileRouteProps{
  navigation?:any;
}

export const ProfileRoute = (props:ProfileRouteProps) => {
  
    const logout = () => props.navigation?.navigate("Login")

    return(
      <SafeAreaView>
        <Card style={styles.card}>
          <Card.Content >
            <Text style={styles.content}>Name: Eve</Text>
            <Text style={styles.content}>Email: eve123@gmail.com</Text>
          </Card.Content> 
        </Card>
        <Button mode="contained" style={styles.button}
        onPress={logout}>Logout</Button>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  card:{
    margin: 15
  },
  content:{
    fontSize: 20 
  },
  button:{
    margin: 15
  }
});
