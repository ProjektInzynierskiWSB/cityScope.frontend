import { useController, useFormContext } from 'react-hook-form'
import { MenuItem, MenuItemProps, Select, SelectProps } from '@mui/material'
import { FieldLabel, StyledFormControl } from './SelectField.styles'

export interface SelectFieldProps<T, K> extends SelectProps {
  name: string
  label: string
  defaultValue?: K
  options: MenuItemProps[]
}

const SelectField = <T, K>({
  name,
  label,
  defaultValue,
  options,
  ...props
}: SelectFieldProps<T, K>) => {
  const { control } = useFormContext()
  const {
    field: { ref, ...inputProps },
    fieldState: { error },
  } = useController({ control, name, defaultValue })

  return (
    <StyledFormControl fullWidth variant="filled">
      <FieldLabel>{label}</FieldLabel>
      <Select
        inputRef={ref}
        defaultValue={defaultValue}
        error={!!error}
        required
        {...inputProps}
        {...props}
      >
        {options.map((option, i) => (
          <MenuItem key={`option-${i}`} {...(option as any)}>
            {option.key}
          </MenuItem>
        ))}
      </Select>
    </StyledFormControl>
  )
}
export default SelectField
