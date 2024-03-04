import { View, Text, TextInput, Touchable } from 'react-native'
import React from 'react'
import styles from './style';

export default function Form() {
    return (
        <View style={styles.formContext}>
            <View style={styles.formGroup}>
                <Text>Altura</Text>
                <TextInput />
                <Text>Peso</Text>
                <TextInput />
                <TouchablebleOpacity onPress={() => {alert("Oiiiii")}}>
                    <Text>Calcular IMC</Text>
                </TouchablebleOpacity>
            </View>
        </View>

        
           
    );
}