import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Pressable } from 'react-native';
import { CustomButton } from '../CustomViews/CustomButton';



export const UseEffectView = () => {

    // const [endPoint, setEndPoint] = useState("posts");
    const [endPoint, setEndPoint] = useState(() => {
        return "posts"
    });
    const [fetchedData, setfetchedData] = useState("");

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${endPoint}`)
            .then(response => response.json())
            .then(json => {
                console.log(json)
                setfetchedData(JSON.stringify(json))
            })
        return () => {
            console.log("disconnected")
        }
    }, [endPoint])

    return (
        <View>
            <Text style={styles.headingstyle}>useEffect</Text>
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>{endPoint}</Text>
                <Text style={styles.fetchedtextStyle}>{fetchedData}</Text>

                <View style={styles.buttonViewsStyle}>
                    <CustomButton buttonStyle={styles.buttonStyle}
                        textStyle={styles.buttonTextStyle}
                        onPress={() => {
                            setEndPoint("posts");
                        }} title="posts" />
                    <CustomButton buttonStyle={styles.buttonStyle}
                        textStyle={styles.buttonTextStyle}
                        onPress={() => {
                            setEndPoint("users");
                        }} title="users" />
                    <CustomButton buttonStyle={styles.buttonStyle}
                        textStyle={styles.buttonTextStyle}
                        onPress={() => {
                            setEndPoint("comments");
                        }} title="comments" />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headingstyle: {
        fontSize: 40,
        fontWeight: "600"
    },
    viewStyle: {
        alignItems: "center"
    },
    textStyle: {
        alignSelf: 'center',
        paddingVertical: 16,
        fontSize: 60
    },
    fetchedtextStyle: {
        alignSelf: 'center',
        paddingVertical: 16,
        fontSize: 12
    },
    buttonViewsStyle: {
        flexDirection: "row"
    },
    buttonStyle: {
        alignContent: 'center',
        backgroundColor: 'blue',
        height: 40,
        width: 80,
        justifyContent: "center",
        margin: 20
    },
    buttonTextStyle: {
        fontSize: 16,
        color: 'white',
        alignSelf: "center"
    }
});
