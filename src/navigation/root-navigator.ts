import { createStackNavigator } from "react-navigation"
import { CubicEquation } from "../views/example/cubic-equation/cubic-equation-screen"
import { QuadraticEquation } from "../views/example/quadratic-equation/quadratic-equation-screen"
import { LinearEquation } from "../views/example/linear-equation/linear-equation-screen"
import { ExampleNavigator } from "./example-navigator"

export const RootNavigator = createStackNavigator(
  {
    cubicEquation: { screen: CubicEquation },
    quadraticEquation: { screen: QuadraticEquation },
    linearEquation: { screen: LinearEquation },
    exampleStack: { screen: ExampleNavigator },
  },
  {
    headerMode: "none",
    navigationOptions: { gesturesEnabled: false },
  },
)
