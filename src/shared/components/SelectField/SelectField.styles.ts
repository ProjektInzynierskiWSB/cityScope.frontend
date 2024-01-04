import { FormControl, InputLabel, styled } from '@mui/material'

export const FieldLabel = styled(InputLabel)(({ theme }) => ({
  color: theme.palette.text.primary,
}))

export const StyledFormControl = styled(FormControl)(({ theme }) => ({
  marginBottom: theme.spacing(3),
}))
