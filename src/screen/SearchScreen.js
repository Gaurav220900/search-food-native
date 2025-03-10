import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';
const SearchScreen = () => {

    const [term, setTerm] = useState('');
    const [getSearchResults, results, errMsg] = useResults();
    
    return (
        <View>
            <SearchBar 
            term={term} 
            onChangeText={(newTerm)=> setTerm(newTerm)}
            onSubmit = {() => getSearchResults(term)}
        />
            {errMsg ? <Text>{errMsg}</Text> : null}
            <Text>Your Search has {results.length} results</Text>
            <ResultsList title='Cost Effective'/>
            <ResultsList title='Bit Pricer'/>
            <ResultsList title='Big Spender!'/>
        </View>
    )
}

export default SearchScreen;