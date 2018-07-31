import * as React from "react"
import { ViewStyle, TextStyle, View } from "react-native"
import { Text } from "../../shared/text"
import { color } from "../../../theme"
import { Header } from '../../shared/header'
import { NavigationScreenProps } from "react-navigation"

export interface QuadraticEquationScreenProps extends NavigationScreenProps<{}> {
}

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1
}
const TextStyle: TextStyle = {
  fontSize: 20
}
const HeaderStyle: ViewStyle = {
  backgroundColor: color.primaryDarker,
}

export class QuadraticEquation extends React.Component<QuadraticEquationScreenProps, {}> {
  render () {
    const { goBack } = this.props.navigation
    return (
      <View style={ROOT}>
        <Header  
          headerTx="quadratic.header" 
          style={HeaderStyle} 
          titleStyle={TextStyle}
          leftIcon="chevron-left"
          onLeftPress={() => goBack()}
           />
      </View>
    )
  }
}
