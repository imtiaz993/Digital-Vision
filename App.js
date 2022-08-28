/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import tw from 'twrnc';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './Navigation/tabNavigation';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);
  return (
    <NavigationContainer>
      <Tabs />
      {/* 
      <SafeAreaView style={[styles.container, tw`bg-gray-900`]}>
      <Image
        style={tw`mx-auto w-58 h-20  mt-50`}
        source={require('./assets/logo.png')}
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
      </View> */}

      {/* <Image
        style={tw`mx-auto w-55 h-19  mt-20`}
        source={require('./assets/logo.png')}
      />
      <View style={tw`flex-row justify-center mt-4 `}>
        <Text style={tw`text-[26px] font-bold text-orange-400`}>DIGITAL</Text>
        <Text style={tw`text-[26px] ml-1 font-bold  text-gray-700`}>
          VISION
        </Text>
      </View>

      <View
        style={tw`flex-1 border-2 border-b-0 mx-[-2px] bg-gray-900  mt-15 border-orange-400  rounded-t-3xl `}>
        <Text
          style={tw`text-[22px] text-white  text-center font-semibold  pt-10 pb-15`}>
          Administrator
        </Text>
        <View style={tw`flex-row items-center `}>
          <View style={tw`w-[85%]`}>
            <View>
              <Image
                style={tw`mx-auto absolute left-0 z-1 mt-3 ml-2 w-8 h-8 `}
                source={require('./assets/user.png')}
              />
              <TextInput
                style={tw`p-2 pl-13 pr-10 text-lg font-medium   mt-1 border border-gray-200  border-b-gray-400 rounded-tr-full shadow-lg bg-white`}
                placeholder="Username"
              />
            </View>
            <View>
              <Image
                style={tw`mx-auto absolute left-0 z-1 mt-2.5 ml-2.5  w-7 h-7 `}
                source={require('./assets/lock.png')}
              />
              <TextInput
                style={tw` p-2 pl-13 pr-10 text-lg font-medium border border-gray-200 rounded-br-full shadow-sm  bg-white`}
                placeholder="Password"
                secureTextEntry={true}
              />
            </View>
          </View>
          <Image
            source={require('./assets/Farrow2.png')}
            style={tw`w-15 h-15 relative right-8 `}
          />
        </View>
      </View> */}

      {/* <View style={tw`flex-row items-center px-2 py-4 bg-gray-900`}>
        <View>
          <View style={tw`flex-row`}>
            <Text style={tw`text-xl font-bold text-orange-400`}>DIGITAL</Text>
            <Text style={tw`text-xl ml-1 font-bold text-gray-400`}>VISION</Text>
          </View>
          <Text style={tw`text-sm  mx-auto text-white`}>
            Be Somewhat More Techy
          </Text>
        </View>
        <Image
          style={tw`mx-auto w-30 h-10 mr-0`}
          source={require('./assets/logo.png')}
        />
      </View>
      <View style={tw`bg-gray-800 flex-1`}>
        <View style={tw`flex-row items-center p-3 border-b border-gray-700`}>
          <Image
            style={tw`ml-1 mr-4 w-12 h-12 `}
            source={require('./assets/user.png')}
          />
          <View>
            <Text style={tw`text-lg font-bold text-white`}>Fida Hussain</Text>
            <Text style={tw`text-base text-white`}>fidah3266@gmail.com</Text>
          </View>
        </View>
        <ScrollView><ScrollView>
          <View style={tw`w-11/12 mx-auto   my-4`}>
            <Text
              style={tw`text-center text-lg font-semibold text-white py-1 border-b border-gray-500`}>
              Current
            </Text>
            <View style={tw` flex-row    justify-center   flex-wrap py-1`}>
              <View
                style={tw`w-[42%] bg-white  mx-2 my-2 px-1 py-3 rounded-lg  `}>
                <Text style={tw`text-base text-center text-black`}>
                  Items:{' '}
                  <Text style={tw` text-sm font-bold text-orange-400`}>5</Text>
                </Text>
              </View>
              <View
                style={tw`w-[42%] bg-white  mx-2 my-2 px-1 py-3 rounded-lg `}>
                <Text style={tw`text-base text-center text-black`}>
                  Current:{' '}
                  <Text style={tw` text-sm font-bold text-orange-400`}>
                    7000
                  </Text>
                </Text>
              </View>
              <View
                style={tw`w-[42%] bg-white  mx-2 my-2 px-1 py-3 rounded-lg `}>
                <Text style={tw`text-base text-center text-black`}>
                  Recieved:{' '}
                  <Text style={tw` text-sm font-bold text-orange-400`}>
                    4000
                  </Text>
                </Text>
              </View>
              <View
                style={tw`w-[42%] bg-white  mx-2 my-2 px-1 py-3 rounded-lg `}>
                <Text style={tw`text-base text-center text-black`}>
                  Balance:{' '}
                  <Text style={tw` text-sm font-bold text-orange-400`}>
                    3000
                  </Text>
                </Text>
              </View>
            </View>
          </View>
          <View style={tw`w-11/12 mx-auto my-4`}>
            <Text
              style={tw`text-center text-lg  font-semibold text-white py-1 border-b border-gray-500`}>
              Sale
            </Text>
            <View style={tw` flex-row  justify-center   px-2 py-1 flex-wrap `}>
              <View
                style={tw`w-[42%] bg-white  mx-2 my-2 px-1 py-3 rounded-lg `}>
                <Text style={tw`text-base text-center text-black`}>
                  Items:{' '}
                  <Text style={tw` text-sm font-bold text-orange-400`}>14</Text>
                </Text>
              </View>
              <View
                style={tw`w-[42%] bg-white  mx-2 my-2 px-1 py-3 rounded-lg `}>
                <Text style={tw`text-base text-center text-black`}>
                  Invested:{' '}
                  <Text style={tw` text-sm font-bold text-orange-400`}>
                    12000
                  </Text>
                </Text>
              </View>
              <View
                style={tw`w-[42%] bg-white  mx-2 my-2 px-1 py-3 rounded-lg `}>
                <Text style={tw`text-base text-center text-black`}>
                  Sale:{' '}
                  <Text style={tw` text-sm font-bold text-orange-400`}>
                    17000
                  </Text>
                </Text>
              </View>
              <View
                style={tw`w-[42%] bg-white  mx-2 my-2 px-1 py-3 rounded-lg `}>
                <Text style={tw`text-base text-center text-black`}>
                  Earned:{' '}
                  <Text style={tw` text-sm font-bold text-orange-400`}>
                    5000
                  </Text>
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View> */}

      {/* <View style={tw`flex-row items-center px-2 py-4 bg-gray-900`}>
          <View>
            <View style={tw`flex-row`}>
              <Text style={tw`text-xl font-bold text-orange-400`}>DIGITAL</Text>
              <Text style={tw`text-xl ml-1 font-bold text-gray-400`}>
                VISION
              </Text>
            </View>
            <Text style={tw`text-sm  mx-auto text-white`}>
              Be Somewhat More Techy
            </Text>
          </View>
          <Image
            style={tw`mx-auto w-30 h-10 mr-0`}
            source={require('./assets/logo.png')}
          />
        </View>
        <View style={tw`bg-gray-800 flex-1`}>
          <ScrollView>
            <View
              style={tw`w-11/12 mx-auto flex-row justify-center flex-wrap py-1`}>
              <TouchableOpacity
                style={tw`w-full flex-row justify-between bg-white  mx-2 my-2 px-4 py-2 rounded-lg  `}>
                <View style={tw`w-1/2 justify-between`}>
                  <Text style={tw`text-base text-black pb-1`}>Redmi 9C</Text>
                  <Text style={tw`text-base text-black `}>Abdul Sattar</Text>
                </View>
                <View style={tw`w-2/5 justify-between`}>
                  <Text style={tw` text-sm  text-black`}>
                    Sale:{' '}
                    <Text style={tw` text-sm font-bold text-orange-400`}>
                      26000
                    </Text>
                  </Text>
                  <Text style={tw` text-sm text-black`}>
                    Purchase:{' '}
                    <Text style={tw` text-sm font-bold text-orange-400`}>
                      22000
                    </Text>
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={tw`w-full flex-row justify-between bg-white  mx-2 my-2 px-4 py-2 rounded-lg  `}>
                <View style={tw`w-1/2 justify-between`}>
                  <Text style={tw`text-base text-black pb-1`}>
                    Infinix Note 10
                  </Text>
                  <Text style={tw`text-base text-black `}>Muhammed Sajid</Text>
                </View>
                <View style={tw`w-2/5 justify-between`}>
                  <Text style={tw` text-sm  text-black`}>
                    Sale:{' '}
                    <Text style={tw` text-sm font-bold text-orange-400`}>
                      26000
                    </Text>
                  </Text>
                  <Text style={tw` text-sm text-black`}>
                    Purchase:{' '}
                    <Text style={tw` text-sm font-bold text-orange-400`}>
                      22000
                    </Text>
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={tw`w-full flex-row justify-between bg-white  mx-2 my-2 px-4 py-2 rounded-lg  `}>
                <View style={tw`w-1/2 justify-between`}>
                  <Text style={tw`text-base text-black pb-1`}>Oppo A96</Text>
                  <Text style={tw`text-base text-black `}>Muhammad Awais</Text>
                </View>
                <View style={tw`w-2/5 justify-between`}>
                  <Text style={tw` text-sm  text-black`}>
                    Sale:{' '}
                    <Text style={tw` text-sm font-bold text-orange-400`}>
                      26000
                    </Text>
                  </Text>
                  <Text style={tw` text-sm text-black`}>
                    Purchase:{' '}
                    <Text style={tw` text-sm font-bold text-orange-400`}>
                      22000
                    </Text>
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={tw`w-full flex-row justify-between bg-white  mx-2 my-2 px-4 py-2 rounded-lg  `}>
                <View style={tw`w-1/2 justify-between`}>
                  <Text style={tw`text-base text-black pb-1`}>Oppo A96</Text>
                  <Text style={tw`text-base text-black `}>Muhammad Awais</Text>
                </View>
                <View style={tw`w-2/5 justify-between`}>
                  <Text style={tw` text-sm  text-black`}>
                    Sale:{' '}
                    <Text style={tw` text-sm font-bold text-orange-400`}>
                      26000
                    </Text>
                  </Text>
                  <Text style={tw` text-sm text-black`}>
                    Purchase:{' '}
                    <Text style={tw` text-sm font-bold text-orange-400`}>
                      22000
                    </Text>
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={tw`w-full flex-row justify-between bg-white  mx-2 my-2 px-4 py-2 rounded-lg  `}>
                <View style={tw`w-1/2 justify-between`}>
                  <Text style={tw`text-base text-black pb-1`}>Oppo A96</Text>
                  <Text style={tw`text-base text-black `}>Muhammad Awais</Text>
                </View>
                <View style={tw`w-2/5 justify-between`}>
                  <Text style={tw` text-sm  text-black`}>
                    Sale:{' '}
                    <Text style={tw` text-sm font-bold text-orange-400`}>
                      26000
                    </Text>
                  </Text>
                  <Text style={tw` text-sm text-black`}>
                    Purchase:{' '}
                    <Text style={tw` text-sm font-bold text-orange-400`}>
                      22000
                    </Text>
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={tw`w-full flex-row justify-between bg-white  mx-2 my-2 px-4 py-2 rounded-lg  `}>
                <View style={tw`w-1/2 justify-between`}>
                  <Text style={tw`text-base text-black pb-1`}>Oppo A96</Text>
                  <Text style={tw`text-base text-black `}>Muhammad Awais</Text>
                </View>
                <View style={tw`w-2/5 justify-between`}>
                  <Text style={tw` text-sm  text-black`}>
                    Sale:{' '}
                    <Text style={tw` text-sm font-bold text-orange-400`}>
                      26000
                    </Text>
                  </Text>
                  <Text style={tw` text-sm text-black`}>
                    Purchase:{' '}
                    <Text style={tw` text-sm font-bold text-orange-400`}>
                      22000
                    </Text>
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={tw`w-full flex-row justify-between bg-white  mx-2 my-2 px-4 py-2 rounded-lg  `}>
                <View style={tw`w-1/2 justify-between`}>
                  <Text style={tw`text-base text-black pb-1`}>Oppo A96</Text>
                  <Text style={tw`text-base text-black `}>Muhammad Awais</Text>
                </View>
                <View style={tw`w-2/5 justify-between`}>
                  <Text style={tw` text-sm  text-black`}>
                    Sale:{' '}
                    <Text style={tw` text-sm font-bold text-orange-400`}>
                      26000
                    </Text>
                  </Text>
                  <Text style={tw` text-sm text-black`}>
                    Purchase:{' '}
                    <Text style={tw` text-sm font-bold text-orange-400`}>
                      22000
                    </Text>
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={tw`w-full flex-row justify-between bg-white  mx-2 my-2 px-4 py-2 rounded-lg  `}>
                <View style={tw`w-1/2 justify-between`}>
                  <Text style={tw`text-base text-black pb-1`}>Oppo A96</Text>
                  <Text style={tw`text-base text-black `}>Muhammad Awais</Text>
                </View>
                <View style={tw`w-2/5 justify-between`}>
                  <Text style={tw` text-sm  text-black`}>
                    Sale:{' '}
                    <Text style={tw` text-sm font-bold text-orange-400`}>
                      26000
                    </Text>
                  </Text>
                  <Text style={tw` text-sm text-black`}>
                    Purchase:{' '}
                    <Text style={tw` text-sm font-bold text-orange-400`}>
                      22000
                    </Text>
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={tw`w-full flex-row justify-between bg-white  mx-2 my-2 px-4 py-2 rounded-lg  `}>
                <View style={tw`w-1/2 justify-between`}>
                  <Text style={tw`text-base text-black pb-1`}>Oppo A96</Text>
                  <Text style={tw`text-base text-black `}>Muhammad Awais</Text>
                </View>
                <View style={tw`w-2/5 justify-between`}>
                  <Text style={tw` text-sm  text-black`}>
                    Sale:{' '}
                    <Text style={tw` text-sm font-bold text-orange-400`}>
                      26000
                    </Text>
                  </Text>
                  <Text style={tw` text-sm text-black`}>
                    Purchase:{' '}
                    <Text style={tw` text-sm font-bold text-orange-400`}>
                      22000
                    </Text>
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={tw`w-full flex-row justify-between bg-white  mx-2 my-2 px-4 py-2 rounded-lg  `}>
                <View style={tw`w-1/2 justify-between`}>
                  <Text style={tw`text-base text-black pb-1`}>Oppo A96</Text>
                  <Text style={tw`text-base text-black `}>Muhammad Awais</Text>
                </View>
                <View style={tw`w-2/5 justify-between`}>
                  <Text style={tw` text-sm  text-black`}>
                    Sale:{' '}
                    <Text style={tw` text-sm font-bold text-orange-400`}>
                      26000
                    </Text>
                  </Text>
                  <Text style={tw` text-sm text-black`}>
                    Purchase:{' '}
                    <Text style={tw` text-sm font-bold text-orange-400`}>
                      22000
                    </Text>
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={tw`w-full flex-row justify-between bg-white  mx-2 my-2 px-4 py-2 rounded-lg  `}>
                <View style={tw`w-1/2 justify-between`}>
                  <Text style={tw`text-base text-black pb-1`}>Oppo A96</Text>
                  <Text style={tw`text-base text-black `}>Muhammad Awais</Text>
                </View>
                <View style={tw`w-2/5 justify-between`}>
                  <Text style={tw` text-sm  text-black`}>
                    Sale:{' '}
                    <Text style={tw` text-sm font-bold text-orange-400`}>
                      26000
                    </Text>
                  </Text>
                  <Text style={tw` text-sm text-black`}>
                    Purchase:{' '}
                    <Text style={tw` text-sm font-bold text-orange-400`}>
                      22000
                    </Text>
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={tw`w-full flex-row justify-between bg-white  mx-2 my-2 px-4 py-2 rounded-lg  `}>
                <View style={tw`w-1/2 justify-between`}>
                  <Text style={tw`text-base text-black pb-1`}>Oppo A96</Text>
                  <Text style={tw`text-base text-black `}>Muhammad Awais</Text>
                </View>
                <View style={tw`w-2/5 justify-between`}>
                  <Text style={tw` text-sm  text-black`}>
                    Sale:{' '}
                    <Text style={tw` text-sm font-bold text-orange-400`}>
                      26000
                    </Text>
                  </Text>
                  <Text style={tw` text-sm text-black`}>
                    Purchase:{' '}
                    <Text style={tw` text-sm font-bold text-orange-400`}>
                      22000
                    </Text>
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={tw`w-full flex-row justify-between bg-white  mx-2 my-2 px-4 py-2 rounded-lg  `}>
                <View style={tw`w-1/2 justify-between`}>
                  <Text style={tw`text-base text-black pb-1`}>Oppo A96</Text>
                  <Text style={tw`text-base text-black `}>Muhammad Awais</Text>
                </View>
                <View style={tw`w-2/5 justify-between`}>
                  <Text style={tw` text-sm  text-black`}>
                    Sale:{' '}
                    <Text style={tw` text-sm font-bold text-orange-400`}>
                      26000
                    </Text>
                  </Text>
                  <Text style={tw` text-sm text-black`}>
                    Purchase:{' '}
                    <Text style={tw` text-sm font-bold text-orange-400`}>
                      22000
                    </Text>
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={tw`w-full flex-row justify-between bg-white  mx-2 my-2 px-4 py-2 rounded-lg  `}>
                <View style={tw`w-1/2 justify-between`}>
                  <Text style={tw`text-base text-black pb-1`}>Oppo A96</Text>
                  <Text style={tw`text-base text-black `}>Muhammad Awais</Text>
                </View>
                <View style={tw`w-2/5 justify-between`}>
                  <Text style={tw` text-sm  text-black`}>
                    Sale:{' '}
                    <Text style={tw` text-sm font-bold text-orange-400`}>
                      26000
                    </Text>
                  </Text>
                  <Text style={tw` text-sm text-black`}>
                    Purchase:{' '}
                    <Text style={tw` text-sm font-bold text-orange-400`}>
                      22000
                    </Text>
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={tw`w-full flex-row justify-between bg-white  mx-2 my-2 px-4 py-2 rounded-lg  `}>
                <View style={tw`w-1/2 justify-between`}>
                  <Text style={tw`text-base text-black pb-1`}>Oppo A96</Text>
                  <Text style={tw`text-base text-black `}>Muhammad Awais</Text>
                </View>
                <View style={tw`w-2/5 justify-between`}>
                  <Text style={tw` text-sm  text-black`}>
                    Sale:{' '}
                    <Text style={tw` text-sm font-bold text-orange-400`}>
                      26000
                    </Text>
                  </Text>
                  <Text style={tw` text-sm text-black`}>
                    Purchase:{' '}
                    <Text style={tw` text-sm font-bold text-orange-400`}>
                      22000
                    </Text>
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={tw`w-full flex-row justify-between bg-white  mx-2 my-2 px-4 py-2 rounded-lg  `}>
                <View style={tw`w-1/2 justify-between`}>
                  <Text style={tw`text-base text-black pb-1`}>Oppo A96</Text>
                  <Text style={tw`text-base text-black `}>Muhammad Awais</Text>
                </View>
                <View style={tw`w-2/5 justify-between`}>
                  <Text style={tw` text-sm  text-black`}>
                    Sale:{' '}
                    <Text style={tw` text-sm font-bold text-orange-400`}>
                      26000
                    </Text>
                  </Text>
                  <Text style={tw` text-sm text-black`}>
                    Purchase:{' '}
                    <Text style={tw` text-sm font-bold text-orange-400`}>
                      22000
                    </Text>
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={tw`w-full flex-row justify-between bg-white  mx-2 my-2 px-4 py-2 rounded-lg  `}>
                <View style={tw`w-1/2 justify-between`}>
                  <Text style={tw`text-base text-black pb-1`}>Oppo A96</Text>
                  <Text style={tw`text-base text-black `}>Muhammad Awais</Text>
                </View>
                <View style={tw`w-2/5 justify-between`}>
                  <Text style={tw` text-sm  text-black`}>
                    Sale:{' '}
                    <Text style={tw` text-sm font-bold text-orange-400`}>
                      26000
                    </Text>
                  </Text>
                  <Text style={tw` text-sm text-black`}>
                    Purchase:{' '}
                    <Text style={tw` text-sm font-bold text-orange-400`}>
                      22000
                    </Text>
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={tw`w-full flex-row justify-between bg-white  mx-2 my-2 px-4 py-2 rounded-lg  `}>
                <View style={tw`w-1/2 justify-between`}>
                  <Text style={tw`text-base text-black pb-1`}>Oppo A96</Text>
                  <Text style={tw`text-base text-black `}>Muhammad Awais</Text>
                </View>
                <View style={tw`w-2/5 justify-between`}>
                  <Text style={tw` text-sm  text-black`}>
                    Sale:{' '}
                    <Text style={tw` text-sm font-bold text-orange-400`}>
                      26000
                    </Text>
                  </Text>
                  <Text style={tw` text-sm text-black`}>
                    Purchase:{' '}
                    <Text style={tw` text-sm font-bold text-orange-400`}>
                      22000
                    </Text>
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={tw`w-full flex-row justify-between bg-white  mx-2 my-2 px-4 py-2 rounded-lg  `}>
                <View style={tw`w-1/2 justify-between`}>
                  <Text style={tw`text-base text-black pb-1`}>Oppo A96</Text>
                  <Text style={tw`text-base text-black `}>Muhammad Awais</Text>
                </View>
                <View style={tw`w-2/5 justify-between`}>
                  <Text style={tw` text-sm  text-black`}>
                    Sale:{' '}
                    <Text style={tw` text-sm font-bold text-orange-400`}>
                      26000
                    </Text>
                  </Text>
                  <Text style={tw` text-sm text-black`}>
                    Purchase:{' '}
                    <Text style={tw` text-sm font-bold text-orange-400`}>
                      22000
                    </Text>
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={tw`w-full flex-row justify-between bg-white  mx-2 my-2 px-4 py-2 rounded-lg  `}>
                <View style={tw`w-1/2 justify-between`}>
                  <Text style={tw`text-base text-black pb-1`}>Oppo A96</Text>
                  <Text style={tw`text-base text-black `}>Muhammad Awais</Text>
                </View>
                <View style={tw`w-2/5 justify-between`}>
                  <Text style={tw` text-sm  text-black`}>
                    Sale:{' '}
                    <Text style={tw` text-sm font-bold text-orange-400`}>
                      26000
                    </Text>
                  </Text>
                  <Text style={tw` text-sm text-black`}>
                    Purchase:{' '}
                    <Text style={tw` text-sm font-bold text-orange-400`}>
                      22000
                    </Text>
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={tw`w-full flex-row justify-between bg-white  mx-2 my-2 px-4 py-2 rounded-lg  `}>
                <View style={tw`w-1/2 justify-between`}>
                  <Text style={tw`text-base text-black pb-1`}>Oppo A96</Text>
                  <Text style={tw`text-base text-black `}>Muhammad Awais</Text>
                </View>
                <View style={tw`w-2/5 justify-between`}>
                  <Text style={tw` text-sm  text-black`}>
                    Sale:{' '}
                    <Text style={tw` text-sm font-bold text-orange-400`}>
                      26000
                    </Text>
                  </Text>
                  <Text style={tw` text-sm text-black`}>
                    Purchase:{' '}
                    <Text style={tw` text-sm font-bold text-orange-400`}>
                      22000
                    </Text>
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={tw`w-full flex-row justify-between bg-white  mx-2 my-2 px-4 py-2 rounded-lg  `}>
                <View style={tw`w-1/2 justify-between`}>
                  <Text style={tw`text-base text-black pb-1`}>Oppo A96</Text>
                  <Text style={tw`text-base text-black `}>Muhammad Awais</Text>
                </View>
                <View style={tw`w-2/5 justify-between`}>
                  <Text style={tw` text-sm  text-black`}>
                    Sale:{' '}
                    <Text style={tw` text-sm font-bold text-orange-400`}>
                      26000
                    </Text>
                  </Text>
                  <Text style={tw` text-sm text-black`}>
                    Purchase:{' '}
                    <Text style={tw` text-sm font-bold text-orange-400`}>
                      22000
                    </Text>
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={tw`w-full flex-row justify-between bg-white  mx-2 my-2 px-4 py-2 rounded-lg  `}>
                <View style={tw`w-1/2 justify-between`}>
                  <Text style={tw`text-base text-black pb-1`}>Oppo A96</Text>
                  <Text style={tw`text-base text-black `}>Muhammad Awais</Text>
                </View>
                <View style={tw`w-2/5 justify-between`}>
                  <Text style={tw` text-sm  text-black`}>
                    Sale:{' '}
                    <Text style={tw` text-sm font-bold text-orange-400`}>
                      26000
                    </Text>
                  </Text>
                  <Text style={tw` text-sm text-black`}>
                    Purchase:{' '}
                    <Text style={tw` text-sm font-bold text-orange-400`}>
                      22000
                    </Text>
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={tw`w-full flex-row justify-between bg-white  mx-2 my-2 px-4 py-2 rounded-lg  `}>
                <View style={tw`w-1/2 justify-between`}>
                  <Text style={tw`text-base text-black pb-1`}>Oppo A96</Text>
                  <Text style={tw`text-base text-black `}>Muhammad Awais</Text>
                </View>
                <View style={tw`w-2/5 justify-between`}>
                  <Text style={tw` text-sm  text-black`}>
                    Sale:{' '}
                    <Text style={tw` text-sm font-bold text-orange-400`}>
                      26000
                    </Text>
                  </Text>
                  <Text style={tw` text-sm text-black`}>
                    Purchase:{' '}
                    <Text style={tw` text-sm font-bold text-orange-400`}>
                      22000
                    </Text>
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={tw`w-full flex-row justify-between bg-white  mx-2 my-2 px-4 py-2 rounded-lg  `}>
                <View style={tw`w-1/2 justify-between`}>
                  <Text style={tw`text-base text-black pb-1`}>Oppo A96</Text>
                  <Text style={tw`text-base text-black `}>Muhammad Awais</Text>
                </View>
                <View style={tw`w-2/5 justify-between`}>
                  <Text style={tw` text-sm  text-black`}>
                    Sale:{' '}
                    <Text style={tw` text-sm font-bold text-orange-400`}>
                      26000
                    </Text>
                  </Text>
                  <Text style={tw` text-sm text-black`}>
                    Purchase:{' '}
                    <Text style={tw` text-sm font-bold text-orange-400`}>
                      22000
                    </Text>
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={tw`w-full flex-row justify-between bg-white  mx-2 my-2 px-4 py-2 rounded-lg  `}>
                <View style={tw`w-1/2 justify-between`}>
                  <Text style={tw`text-base text-black pb-1`}>Oppo A96</Text>
                  <Text style={tw`text-base text-black `}>Muhammad Awais</Text>
                </View>
                <View style={tw`w-2/5 justify-between`}>
                  <Text style={tw` text-sm  text-black`}>
                    Sale:{' '}
                    <Text style={tw` text-sm font-bold text-orange-400`}>
                      26000
                    </Text>
                  </Text>
                  <Text style={tw` text-sm text-black`}>
                    Purchase:{' '}
                    <Text style={tw` text-sm font-bold text-orange-400`}>
                      22000
                    </Text>
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View> */}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
