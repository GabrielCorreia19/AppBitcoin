import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
formContext: {
    flex: 1,
    backgroundColor:"#fff",
    alignItems: "center",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop:30,
},
form: {
    width: "100%",
    height: "100%",
    padding: 10,
},
formLabel: {
    color: "#000",
    backgroundColor: "#fff",
    fontSize: 18,
    paddingLeft: 20,
},
input: {
    width: "90%",
    borderRadius: 50,
    color: "#000",
    fontWeight: "bold",
    backgroundColor: "#e0e5e5",
    height: 40,
    margin: 12,
    paddingLeft: 10,
},
buttonCalculator: {
    borderRadius: 50,
    alingnItems: "center",
    justifyContent: "center",
    width:"90%",
    backgroundColor: "#01baef",
    padding: 10,
    margin:20,
},
textButtonCalculator: {
    fontSize: 20,
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
},
errorMessage: {
    fontSize: 12,
    color: "red",
    fontWeight: "bold",
    paddingLeft: 20,
},
listImcs: {
    marginTop: 20
},
resultImcItem: {
    fontSize: 26, 
    fontWeight: "bold",
    color: "#000",
    height: 50, 
    width: "100%",
    paddingRight: 20
},
textResulItemList: {
    fontSize: 16,
    color: "#000",
    
}
},
);

export default styles