import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import tw from 'twrnc';

const Sold = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={tw`flex-row items-center px-2 py-4 bg-gray-900`}>
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
          source={require('../assets/logo.png')}
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
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Sold;
