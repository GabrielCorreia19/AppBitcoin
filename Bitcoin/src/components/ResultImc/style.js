import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {	
    flex: 1,
    marginTop: 15,
    paddingTop: 60, 
    borderRadius: 60,
    alignItems: "center",
    width: "100%",
},
numberImc:{
    fontSize: 48,
    color: "#000",
    fontWeight: "bold",
    marginLeft: 50

},
information:{
    fontSize: 18,
    color: "#000",
    fontWeight: "bold",
    marginLeft: 50


},
boxSharebuton:{
    width: "100%",
    alignItems: "center",
    marginBottom: 10,   
     
},
shared:{
    backgroundColor: "#01baef",
    borderRadius: 50,
    paddingBottom: 10,
    paddingTop: 5,
    marginLeft: 50

},
sharedText:{
    color: "#fff",
    fontWeight: "bold",
    paddingHorizontal: 30,
},
exibitionResultImc: {
    width: "100%",
    height: "50%",
}
}
);

export default styles