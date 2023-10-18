/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/app.theme'

interface Props {
    text: string,
    color?: string,
    ancho?: boolean,
    action: (numeroText:string) => void
}

export const ButtonCalc = ({text, color='#FFE400', ancho = false, action}: Props) => {
  return (
    <TouchableOpacity
        onPress={ () => action(text)}
    >
        <View style={{
            ...styles.btn,
            backgroundColor: color,
            width: (ancho) ? 180 : 80
        }}>
            <Text style={{
                ...styles.textBtn,
                color: (color === '#004b9d') ? 'white' : 'black',
            } 
        }>
            {text}
            </Text>
        </View>
    </TouchableOpacity>
  );
}
