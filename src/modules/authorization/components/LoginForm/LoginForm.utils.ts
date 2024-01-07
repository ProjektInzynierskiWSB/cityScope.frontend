import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { paths } from 'config'
import { authApi } from 'shared/store/api'
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

const useOnSubmit = () => {
  const [login] = authApi.useLoginMutation()
  const { t } = useTranslation()
  const navigate = useNavigate()

  const onSubmit = async (formValues: LoginFormValues) => {
    try {
      await login({
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
  const loginSchema = useLoginSchema()
  const methods = useForm<LoginFormValues>({
    defaultValues: defaultValues,
    resolver: yupResolver(loginSchema),
    reValidateMode: 'onSubmit',
  })

  const onSubmit = useOnSubmit()
  return { ...methods, onSubmit }
}
