import {
  Button,
  Text,
  View,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import { styles } from "../styles";
import React, { useState } from "react";
import { useCatStore } from "../store/useCatStore";
export default function Cats() {
  const { cats, decrease, increase, restore } = useCatStore();
  const [num, setNum] = useState<number>(0);
  const up = (num: number) => {
    increase(num);
    Keyboard.dismiss();
  };
  const down = (num: number) => {
    decrease(num);
    Keyboard.dismiss();
  };
  return (
    <View style={styles.componentContainer}>
      <Text style={{ ...styles.text24, color: "green" }}>Cats: {cats}</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.text24}
        placeholder="modify state by..."
        onChangeText={(text) => setNum(() => Number(text))}
      />
      <View style={styles.btnGroup}>
        <Button title="increase" onPress={() => up(num)} />
        <Button title="decrease" onPress={() => down(num)} />
        <Button title="restore" onPress={restore} />
      </View>
    </View>
  );
}
