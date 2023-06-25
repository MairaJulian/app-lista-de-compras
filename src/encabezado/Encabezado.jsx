import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import carro from '../imagenes/carro.png'

const Encabezado = () => {
  return (
    <View style={styles.imageContainer}>
        <Image style={{height:80, width:80}} source={carro}/>
        <Text style={styles.titulo}>Lista de compras</Text>
    </View>
  )
}

export default Encabezado

const styles = StyleSheet.create({
    imageContainer:{
        marginTop: 40,
        height: 80,
        backgroundColor: "#FFA852",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
        borderRadius: 5,
        borderColor: "#FFA852",
        shadowColor: "black",
        shadowRadius: 15,
        shadowOpacity: 0.3,
    },
    titulo:{
        fontSize: 30,
    },
})