/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useRef, useState } from "react";
import type { PropsWithChildren } from "react";
import {
  ActivityIndicator,
  BackHandler,
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View
} from "react-native";

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions
} from "react-native/Libraries/NewAppScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import WebView from "react-native-webview";
import { WebViewNativeEvent } from "react-native-webview/lib/WebViewTypes";


// const Stack = createStackNavigator();
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#353643"
  },
  webView: {
    flex: 1,
    backgroundColor: "#353643"
  },
  activityIndicatorStyle: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#353643"
  }
});

function App(): JSX.Element {



  return (
    <SafeAreaView style={{
      flex: 1, backgroundColor: "#353643"
    }}>
      <View style={styles.container}>
        <WebView
          source={{ uri: "https://chatbot-9cfpcuw8r-kysclient1.vercel.app" }}
          style={styles.webView}
          originWhitelist={["*"]}
          automaticallyAdjustContentInsets={false}
          bounces={false}
          mixedContentMode="always"
          allowsInlineMediaPlayback={true}
          allowsBackForwardNavigationGestures={true}
          javaScriptEnabled={true}
          mediaPlaybackRequiresUserAction={false}
          domStorageEnabled={true}
          scrollEnabled={true}
          renderLoading={ActivityIndicatorElement}
          startInLoadingState={true}
        />
      </View>
    </SafeAreaView>
  );
}

const ActivityIndicatorElement = () => {
  return (
    <ActivityIndicator
      color="#009688"
      size="large"
      style={styles.activityIndicatorStyle}
    />
  );
};

export default App;
