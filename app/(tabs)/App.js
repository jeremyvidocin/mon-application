import { View, Text, Image, Button, Alert, StyleSheet } from 'react-native';
export default function App() {
 return (
 <View style={styles.container}>
 <Text style={styles.title}>Bienvenue sur mon app !</Text>
 <Image
 source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
 style={styles.image}
 />
 <Button title="Clique-moi" onPress={() => Alert.alert('Bouton cliqué !')} />
 </View>
 );
}
const styles = StyleSheet.create({
 container: {
 flex: 1,
 justifyContent: 'center',
 alignItems: 'center',
 backgroundColor: '#f5f5f5',
 },
 title: {
 fontSize: 24,
 fontWeight: 'bold',
 marginBottom: 20,
 },
 image: {
 width: 100,
 height: 100,
 marginBottom: 20,
 },
});