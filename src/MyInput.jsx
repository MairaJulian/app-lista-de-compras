import { Button, Image, StyleSheet, Text, TouchableOpacity, View, FlatList, Modal, TextInput } from 'react-native'
import React, { useState } from 'react'
// import { TextInput } from 'react-native-web'
import flecha from './imagenes/flecha3.png'
import carritoDelete from './imagenes/carrito.png'
import Encabezado from './encabezado/Encabezado'

export default function MyInput() {
    const [lista, setLista] = useState([])
    const [input, setInput] = useState("")
    const [isDisabled, setIsDisabled] = useState(true)
    const [itemSelected, setItemSelected] = useState({})
    const [modalVisible, setModalVisible] = useState(false)
    

    console.log(isDisabled);

    const handleSubmit = () => {
        const dateNow = Date.now()
        console.log(dateNow);
        setLista(lista => [...lista, {value:input, key:dateNow, tachado:false}])
        setInput("")
        setIsDisabled(true)
      }
      console.log(lista);

    const handleChange = (palabraIngresada) => {
      setInput(palabraIngresada)
      console.log(palabraIngresada);
      palabraIngresada != "" ? setIsDisabled(false) : setIsDisabled(true)
      // console.log(isDisabled);
    }

    const onHandleStyle = item => {
      console.log(item);
      item.tachado = true
    }
    
    const renderItem = ({item}) => (
      <View style={styles.containerItems}>
        <TouchableOpacity 
          style={{flexDirection: "row"}}
          onPress={() => onHandleModal(item)} 
        >                
          <Image style={styles.image} source={flecha} />
          <Text style={[styles.item, {textDecorationLine: item.tachado ? "line-through" : "none"}]}>{item.value}</Text>
          <Image style={styles.image} source={carritoDelete}/>
        </TouchableOpacity>
      </View>
    )

    const onHandleModal = item => {
      setItemSelected(item)
      setModalVisible(true)
      console.log(item);
    }

    const onHandleDelete = () => {
      setLista(prevState => prevState.filter(elemento => elemento.key != itemSelected.key))
      setModalVisible(!modalVisible)
    }

    const cancelarAccion = () => {
      setModalVisible(!modalVisible)
    }

  return (
    <View style={styles.container}>
      <Encabezado/>
      <View style={styles.containerInput}>
        <TextInput value={input} onChangeText={handleChange} placeholder="¿Qué quieres comprar?" style={styles.input}/>
        <TouchableOpacity 
          style={[styles.botonAdd, isDisabled ? styles.botonGris : styles.botonAzul]}
          onPress={handleSubmit} 
          disabled={isDisabled}>
          <Text style={[isDisabled ? styles.textoNegro : styles.textoBlanco]}>AGREGAR</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerItems}>
          <FlatList
            data={lista}
            renderItem={renderItem}
            keyExtractor={item => item.key}
            style={styles.flatList}
          />
      </View>
      <View style={styles.containerVaciarLista}>
        {
          lista.length == 0 ?
          <Text>No hay elementos en la lista</Text>
          :
          <View style={styles.botonContainer}>
            <TouchableOpacity style={styles.boton} onPress={()=>(setLista([]))}>
              <Text>Vaciar lista</Text>
            </TouchableOpacity>
          </View>
        }
      </View>
        <Modal
          visible={modalVisible}
          animationType='fade'
          transparent={true}
          >
          <View style={styles.modalContainer}>
            <View style={styles.modal}>
              <Text>¿Está seguro de eliminar: {itemSelected.value}?</Text>
              <View style={styles.botonModalContainer}>
                <Button marginRight={"5"} title='Cancelar' onPress={cancelarAccion}/>
                <Button title='Eliminar' onPress={onHandleDelete}/>
              </View>
            </View>
          </View>
        </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        height: "100%",
        padding: 15,
    },
    
    containerInput:{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 50,
    },
    input:{
        borderColor: "black",
        borderBottomWidth: 1,
        marginRight: 10,
        width: 200,
        borderRadius: 8,
        paddingLeft: 10,
        paddingBottom: 5,
        paddingTop: 5,
    },
    containerItems:{
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 15,
    }, 
    item:{
        borderColor: "#FFEB9E",
        borderWidth: 1,
        borderRadius: 5,
        margin: 3,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: 200,
        paddingLeft: 10,
        backgroundColor: "#FFEB9E",
        color: "#13171B",
        fontSize: 15,
        shadowColor: "black",
        shadowRadius: 15,
        shadowOpacity: 0.3,
    },
    image:{
      shadowColor: "black",
      shadowRadius: 15,
      shadowOpacity: 0.3,
      height:20, 
      width:20,
    },
    containerVaciarLista:{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 50,
    },
    boton:{
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15,
        width: 100,
        backgroundColor: "#CCF1E7",
        borderRadius: 5,
        borderColor: "#CCF1E7",
    },
    botonAdd:{
        borderWidth: 1,
        borderRadius: 4,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 5,
        width: 70,
        height: 25,
        
        shadowColor: "black",
        shadowOpacity: 0.3,
        shadowRadius: 5
    },
    botonGris:{
      backgroundColor: "#A6B4C2",
      borderColor: "#A6B4C2",
    },
    botonAzul:{
      backgroundColor: "#0352DE",
      borderColor: "#0352DE",
      
    },
    textoNegro:{
        color: "black",
    },
    textoBlanco:{
        color: "white",
    },
    botonContainer:{
        alignItems: "center",
    },
    textContainer:{
      backgroundColor: "gray",
      width: 200,
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      flexDirection: "column"
    },
    modalContainer:{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "center",
      
    },
    modal:{
      flexDirection: "column",
      backgroundColor: "white",
      borderStyle: "solid",
      borderWidth: 3,
      borderColor: "gray",
      borderRadius: 5,
      // padding: 60,
      shadowColor: "#000",
      width: 220,
      height: 100,
      justifyContent: "center",
      alignItems: "center",
    },
    botonModalContainer:{
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 10,
    }
})


