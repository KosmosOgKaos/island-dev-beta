import React, { FC } from 'react'
import {
  Input,
  InputBackgroundColor,
  InputProps,
} from '@island.is/island-ui/core'
import { Controller, Control } from 'react-hook-form'
import NumberFormat, { FormatInputValueFunction } from 'react-number-format'

interface Props {
  autoFocus?: boolean
  defaultValue?: string
  disabled?: boolean
  control?: Control
  rules?: {}
  id: string
  value?: string
  label?: string
  name?: string
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void
  placeholder?: string
  textarea?: boolean
  backgroundColor?: InputBackgroundColor
  type?: 'text' | 'email' | 'number' | 'tel'
  suffix?: string
  rows?: number
  required?: boolean
  currency?: boolean
  format?: string | FormatInputValueFunction
  size?: InputProps['size']
}

const NumbInput = (props) => <Input {...props} size="sm" />
const NumbInputMd = (props) => <Input {...props} size="md" />

export const InputController: FC<Props> = ({
  autoFocus,
  defaultValue,
  disabled = false,
  id,
  label,
  name = id,
  placeholder,
  control,
  rules,
  backgroundColor,
  textarea,
  currency,
  type = 'text',
  onChange: onInputChange,
  rows,
  suffix,
  required,
  format,
  size = 'sm',
}) => (
  <Controller
    name={name}
    control={control}
    rules={rules}
    {...(defaultValue !== undefined && { defaultValue })}
    render={({ field: { onChange, value }, fieldState: { error } }) => {
      if (currency) {
        return (
          <NumberFormat
            customInput={size === 'md' ? NumbInputMd : NumbInput}
            id={id}
            disabled={disabled}
            placeholder={placeholder}
            label={label}
            type="text"
            decimalSeparator=","
            backgroundColor={backgroundColor}
            thousandSeparator="."
            suffix=" kr."
            value={value}
            onChange={(e) => {
              if (onInputChange) {
                onInputChange(e)
              }
            }}
            onValueChange={({ value }) => {
              onChange(value)
            }}
            hasError={error !== undefined}
            errorMessage={error}
            required={required}
          />
        )
      } else if (type === 'number' && suffix) {
        return (
          <NumberFormat
            customInput={size === 'md' ? NumbInputMd : NumbInput}
            id={id}
            disabled={disabled}
            backgroundColor={backgroundColor}
            placeholder={placeholder}
            label={label}
            suffix={suffix}
            value={value}
            format={format}
            onValueChange={({ value }) => {
              onChange(value)
            }}
            hasError={error !== undefined}
            errorMessage={error}
            required={required}
          />
        )
      } else if (format && ['text', 'tel'].includes(type)) {
        return (
          <NumberFormat
            customInput={size === 'md' ? NumbInputMd : NumbInput}
            id={id}
            disabled={disabled}
            backgroundColor={backgroundColor}
            placeholder={placeholder}
            label={label}
            type={type as 'text' | 'tel'}
            value={value}
            format={format}
            onChange={(e) => {
              if (onInputChange) {
                onInputChange(e)
              }
            }}
            onValueChange={({ value }) => {
              onChange(value)
            }}
            hasError={error !== undefined}
            errorMessage={error}
            required={required}
          />
        )
      }
      return (
        <Input
          id={id}
          size={size}
          name={name}
          value={value}
          disabled={disabled}
          placeholder={placeholder}
          label={label}
          backgroundColor={backgroundColor}
          autoFocus={autoFocus}
          hasError={error?.message !== undefined}
          errorMessage={error?.message}
          required={required}
          textarea={textarea}
          type={type}
          onChange={(e) => {
            onChange(e.target.value)
            if (onInputChange) {
              onInputChange(e)
            }
          }}
          rows={rows}
        />
      )
    }}
  />
)

export default InputController
