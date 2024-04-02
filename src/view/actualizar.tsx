import { StyleSheet, View, Button} from 'react-native';
export default function Actualizar() {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View style={styles.formButton}>
          <Button title='Editar'/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    paddingTop:'10%'
  },
  form:{
    width:'90%',
    height:'auto',
    backgroundColor:'white',
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    padding:20,
    marginBottom:'5%'
  },
  formButton:{
    paddingTop:'5%',
    width:'30%',
  }
});