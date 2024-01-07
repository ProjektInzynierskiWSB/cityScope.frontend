import { useTranslation } from 'react-i18next'
import { object, string, number, mixed } from 'yup'

export const useAnnouncementSchema = () => {
  const { t } = useTranslation()

  const announcementSchema = object({
    title: string()
      .min(3, () => t('validation.minLength', { value: '3' }))
      .required(),
    description: string()
      .min(20, () => t('validation.minLength', { value: '20' }))
      .max(300, () => t('validation.maxLength', { value: '300' }))
      .required(),
    price: number().required(),
    image: mixed(),
    category: string().required(),
  }).required()
  return announcementSchema
}
