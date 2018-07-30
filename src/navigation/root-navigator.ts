import { createStackNavigator } from "react-navigation"
import { Home } from "../views/example/home/home-screen"
import { ThreeLinearEquation } from "../views/example/three-linear-equation/three-linear-equation-screen"
import { TwoLinearEquation } from "../views/example/two-linear-equation/two-linear-equation-screen"
import { CubicEquation } from "../views/example/cubic-equation/cubic-equation-screen"
import { QuadraticEquation } from "../views/example/quadratic-equation/quadratic-equation-screen"
import { LinearEquation } from "../views/example/linear-equation/linear-equation-screen"
import { ExampleNavigator } from "./example-navigator"

export const RootNavigator = createStackNavigator(
  {
    home: { screen: Home },
    threeLinearEquation: { screen: ThreeLinearEquation },
    twoLinearEquation: { screen: TwoLinearEquation },
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
