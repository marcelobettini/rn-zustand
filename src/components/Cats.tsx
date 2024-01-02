import { Button, Text, View, TextInput } from "react-native";
import { styles } from "../styles";
import React, { useState } from "react";
import { useCatStore } from "../store/useCatStore";
export default function Cats() {
  const { cats, decrease, increase, restore } = useCatStore();
  const [num, setNum] = useState<number>(1);
  return (
    <View>
      <Text style={styles.text24}>Cats: {cats}</Text>
      <TextInput
        defaultValue={num.toString()}
        style={styles.text24}
        placeholder="modify state by..."
        onChangeText={text => setNum(() => Number(text))}
      />
      <View style={styles.btnGroup}>
        <Button title="increase" onPress={() => increase(num)} />
        <Button title="decrease" onPress={() => decrease(num)} />
        <Button title="restore" onPress={restore} />
      </View>
    </View>
  );
}
