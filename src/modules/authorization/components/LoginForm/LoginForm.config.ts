import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { useLoginMutation } from 'services/authApi'
import { paths } from 'config'
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
  const [login] = useLoginMutation()
  const navigate = useNavigate()

  const onSubmit = (formValues: LoginFormValues) => {
    login(formValues)
      .unwrap()
      .then(response => {
        console.log(response)
        reset()
        navigate(paths.home)
      })
      .catch(e => console.log(e))
    console.log(formValues)
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
