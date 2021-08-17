import React, { FC } from 'react'
import { Control, Controller } from 'react-hook-form'
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'

import {
  DatePicker,
  DatePickerBackgroundColor,
  DatePickerProps,
} from '@island.is/island-ui/core'
type Locale = 'is' | 'en'

interface Props {
  defaultValue?: string
  error?: string
  id: string
  disabled?: boolean
  control?: Control
  rules?: {}
  name?: string
  required?: boolean
  locale?: Locale
  label: string
  size?: DatePickerProps['size']
  placeholder?: string
  backgroundColor?: DatePickerBackgroundColor
  maxDate?: DatePickerProps['maxDate']
  minDate?: DatePickerProps['minDate']
  excludeDates?: DatePickerProps['excludeDates']
  onChange?: (_: string) => void
}

const df = 'yyyy-MM-dd'

export const DatePickerController = ({
  defaultValue,
  disabled = false,
  id,
  name = id,
  locale,
  label,
  size,
  placeholder,
  required,
  backgroundColor,
  maxDate,
  control,
  minDate,
  rules,
  excludeDates,
  onChange = () => undefined,
}: Props) => {
  return (
    <Controller
      defaultValue={defaultValue}
      name={name}
      control={control}
      rules={rules}
      render={({
        field: { onChange: onControllerChange, value },
        fieldState: { error },
      }) => (
        <DatePicker
          hasError={error !== undefined}
          disabled={disabled}
          size={size}
          id={id}
          required={required}
          errorMessage={error?.message}
          locale={locale}
          label={label}
          placeholderText={placeholder}
          backgroundColor={backgroundColor}
          selected={value ? parseISO(value) : undefined}
          maxDate={maxDate}
          minDate={minDate}
          excludeDates={excludeDates}
          handleChange={(date) => {
            const newVal = format(date, df)
            onControllerChange(newVal)
            onChange(newVal)
          }}
        />
      )}
    />
  )
}

export default DatePickerController
