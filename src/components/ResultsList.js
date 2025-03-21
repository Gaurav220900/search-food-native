import React from "react";
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import ResultDetail from "./ResultDetail";
const ResultsList = ({title,results}) => {

    const navigation = useNavigation();

    if(!results.length)
        return null;
    return (
        <View style={styles.container}>
        <Text style = {styles.title}>{title}</Text>
        <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        data = {results}
        keyExtractor={results.id}
        renderItem={({item}) => {
            return (
                <TouchableOpacity onPress={() => navigation.navigate('Result', {id: item.id})}>
                    <ResultDetail result={item} />
                </TouchableOpacity>
            )
        }}
        />
    </View>
    )
};


const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container : {
        marginBottom: 10
    }
});

export default ResultsList;