import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

interface AppBarProps {
    title: String,
    backGroundColor?: string
}

export const AppBar = (props: AppBarProps) => {
    const { title, backGroundColor } = props
    const appBarColor = backGroundColor ?? "#093299"
    return (<View style={[appbarStyles.container, { backgroundColor: appBarColor }]}>
        {/* <TouchableHighlight style={appbarStyles.backButton} onPress={() => {}}>
       <Icon name="md-arrow-round-back" size={16} color="#000" />
      </TouchableHighlight> */}

        {/* <TouchableOpacity onPress={() => { }} style={{
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
      }}>
        <Text style={{
          fontSize: 18,
          color: "#fff",
          fontWeight: "bold",
          alignSelf: "center",
          textTransform: "uppercase"
        }}>title</Text>
      </TouchableOpacity> */}
        <Text numberOfLines={1} ellipsizeMode='head' style={appbarStyles.title}>{title}</Text>
    </View>)
}


const appbarStyles = StyleSheet.create({
    container: {
        height: 56,
        justifyContent: "center",
        shadowColor: "black",
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 6,
        shadowOpacity: .3,
    },
    title: {
        textAlign: "left",
        color: "#fcfcfc",
        fontSize: 20,
        paddingStart: 16,
        fontWeight: "500",

    }, backButton: {
        paddingLeft: 10,
        paddingRight: 10,
    },
})