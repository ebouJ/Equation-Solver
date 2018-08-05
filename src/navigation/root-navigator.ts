import { createStackNavigator } from "react-navigation"
import { Home } from "../views/screens/home/home-screen"
import { ThreeLinearEquation } from "../views/screens/three-linear-equation/three-linear-equation-screen"
import { TwoLinearEquation } from "../views/screens/two-linear-equation/two-linear-equation-screen"
import { CubicEquation } from "../views/screens/cubic-equation/cubic-equation-screen"
import { QuadraticEquation } from "../views/screens/quadratic-equation/quadratic-equation-screen"
import { LinearEquation } from "../views/screens/linear-equation/linear-equation-screen"

export const RootNavigator = createStackNavigator(
  {
    home: { screen: Home },
    threeLinearEquation: { screen: ThreeLinearEquation },
    twoLinearEquation: { screen: TwoLinearEquation },
    cubicEquation: { screen: CubicEquation },
    quadraticEquation: { screen: QuadraticEquation },
    linearEquation: { screen: LinearEquation },
  },
  {
    headerMode: "none",
    navigationOptions: { gesturesEnabled: false },
  },
)
