import { useState } from 'react'
// import * as SecureStore from 'expo-secure-store'
import * as KeychainStore from 'react-native-keychain'

import { Button, Platform, TouchableOpacity, View } from 'react-native'
import HorizontalView from '../../components/horizontalView'
import IonIcons from '@expo/vector-icons/Ionicons'
import ViewContainer from '../../components/viewContainer'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { Navigations } from '../../constant'
import MonoText from '../../components/monoText'
import ExtendInput from '../../components/extendInput'

const CONFIGS: KeychainStore.Options = {
  accessControl: KeychainStore.ACCESS_CONTROL.BIOMETRY_ANY,
  authenticationPrompt: { title: 'Need biometric to set secrect infomations.' },
  authenticationType:
    KeychainStore.AUTHENTICATION_TYPE.DEVICE_PASSCODE_OR_BIOMETRICS, // IOS only,
  accessible: KeychainStore.ACCESSIBLE.WHEN_PASSCODE_SET_THIS_DEVICE_ONLY,
  storage: KeychainStore.STORAGE_TYPE.RSA,
}

const Register = () => {
  const [visible, setVisible] = useState(false)
  const [password, setPassword] = useState('')
  const [value, setValue] = useState('')
  const [userName, setUserName] = useState('')

  const [all, setAll] = useState<string[]>([])

  const { navigate } = useNavigation<NavigationProp<any>>()

  const onSet = async () => {
    try {
      await KeychainStore.setGenericPassword(userName, password, CONFIGS)
    } catch (err) {
      console.log(err)
    }
  }

  const onGet = async () => {
    try {
      const val = await KeychainStore.getGenericPassword(CONFIGS)
      setValue(JSON.stringify(val))
    } catch (err) {
      console.log(err)
    }
  }

  const getSupportType = async () => {
    try {
      const type = await KeychainStore.getSupportedBiometryType()
      console.log('type: ', type)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <ViewContainer>
      <View style={{ gap: 16 }}>
        <View style={{ gap: 18 }}>
          <HorizontalView style={{ justifyContent: 'center' }}>
            <IonIcons name="wallet" size={36} />
            <MonoText style={{ fontSize: 36 }}>Desig</MonoText>
          </HorizontalView>
          <MonoText style={{ fontSize: 20, textAlign: 'center' }}>
            Unlock your wallets
          </MonoText>
        </View>
        <View>
          <MonoText>User name</MonoText>
          <ExtendInput
            placeholder="Enter username"
            onChangeText={setUserName}
          />
        </View>
        <View>
          <MonoText>Password</MonoText>
          <ExtendInput
            placeholder="Enter password"
            secureTextEntry={!visible}
            onChangeText={setPassword}
            suffix={
              <TouchableOpacity onPress={() => setVisible(!visible)}>
                <IonIcons name={visible ? 'eye-off-outline' : 'eye-outline'} />
              </TouchableOpacity>
            }
          />
        </View>

        <Button onPress={onSet} title="Register" />
        <Button onPress={getSupportType} title="Get supported type" />
        <View>
          <Button onPress={onGet} title="Infomations" />
          {value && <MonoText>Infomation: {value}</MonoText>}
        </View>
      </View>
      <Button title="Wellcome" onPress={() => navigate(Navigations.Welcome)} />
    </ViewContainer>
  )
}

export default Register
