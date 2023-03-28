import { Text, TextProps } from 'react-native'

import { useFonts } from 'expo-font'

type MonoTextProps = { strong?: boolean } & TextProps
const MonoText = ({ strong = false, ...props }: MonoTextProps) => {
  const [loaded] = useFonts({
    'Space-Mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
    'Space-Mono-Bold': require('../assets/fonts/SpaceMono-Bold.ttf'),
  })

  const fontFamily = strong ? 'Space-Mono-Bold' : 'Space-Mono'
  const propStyles = props.style as object

  const style = loaded ? { ...propStyles, fontFamily } : { ...propStyles }

  return (
    <Text {...props} style={style}>
      {props.children}
    </Text>
  )
}

export default MonoText
