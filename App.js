import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import BannerFilms from './src/components/BannerFilms';
import Filmes from "./src/data/movies";
import CardFilmes from './src/components/cardFilmes';

// COMPONENTS
import Header from './src/components/header';
import SerchBar from './src/components/SerchBar';



export default function App() {
  return (
    <View style={styles.container}>
      
      <Header />
      <SerchBar />
      <BannerFilms />

      <View style={{width:"90%"}}>
        
      <FlatList
      horizontal = {true}
      showsHorizontalScrollIndicator = {false}
      data= {Filmes}
      keyExtractor = {(item) => item.id }
      renderItem = { ({item}) => (
        
        <CardFilmes

        titulo = {item.name}
        nota = {item.feedback}
        imagem = {item.image}
        
        />
        
      )}

      />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141A29',
    alignItems: 'center',
  },
});
