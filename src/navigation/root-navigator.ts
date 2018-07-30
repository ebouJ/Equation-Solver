import { createStackNavigator } from "react-navigation"
import { LinearEquation } from "../views/example/linear-equation/linear-equation-screen"
import { ExampleNavigator } from "./example-navigator"

export const RootNavigator = createStackNavigator(
  {
    linearEquation: { screen: LinearEquation },
    exampleStack: { screen: ExampleNavigator },
  },
  {
    headerMode: "none",
    navigationOptions: { gesturesEnabled: false },
  },
)
