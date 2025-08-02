import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SIZES } from '../../constants'

const ProductRow = () => {
    const products = [1, 2, 3, 4]
    return (
        <View>
            <FlatList
                data={products}
                renderItem={({ item }) => (<Text>Products</Text>)}
                horizontal
                contentContainerStyle={{ columnGap: SIZES.medium }} />
        </View>
    )
}

export default ProductRow

const styles = StyleSheet.create({})