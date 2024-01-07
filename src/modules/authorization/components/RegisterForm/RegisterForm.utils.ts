import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { paths } from 'config'
import { authApi } from 'shared/store/api'
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

const useOnSubmit = () => {
  const [register] = authApi.useRegisterMutation()
  const { t } = useTranslation()
  const navigate = useNavigate()

  const onSubmit = async (formValues: RegisterFormValues) => {
    try {
      await register({
        ...formValues,
        errorMessage: t('notifications.error') || true,
        successMessage: t('notifications.login.success') || true,
      }).unwrap()
      navigate(paths.home)
    } catch {}
  }
  return onSubmit
}

export const useFormProps = () => {
  const registerSchema = useRegisterSchema()
  const methods = useForm<RegisterFormValues>({
    defaultValues: defaultValues,
    resolver: yupResolver(registerSchema),
    reValidateMode: 'onSubmit',
  })

  const onSubmit = useOnSubmit()
  return { ...methods, onSubmit }
}
