import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';

const Screen2 = ({ navigation }) => {
  const [image, setImage] = useState(require('../assets/images/vs_silver.png'));
  const [mau, setMau] = useState('Bạc');

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    btnXong: {
      marginTop: 14,
      width: 280,
      height: 40,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#000',
      shadowOpacity: 0.3,
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowColor: '#000',
      backgroundColor: 'rgba(25, 82, 226, 0.58)',
      justifyContent: 'center',
      alignItems: 'center'
    },
  });

  return (
    <View style={styles.container}>
      <View style={{ flex: 3, flexDirection: 'row' }}>
        <View style={{ flex: 1, marginLeft: -30 }}>
          <Image source={image} 
            style={{ width: '100%', height: 140 }}
            resizeMode='contain'
          />
        </View>
        <View style={{ flex: 1, fontSize: 15, fontWeight: '400', marginLeft: -20, padding: 10 }}>
          <Text>
            Điện Thoại Vsmart Joy 3 Hàng chính hãng
          </Text>
          <Text style={{ paddingTop: 5 }}>
            Màu: <Text style={{ fontWeight: '700' }}>{mau}</Text>
          </Text>
          <Text style={{ paddingTop: 5 }}>
            Cung cấp bởi <Text style={{ fontWeight: '700' }}>Tiki Tradding</Text>
          </Text>
          <Text style={{ fontWeight: '700', fontSize: 18, paddingTop: 5 }}>
            1.790.000 đ
          </Text>
        </View>
      </View>

      <View style={{ flex: 7, alignItems: 'center', justifyContent: 'center', backgroundColor: '#C4C4C4' }}>
        <Text style={{ margin: 10, fontSize: 18, fontWeight: '400', marginLeft: -100 }}>
          Chọn một màu bên dưới:
        </Text>
        <Pressable style={{ margin: 3, width: 60, height: 60, backgroundColor: '#C5F1FB' }}
          onPress={() => { setImage(require('../assets/images/vs_silver.png')); setMau('Bạc'); }}
        />
        <Pressable style={{ margin: 3, width: 60, height: 60, backgroundColor: 'red' }}
          onPress={() => { setImage(require('../assets/images/vs_red.png')); setMau('Đỏ'); }}
        />
        <Pressable style={{ margin: 3, width: 60, height: 60, backgroundColor: 'black' }}
          onPress={() => { setImage(require('../assets/images/vs_black.png')); setMau('Đen'); }}
        />
        <Pressable style={{ margin: 3, width: 60, height: 60, backgroundColor: 'blue' }}
          onPress={() => { setImage(require('../assets/images/vs_blue.png')); setMau('Xanh'); }}
        />
        <Pressable style={styles.btnXong} onPress={() => navigation.navigate('Home', { image })}>
          <Text style={{ fontSize: 20, fontWeight: '700', color: '#fff' }}>
            Xong
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Screen2;