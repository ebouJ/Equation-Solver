import * as React from "react"
import { 
  ViewStyle, 
  TextStyle, 
  View, 
  Dimensions, 
  ImageStyle,
  Image } from "react-native"
import { NavigationScreenProps } from "react-navigation"
import Toast from 'react-native-simple-toast'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { Text } from "../../shared/text"
import { color } from "../../../theme"
import { Button } from '../../shared/button'
import { TextField } from '../../shared/text-field'
import { Header } from '../../shared/header'
import isNotValid from '../../../lib/isValid'
import QuadracticSolve from '../../../lib/quadratic'

export interface QuadraticEquationScreenProps extends NavigationScreenProps<{}> {
}

const { width, height } = Dimensions.get('window')
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
const EquationView: ViewStyle = {
  width: width,
  height: height / 8,
  marginLeft: 20,
  marginRight: 20,
}

const textStyle: TextStyle = {
  marginTop: 15, 
  fontSize: 20,
  color: 'white'
}
const InputView: ViewStyle = {
  flexDirection: 'row',
  margin: 20
}

const inputStyle: TextStyle = {
  textAlign: 'center', 
  color: 'black'
}

const Input: ViewStyle = {
  width: width / 4,
  height: 15,
  marginLeft: 20
}

const ButtonView: ViewStyle = {
  flexDirection: 'row', 
  margin: 20, 
  justifyContent: 'space-between'
}

const ImageStyle: ImageStyle = {
  width: width - 20
}


interface State {
  a: string,
  b: string,
  c: string,
  loaded: boolean,
  roots: string[]
}

const initialState = {
  a: null,
  b: null,
  c: null,
  loaded: false,
  roots: null
}

export class QuadraticEquation extends React.Component<QuadraticEquationScreenProps, State> {

  state = initialState
  solve = async () => {
    const { a, b , c  } = this.state
    if(isNotValid(a) || isNotValid(b) || isNotValid(c)){
      return Toast.showWithGravity('The input should be a number.', Toast.SHORT, Toast.CENTER)
    }


    const roots = await QuadracticSolve(Number(a),Number(b),Number(c))
    this.setState({ roots })

  }


  clear = () => {
    this.setState(initialState)
  }
  render () {
    const { goBack } = this.props.navigation
    const { roots, a, b , c } = this.state

    return (
      <KeyboardAwareScrollView contentContainerStyle={{ flex: 1}}> 
      <View style={ROOT}>
        <Header  
          headerTx="quadratic.header" 
          style={HeaderStyle} 
          titleStyle={TextStyle}
          leftIcon="chevron-left"
          onLeftPress={() => goBack()}
           />
          <View style={EquationView}> 
          <Image source={require('../../../images/quadratic.png')} resizeMode="contain" style={ImageStyle} />
           </View>
           <View style={{ flex: 0.6,justifyContent: 'space-around'}}>
           <View style={InputView}>
                <Text style={textStyle}> a  = </Text>
                <TextField 
                  style={Input} 
                  value={a}
                  inputStyle={inputStyle}
                  keyboardType={'numeric'}
                  onChangeText={(a) => this.setState({ a })}
                />
           </View>
           <View style={InputView}>
                <Text style={textStyle}> b  = </Text>
                <TextField 
                  style={Input} 
                  value={b}
                  inputStyle={inputStyle}
                  keyboardType={'numeric'}
                  onChangeText={b => this.setState({ b })}
                />
           </View>
           <View style={InputView}>
                <Text style={textStyle}> c  = </Text>
                <TextField 
                  style={Input} 
                  value={c}
                  inputStyle={inputStyle}
                  keyboardType={'numeric'}
                  onChangeText={c => this.setState({ c })}
                />
           </View>
           <View style={ButtonView}>
              <Button preset="solve" text="Solve" onPress={this.solve} />
              <Button preset="solve" text="Clear" onPress={this.clear} />
           </View>
           </View >
           <View style={{ justifyContent: 'center', alignItems: 'center'}}>
            {
              roots && roots.map((item, index) => {
                const ind = index + 1
                  return <Text key={index} style={textStyle}>{"x" + ind  + " = " + item}</Text>
              })
            }
            </View>
            
      </View>
      </KeyboardAwareScrollView> 
    )
  }
}
