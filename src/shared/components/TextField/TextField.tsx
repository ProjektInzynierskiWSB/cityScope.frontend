import {
  UseControllerProps,
  useController,
  useFormContext,
} from 'react-hook-form'
import { TextFieldProps as BaseTextFieldProps } from '@mui/material'
import { BaseTextField } from './TextField.styles'

export type TextFieldProps = Partial<BaseTextFieldProps> & {
  name: UseControllerProps['name']
  isEditable?: boolean
  defaultValue?: string
  variant?: string
}

const TextField = ({
  name,
  label,
  disabled = false,
  defaultValue = '',
  variant = 'outlined',
  ...props
}: TextFieldProps) => {
  const { control } = useFormContext()
  const {
    field: { ref, ...inputProps },
    fieldState: { error },
  } = useController({ control, name, defaultValue })

  return (
    <BaseTextField
      variant={variant}
      fullWidth
      disabled={disabled}
      label={label}
      inputRef={ref}
      error={!!error}
      helperText={error?.message || ` `}
      {...inputProps}
      {...props}
    />
  )
}

export default TextField
