import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  Image, 
  ImageSourcePropType 
} from 'react-native';

import React from 'react';
import { hs, vs, ms } from '@/costants/screen-dimensions';
import Colors from '@/costants/colors';
import { FontAwesome5 } from '@expo/vector-icons';

interface ContinueWatchingMovieCardProps {
  image?: ImageSourcePropType;
  title?: string;
  genre?: string;
}

const ContinueWatchingMoviesCard = ({
  genre,
  title,
  image,
}: ContinueWatchingMovieCardProps) => {

  // Generate random progress between 10% and 100%
  const getRandomPercentage = () => {
    const min = 10;
    const max = 100;
    const value = Math.floor(Math.random() * (max - min + 1)) + min;
    return `${value}%`;
  };
  const randomProgress = getRandomPercentage();

  return (
    <View style={styles.container}>
      <View style={{ position: 'relative' }}>
        
        {/* Play button overlay */}
        <TouchableOpacity activeOpacity={0.8} style={styles.pressplay}>
          <FontAwesome5 name="play" size={24} color={"#202020"} />
        </TouchableOpacity>

        {/* Movie image */}
        <Image source={image} style={styles.image} />

        {/* Progress bar */}
        <View style={styles.progressBarContainer}>
          <View style={[styles.progress, { width: getRandomPercentage() }]} />
        </View>
      </View>

      <View style={{ marginTop: 8 }}>
        <Text numberOfLines={1} style={{ color: Colors.text, fontSize: ms(10),fontWeight: "600", fontSize: 16 }}>
{title}
</Text>
<Text numberOfLines={1} style={{ color: Colors.gray, fontSize: 12, }}>
    {genre}
    </Text>

      </View>

    
    </View>
  );
};

export default ContinueWatchingMoviesCard;

const styles = StyleSheet.create({
  container: {
    width: hs(240),
    marginHorizontal: 8,
  },

  image: {
    height: vs(170),
    width: '100%',
    borderRadius: 6,
  },

  pressplay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 9999,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    marginTop: 8,
    fontSize: ms(12),
    fontWeight: '600',
    color: Colors.text,
  },

  genre: {
    marginTop: 2,
    fontSize: ms(10),
    color: Colors.gray,
  },

  progressBarContainer: {
    marginTop: 8,
    height: 3,
    width: '100%',
    backgroundColor: Colors.text,
    borderRadius: 4,
    overflow: 'hidden',
  },

  progress: {
    height: '100%',
    backgroundColor: Colors.primary,
    borderRadius: 4,
  },
});
