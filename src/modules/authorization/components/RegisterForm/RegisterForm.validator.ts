import { useTranslation } from 'react-i18next'
import { object, string, ref } from 'yup'

export const useRegisterSchema = () => {
  const { t } = useTranslation()

  const registerSchema = object({
    email: string()
      .min(3, () => t('validation.minLength', { value: '3' }))
      .max(60, () => t('validation.maxLength', { value: '60' }))
      .required()
      .email(() => t('validation.email')),
    password: string()
      .min(3, () => t('validation.minLength', { value: '3' }))
      .max(40, () => t('validation.maxLength', { value: '40' }))
      .required()
      .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, () =>
        t('validation.password')
      ),
    confirmPassword: string()
      .oneOf([ref('password'), ''], () => t('validation.passwordRepeat'))
      .required(),
  }).required()
  return registerSchema
}
