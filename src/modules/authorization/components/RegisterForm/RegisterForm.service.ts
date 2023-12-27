import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useRegisterSchema } from './RegisterForm.validator'

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

const useOnSubmit = (
  reset: () => void,
  setIsLoginView: (value: boolean) => void
) => {
  const onSubmit = (data: LoginFormValues) => {
    console.log(data)
    setIsLoginView(true)
    reset()
  }
  return onSubmit
}

export const useFormProps = (setIsLoginView: (value: boolean) => void) => {
  const registerSchema = useRegisterSchema()
  const methods = useForm<LoginFormValues>({
    defaultValues: defaultValues,
    resolver: yupResolver(registerSchema),
    reValidateMode: 'onSubmit',
  })

  const onSubmit = useOnSubmit(methods.reset, setIsLoginView)
  return { ...methods, onSubmit }
}
