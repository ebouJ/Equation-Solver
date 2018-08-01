import * as React from "react"
import { ViewStyle, TextStyle, View, Dimensions } from "react-native"
import { Text } from "../../shared/text"
import { color } from "../../../theme"
import { Header } from '../../shared/header'
import { Button } from '../../shared/button'
import { TextField } from '../../shared/text-field'
import { NavigationScreenProps } from "react-navigation"

export interface TwoLinearEquationScreenProps extends NavigationScreenProps<{}> {
}

const { width } = Dimensions.get('window')
const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1
}
const TextStyle: TextStyle = {
  fontSize: 22
}
const HeaderStyle: ViewStyle = {
  backgroundColor: color.primaryDarker,
}


const textStyle: TextStyle = {
  marginTop: 15, 
  fontSize: 20
}
const InputView: ViewStyle = {
  flexDirection: 'row',
  margin: 20,
  justifyContent: 'space-between',
}

const inputStyle: TextStyle = {
  textAlign: 'center', 
  color: 'black'
}

const Input: ViewStyle = {
  width: width / 5,
  height: 15,
}
const ButtonView: ViewStyle = {
  flexDirection: 'row', 
  margin: 20, 
  justifyContent: 'space-between'
}


export class TwoLinearEquation extends React.Component<TwoLinearEquationScreenProps, {}> {
  render () {
    const { goBack } = this.props.navigation
    return (
      <View style={ROOT}>
        <Header  
          headerTx="two.header" 
          style={HeaderStyle} 
          titleStyle={TextStyle}
          leftIcon="chevron-left"
          onLeftPress={() => goBack()}
           />
          <View style={{flex: 0.6, justifyContent: 'space-around'}} >
          <View style={InputView}>
                <TextField 
                  style={Input} 
                  inputStyle={inputStyle}
                  keyboardType={'numeric'}
                />
                <Text style={textStyle}> x +</Text>
                <TextField 
                  style={Input} 
                  inputStyle={inputStyle}
                  keyboardType={'numeric'}
                />
                <Text style={textStyle}> y = </Text>
                <TextField 
                  style={Input} 
                  inputStyle={inputStyle}
                  keyboardType={'numeric'}
                />
           </View>
           <View style={InputView}>
                <TextField 
                  style={Input} 
                  inputStyle={inputStyle}
                  keyboardType={'numeric'}
                />
                <Text style={textStyle}> x +</Text>
                <TextField 
                  style={Input} 
                  inputStyle={inputStyle}
                  keyboardType={'numeric'}
                />
                <Text style={textStyle}> y = </Text>
                <TextField 
                  style={Input} 
                  inputStyle={inputStyle}
                  keyboardType={'numeric'}
                />
           </View>
           <View style={ButtonView}>
              <Button preset="solve" text="Solve" />
              <Button preset="solve" text="Clear" />
           </View>
          </View>
      </View>
    )
  }
}
