import { SafeAreaView } from "react-native";
import { styles } from "./src/styles";
import Cats from "./src/components/Cats";
import { BearNames } from "./src/components/BearNames";
import { BearMeals } from "./src/components/BearMeals";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Cats />
      <BearNames />
      <BearMeals />
    </SafeAreaView>
  );
}
