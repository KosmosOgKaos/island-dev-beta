import React from 'react'
import { Control, Controller } from 'react-hook-form'

import {
  RadioButton,
  GridRow,
  GridColumn,
  InputError,
  InputBackgroundColor,
} from '@island.is/island-ui/core'

interface Option {
  value: string
  label: React.ReactNode
  subLabel?: string
  tooltip?: React.ReactNode
  excludeOthers?: boolean
}
interface Props {
  defaultValue?: any
  disabled?: boolean
  error?: string
  id: string
  rules?: {}
  name?: string
  control?: Control
  options?: Option[]
  largeButtons?: boolean
  split?: '1/1' | '1/2' | '1/3' | '1/4' | '1/5'
  backgroundColor?: InputBackgroundColor
  onSelect?: (s: string) => void
}
export const RadioController = ({
  defaultValue,
  disabled = false,
  id,
  control,
  name = id,
  rules,
  options = [],
  largeButtons = true,
  onSelect = () => undefined,
  backgroundColor = 'blue',
  split = '1/1',
}: Props) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <GridRow>
          {options.map((option, index) => (
            <GridColumn
              span={['1/1', split]}
              paddingBottom={2}
              key={`option-${option.value}`}
            >
              <RadioButton
                large={largeButtons}
                tooltip={option.tooltip}
                key={`${id}-${index}`}
                onChange={({ target }) => {
                  onChange(target.value)
                  onSelect(target.value)
                }}
                checked={option.value === value}
                id={`${id}-${index}`}
                name={`${id}`}
                label={option.label}
                subLabel={option.subLabel}
                value={option.value}
                disabled={disabled}
                hasError={error !== undefined}
                backgroundColor={backgroundColor}
              />
            </GridColumn>
          ))}

          {error && (
            <GridColumn span={['1/1', split]} paddingBottom={2}>
              <InputError errorMessage={error?.message} />
            </GridColumn>
          )}
        </GridRow>
      )}
    />
  )
}

export default RadioController
