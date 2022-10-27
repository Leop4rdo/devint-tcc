import { useCallback, useRef, useState } from "react"
import { View, FlatList, Image, LayoutChangeEvent, Text, NativeSyntheticEvent, NativeScrollEvent } from "react-native"
import styles from "./styles"

const AttachmentCarousel : React.FC<{data: string[]}> = ({data}) => {
    const [carouselDimensions, setCarouselDimensions] = useState({ width : 0, height : 0})

    const getCarouselDimensions = ({nativeEvent} : LayoutChangeEvent) => {
        setCarouselDimensions({
            width : nativeEvent.layout.width,
            height : nativeEvent.layout.height
        })
    }

    return (
        <View style={styles.carousel} onLayout={getCarouselDimensions}>
            <FlatList 
                horizontal
                data={data}
                snapToAlignment='center'
                decelerationRate="fast"
                snapToInterval={carouselDimensions.width}
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