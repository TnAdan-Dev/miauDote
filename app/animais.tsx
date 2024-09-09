import {
  Text,
  ScrollView,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Link } from "expo-router";
import list from "../json/animais.json";
export default function Animais() {
  return (
    <ScrollView>
            <View style={[styles.container, styles.backgroundPrimary]}>
                <Text style={styles.titleTwo}>
                    Qual café te acompanhará no Deploy?
                </Text>
                {list.listProduct.map((item) => (                    
                    <View key={item.id} style={[styles.itemTwo, styles.backgroundSecond]}>
                        <View style={styles.itemTwoDetails}>
                            <Image source={imageMappings[item.image]} style={styles.imageTwo} />
                            <View style={styles.itemTwoText}>
                                <Text style={styles.itemTwotitleProduct}>{item.id}. {item.title}</Text>
                                <Text style={styles.itemTwodescriptionProduct}>{item.description}</Text>
                            </View>
                        </View>

                        <Link
                            href={{
                                pathname: "/coffeesingle/[id]",
                                params: { id: item.id }
                            }}
                            style={[styles.button, styles.backgroundPrimary]} // Estilo do link para ser um botão
                            asChild
                        >
                            <TouchableOpacity>
                                <Text style={styles.itemTwoButtonText}>
                                    Acessar
                                </Text>
                                {/* <View style={styles.linkIcon}>
                                    <Icon name="chevron-right" size={20} color="#fff" />
                                </View> */}
                            </TouchableOpacity>
                        </Link>
                    </View>
                ))
                }
                
            </View>
        </ScrollView >
  )
}

const styles = StyleSheet.create({
  backgroundPrimary: { backgroundColor: '#260F0D', },
  backgroundSecond: { backgroundColor: '#F2D8C2', },
  button: {
      flexDirection: 'row',
      justifyContent: 'center',
      paddingVertical: 10,
      paddingHorizontal: 10,
      width: '100%',
      marginBottom: 5,
      alignItems: 'center',
      marginTop: 10,
      borderRadius: 12
  },
  scrollview : { flex: 1},
  container: {
      flex: 1,
      padding: 20,
  },
  backgroundOne: {
      flex: 1,
      width: '100%',
      height: '100%',
  },
  overlayOne: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(38, 15, 13, 0.8)', // Cor preta com 50% de opacidade
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
  },
  textIcon: {
      marginBottom: 20,
      marginTop: 20,
      color: '#fff',
      fontSize: 20,
  },
  
  buttonOneText: {
      flex: 1,
      fontSize: 18,
      color: '#010101',
      fontWeight: 'bold',
      // textAlign: 'center',
  },
  titleTwo: {
      textAlign: 'center',
      fontWeight: 'bold',
      marginBottom: 20,
      marginTop: 20,
      color: '#fff',
      fontSize: 20
  },
  imageTwoSingle: {
      width: 'auto',
      height: 300,
      borderEndEndRadius: 15,
      borderEndStartRadius: 15,
      marginTop: -20,
      resizeMode: 'cover',
  },
  itemTwo: {
      borderRadius: 8,
      padding: 10,
      marginBottom: 10,
      flexDirection: 'column',
      width: '100%',
      //alignItems: 'center', // Alinha a imagem e o texto verticalmente
      // position: 'relative', // Permite o posicionamento absoluto do botão
  },
  itemTwoDetails: {
      flexDirection: 'row', // Organiza imagem e texto lado a lado
      alignItems: 'center', // Alinha a imagem e o texto verticalmente
      // position: 'relative', // Permite o posicionamento absoluto do botão
  },

  itemTwoButtonText: {
      flex: 1,
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
      textAlign: 'center',
  },
  linkIcon: {

  },
  imageTwo: {
      width: 100,
      height: 100,
      borderRadius: 8,
  },
  itemTwoText: {
      flex: 1,
      marginLeft: 20,
      marginRight: 20,
  },
  itemTwotitleProduct: {
      fontSize: 18,
      fontWeight: 'bold',
  },
  itemTwodescriptionProduct: {
      marginTop: 5,
      fontSize: 14,
      lineHeight: 18,
      textAlign: 'left'
  },
  titleThree: {
      color: 'white',
      textAlign: 'center',
      fontSize: 22,
      marginBottom: 10,
  },
  descriptionThree: {
      color: 'white',
      textAlign: 'justify',
      fontSize: 14,

  },
});
