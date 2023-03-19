import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Pressable } from 'react-native';
import { CustomButton } from '../CustomViews/CustomButton';

function initialCountValue() {
  console.log("is Rendenring ?")
  return 0
}

export const UseStateView = () => {
  /// [THIS RUNS EVERY TIME WHEN VIEW IS RERENDERED]
  // const [count, setCount] =  useState(0);
  /// [LETS SEE IN ANOTHER WAY]
  /// [THIS ALSO HAS SAME RESULT]
  // const [count, setCount] =  useState(initialCountValue());
  /// [SO] 
  const [count, setCount] = useState(() => {
    console.log("is Rendenring ?")
    return 0
  });

  useEffect(() => {
    console.log(count);
    return () => {
      console.log("disconnected")
    }
  }, [count])

  return (
    <View>
      <Text style={styles.headingstyle}>useState</Text>
      <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{count}</Text>

      <View style={styles.buttonViewsStyle}>
        <CustomButton buttonStyle={styles.buttonStyle}
          textStyle={styles.buttonTextStyle}
          onPress={() => {
            setCount(previousCount => previousCount + 1);
          }} title="+" />
        <View style={{ paddingHorizontal: 40 }} />
        <CustomButton buttonStyle={styles.buttonStyle}
          textStyle={styles.buttonTextStyle}
          onPress={() => {
            setCount(previousCount => previousCount - 1);
          }} title="-" />
      </View>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headingstyle:{
    fontSize:40,
    fontWeight:"600"
  },
  viewStyle: {
    alignItems: "center"
  },
  textStyle: {
    alignSelf: 'center',
    paddingVertical: 16,
    fontSize: 60
  },
  buttonViewsStyle: {
    flexDirection: "row"
  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    elevation: 3,
    backgroundColor: 'blue',
    height: 80,
    width: 80,
    borderRadius: 40
  },
  buttonTextStyle: {
    fontSize: 26,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    alignSelf: "center"
  }
});
