import * as React from "react"
import { ViewStyle, TextStyle, View, Dimensions } from "react-native"
import { Text } from "../../shared/text"
import Katex from 'react-native-katex';
import { color } from "../../../theme"
import { Header } from '../../shared/header'
import { TextField } from '../../shared/text-field'
import { Button } from '../../shared/button'
import { NavigationScreenProps } from "react-navigation"

export interface CubicEquationScreenProps extends NavigationScreenProps<{}> {
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
  backgroundColor: 'yellow'
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
          <View style={EquationView}> 
           <Katex
              expression="ax^3 + bx^2 + cx + d = 0"
              style={{flex: 1}}
              inlineStyle={inlineStyle}
              displayMode={false}
              colorIsTextColor={false}
              onLoad={()=> this.setState({ loaded: true })}
              onError={() => console.error('Error')}
            />
           </View>
           <View style={{ flex: 0.7,justifyContent: 'space-around',}}>
           <View style={InputView}>
                <Text style={textStyle}>a  =</Text>
                <TextField 
                  style={Input} 
                  inputStyle={inputStyle}
                  keyboardType={'numeric'}
                />
           </View>
           <View style={InputView}>
                <Text style={textStyle}>b  =</Text>
                <TextField 
                  style={Input} 
                  inputStyle={inputStyle}
                  keyboardType={'numeric'}
                />
           </View>
           <View style={InputView}>
                <Text style={textStyle}> c  =</Text>
                <TextField 
                  style={Input} 
                  inputStyle={inputStyle}
                  keyboardType={'numeric'}
                />
           </View>
           <View style={InputView}>
                <Text style={textStyle}>d  =</Text>
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
           <View  style={{ flex: 0.2,}}/>
      </View>
    )
  }
}
