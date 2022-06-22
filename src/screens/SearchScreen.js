import React, {useState} from "react";
import {ScrollView, StyleSheet, Text} from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = ({navigation}) => {
    const [term, setTerm] = useState("");
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        });
    };

    return (
        <>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text style={styles.errorStyle}>{errorMessage}</Text> : null}

            <ScrollView>
                <ResultsList navigation={navigation} title={"Cost Effective"} results={filterResultsByPrice('$')}/>
                <ResultsList navigation={navigation} title={"Bit Pricier"} results={filterResultsByPrice('$$')}/>
                <ResultsList navigation={navigation} title={"Big Spender"} results={filterResultsByPrice('$$$')}/>
                <ResultsList navigation={navigation} title={"Really Fancy"} results={filterResultsByPrice('$$$$')}/>
            </ScrollView>

        </>
    );
};

const styles = StyleSheet.create({
    errorStyle: {
        color: "red",
        marginLeft: 15,
    },
    text: {
        marginLeft: 15,
        marginBottom: 10
    }
});

export default SearchScreen;
