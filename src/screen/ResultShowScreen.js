import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, FlatList,Image } from "react-native";
import yelp from "../api/yelp";
import {useNavigation} from '@react-navigation/native'

const ResultShowScreen = ( {route}) => {
    
    const {id} = route.params;
    const [Result, setResult] = useState(null);

    const getResult = async (id) =>{
        const response = await yelp.get(`/${id}`)
        setResult(response.data);
    };

    useEffect(()=> {
        getResult(id);
    }, []);

    if(Result == null)
        return null;
    
    return (
        <View>
            <Text>{Result.name}</Text>
        <FlatList 
            data = {Result.photos}
            keyExtractor={(photo) => photo}
            renderItem={({item}) => {
                return <Image style={{width: 150, height: 150, margin: 15}} source = {{uri: item}}
                />
            }}
        />
        </View>
    )
};

const styles = StyleSheet.create({});

export default ResultShowScreen;