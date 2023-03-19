import { Pressable, StyleProp, Text, TextStyle, ViewStyle } from "react-native";

interface CustomButtonProps {
    buttonStyle: StyleProp<ViewStyle>
    onPress: () => void
    title: String
    textStyle: StyleProp<TextStyle>
}

export const CustomButton = (props: CustomButtonProps) => {
    return (
        <Pressable style={props.buttonStyle}
            onPress={props.onPress}
        >
            <Text style={props.textStyle}>{props.title}</Text>
        </Pressable>
    )
}