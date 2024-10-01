import React, { useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import { Card, Rating } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons'; // Importing icons

const { width } = Dimensions.get('window');

const data = [
  {
    id: '1',
    image: require('../assets/Images/Mask Group.png'),
    title: 'Women Printed Kurtha',
    description: 'Neque porro quisquam est qui dolorem ipsum quia',
    price: '₹1500',
    strikeThroughPrice: '₹2499',
    offer: '40% OFF',
    rating: 3.5,
    ratingCount: 65644,
  },
  {
    id: '2',
    image: require('../assets/Images/image 15.png'),
    title: 'HRX by Hrithik Roshan ',
    description: 'Neque porro quisquam est qui dolorem ipsum quia',
    price: '₹2499',
    strikeThroughPrice: '₹4999',
    offer: '50% OFF',
    rating: 4.5,
    ratingCount: 255554,
  },
  // Add more items as needed
];

const CardSlider = () => {
  const flatListRef = useRef(null);

  const goToNext = () => {
    flatListRef.current.scrollToIndex({ index: 1, animated: true });
  };

  const goToPrevious = () => {
    flatListRef.current.scrollToIndex({ index: 0, animated: true });
  };

  const renderItem = ({ item }) => (
    <Card containerStyle={styles.card}>
      <TouchableOpacity onPress={() => { /* Handle image press */ }}>
        <Card.Image source={item.image} style={styles.imagecard} />
      </TouchableOpacity>
      <Text style={styles.textcard}>{item.title}</Text>
      <Text style={styles.textcard1}>{item.description}</Text>
      <Text style={styles.priceTag}>{item.price}</Text>
      <Text style={styles.offerTag}>
        <Text style={styles.strikeThroughPriceTag}>{item.strikeThroughPrice}</Text> {item.offer}
      </Text>
      <View style={styles.ratingContainer}>
        <Rating
          style={styles.rating}
          startingValue={item.rating}
          imageSize={20}
          readonly
        />
        <Text style={styles.ratingCount}>({item.ratingCount} ratings)</Text>
      </View>
    </Card>
  );

  return (
    <View style={styles.container2}>
      <View style={styles.arrowContainer}>
        <TouchableOpacity onPress={goToPrevious}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={goToNext}>
          <Ionicons name="arrow-forward" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        ref={flatListRef}
        pagingEnabled
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  card: {
    width: width * 0.75,
    marginHorizontal: 10,
    padding: 0,
    elevation: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  imagecard: {
    width: '100%',
    height: 200,
  },
  textcard: {
    marginBottom: 0,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    marginVertical: 5,
  },
  textcard1: {
    textAlign: 'center',
    fontSize: 14,
    color: 'gray',
    marginVertical: 5,
  },
  strikeThroughPriceTag: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'gray',
    textDecorationLine: 'line-through',
  },
  priceTag: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginTop: 5,
  },
  offerTag: {
    fontSize: 14,
    color: 'red',
    textAlign: 'center',
    marginTop: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  rating: {
    alignSelf: 'flex-start',
  },
  ratingCount: {
    marginLeft: 5,
    color: 'gray',
  },
  arrowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  card: {
    width: 200,
    height: 300, // Height to accommodate all elements
    padding: 0,
    marginLeft:5
    
  },
  imagecard: {
    width: 200,
    height: 150, // Adjust height as needed
  },
  textcard: {
    marginBottom: 0,
    textAlign: 'left',
    fontFamily: "outfit-SemiBold",
    fontSize: 16,
    marginVertical: 0,
    marginLeft:6,
    marginBottom:8,
    
  },

  textcard1: {
    marginBottom: 8,
    textAlign: 'left',
    fontFamily: "outfit-Regular",
    fontSize: 12,
    marginVertical: 0,
    marginLeft:6
  },
  priceTag: {
    fontSize: 16,
    fontFamily: 'outfit-SemiBold',
    color: '#000',
    textAlign: 'left',
    marginLeft:6

  },
  offerTag: {
    fontSize: 14,
    color: 'red', // Color for offer text
    textAlign: 'left',
    fontFamily: 'outfit-Regular',
    marginTop: 0,
    marginLeft:8,
    marginTop:5
  },
  strikeThroughPriceTag: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'gray', // Gray color for strike-through price
    textAlign: 'center',
    marginTop: 5,
    textDecorationLine: 'line-through', // Strike-through effect
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
    marginTop:8
  },
  rating: {
    alignSelf: 'flex-start', // Aligns rating to the left
  },
  ratingCount: {
    marginLeft: 5,
    color: 'gray', // Gray color for rating count
  },
});

export default CardSlider;
