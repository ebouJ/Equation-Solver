import * as React from "react"
import { 
  ViewStyle, 
  TextStyle, 
  View, 
  Dimensions, 
  Keyboard, 
  ImageStyle,
  Image } from "react-native"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { NavigationScreenProps } from "react-navigation"
import Toast from 'react-native-simple-toast'

import { Text } from "../../shared/text"
import { color } from "../../../theme"
import { Header } from '../../shared/header'
import { TextField } from '../../shared/text-field'
import { Button } from '../../shared/button'
import isNotValid from '../../../lib/isValid'
import SolveCubic from '../../../lib/cubic'

export interface CubicEquationScreenProps extends NavigationScreenProps<{}> {
}

const { width } = Dimensions.get('window')

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1
}
const TextStyle: TextStyle = {
  fontSize: 20
}
const InputView: ViewStyle = {
  flexDirection: 'row',
  margin: 20,
  width: width / 2
}

const inputStyle: TextStyle = {
  textAlign: 'center', 
  color: 'black',
  height: 10
}

const Input: ViewStyle = {
  width: width / 4,
  height: 8,
  marginLeft: 20
}
const HeaderStyle: ViewStyle = {
  backgroundColor: color.primaryDarker,
}
const EquationView: ViewStyle = {
  width: width,
  flex: 0.1,
}

const textStyle: TextStyle = {
  marginTop: 20, 
  fontSize: 20
}

const ButtonView: ViewStyle = {
  flexDirection: 'row', 
  margin: 20, 
  justifyContent: 'space-between'
}

const ImageStyle: ImageStyle = {
  width: width - 20
}

const InputStyle: ViewStyle = {
  flex: 0.6,
  justifyContent: 'space-around'
}


interface State {
  a: string,
  b: string,
  c: string,
  d: string,
  roots: string[]
}

const initialState = {
  a: null,
  b: null,
  c: null,
  d: null,
  roots: null
}

export class CubicEquation extends React.Component<CubicEquationScreenProps, State> {
  state = initialState
 
  solve = async () => {
    Keyboard.dismiss
    const { a, b , c , d } = this.state
    if(isNotValid(a) || isNotValid(b) || isNotValid(c) || isNotValid(d)){
       return Toast.showWithGravity('The input should be a number.', Toast.SHORT, Toast.CENTER)
    }


    const roots = await SolveCubic(Number(a),Number(b),Number(c),Number(d))
    this.setState({ roots })
  }

  clear = () => {
    this.setState(initialState)
  }

  render () {
    const { goBack } = this.props.navigation
    const { roots, a, b , c , d } = this.state
    return (
      <KeyboardAwareScrollView contentContainerStyle={{ flex: 1}}> 
      <View style={ROOT} >
        <Header  
          headerTx="cubic.header" 
          style={HeaderStyle} 
          titleStyle={TextStyle}
          leftIcon="chevron-left"
          onLeftPress={() => goBack()}
          />
          <View style={EquationView}> 
          <Image source={require('../../../images/cubic.png')} resizeMode="contain" style={ImageStyle} />
           </View>
           <View style={InputStyle}>
           <View style={InputView}>
                <Text style={textStyle}>a =</Text>
                <TextField 
                  style={Input} 
                  value={a}
                  inputStyle={inputStyle}
                  keyboardType={'numeric'}
                  onChangeText={(a) => this.setState({ a })}
                />              
           </View>
           <View style={InputView}>
                <Text style={textStyle}>b =</Text>
                <TextField 
                  style={Input} 
                  value={b}
                  inputStyle={inputStyle}
                  keyboardType={'numeric'}
                  onChangeText={(b) => this.setState({ b })}
                />
           </View>
           <View style={InputView}>
                <Text style={textStyle}>c =</Text>
                <TextField 
                  style={Input} 
                  value={c}
                  inputStyle={inputStyle}
                  keyboardType={'numeric'}
                  onChangeText={(c) => this.setState({ c })}
                />
           </View>
           <View style={InputView}>
                <Text style={textStyle}>d =</Text>
                <TextField 
                  style={Input} 
                  value={d}
                  inputStyle={inputStyle}
                  keyboardType={'numeric'}
                  onChangeText={(d) => this.setState({ d })}
                />
           </View>
           <View style={ButtonView}>
               <Button preset="solve" text="Solve" onPress={this.solve} />
               <Button preset="solve" text="Clear" onPress={this.clear} />
              </View>
           </View>
           
           <View style={{ justifyContent: 'space-around', alignItems: 'center', flex: 0.2}}>
            {
              roots && roots.map((item, index) => {
                const ind = index + 1
                  return <Text key={index} style={textStyle}>{"x" + ind  + " = " + item.toFixed(3)}</Text>
              })
            }
            </View>
            
      </View>
      </KeyboardAwareScrollView>
    )
  }
}
