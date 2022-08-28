import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, Image} from 'react-native';
import tw from 'twrnc';

const Splash = () => {
  return (
    <SafeAreaView style={[styles.container, tw`bg-gray-900`]}>
      <Image
        style={tw`mx-auto w-58 h-20  mt-50`}
        source={require('../assets/logo.png')}
      />
      <View style={tw`flex-1 justify-end mb-10`}>
        <View style={tw`flex-row justify-center`}>
          <Text style={tw`text-4xl font-bold text-orange-400`}>DIGITAL</Text>
          <Text style={tw`text-4xl ml-2 font-bold  text-gray-400`}>VISION</Text>
        </View>
        <Text style={tw`text-[19px]  mx-auto text-gray-200 mb-30`}>
          Be Somewhat More Techy
        </Text>
        <Text style={tw`text-[15px] font-thin  mx-auto text-white`}>
          Designed & Developed by Imtiaz Hussain
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Splash;
