import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Colors from '@/costants/colors'
import AppTextInput from "@/components/AppTextInput";
import AppButtons from '@/components/AppButtons';
import { useRouter } from 'expo-router';



const SignupScreen = () => {
    const router = useRouter();
  return (
    <SafeAreaView style={{flex: 1,  backgroundColor: Colors.background}}>
     <View style={styles.container} >
<Text style={styles.text}>Ready to stream Now?</Text>
<Text style={styles.sub}>Join  thousand of movie lovers today</Text>

<View style={styles.inputwrapper}>
<AppTextInput placeholder="Your Email" />
<AppTextInput placeholder="Password" secureTextEntry />
<Text style={styles.sub}> I agree to the terms of service and privacy policy

</Text>
</View>

<AppButtons style={{backgroundColor: Colors.primary,  width: "100%", height:50, marginRight: 0}} title='Create Account' />
    
 <Text style={styles.createaccount}>
   already have an account?  {" "}
<Text onPress={() => router.push("/(login)")} style={{ color: Colors.primary }}>
  Log In
</Text>


 </Text>
     </View>
    </SafeAreaView>
  )
}

export default SignupScreen

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
    sub: {
        fontSize: 14,
        color: Colors.gray,
    }

})