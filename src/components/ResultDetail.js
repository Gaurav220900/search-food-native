import React from "react";
import { View, Text,Image, StyleSheet} from 'react-native';

const ResultDetail = ({result}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: result.image_url}} />
            <Text style={styles.name}>{result.name}</Text>
            <Text>{result.rating} stars , {result.review_count} rating</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container : {
        marginLeft: 15,
        
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 5,
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16
    }
});

export default ResultDetail;