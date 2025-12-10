import { ScrollView, StyleSheet, Text, View, TouchableOpacity, FlatListComponent, FlatList } from 'react-native'
import React from 'react'
import Colors from '@/costants/colors'
import OverviewSection from '@/components/OveriewSection'
import MovieCard from '@/components/MovieCard'
import { movies } from '@/costants/mock-data'


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

            <View style={{flex: 1}}>
              <View style={{marginVertical: 20}}>
                <SectionHeader title="Trending now ⚠" />
                </View>
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
  keyExtractor={(item, index) => index.toString()}
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
      paddingHorizotal: 14,
    }

})