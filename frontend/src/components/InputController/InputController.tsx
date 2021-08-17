import React, { FC } from 'react'
import { Input, InputBackgroundColor } from '@island.is/island-ui/core'
import {
  Controller,
  Control,
  ControllerRenderProps,
  FieldValues,
  ControllerFieldState,
  UseFormStateReturn,
} from 'react-hook-form'

interface Props {
  autoFocus?: boolean
  defaultValue?: string
  disabled?: boolean
  control?: Control
  rules?: {}
  id: string
  label?: string
  name?: string
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  placeholder?: string
  textarea?: boolean
  backgroundColor?: InputBackgroundColor
  type?: 'text' | 'email' | 'number' | 'tel'
  suffix?: string
  rows?: number
  required?: boolean
}

interface ChildParams {
  field: ControllerRenderProps<FieldValues, string>
  fieldState: ControllerFieldState
  formState: UseFormStateReturn<FieldValues>
}

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
  type = 'text',
  onChange: onInputChange,
  rows,
  required,
}) => (
  <Controller
    name={name}
    control={control}
    rules={rules}
    {...(defaultValue !== undefined && { defaultValue })}
    render={({ field: { onChange, value }, fieldState: { error } }) => (
      <Input
        id={id}
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
    )}
  />
)

export default InputController
