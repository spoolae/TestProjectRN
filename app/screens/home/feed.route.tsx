import React, {useEffect, useState} from "react";
import { FlatList, Image, StyleSheet } from "react-native";
import { ActivityIndicator, Card, Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

interface TestRouteProps {
    item: any
}

export function FeedRoute() {
    const[data, setData] = useState([])
    const[isLoading, setIsLoading] = useState(false)
    const[pageCurrent, setPageCurrent] = useState(1)

    useEffect(() => {  
        setIsLoading(true)
        getData()
        // return() => {      
        // }
    }, [pageCurrent])

    const getData = async () => {
         const apiURL = `https://picsum.photos/v2/list?limit=5&page=${pageCurrent}`
         fetch(apiURL).then((res) => res.json())
         .then((resJson) => {
             setData(data.concat(resJson))
             setIsLoading(false)
         })
        
    }

    const renderItem = ({item}:TestRouteProps) => {
        return(
            <SafeAreaView>
                <Card style={styles.card}>
                    <Card.Cover source={{uri:item.download_url}}/>
                    <Card.Title
                    title={item.author}
                />
           </Card>
            </SafeAreaView>
        )
    }
    
    const renderFooter = () => {
        return (
            isLoading ? 
            <SafeAreaView>
                <ActivityIndicator size="small" style={styles.footer}/>
            </SafeAreaView>
            : null
        )
    }

    const handleLoadMore = () => {
        setPageCurrent(pageCurrent + 1)
        setIsLoading(true)
    }

    return(

        <SafeAreaView>
            <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item,index)=>index.toString()}
            ListFooterComponent={renderFooter}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0.01}
           // refreshing={isLoading}
            onRefresh={getData}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    card:{
      margin: 10,
      borderRadius: 15, 
    },
    footer:{
        margin: 10
    }
  });
