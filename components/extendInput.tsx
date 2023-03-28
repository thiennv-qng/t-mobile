import { InputProps } from '@rneui/base'
import { ReactNode } from 'react'

import { TextInput, TextInputProps, ViewProps } from 'react-native'
import HorizontalView from './horizontalView'

type ExtendInputProps = {
  suffix?: ReactNode
  prefix?: ReactNode
  bodyStyle?: ViewProps['style']
  inputStyle?: InputProps['style']
} & TextInputProps

const ExtendInput = ({
  suffix,
  prefix,
  bodyStyle,
  inputStyle,
  ...inputProps
}: ExtendInputProps) => {
  return (
    <HorizontalView
      style={{
        padding: 12,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 6,
        gap: 6,
        ...(bodyStyle as object),
      }}
    >
      {prefix}
      <TextInput
        {...inputProps}
        style={{ flex: 1, ...(inputStyle as object) }}
      />
      {suffix}
    </HorizontalView>
  )
}

export default ExtendInput
