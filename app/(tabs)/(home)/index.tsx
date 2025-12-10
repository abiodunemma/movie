import { ScrollView, StyleSheet, Text, View, TouchableOpacity, FlatListComponent, FlatList, Image } from 'react-native'
import React from 'react'
import Colors from '@/costants/colors'
import OverviewSection from '@/components/OveriewSection'
import MovieCard from '@/components/MovieCard'

import { movies } from '@/costants/mock-data'
import ContinueWatchingMoviesCard from '@/components/ContinueWatchingMovies'


const SectionHeader = ({title}: {title: string}) =>  {
  return (
  <View style={styles.SectionHeader}>
    <Text style={{color: Colors.text, fontWeight: "600", fontSize: 16 }}> {title} </Text>
  
  <TouchableOpacity activeOpacity={.8} style={{padding: 10}}>
    <Text style={{color: Colors.primary, fontWeight: "500", fontSize: 14 }}> See More
  
  </Text>
    </TouchableOpacity>

  </View>
  );
};

const HomeScreen = () => {
  return (
    <View style={styles.contianer}>
        <ScrollView>
            <OverviewSection />

         
              <View style={{marginVertical: 20}}>
                <SectionHeader title="Trending now ⚠" />
               
               <FlatList
data={[...movies].reverse()}
  renderItem={({ item }) => (
    <MovieCard
      title={item.title}
      genre={item.genre}
      image={item.image}
    />
  )}
  horizontal
  
/>
                </View>


<View style={{marginVertical: 20}}>
  <SectionHeader title="Continue Watching" />
<FlatList
data={[...movies].reverse()}
renderItem={({item}) => (
<ContinueWatchingMoviesCard 
  genre={item.genre}
  title={item.title}
  image={item.image}
/>
)} 
horizontal
/>
  
                  </View>

                
              <View style={{marginVertical: 20}}>
                <SectionHeader title="New Releases  🎉" />
                <FlatList
  data={movies}
  renderItem={({ item }) => (
    <MovieCard
      title={item.title}
      genre={item.genre}
      image={item.image}
    />
  )}
  horizontal
  
/>
            

</View>

<View style={{marginVertical: 20}}>
  <SectionHeader title="International Picks " />
<FlatList
data={[...movies].reverse()}
renderItem={({item}) => (
<ContinueWatchingMoviesCard 
  genre={item.genre}
  title={item.title}
  image={item.image}
/>
)} 
horizontal
/>

                  </View>
        </ScrollView>
     
    </View>

    
  );
};

export default HomeScreen

const styles = StyleSheet.create({
    contianer: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    SectionHeader: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 14,
      paddingHorizontal: 14,

    }

})