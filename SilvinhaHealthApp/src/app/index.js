import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from "expo-router";

export default function Welcome() {
    return (
        <View style={styles.container}>
            <Text>Welcome</Text>
            <Link href="imc">
                <Text>Abrir Imc
                </Text>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItens: 'center',
        justfyContent: 'center',
    }

})