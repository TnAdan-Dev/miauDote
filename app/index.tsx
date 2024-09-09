import { Text, View, Image } from "react-native";

import ParallaxScrollView from '@/components/ParallaxScrollView';

export default function Index() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#ffedf9', dark: '#ffedf9' }}
      headerImage={
        <Image
          source={require('@/assets/images/cachorro1.jpg')}
          style={{
            height: 300,
            width: 400,
            bottom: 0,
            left: -4,
            position: 'absolute',
            borderRadius: 50,
            borderColor: '#34b4eb',
            borderWidth: 5
          }}
        />
      }>
      <View style={{flex:2}}>
      <Text style={{ fontFamily: 'Ubuntu-Bold', fontSize: 30, textAlign: 'center' }}>App MiauDote</Text>
      </View>
    </ParallaxScrollView>

  );
}
