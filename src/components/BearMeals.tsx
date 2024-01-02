import { styles } from "../styles";
import { View, Text } from "react-native";
import { useBearMeals } from "../store/useBearMeals";
import { useShallow } from "zustand/react/shallow";
export const BearMeals = () => {
  console.log("BearMeals renders");
  const meals = useBearMeals(useShallow(state => Object.values(state)));
  return (
    <View>
      <Text style={{ ...styles.text24, color: "violet" }}>Bear Meals</Text>
      <Text style={styles.text24}>{meals.join(", ")}</Text>
    </View>
  );
};
