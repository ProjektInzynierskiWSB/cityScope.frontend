import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useRegisterMutation } from 'services/authApi'
import { useRegisterSchema } from './RegisterForm.validator'

export enum RegisterFormFields {
  Email = 'email',
  Password = 'password',
  ConfirmPassword = 'confirmPassword',
}

export interface RegisterFormValues {
  [RegisterFormFields.Email]: string
  [RegisterFormFields.Password]: string
  [RegisterFormFields.ConfirmPassword]: string
}

export const defaultValues: RegisterFormValues = {
  [RegisterFormFields.Email]: '',
  [RegisterFormFields.Password]: '',
  [RegisterFormFields.ConfirmPassword]: '',
}

const useOnSubmit = (
  reset: () => void,
  setIsLoginView: (value: boolean) => void
) => {
  const [register] = useRegisterMutation()

  const onSubmit = (formValues: RegisterFormValues) => {
    console.log(formValues)
    register(formValues)
      .unwrap()
      .then(response => {
        console.log(response)
        setIsLoginView(true)
        reset()
      })
      .catch(e => console.log(e))
  }
  return onSubmit
}

export const useFormProps = (setIsLoginView: (value: boolean) => void) => {
  const registerSchema = useRegisterSchema()
  const methods = useForm<RegisterFormValues>({
    defaultValues: defaultValues,
    resolver: yupResolver(registerSchema),
    reValidateMode: 'onSubmit',
  })

  const onSubmit = useOnSubmit(methods.reset, setIsLoginView)
  return { ...methods, onSubmit }
}
