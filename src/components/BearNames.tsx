import { useBearMeals } from "../store/useBearMeals";
import { useShallow } from "zustand/react/shallow";
import { Button, Text, View } from "react-native";
import { styles } from "../styles";

export const BearNames = () => {
  console.log("BearNames renders");
  const names = useBearMeals(useShallow(state => Object.keys(state)));

  const handlePizza = () => {
    useBearMeals.setState({
      papaBear: "Pepperoni and garlic pizza",
    });
  };

  return (
    <View>
      <Text style={{ ...styles.text24, color: "tomato" }}>Bear Names</Text>
      <Text style={styles.text24}>{names.join(", ")}</Text>
      <Button title="papa wants pizza" onPress={handlePizza} />
    </View>
  );
};
