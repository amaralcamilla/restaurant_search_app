import React from "react";
import {FlatList, StyleSheet, Text, View} from "react-native";

const ResultsList = ({title, results}) => {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal={true}
                data={results}
                keyExtractor={(result) => {
                    result.id
                }}
                renderItem={({item}) => {
                    return <Text>{item.name}</Text>
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default ResultsList;
