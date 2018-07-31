import * as React from "react"
import { observer } from "mobx-react"
import { ViewStyle, TextStyle, View } from "react-native"
import { Text } from "../../shared/text"
import { Screen } from "../../shared/screen"
import { color } from "../../../theme"
import { Header } from '../../shared/header'
import { NavigationScreenProps } from "react-navigation"

export interface CubicEquationScreenProps extends NavigationScreenProps<{}> {
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

export class CubicEquation extends React.Component<CubicEquationScreenProps, {}> {
  render () {
    const { goBack } = this.props.navigation
    return (
      <View style={ROOT} >
        <Header  
          headerTx="cubic.header" 
          style={HeaderStyle} 
          titleStyle={TextStyle}
          leftIcon="chevron-left"
          onLeftPress={() => goBack()}
           />
      </View>
    )
  }
}
