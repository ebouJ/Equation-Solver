import * as React from "react"
import { observer } from "mobx-react"
import { ViewStyle, View, TextStyle } from "react-native"
import { Text } from "../../shared/text"
import { color } from "../../../theme"
import { Header } from '../../shared/header'
import { NavigationScreenProps } from "react-navigation"

export interface LinearEquationScreenProps extends NavigationScreenProps<{}> {
}

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
}

const TextStyle: TextStyle = {
  fontSize: 20
}
const HeaderStyle: ViewStyle = {
  backgroundColor: color.primaryDarker,
}

// @inject("mobxstuff")
@observer
export class LinearEquation extends React.Component<LinearEquationScreenProps, {}> {
  render () {
    return (
      <View style={ROOT} >
        <Header  headerTx="linear.header" style={HeaderStyle} titleStyle={TextStyle} />
      </View>
    )
  }
}
