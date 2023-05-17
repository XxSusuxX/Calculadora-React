import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";

export default (props) => {
  return (
    <View style={styles.display}>
      <Text style={styles.textDisplayRes} numberOfLines={1}>
        {props.operator}
      </Text>

      <Text style={styles.textDisplayOper} numberOfLines={1}>
        {props.result}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  display: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundColor: "#444",
    width: "100%",
  },
  textDisplayOper: {
    fontSize: 50,
    color: "#fff",
  },
  textDisplayRes: {
    fontSize: 30,
    color: "#fff",
  },
});
