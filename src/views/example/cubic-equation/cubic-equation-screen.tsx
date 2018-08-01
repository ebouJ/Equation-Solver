import * as React from "react"
import { ViewStyle, TextStyle, View, Dimensions } from "react-native"
import { Text } from "../../shared/text"
import Katex from 'react-native-katex';
import { color } from "../../../theme"
import { Header } from '../../shared/header'
import { TextField } from '../../shared/text-field'
import { Button } from '../../shared/button'
import { NavigationScreenProps } from "react-navigation"
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
  margin: 20
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
  d: string,
  roots: string[]
}

export class CubicEquation extends React.Component<CubicEquationScreenProps, State> {
  state = {
    a: null,
    b: null,
    c: null,
    d: null,
    roots: null
  }
 
  solve = async () => {
    const { a, b , c , d } = this.state
    if(isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)){
       return;
    }


    const roots = await SolveCubic(Number(a),Number(b),Number(c),Number(d))
    this.setState({ roots })
  }

  render () {
    const { goBack } = this.props.navigation
    const { roots } = this.state
    return (
      <View style={ROOT} >
        <Header  
          headerTx="cubic.header" 
          style={HeaderStyle} 
          titleStyle={TextStyle}
          leftIcon="chevron-left"
          onLeftPress={() => goBack()}
          />
          <View style={EquationView}> 
           <Katex
              expression="ax^3 + bx^2 + cx + d = 0"
              style={{flex: 1}}
              inlineStyle={inlineStyle}
              displayMode={false}
              colorIsTextColor={false}
              onError={() => console.error('Error')}
            />
           </View>
           <View style={{ flex: 0.6,justifyContent: 'space-around',}}>
           <View style={InputView}>
                <Text style={textStyle}>a  =</Text>
                <TextField 
                  style={Input} 
                  inputStyle={inputStyle}
                  keyboardType={'numeric'}
                  onChangeText={(a) => this.setState({ a })}
                />
           </View>
           <View style={InputView}>
                <Text style={textStyle}>b  =</Text>
                <TextField 
                  style={Input} 
                  inputStyle={inputStyle}
                  keyboardType={'numeric'}
                  onChangeText={(b) => this.setState({ b })}
                />
           </View>
           <View style={InputView}>
                <Text style={textStyle}> c  =</Text>
                <TextField 
                  style={Input} 
                  inputStyle={inputStyle}
                  keyboardType={'numeric'}
                  onChangeText={(c) => this.setState({ c })}
                />
           </View>
           <View style={InputView}>
                <Text style={textStyle}>d  =</Text>
                <TextField 
                  style={Input} 
                  inputStyle={inputStyle}
                  keyboardType={'numeric'}
                  onChangeText={(d) => this.setState({ d })}
                />
           </View>
           <View style={ButtonView}>
               <Button preset="solve" text="Solve" onPress={this.solve} />
               <Button preset="solve" text="Clear" />
              </View>
           </View>
           <View style={{ justifyContent: 'space-around', alignItems: 'center', flex:0.2}}>
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
