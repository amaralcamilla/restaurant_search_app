import React, {useEffect, useState} from "react";
import {FlatList, Image, StyleSheet, Text, View} from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({navigation}) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    console.log(result);

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };
    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{result.name}</Text>
            <Text style={styles.info}>Price: {result.price}</Text>
            <Text style={styles.info}>Rating: {result.rating} | Reviews: {result.review_count}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({item}) => {
                    return <Image style={styles.image} source={{uri: item}}/>
                }}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf: "flex-start",
        marginTop: 15,
        marginLeft: 15
    },
    info: {
        alignSelf: "flex-start",
        marginLeft: 15
    },
    image: {
        width: 320,
        height: 220,
        margin: 6
    }
});

export default ResultsShowScreen;