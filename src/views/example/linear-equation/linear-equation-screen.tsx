import * as React from "react"
import { ViewStyle, View, TextStyle, Dimensions } from "react-native"
import { Text } from "../../shared/text"
import Katex from 'react-native-katex';
import { color } from "../../../theme"
import Toast from 'react-native-simple-toast'
import { Header } from '../../shared/header'
import { Button } from '../../shared/button'
import { TextField } from '../../shared/text-field'
import { NavigationScreenProps } from "react-navigation"

export interface LinearEquationScreenProps extends NavigationScreenProps<{}> {
}



const { width, height } = Dimensions.get('window')

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
  flex: 1
}
const TextStyle: TextStyle = {
  fontSize: 20
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
const HeaderStyle: ViewStyle = {
  backgroundColor: color.primaryDarker,
}
const EquationView: ViewStyle = {
  width: width,
  height: height / 8,
}

const textStyle: TextStyle = {
  marginTop: 15, 
  fontSize: 20
}

const ButtonView: ViewStyle = {
  flexDirection: 'row', 
  margin: 20, 
  justifyContent: 'space-between'
}

const inlineStyle =`
html, body {
  display: flex;
  background-color: #1d1d1d;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin-top: 9px;
}
.katex {
  font-size: 5em;
  margin: 0;
  display: flex;
  color: white;
}
`;

interface State {
  a: string,
  b: string,
  c: string,
  roots: string[]
}

const initialState = {
  a: null,
  b: null,
  c: null,
  roots: null
}

export class LinearEquation extends React.Component<LinearEquationScreenProps, State> {
  
  state = initialState

  solve = async () => {
    const { a, b, c  } = this.state
    if(isNaN(a) || isNaN(b) || isNaN(c) ){
      Toast.showWithGravity('The input should be a number.', Toast.SHORT, Toast.CENTER)
       return;
    }

    const roots = []


     roots.push((c - b) / a)
    this.setState({ roots })
  }

  clear = () => {
    this.setState(initialState)
  }
  render () {
    const { goBack } = this.props.navigation
    const { roots, a, b, c} = this.state
    return (
      <View style={ROOT} >
        <Header  
          headerTx="linear.header" 
          style={HeaderStyle} 
          titleStyle={TextStyle}
          leftIcon="chevron-left"
          onLeftPress={() => goBack()}
           />
          <View style={EquationView}> 
           <Katex
              expression="ax + b = c"
              style={{flex: 1}}
              inlineStyle={inlineStyle}
              displayMode={false}
              colorIsTextColor={false}
              onError={() => console.error('Error')}
            />
           </View>
           <View style={InputView}>
                <Text style={textStyle}> a  = </Text>
                <TextField 
                  style={Input}
                  onChangeText={ a => this.setState({ a})} 
                  value={a}
                  inputStyle={inputStyle}
                  keyboardType={'numeric'}
                />
           </View>
           <View style={InputView}>
                <Text style={textStyle}> b  = </Text>
                <TextField 
                  style={Input} 
                  value={b}
                  onChangeText={b => this.setState({b})} 
                  inputStyle={inputStyle}
                  keyboardType={'numeric'}
                />
           </View>
           <View style={InputView}>
                <Text style={textStyle}> c  = </Text>
                <TextField 
                  style={Input} 
                  onChangeText={c => this.setState({c})} 
                  value={c}
                  inputStyle={inputStyle}
                  keyboardType={'numeric'}
                />
           </View>
           <View style={ButtonView}>
           <Button preset="solve" text="Solve" onPress={this.solve} />
           <Button preset="solve" text="Clear" onPress={this.clear} />
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
    )
  }
}
