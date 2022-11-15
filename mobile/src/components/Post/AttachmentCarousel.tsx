import { useCallback, useRef, useState } from "react"
import { View, FlatList, Image, LayoutChangeEvent, Text, NativeSyntheticEvent, NativeScrollEvent } from "react-native"
import styles from "./styles"

const AttachmentCarousel : React.FC<{data: string[]}> = ({data}) => {

    return (
        <View style={styles.carousel}>
            <FlatList 
                horizontal
                data={data}
                pagingEnabled
                decelerationRate="fast"
                keyExtractor={(item) => `att-${item}#${Math.random()**10}`}
                renderItem={({ item }) => 
                    <View style={styles.carouselSlide}>
                        <Image source={{ uri : item }} style={styles.carouselImg} resizeMode="contain"/>
                    </View>
                }
            />
            
            {
                data.length > 1 &&    
                <View style={styles.carouselFooter}>
                    <Text style={styles.carouselFooterLenght}>{data.length}</Text>
                </View>
            }
        </View>
    )
}

export default AttachmentCarousel