import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useLoginSchema } from './LoginForm.validator'

export enum LoginFormFields {
  Email = 'email',
  Password = 'password',
}

export interface LoginFormValues {
  [LoginFormFields.Email]: string
  [LoginFormFields.Password]: string
}

export const defaultValues: LoginFormValues = {
  [LoginFormFields.Email]: '',
  [LoginFormFields.Password]: '',
}

const useOnSubmit = (reset: () => void) => {
  const onSubmit = (data: LoginFormValues) => {
    console.log(data)
  }
  return onSubmit
}

export const useFormProps = () => {
  const loginSchema = useLoginSchema()
  const methods = useForm<LoginFormValues>({
    defaultValues: defaultValues,
    resolver: yupResolver(loginSchema),
    reValidateMode: 'onSubmit',
  })

  const onSubmit = useOnSubmit(methods.reset)
  return { ...methods, onSubmit }
}
