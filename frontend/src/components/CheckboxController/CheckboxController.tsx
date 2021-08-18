import React from 'react'
import { Control, Controller } from 'react-hook-form'
import {
  Checkbox,
  InputError,
  InputBackgroundColor,
  Box,
} from '@island.is/island-ui/core'

type CheckboxProps = React.ComponentProps<typeof Checkbox>

interface CheckboxControllerProps {
  defaultValue?: string[]
  disabled?: boolean
  error?: string
  id: string
  labelVariant?: CheckboxProps['labelVariant']
  name?: string
  large?: boolean
  control?: Control
  rules?: {}
  strong?: boolean
  backgroundColor?: InputBackgroundColor
  label?: CheckboxProps['label']
  subLabel?: CheckboxProps['subLabel']
  tooltip?: CheckboxProps['tooltip']
  onSelect?: (c: boolean) => void
}
export const CheckboxController = ({
  defaultValue,
  disabled = false,
  labelVariant,
  id,
  name = id,
  large,
  strong,
  control,
  rules,
  label,
  subLabel,
  tooltip,
  backgroundColor,
  onSelect = () => undefined,
}: CheckboxControllerProps) => {
  return (
    <Controller
      name={name}
      defaultValue={defaultValue}
      control={control}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <Box
          onClick={(e) => {
            onChange((value = !value))
          }}
        >
          <Checkbox
            disabled={disabled}
            large={large}
            onChange={(e) => {
              onChange(e.target.checked)
              onSelect(e.target.checked)
            }}
            checked={value}
            label={label}
            strong={strong}
            labelVariant={labelVariant}
            subLabel={subLabel}
            value={value}
            hasError={error !== undefined}
            tooltip={tooltip}
            backgroundColor={backgroundColor}
          />
          {error && (
            <Box paddingBottom={2}>
              <InputError errorMessage={error?.message} />
            </Box>
          )}
        </Box>
      )}
    />
  )
}

export default CheckboxController
