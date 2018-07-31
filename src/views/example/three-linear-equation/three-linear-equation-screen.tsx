import * as React from "react"
import { observer } from "mobx-react"
import { ViewStyle } from "react-native"
import { Text } from "../../shared/text"
import { Screen } from "../../shared/screen"
import { color } from "../../../theme"
import { Header } from '../../shared/header'
import { NavigationScreenProps } from "react-navigation"

export interface ThreeLinearEquationScreenProps extends NavigationScreenProps<{}> {
}

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
}

// @inject("mobxstuff")
@observer
export class ThreeLinearEquation extends React.Component<ThreeLinearEquationScreenProps, {}> {
  render () {
    return (
      <Screen style={ROOT} preset="fixedCenter">
        <Text preset="header" tx="threeLinearEquation.header" />
      </Screen>
    )
  }
}
