import { useController, useFormContext } from 'react-hook-form'
import { MenuItem, MenuItemProps, Select, SelectProps } from '@mui/material'
import { FieldLabel, StyledFormControl } from './SelectField.styles'

export interface SelectFieldProps extends SelectProps {
  name: string
  label: string
  options: MenuItemProps[] | null
}

const SelectField = ({ name, label, options, ...props }: SelectFieldProps) => {
  const { control } = useFormContext()
  const {
    field: { ref, ...inputProps },
    fieldState: { error },
  } = useController({ control, name })

  return (
    <StyledFormControl fullWidth variant="filled">
      <FieldLabel>{label}</FieldLabel>
      <Select
        inputRef={ref}
        error={!!error}
        required
        {...inputProps}
        {...props}
      >
        {options?.map((option, i) => (
          <MenuItem key={`option-${i}`} {...(option as any)}>
            {option.key}
          </MenuItem>
        ))}
      </Select>
    </StyledFormControl>
  )
}
export default SelectField
