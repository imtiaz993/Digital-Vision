import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import tw from 'twrnc';

const Signin = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={tw`bg-gray-900`}>
        <KeyboardAvoidingView>
          <View style={tw`bg-white pb-22 mb-[-30px]`}>
            <Image
              style={tw`mx-auto w-55 h-19  mt-20`}
              source={require('../assets/logo.png')}
            />
            <View style={tw`flex-row justify-center mt-4 `}>
              <Text style={tw`text-[26px] font-bold text-orange-400`}>
                DIGITAL
              </Text>
              <Text style={tw`text-[26px] ml-1 font-bold  text-gray-700`}>
                VISION
              </Text>
            </View>
          </View>
          <View
            style={tw`flex-1 border-2 border-b-0 mx-[-2px] bg-gray-900  border-orange-400  rounded-t-3xl `}>
            <Text
              style={tw`text-[22px] text-white  text-center font-semibold  pt-10 pb-15`}>
              Administrator
            </Text>
            <View style={tw`flex-row items-center `}>
              <View style={tw`w-[85%]`}>
                <View>
                  <Image
                    style={tw`mx-auto absolute left-0 z-1 mt-3 ml-2 w-8 h-8 `}
                    source={require('../assets/user.png')}
                  />
                  <TextInput
                    style={tw`p-2 pl-13 pr-10 text-lg font-medium   mt-1 border border-gray-200  border-b-gray-400 rounded-tr-full shadow-lg bg-white`}
                    placeholder="Username"
                  />
                </View>
                <View>
                  <Image
                    style={tw`mx-auto absolute left-0 z-1 mt-2.5 ml-2.5  w-7 h-7 `}
                    source={require('../assets/lock.png')}
                  />
                  <TextInput
                    style={tw` p-2 pl-13 pr-10 text-lg font-medium border border-gray-200 rounded-br-full shadow-sm  bg-white`}
                    placeholder="Password"
                    secureTextEntry={true}
                  />
                </View>
              </View>
              <Image
                source={require('../assets/Farrow2.png')}
                style={tw`w-15 h-15 relative right-8 `}
              />
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Signin;
