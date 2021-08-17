import React from 'react'
import { Control, Controller } from 'react-hook-form'
import { Select, Option, InputBackgroundColor } from '@island.is/island-ui/core'

interface Props {
  error?: string
  id: string
  control?: Control
  defaultValue?: unknown
  disabled?: boolean
  rules?: {}
  name?: string
  label: string
  options?: Option[]
  placeholder?: string
  onSelect?: (s: Option, onChange: (t: unknown) => void) => void
  backgroundColor?: InputBackgroundColor
  isSearchable?: boolean
}

export const SelectController = ({
  defaultValue,
  disabled = false,
  id,
  control,
  rules,
  name = id,
  label,
  options = [],
  placeholder,
  onSelect,
  backgroundColor,
  isSearchable,
}: Props) => {
  return (
    <Controller
      {...(defaultValue !== undefined && { defaultValue })}
      control={control}
      rules={rules}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <Select
          backgroundColor={backgroundColor}
          hasError={error !== undefined}
          disabled={disabled}
          id={id}
          size="sm"
          errorMessage={error?.message}
          name={name}
          options={options}
          label={label}
          placeholder={placeholder}
          value={options.find((option) => option.value === value)}
          isSearchable={isSearchable}
          onChange={(newVal) => {
            onChange((newVal as Option).value)
            if (onSelect) {
              onSelect(newVal as Option, onChange)
            }
          }}
        />
      )}
    />
  )
}

export default SelectController
