import { StyleSheet, Text, View, TouchableOpacity, Image, ImageSourcePropType } from 'react-native';
import React from 'react';
import { hs, vs, ms } from '@/costants/screen-dimensions';
import Colors from '@/costants/colors';

interface MovieCardProps {
    image?: ImageSourcePropType;
    title?: string;
    genre?: string;
}

const MovieCard = ({ genre, title, image }: MovieCardProps) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.container}>
      <Image
        style={styles.image}
        source={image}
      />

      <View style={{ marginTop: 6 }}>
        <Text
          numberOfLines={1}
          style={{
            color: Colors.text,
            fontWeight: '600',
            fontSize: ms(10),
          }}
        >
         {title}
        </Text>

        <Text
          numberOfLines={1}
          style={{ color: Colors.gray, fontSize: ms(10), marginTop: 2 }}
        >
         {genre}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  container: {
    width: hs(110), 
    marginHorizontal: 10,
    marginBottom: 14,
  },

  image: {
    height: vs(150),
    width: '100%',
    borderRadius: 10,
  },
});
