import React, {useState} from "react";
import {View, Text, TextInput, TouchableOpacity, Vibration, Keyboard, Pressable, FlatList  } from "react-native";
import ResultImc from "../ResultImc";
import styles from "./style";

export default function Form(){

const [height, setHeight]= useState(null);
const [weight, setWeight]= useState(null);
const [messageImc, setMessageImc]= useState("Preencha o Peso e Altura");
const [imc, setImc]= useState(null);
const [textButton, setTextButton]= useState("Calcular");
const [errorMessage, setErrorMessage] = useState(null)
const [imcList, setImcList] = useState ([])

function imcCalculator(){
    console.log(imcList)
    let heightFormat = height.replace("," , ".")
    let totalImc = ((weight/(heightFormat * heightFormat)).toFixed(2));
    setImcList ((arr) => [...arr, {id: new Date().getTime(), imc:totalImc}])
    setImc(totalImc)
}

function verificationImc(){
    if(imc == null){
        Vibration.vibrate();
        setErrorMessage("campo obrigatório*")
    }
}

function validationImc(){
    if(weight != null && height != null){
        setWeight(null)
        setHeight(null)
        imcCalculator()
        setMessageImc("Seu imc é igual: ")
        setTextButton("Calcular Novamente")
        setErrorMessage(null)
    } else {
        verificationImc()
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("Preencha o Peso e Altura")
    }
  
}

    return ( 
        <View style={styles.formContext}>
            {imc==null ? 
                <Pressable onPress={Keyboard.dismiss} style={styles.form}> 
                <Text styles={styles.formLabel}>Altura:</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput style={styles.input}
                    onChangeText={setHeight}
                    value={height}
                    placeholder="Ex. 1.65"
                    keyboardType="numeric"
                ></TextInput>

                <Text styles={styles.formLabel}>Peso:</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput style={styles.input}   
                    onChangeText={setWeight}     
                    value={weight}
                    placeholder="Ex.: 75.356"
                    keyboardType="numeric"
                ></TextInput>
               <TouchableOpacity 
               style={styles.buttonCalculator}
               onPress={() => {validationImc()}} 
               >
               <Text style={styles.textButtonCalculator}>{textButton}</Text>
               </TouchableOpacity>
             </Pressable>  : 
                <View style={styles.exibitionResultImc}>
                <ResultImc messageResultImc={messageImc} resultImc={imc}/>
                <TouchableOpacity 
                 style={styles.buttonCalculator}
                 onPress={() => {validationImc()}} 
               >
               <Text style={styles.textButtonCalculator}>{textButton}</Text>
               </TouchableOpacity>
                </View> 
                }
                <FlatList 
                    style={styles.listImcs}
                    data={imcList.reverse()}
                    renderItem={({item}) => {
                        return(
                            <Text style={styles.resultImcItem}>
                            <Text style={styles.textResulItemList}>Resultado IMC =</Text>
                            {item.imc}
                            </Text> 
                        )
                    }}
                    keyExtractor={(item) => {
                        item.id
                    }}
                    >

                </FlatList>
            </View>
    );
}