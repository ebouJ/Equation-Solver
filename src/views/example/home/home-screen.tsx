import * as React from "react"
import { ViewStyle , TextStyle, View } from "react-native"
import { color } from "../../../theme"
import { Header } from '../../shared/header'
import { Text } from "../../shared/text"
import { Button } from '../../shared/button'
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
  flex: .6,
  marginLeft: 20,
  marginTop: 20
}

const SecondView: ViewStyle = {
  flex: .4,
  marginLeft: 20,
}

const TextStyle: TextStyle = {
  fontSize: 20
}

const ButtonStyle: ViewStyle = {
  marginTop: 20, 
  marginLeft: 10
}

export class Home extends React.Component<HomeScreenProps, {}> {
  
  navigate = () => {
    alert('pressed')
  }

  render () {
    return (
      <View style={ROOT} >
        <Header  headerTx="home.header" style={HeaderStyle} titleStyle={TextStyle} />
        <View style={FirstView}>
          <Text tx="home.polynomials" />
          <Button  tx="home.linear" style={ButtonStyle} onPress={this.navigate}/>
          <Button  tx="home.quadratic" style={ButtonStyle}/>
          <Button  tx="home.cubic" style={ButtonStyle}/>
        </View> 
        <View style={SecondView}>
          <Text tx="home.systems" />
          <Button  tx="home.two" style={ButtonStyle} />
          <Button  tx="home.three" style={ButtonStyle}/>
        </View> 
      </View>
    )
  }
}
