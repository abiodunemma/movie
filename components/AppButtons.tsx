import { StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import React from 'react'

interface AppButtonsProps {
    title: string;
    icon?:  any;
    style?: StyleProp<ViewStyle>;
    onPress?: () => void;
}

const AppButtons = ({title, icon,onPress, style}: AppButtonsProps) => {
  return (
    <TouchableOpacity  onPress={onPress} activeOpacity={0.6} style={[styles.container, style]}>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ color: "white", fontWeight: "600", marginRight: 6, }}>
          {title}
        </Text>
        {icon}
      </View>
    </TouchableOpacity>
  );
};


export default AppButtons

const styles = StyleSheet.create({
    container: {
        height: 45,
        width: 140,
        backgroundColor: '#202020',
        borderRadius: 10,
        alignItems: 'center',
        marginRight: 14,
        borderWidth: 1,
        justifyContent: 'center',

    }
})