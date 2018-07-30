import * as React from "react"
import { ViewStyle , TextStyle, View } from "react-native"
import { color } from "../../../theme"
import { Header } from '../../shared/header'
import { Text } from "../../shared/text"
import { NavigationScreenProps } from "react-navigation"

export interface HomeScreenProps extends NavigationScreenProps<{}> {
}

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1
}

const HeaderStyle: ViewStyle = {
  backgroundColor: color.primaryDarker,
}

const FirstView: ViewStyle = {
  flex: .5,
}

const SecondView: ViewStyle = {
  flex: .5,
  marginLeft: 20
}

const TextStyle: TextStyle = {
  fontSize: 20
}

export class Home extends React.Component<HomeScreenProps, {}> {
  render () {
    return (
      <View style={ROOT} >
        <Header  headerTx="home.header" style={HeaderStyle} titleStyle={TextStyle} />
        <View style={FirstView}>
          <Text tx="" />
        </View> 
        <View style={SecondView}>
          <Text tx="home.systems" />
        </View> 
      </View>
    )
  }
}
