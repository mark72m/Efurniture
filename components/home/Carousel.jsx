import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SliderBox } from 'react-native-image-slider-box'
import { COLORS } from '../../constants'

const Carousel = () => {
    const slides = [
        "https://media.istockphoto.com/id/1147156390/photo/real-photo-of-a-rattan-garden-furniture-set-with-lamps-and-table-in-the-background.jpg?s=612x612&w=0&k=20&c=FlNSP_HjvtQay0PCJlvKL7jnPFSD4O5Vp7AsGZDhhwk=",
        "https://patiocomfort.ca/wp-content/uploads/2024/02/Patio-Comfort_The-Patios-Journey-From-Function-to-Fashion.jpg",
        "https://shopatzing.com/product_images/uploaded_images/istock-patio-furniture-trends-2025.jpg",
        "https://media.istockphoto.com/id/1208657520/photo/garden-patio-decorated-with-scandinavian-wicker-sofa-and-coffee-table.jpg?s=612x612&w=0&k=20&c=CPqEZBiSj94NEtk1_KhD28HuSevF7oRd2DTiLGGbR1I=",
        "https://cottage-culture.ca/userContent/images/E-Commerce/Collections/Pamir/84253%20Callisto_lounge_Virgo_Tonar_Pamir_4%20web_84253%20DS.jpg",
        "https://hubfurniture.com.eg/media/mageplaza/blog/post/resize/400x/s/h/shutterstock_1092560108.jpg",
        "https://res.cloudinary.com/fjdoors/image/upload/v1711058399/Showarangeoflargeoutdoorfurniturecoversinvariouscolorsandmaterialsneatlyfittedonpatiosetsagainstalushgardenbackdropportrayingaffordabilityandqualit_bk0pqe.webp"
    ]
  return (
    <View style={styles.carouselContainer}>
      <SliderBox images={slides}
      dotColor = {COLORS.primary}
      inactiveDotColor = {COLORS.secondary}
      ImageComponentStyle = {{borderRadius: 15, width: "93%", marginTop: 15}}
      autoplay
      circleLoop/>
    </View>
  )
}

export default Carousel

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    alignItems: 'center',
    
  }
})