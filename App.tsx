/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,

} from 'react-native';

import { AppBar } from './CustomViews/AppBar';
import { UseStateView } from './hooks/UseStateHook';
import { UseEffectView } from './hooks/UseEffectHook';


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: "#021952",
  };

  return (
    <SafeAreaView>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <AppBar title={"Learning Hooks"} />

      <ScrollView style={styles.viewStyle}>
        <UseStateView />
        <UseEffectView />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    marginHorizontal: 16,
    marginBottom:60
  },
});

export default App;
