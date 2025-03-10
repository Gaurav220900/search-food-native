import { useEffect,useState } from "react";
import yelp from "../api/yelp";


const useResults = () => {
const [results, setResults] = useState([]);
const [errMsg, setErrMsg] = useState('');

    const getSearchResults = async (searchTerm) => {
        console.log('in api call request');
        try{
            const response = await yelp.get('/search',{
                params: {
                    limit: 50,
                    term: 'searchTerm',
                    location: 'san josh'
                }
            });
            setResults(response.data.businesses);
            setErrMsg('');
            //console.log(results);
        }catch(err){
            console.log(err);
            setErrMsg('Something went wrong');
        }

        
    };

    useEffect(()=> {getSearchResults('pasta')},[]);

    return [getSearchResults,results,errMsg];
        
};

export default useResults;
    