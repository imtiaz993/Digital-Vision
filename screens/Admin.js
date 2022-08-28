import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import tw from 'twrnc';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';

const Admin = () => {
  // each value represents a goal ring in Progress chart
  const data = {
    labels: ['Swim', 'Bike', 'Run'], // optional
    data: [0.4, 0.6, 0.8],
  };
  const bardata = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };
  const stackdata = {
    labels: ['Test1', 'Test2'],
    legend: ['L1', 'L2', 'L3'],
    data: [
      [60, 60, 60],
      [30, 30, 60],
    ],
    barColors: ['#dfe4ea', '#ced6e0', '#a4b0be'],
  };
  const piedata = [
    {
      name: 'Seoul',
      population: 21500000,
      color: 'rgba(131, 167, 234, 1)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Toronto',
      population: 2800000,
      color: '#F00',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Beijing',
      population: 527612,
      color: 'red',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'New York',
      population: 8538000,
      color: '#ffffff',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Moscow',
      population: 11920000,
      color: 'rgb(0, 0, 255)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
  ];

  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Text>Bezier Line Chart</Text>
          <LineChart
            data={{
              labels: ['January', 'February', 'March', 'April', 'May', 'June'],
              datasets: [
                {
                  data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                  ],
                },
              ],
            }}
            width={Dimensions.get('window').width} // from react-native
            height={220}
            yAxisLabel="$"
            yAxisSuffix="k"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: '#000000',
              backgroundGradientFrom: '#000000',
              backgroundGradientTo: '#e6d2ff',
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: '6',
                strokeWidth: '2',
                stroke: '#ffa726',
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
          <ProgressChart
            data={data}
            width={Dimensions.get('window').width}
            height={220}
            strokeWidth={16}
            radius={32}
            chartConfig={chartConfig}
            hideLegend={false}
          />
          <BarChart
            // style={graphStyle}
            data={bardata}
            width={Dimensions.get('window').width}
            height={220}
            yAxisLabel="$"
            chartConfig={chartConfig}
            verticalLabelRotation={30}
          />
          <StackedBarChart
            // style={graphStyle}
            data={stackdata}
            width={Dimensions.get('window').width}
            height={220}
            chartConfig={chartConfig}
          />
          <PieChart
            data={piedata}
            width={Dimensions.get('window').width}
            height={220}
            chartConfig={chartConfig}
            accessor={'population'}
            backgroundColor={'transparent'}
            paddingLeft={'15'}
            center={[10, 50]}
            absolute
          />
        </View>
      </ScrollView>
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
          source={require('../assets/logo.png')}
        />
      </View>

      <View style={tw`bg-gray-800 flex-1`}>
        <View style={tw`flex-row items-center p-3 border-b border-gray-700`}>
          <Image
            style={tw`ml-1 mr-4 w-12 h-12 `}
            source={require('../assets/user.png')}
          />
          <View>
            <Text style={tw`text-lg font-bold text-white`}>Fida Hussain</Text>
            <Text style={tw`text-base text-white`}>fidah3266@gmail.com</Text>
          </View>
        </View>
        <ScrollView>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Admin;
