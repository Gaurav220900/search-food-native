import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';
const SearchScreen = () => {

    const [term, setTerm] = useState('');
    const [getSearchResults, results, errMsg] = useResults();
   
    const filterPriceBased = (price) => {
        return results.filter(result => {
            return result.price === price;
        });
    }
    
    return (
        <>
            <SearchBar 
            term={term} 
            onChangeText={(newTerm)=> setTerm(newTerm)}
            onSubmit = {() => getSearchResults(term)}
        />
            {errMsg ? <Text>{errMsg}</Text> : null}
            
            <ScrollView>
                <ResultsList  results={filterPriceBased('$')} title='Cost Effective'/>
                <ResultsList  results={filterPriceBased('$$')} title='Bit Pricer'/>
                <ResultsList   results={filterPriceBased('$$$')} title='Big Spender!'/>
            </ScrollView>
        </>
    )
}

export default SearchScreen;