import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [selectedTempleIndex, setSelectedTempleIndex] = useState(0);

  const temples = [
    {
      name: "Khatushyam",
      images: [
        {
          img: require('../../assets/khatu/Khatushyam1.jpeg'),
          date: "24 April 2026",
          title: "Shri Khatushyam, Sikar"
        },
        {
          img: require('../../assets/khatu/Khatushyam2.jpeg'),
          date: "23 April 2026",
          title: "Shri Khatushyam, Sikar"
        },
        {
          img: require('../../assets/khatu/Khatushyam1.jpeg'),
          date: "22 April 2026",
          title: "Shri Khatushyam, Sikar"
        },
        {
          img: require('../../assets/khatu/Khatushyam2.jpeg'),
          date: "21 April 2026",
          title: "Shri Khatushyam, Sikar"
        }
      ]
    },
    {
      name: "Somnath",
      images: [
        {
          img: require('../../assets/somnath/Somnath1.jpeg'),
          date: "24 April 2026",
          title: "Somnath Temple"
        },
        {
          img: require('../../assets/somnath/Somnath2.jpeg'),
          date: "23 April 2026",
          title: "Somnath Temple"
        },
        {
          img: require('../../assets/somnath/Somnath1.jpeg'),
          date: "22 April 2026",
          title: "Somnath Temple"
        },
        {
          img: require('../../assets/somnath/Somnath2.jpeg'),
          date: "21 April 2026",
          title: "Somnath Temple"
        }
      ]
    },
    {
      name: "Omkareshwar",
      images: [
        {
          img: require('../../assets/omkareshwar/Om1.jpeg'),
          date: "24 April 2026",
          title: "Omkareshwar Temple"
        },
        {
          img: require('../../assets/omkareshwar/Om2.jpeg'),
          date: "23 April 2026",
          title: "Omkareshwar Temple"
        },
        {
          img: require('../../assets/omkareshwar/Om1.jpeg'),
          date: "22 April 2026",
          title: "Omkareshwar Temple"
        },
        {
          img: require('../../assets/omkareshwar/Om2.jpeg'),
          date: "21 April 2026",
          title: "Omkareshwar Temple"
        }
      ]
    }
  ];

  const selectedTemple = temples[selectedTempleIndex];

  return (
    <View style={{ flex: 1, backgroundColor: '#f5e6d3' }}>

      {/* 🔹 NAV */}
      <View style={{
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        backgroundColor: '#FFC4DD',
        paddingTop: 30
      }}>
        <Image
          source={require('../../assets/dd-logo.webp')}
          resizeMode="contain"
          style={{ width: 120, height: 40 }}
        />

        <View style={{ flexDirection: 'row' }}>
          <Text style={{ marginRight: 10, color: '#5c3b00', fontWeight: '600' }}>Eng</Text>
          <Text style={{ color: '#5c3b00', fontWeight: '600' }}>Hindi</Text>
        </View>
      </View>

      {/* 🔹 HORIZONTAL SLIDER */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 10 }}
        contentContainerStyle={{ paddingHorizontal: 10 }}
      >
        {temples.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setSelectedTempleIndex(index)}
            style={{ marginRight: 12 }}
          >
            <View style={{
              width: 140,
              height: 90,
              borderRadius: 15,
              overflow: 'hidden'
            }}>
              <Image
                source={item.images[0].img}
                style={{ width: '100%', height: '100%' }}
              />

              <Text style={{
                position: 'absolute',
                bottom: 13,
                left: 8,
                color: 'white',
                fontWeight: 'bold',
                fontSize: 13
              }}>
                {item.name}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* 🔥 SELECTED TEMPLE CONTENT */}
      <ScrollView
        style={{ marginTop: 20 }}
        contentContainerStyle={{ padding: 10 }}
        showsVerticalScrollIndicator={false}
      >
        {selectedTemple.images.map((imgItem, index) => (
          <View key={index} style={{ marginBottom: 25, alignItems: 'center', width: '100%' }}>

            <Image
              source={imgItem.img}
              style={{ width: '90%', height: 250, borderRadius: 20 }}
            />

            {/* ✅ FIXED CENTER TEXT */}
            <Text style={{
              marginTop: 10,
              textAlign: 'center',
              width: '100%',
              color: '#5c3b00'
            }}>
              {imgItem.date}
            </Text>

            <Text style={{
              fontWeight: 'bold',
              fontSize: 18,
              textAlign: 'center',
              width: '100%',
              color: '#3b2a00'
            }}>
              {imgItem.title}
            </Text>

          </View>
        ))}
      </ScrollView>

    </View>
  );
}