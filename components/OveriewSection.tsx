import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import profile from '@/app/(tabs)/profile'
import { LinearGradient } from 'expo-linear-gradient';

import Colors from '@/costants/colors'
import { Feather, FontAwesome, FontAwesome5 } from '@expo/vector-icons';

const OveriewSection = () => {
  return (
    <View style={styles.OveriewSection}>
<Image style={styles.OveriewImage} source={
    require("@/assets/images/overview.png")
}
/>

{/* <Text></Text>} */}
<View style={styles.cover}>
    <SafeAreaView style={{flex: 1}}>
        <View style={styles.header}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image  style={styles.profile} source={require('@/assets/images/profile.jpg')} />
           <View style={{marginLeft: 8}}>
            <Text style={styles.greatings}> Hi, Abbey 👋 </Text>
              <Text style={{ color: Colors.text, fontSize: 16 }}> welcome back  </Text>
            </View>
            </View>

            <TouchableOpacity style={styles.searchWrapper} activeOpacity={0.7} 
            >
                <Feather name="search" size={24} color={Colors.text} />
                </TouchableOpacity>
</View>
    </SafeAreaView>

<LinearGradient style={styles.blur} colors={["transparent", Colors.background]}
>
    <View style={styles.categorBadge}>
      <Text style={{ color: Colors.text, fontWeight: '600', fontSize: 16 }}>
  Series
</Text>

    </View>

    <View style={{flexDirection: "row", alignItems: 'center', justifyContent: 'space-between'}}> 
        <Text 
        numberOfLines={1}
        style={{ fontSize: 26, fontWeight: "600", color: Colors.text, flex:1 
        
         }}> The sandman</Text>
    
        
        < TouchableOpacity activeOpacity={.8} style={styles.platbtn}>

        <FontAwesome5 name="play" size={24} color={Colors.text} />
        </TouchableOpacity>
    </View>
    <Text style={{ color: Colors.gray, fontSize: 14, marginTop: 4 }}>
        2025  •  Fantasy, Drama  •  2 Seasons
        </Text>
</LinearGradient>
    </View>
    </View>
    
  );
};

export default OveriewSection

const styles = StyleSheet.create({
    OveriewSection: {
        height: 400,
    },
    OveriewImage: {
        width: '100%',
        height: '100%',
    objectFit: 'cover',
    },
    cover: {
        position: 'absolute',
        top: 0,
        bottom: 0,
     left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.8)',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 14,
    },
    profile: {
        height: 45,
        width: 45,
        borderRadius: 50,
 
    },
    greatings: {
        color: Colors.text,
        fontWeight: '600',
        fontSize: 22,
    },
    searchWrapper: {
        height: 50,
        width: 50,
        backgroundColor: "#535456",
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    blur: {
        height: 150,
        width: '100%',
        padding: 14,
        justifyContent: "space-around",
    },
    categorBadge: {
        padding: 8,
        backgroundColor: Colors.surface,
        borderRadius: 14,
        alignItems: 'center',
        width: 100,
    },
    platbtn: {
        height: 60,
        width: 60,
        borderRadius: "50%",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.surface,
    }

})