import { StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './productDetails.style'
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants';

const ProductDetails = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name='chevron-back-circle' size={30} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <Ionicons name='heart' size={30} color={COLORS.primary}/>
        </TouchableOpacity>
      </View>
      <Image 
      source={{uri: "https://cottage-culture.ca/userContent/images/E-Commerce/Collections/Pamir/84253%20Callisto_lounge_Virgo_Tonar_Pamir_4%20web_84253%20DS.jpg"}}
      style={styles.image}/>
      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Product</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>$25.50</Text>
          </View>
        </View>

        <View style={styles.ratingRow}>
          <View style={styles.rating}>
            {[1, 2, 3, 4, 5].map((index) => (
              <Ionicons
              key={index}
              name='star'
              size={24}
              color="gold" />
            ))}

            <Text style={styles.ratingText}> (4.9) </Text>
            
          </View>
        </View>

      </View>
    </View>
  )
}

export default ProductDetails
