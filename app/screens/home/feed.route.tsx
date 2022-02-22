import React from 'react';
import { FlatList, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';

const images: number[] = [1,2,3,4,5];

export const FeedRoute = () => {
    return(
      <SafeAreaView>
           <FlatList 
           data={images}
           keyExtractor={(item, index) => `images${index}`}
           renderItem={({item, index}) => 
           <Card style={styles.card}>
              <Card.Cover source={{uri:"https://picsum.photos/500/500"}}/>
              <Card.Title
                  title="Paul Jarvis"
              />
           </Card>
           }>
           </FlatList>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  card:{
    margin: 10,
    borderRadius: 15, 
  }
});