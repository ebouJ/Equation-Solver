import * as React from "react"
import { 
  ViewStyle, 
  TextStyle, 
  View , 
  Dimensions,  
  Keyboard, } from "react-native"
import Toast from 'react-native-simple-toast'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { NavigationScreenProps } from "react-navigation"

import { Text } from "../../shared/text"
import { color } from "../../../theme"
import { Header } from '../../shared/header'
import { Button } from '../../shared/button'
import { TextField } from '../../shared/text-field'
import isNotValid from '../../../lib/isValid'
import ThreeVariableSolver from '../../../lib/threeVariables'


export interface ThreeLinearEquationScreenProps extends NavigationScreenProps<{}> {
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
  margin: 10,
  justifyContent: 'space-between',
}

const inputStyle: TextStyle = {
  textAlign: 'center', 
  color: 'black'
}

const Input: ViewStyle = {
  width: width / 7,
  height: 15,
}
const ButtonView: ViewStyle = {
  flexDirection: 'row', 
  margin: 20, 
  justifyContent: 'space-between'
}
interface State {
  x1: string,
  y1: string,
  z1: string,
  w1: string,
  x2: string,
  y2: string,
  z2: string,
  w2: string,
  x3: string,
  y3: string,
  z3: string,
  w3: string,
  roots: string[]
}


const initialState = {
  x1: null,
  y1: null,
  z1: null,
  w1: null,
  x2: null,
  y2: null,
  z2: null,
  w2: null,
  x3: null,
  y3: null,
  z3: null,
  w3: null,
  roots: null
}

const variable = {
  0: "x",
  1: "y",
  2: "z"
}
export class ThreeLinearEquation extends React.Component<ThreeLinearEquationScreenProps, State> {
  state = initialState

  solve = async () => {
    await Keyboard.dismiss()
    const matrix = []
    const { x1, x2, x3, y1, y2, y3, z1, z2, z3, w1, w2, w3 } = this.state
    if(isNotValid(x1) || isNotValid(x2) || isNotValid(x3) || isNotValid(y1) || isNotValid(y2) || isNotValid(y3) || isNotValid(z1) || isNotValid(z2) || isNotValid(z3) || isNotValid(w1) || isNotValid(w2) || isNotValid(w3)){
      return Toast.showWithGravity('The input should be a number.', Toast.SHORT, Toast.CENTER)
    }

    matrix.push([Number(x1),Number(y1),Number(z1),Number(w1)],[Number(x2),Number(y2),Number(z2),Number(w2)], [Number(x3),Number(y3),Number(z3),Number(w3)])
    const roots = await ThreeVariableSolver(matrix)
    this.setState({ roots })
    

  }

  clear = () => {
    this.setState(initialState)
  }

  render () {
    const { goBack } = this.props.navigation
    const { x1, x2, x3, y1, y2, y3, z1, z2, z3, w1, w2, w3, roots } = this.state
    return (
      <View style={ROOT}>
        <Header  
          headerTx="three.header" 
          style={HeaderStyle} 
          titleStyle={TextStyle}
          leftIcon="chevron-left"
          onLeftPress={() => goBack()}
           />
          <KeyboardAwareScrollView style={ROOT}> 
           <View style={{flex: 0.7, justifyContent: 'space-around'}} >
            <View style={InputView}>
                <TextField 
                  style={Input} 
                  value={x1}
                  inputStyle={inputStyle}
                  onChangeText={x1 => this.setState({ x1})}
                />
                <Text style={textStyle}> x +</Text>
                <TextField 
                  style={Input} 
                  value={y1}
                  inputStyle={inputStyle}
                  onChangeText={y1 => this.setState({y1})}
                />
                <Text style={textStyle}> y +</Text>
                <TextField 
                  style={Input} 
                  value={z1}
                  inputStyle={inputStyle}
                  onChangeText={z1 => this.setState({z1})}
                />
                <Text style={textStyle}> z =</Text>
                <TextField 
                  style={Input} 
                  value={w1}
                  inputStyle={inputStyle}
                  onChangeText={w1 => this.setState({w1})}
                />  
           </View>
           <View style={InputView}>
                <TextField 
                  style={Input} 
                  value={x2}
                  inputStyle={inputStyle}
                  onChangeText={x2 => this.setState({ x2})}
                />
                <Text style={textStyle}> x +</Text>
                <TextField 
                  style={Input} 
                  value={y2}
                  inputStyle={inputStyle}
                  onChangeText={y2 => this.setState({y2})}
                />
                <Text style={textStyle}> y +</Text>
                <TextField 
                  style={Input} 
                  value={z2}
                  inputStyle={inputStyle}
                  onChangeText={z2 => this.setState({z2})}
                />
                <Text style={textStyle}> z =</Text>
                <TextField 
                  style={Input} 
                  value={w2}
                  inputStyle={inputStyle}
                  onChangeText={w2 => this.setState({w2})}
                />  
           </View>
           <View style={InputView}>
                <TextField 
                  style={Input} 
                  value={x3}
                  inputStyle={inputStyle}
                  onChangeText={x3 => this.setState({x3})}
                />
                <Text style={textStyle}> x +</Text>
                <TextField 
                  style={Input} 
                  value={y3}
                  inputStyle={inputStyle}
                  onChangeText={y3 => this.setState({y3})}
                />
                <Text style={textStyle}> y +</Text>
                <TextField 
                  style={Input} 
                  value={z3}
                  inputStyle={inputStyle}
                  onChangeText={z3 => this.setState({z3})}
                />
                <Text style={textStyle}> z =</Text>
                <TextField 
                  style={Input} 
                  value={w3}
                  inputStyle={inputStyle}
                  onChangeText={w3 => this.setState({w3})}
                />  
           </View>
           <View style={ButtonView}>
           <Button preset="solve" text="Solve" onPress={this.solve} />
              <Button preset="solve" text="Clear" onPress={this.clear} />
           </View>
           </View>
           <View style={{ justifyContent: 'center', alignItems: 'center', flex: 0.3}}>
            {
              roots && roots.map((item, index) => {
                  return <Text key={index} style={textStyle}>{variable[index] + " = " + item}</Text>
              })
            }
            </View>
          </KeyboardAwareScrollView>
      </View>
    )
  }
}
