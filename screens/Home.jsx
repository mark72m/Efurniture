import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import styles from './home.style'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Fontisto, Ionicons } from '@expo/vector-icons';
import Welcome from '../constants/components/home/Welcome';

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <Ionicons name='location-outline' size={24} />
          <Text style={styles.location}> Shanghai China</Text>
          <View style={{ }}>
            <View style={styles.cartCount}>
              <Text style={styles.cartNumber}>8</Text>
            </View>

            <TouchableOpacity>
              <Fontisto name='shopping-bag' size={24} />
            </TouchableOpacity>

          </View>

        </View>
      </View>

      <ScrollView>
        <Welcome />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home