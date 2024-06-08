import { View, Text, Image } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated'
import { useEffect } from 'react'
import { router } from 'expo-router'

const logo = require('../assets/images/welcome-logo.png')

const WelcomeScreen = () => {

    const ring1Padding = useSharedValue(0)
    const ring2Padding = useSharedValue(0)

    useEffect(() => {
        ring1Padding.value = 0;
        ring2Padding.value = 0;

        setTimeout(() => ring1Padding.value = withSpring(ring1Padding.value + hp(5)), 100);
        setTimeout(() => ring2Padding.value = withSpring(ring2Padding.value + hp(5.5)), 300);

        setTimeout(() => router.push('/home'), 2500);
    }, [])

    return (
        <View className='flex-1 justify-center items-center bg-amber-500'>
            {/* Logo */}
            <Animated.View className='bg-white/20 rounded-full' style={{ padding: ring2Padding }}>
                <Animated.View className='bg-white/20 rounded-full' style={{ padding: ring1Padding }}>
                    <Image source={logo} style={{ width: hp(20), height: hp(20) }} />
                </Animated.View>
            </Animated.View>

            {/* Title and punchline */}
            <View className='flex items-center space-y-2 mt-5'>
                <Text className='font-bold text-white tracking-widest' style={{ fontSize: hp(5) }}>
                    Best Recipe
                </Text>

                <Text className='font-bold text-white tracking-widest' style={{ fontSize: hp(2) }}>
                    Take your order now!
                </Text>
            </View>
        </View>
    )
}

export default WelcomeScreen