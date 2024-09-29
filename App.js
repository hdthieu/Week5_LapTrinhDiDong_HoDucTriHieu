import {
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';

// screen 1
function HomeScreen({ navigation, route }) {
  const { productImgs, selectorColor, setSelectorColor } = route.params;
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ flex: 1 }}>
        <Image
          style={styles.imageProduct}
          source={productImgs[selectorColor]}
        />
      </View>
      <View style={{ flex: 1, marginTop: '15%' }}>
        <View style={{ flex: 1 }}>
          <Text style={styles.style_title}>
            Điện Thoại Vsmart Joy 3 - Hàng chính hãng
          </Text>
        </View>
        <View
          style={{
            flex: 4,
            justifyContent: 'center',
            flexDirection: 'column',
          }}>
          <View style={styles.styleChung}>
            <View style={styles.style_Review}>
              <Image source={require('/assets/star.png')} />
              <Image source={require('/assets/star.png')} />
              <Image source={require('/assets/star.png')} />
              <Image source={require('/assets/star.png')} />
              <Image source={require('/assets/star.png')} />
            </View>
            <View style={styles.style_Review}>
              <Text style={styles.style_txt_review}>(Xem 828 đánh giá)</Text>
            </View>
          </View>
          <View style={styles.styleChung}>
            <View style={styles.style_Price}>
              <Text style={styles.style_price}>1.790.000 đ</Text>{' '}
            </View>
            <View style={styles.style_Price}>
              <Text
                style={[
                  styles.style_price,
                  {
                    color: 'grey',
                    textDecorationLine: 'line-through',
                    fontSize: 15,
                  },
                ]}>
                1.790.000 đ
              </Text>
            </View>
          </View>
          <View style={styles.styleChung}>
            <View style={{ flex: 2 }}>
              <Text style={styles.style_txtRe}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text>
                <Image source={require('/assets/question.png')} />
              </Text>
            </View>
          </View>
          <View style={styles.styleChung}>
            <Image source={require('/assets/chonmau.png')} />
            <TouchableOpacity
              style={[
                {
                  position: 'absolute',
                  flex: 1,
                  marginTop: '2%',
                  width: 332,
                  height: 34,
                },
                styles.styleChung,
              ]}
              onPress={() => navigation.navigate('ChooseColor')}>
              <Text>4 MÀU - CHỌN MÀU</Text>
              <Image
                style={{ marginLeft: '10%' }}
                source={require('/assets/Vector.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.view_button}>
          <TouchableOpacity style={styles.style_button}>
            <Text style={styles.buttonText}>Chọn Mua</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const ChooseColorScreen = ({ navigation, route }) => {}

const Stack = createNativeStackNavigator();

export default function App() {
  const [selectorColor, setSelectorColor] = useState('silver');

  const productImgs = {
    blue: require('/assets/vs_blue.png'),
    red: require('/assets/vs_red.png'),
    black: require('/assets/vs_black.png'),
    silver: require('/assets/vs_silver.png'),
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
          initialParams={{ productImgs, selectorColor, setSelectorColor }}
        />
        <Stack.Screen
          name="ChooseColor"
          component={ChooseColorScreen}
          options={{ headerShown: false }}
          initialParams={{ productImgs, selectorColor, setSelectorColor }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  imageProduct: {
    width: 301,
    height: 375,
    marginTop: 30,
  },
  style_Review: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  style_txt_review: {
    fontFamily: 'Roboto',
    fontSize: 15,
    fontWeight: 400,
  },
  style_Price: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  style_title: {
    fontFamily: 'Roboto',
    fontSize: 15,
    fontWeight: 700,
  },
  style_price: {
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: 700,
  },
  style_txtRe: {
    fontFamily: 'Roboto',
    fontSize: 12,
    fontWeight: 700,
    color: '#FA0000',
  },
  styleChung: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  style_button: {
    width: 326,
    height: 44,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#EE0A0A',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  buttonText: {
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: 700,
    color: 'white',
  },
  view_button: {
    flex: 2,
    marginTop: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  styleImgSmallPro: {
    width: 112,
    height: 140,
    left: 4,
  },
  styleTxtScr2: {
    fontFamily: 'Roboto',
    fontSize: 15,
    fontWeight: 400,
  },
});
