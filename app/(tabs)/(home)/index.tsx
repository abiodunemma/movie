import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '@/costants/colors'
import OverviewSection from '@/components/OveriewSection'

const HomeScreen = () => {
  return (
    <View style={styles.contianer}>
        <ScrollView>
            <OverviewSection />

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
})