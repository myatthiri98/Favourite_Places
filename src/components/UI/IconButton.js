import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';


const IconButton = ({icon,size,color,onPress}) => {
  return (
    <Pressable
    style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    onPress={onPress}
  >
<Icon name={icon} size={size} color={color} />
    </Pressable>
  )
}

export default IconButton

const styles = StyleSheet.create({
  button: {
    padding: 8,
    // margin: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressed: {
    opacity: 0.7,
  },
})