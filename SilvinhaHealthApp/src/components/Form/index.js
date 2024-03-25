import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './style';
import ResultImc from './ResultImc';

export default function Form() {
    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [imc, setImc] = useState(null);
    const [messageImc, setMessageImc] = useState("Preencha o peso e a altura")
    const [textButton, setTextButton] = useState("Calcular Imc")

    function imcCalculator() {
        return setImc((weight / (height * height)).toFixed(2));
    }

    function validantionImc() {
        if (weight != nul && height != null) {
            imcCalculator();
            keyboard.dismiss();
            setHeight(null);
            setWeight(null);
            setMessageImc("seu IMC é:");
            setTextButton("calcular novamente");
            return;
        }
        setImc(null);
        setMessageImc("preencha o peso e altura:");
        setTextButton("Calcular IMC");
    }

    return (
        <View style={styles.formContext}>
            <View style={styles.formGroup}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setweight}
                    value={height ?? ""}
                    placeholder='Ex.80.360'
                    keyboardType='numeric'
                />
                <Text style={styles.formLabel}>Peso</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Ex.80.360'
                    keyboardType='numeric'
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => validantionImc()}>

                    <Text style={styles.textButton}>
                        {textButton}
                    </Text>
                </TouchableOpacity>
            </View>
            <ResultImc messageResult={messageImc} resultImc={imc}/>
        </View>



    );
}