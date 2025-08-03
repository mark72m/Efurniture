import { StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import styles from './productDetails.style'
import { Ionicons, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../constants';

const ProductDetails = ({ navigation }) => {
  const [count, setCount] = useState(1)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name='chevron-back-circle' size={30} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { }}>
          <Ionicons name='heart' size={30} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
      <Image
        source={{ uri: "https://cottage-culture.ca/userContent/images/E-Commerce/Collections/Pamir/84253%20Callisto_lounge_Virgo_Tonar_Pamir_4%20web_84253%20DS.jpg" }}
        style={styles.image} />
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

          <View style={styles.rating}>
            <TouchableOpacity onPress={() => increment()}>
              <SimpleLineIcons
                name='plus' size={20} />
            </TouchableOpacity>
            <Text style={styles.ratingText}> {count} </Text>

            <TouchableOpacity onPress={() => decrement()}>
              <SimpleLineIcons
                name='minus' size={20} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.descriptionWrapper}>
          <Text style={styles.description}>Description</Text>
          <Text style={styles.descText}>Imagine a coach who is known for their unwavering belief
            in their players, even when they doubt themselves. This coach might have a team that
            is struggling with low morale and poor performance. Instead of focusing on technical
            skills, the coach might focus on building trust, fostering a sense of community, and
            helping each player discover their unique strengths. Through this approach, the team
            might start to believe in themselves, experience a surge in motivation, and ultimately
            achieve success they never thought possible. The coach's legacy might be one of empowerment,
            resilience, and the belief that everyone has the potential to achieve greatness.
          </Text>
        </View>

        <View style={{marginBottom: SIZES.small}}>
          <View style={styles.location}>
            <View style={{ flexDirection: 'row' }}>
            <Ionicons name='location-outline' size={20}/>
            <Text> Dallas</Text>
            </View>

            <View style={{flexDirection: "row"}}>
              <MaterialCommunityIcons name='truck-delivery-outline' size={20}/>
              <Text> Free Delivery</Text>
            </View>

          </View>

        </View>

      </View>
    </View>
  )
}

export default ProductDetails
