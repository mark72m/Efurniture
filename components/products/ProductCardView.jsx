import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './productCardView.style'
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../constants';
import { useNavigation } from '@react-navigation/native';

const ProductCardView = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("ProductDetails")}>
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                source={{uri: "https://cottage-culture.ca/userContent/images/E-Commerce/Collections/Pamir/84253%20Callisto_lounge_Virgo_Tonar_Pamir_4%20web_84253%20DS.jpg"}} 
                style={styles.image}/>

            </View>
            <View style={styles.details}>
                <Text style={styles.title} numberOfLines={1}>Cozy 3 set seats leather fabricated...blablabla!!</Text>
                <Text style={styles.supplier} numberOfLines={1}>Product</Text>
                <Text style={styles.price}>$25.50</Text>
            </View>
            <TouchableOpacity style={styles.addBtn}>
              <Ionicons name="add-circle" size={35} color={COLORS.primary}/>
            </TouchableOpacity>
        </View>
    </TouchableOpacity>
  )
}

export default ProductCardView