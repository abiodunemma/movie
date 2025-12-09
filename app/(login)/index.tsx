import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Colors from '@/costants/colors'
import AppTextInput from "@/components/AppTextInput";
import AppButtons from '@/components/AppButtons';
import { useRouter } from 'expo-router';



const LoginScreen = () => {
    const router = useRouter();
  return (
    <SafeAreaView style={{flex: 1,  backgroundColor: Colors.background}}>
     <View style={styles.container} >
<Text style={styles.text}>Ready to stream?</Text>

<View style={styles.inputwrapper}>
<AppTextInput placeholder="Your Email" />
<AppTextInput placeholder="Password" secureTextEntry />
<Text style={styles.forget}>Forget Password</Text>
</View>

<AppButtons
 style={{backgroundColor: Colors.primary,  width: "100%", height:50}}
  title='Login'
  onPress={()=>router.push("/(tabs)/(home)")}
   />
    
 <Text style={styles.createaccount}>
    Havent signed up yet? {" "}
    <Text 
     onPress={()=>router.push("/signup")}
      style={{color: Colors.primary}}>
        Create an account
      </Text>
 </Text>
     </View>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontWeight: 600,
        fontSize: 26,
        color: Colors.text,
    },
    inputwrapper:{
        width: '100%',
        marginVertical:26,
    },

    createaccount:{
        color: Colors.gray,
        fontSize: 16,
        marginTop: 14,

    },
    forget:{
        fontSize : 12,
        color: Colors.gray,
        alignSelf: 'flex-end',
    }

})