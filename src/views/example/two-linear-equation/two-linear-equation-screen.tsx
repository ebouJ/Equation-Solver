import * as React from "react"
import { ViewStyle, TextStyle, View, Dimensions } from "react-native"
import { Text } from "../../shared/text"
import { color } from "../../../theme"
import { Header } from '../../shared/header'
import { Button } from '../../shared/button'
import Toast from 'react-native-simple-toast'
import { TextField } from '../../shared/text-field'
import { NavigationScreenProps } from "react-navigation"
import TwoVariableSolver from '../../../lib/twoVariables'

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

interface State {
  x1: string,
  y1: string,
  z1: string,
  x2: string,
  y2: string,
  z2: string,
  roots: string[]
}


const initialState = {
  x1: null,
  y1: null,
  z1: null,
  x2: null,
  y2: null,
  z2: null,
  roots: null
}

const variable = {
  0: "x",
  1: "y"
}

export class TwoLinearEquation extends React.Component<TwoLinearEquationScreenProps, State> {
  state = initialState
  solve = async () => {
    const { x1, x2 , y1, y2, z1, z2  } = this.state
    if(isNaN(x1) || isNaN(x2) || isNaN(y1) || isNaN(y2) || isNaN(z2) || isNaN(z1)){
      Toast.showWithGravity('The input should be a number.', Toast.SHORT, Toast.CENTER)
       return
    }


    const roots = await TwoVariableSolver(Number(x1),Number(y1),Number(z1),Number(x2),Number(y2),Number(z2))
    this.setState({ roots })

  }

  clear = () => {
    this.setState(initialState)
  }
  render () {
    const { goBack } = this.props.navigation
    const { x1, x2, y1, y2, z1, z2, roots } = this.state
    return (
      <View style={ROOT}>
        <Header  
          headerTx="two.header" 
          style={HeaderStyle} 
          titleStyle={TextStyle}
          leftIcon="chevron-left"
          onLeftPress={() => goBack()}
           />
          <View style={{ flex: 0.6 , justifyContent: 'space-around'}} >
          <View style={InputView}>
                <TextField 
                  style={Input}
                  value={x1}
                  inputStyle={inputStyle}
                  keyboardType={'numeric'}
                  onChangeText={(x1) => this.setState({ x1})}
                />
                <Text style={textStyle}> x +</Text>
                <TextField 
                  style={Input} 
                  value={y1}
                  inputStyle={inputStyle}
                  keyboardType={'numeric'}
                  onChangeText={(y1) => this.setState({ y1})}
                />
                <Text style={textStyle}> y = </Text>
                <TextField 
                  style={Input} 
                  value={z1}
                  inputStyle={inputStyle}
                  keyboardType={'numeric'}
                  onChangeText={(z1) => this.setState({ z1})}
                />
           </View>
           <View style={InputView}>
                <TextField 
                  style={Input} 
                  value={x2}
                  inputStyle={inputStyle}
                  keyboardType={'numeric'}
                  onChangeText={(x2) => this.setState({ x2 })}
                />
                <Text style={textStyle}> x +</Text>
                <TextField 
                  style={Input} 
                  value={y2}
                  inputStyle={inputStyle}
                  keyboardType={'numeric'}
                  onChangeText={(y2) => this.setState({ y2 })}
                />
                <Text style={textStyle}> y = </Text>
                <TextField 
                  style={Input} 
                  value={z2}
                  inputStyle={inputStyle}
                  keyboardType={'numeric'}
                  onChangeText={(z2) => this.setState({ z2 })}
                />
           </View>
           <View style={ButtonView}>
              <Button preset="solve" text="Solve" onPress={this.solve} />
              <Button preset="solve" text="Clear" onPress={this.clear}  />
           </View>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center'}}>
            {
              roots && roots.map((item, index) => {
                  return <Text key={index} style={textStyle}>{variable[index] + " = " + item}</Text>
              })
            }
            </View>
      </View>
    )
  }
}
