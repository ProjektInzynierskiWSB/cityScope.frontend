import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { yupResolver } from '@hookform/resolvers/yup'
import { authApi } from 'shared/store/api'
import { useRegisterSchema } from './RegisterForm.validator'

export enum RegisterFormFields {
  Email = 'email',
  NickName = 'nickName',
  Password = 'password',
  ConfirmPassword = 'confirmPassword',
}

export interface RegisterFormValues {
  [RegisterFormFields.Email]: string
  [RegisterFormFields.NickName]: string
  [RegisterFormFields.Password]: string
  [RegisterFormFields.ConfirmPassword]: string
}

export const defaultValues: RegisterFormValues = {
  [RegisterFormFields.Email]: '',
  [RegisterFormFields.NickName]: '',
  [RegisterFormFields.Password]: '',
  [RegisterFormFields.ConfirmPassword]: '',
}

const useOnSubmit = (switchViews: () => void) => {
  const [register] = authApi.useRegisterMutation()

  const { t } = useTranslation()

  const onSubmit = async (formValues: RegisterFormValues) => {
    try {
      await register({
        ...formValues,
        errorMessage: t('notifications.error') || true,
        successMessage: t('notifications.register.success') || true,
      }).unwrap()
      switchViews()
    } catch {}
  }
  return onSubmit
}

export const useFormProps = (switchViews: () => void) => {
  const registerSchema = useRegisterSchema()
  const methods = useForm<RegisterFormValues>({
    defaultValues: defaultValues,
    resolver: yupResolver(registerSchema),
    reValidateMode: 'onSubmit',
  })

  const onSubmit = useOnSubmit(switchViews)
  return { ...methods, onSubmit }
}
