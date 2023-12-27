import { TextField, styled } from '@mui/material'

export const BaseTextField = styled(TextField)(({ theme }) => ({
  '& label.Mui-focused': {
    color: theme.palette.primary.main,
  },
  '& .MuiFormLabel-root': {
    color: theme.palette.text.primary,
  },
}))
