import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import {Feather} from '@expo/vector-icons'
const SearchBar = ({term, onChangeText, onSubmit}) => {

    return (
        <View style = {styles.background}>
            <Feather style={styles.iconStyle} name="search"  size={30}/>
            <TextInput style={styles.inputStyle} 
            autoCapitalize="none"
            autoCorrect={false}
            value={term}
            onChangeText={onChangeText}
            onEndEditing={onSubmit}
            placeholder="search"/>
        </View>
    )
};

const styles = StyleSheet.create({
    background : {
        backgroundColor: 'lightgray',
        height: 50,
        borderRadius: 8,
        margin: 20,
        flexDirection: 'row'
    },
    inputStyle : {
        flex: 1,
        fontSize: 20
    },
    iconStyle : {
        fontSize: 35,
        marginHorizontal: 20,
        alignSelf: 'center'
    }
})

export default SearchBar;