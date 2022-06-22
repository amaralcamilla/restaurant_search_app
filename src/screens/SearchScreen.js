import React, {useState} from "react";
import {ScrollView, StyleSheet, Text, View} from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
    const [term, setTerm] = useState("");
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        });
    };

    return (
        <View style={{flex: 1}}>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text style={styles.errorStyle}>{errorMessage}</Text> : null}
            <Text>We have found {results.length} results.</Text>
            <ScrollView>
                <ResultsList title={"Cost Effective"} results={filterResultsByPrice('$')}/>
                <ResultsList title={"Bit Pricier"} results={filterResultsByPrice('$$')}/>
                <ResultsList title={"Big Spender"} results={filterResultsByPrice('$$$')}/>
                <ResultsList title={"Really Fancy"} results={filterResultsByPrice('$$$$')}/>
            </ScrollView>

        </View>
    );
};

const styles = StyleSheet.create({
    errorStyle: {
        color: "red",
    }
});

export default SearchScreen;
