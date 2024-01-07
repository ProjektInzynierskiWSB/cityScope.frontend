import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { listApi } from 'shared/store/api'
import { useAnnouncementSchema } from './AnnouncementForm.validator'

export enum AnnouncementFormFields {
  Title = 'title',
  Description = 'description',
  Price = 'price',
  Image = 'image',
  Category = 'category',
}

export interface AnnouncementFormValues {
  [AnnouncementFormFields.Title]: string
  [AnnouncementFormFields.Description]: string
  [AnnouncementFormFields.Price]: number
  [AnnouncementFormFields.Image]?: File | null
  [AnnouncementFormFields.Category]: string
}

export const defaultValues: AnnouncementFormValues = {
  [AnnouncementFormFields.Title]: '',
  [AnnouncementFormFields.Description]: '',
  [AnnouncementFormFields.Price]: 1,
  [AnnouncementFormFields.Image]: null,
  [AnnouncementFormFields.Category]: '',
}

const useOnSubmit = (reset: () => void) => {
  const [postAnnouncement] = listApi.usePostAnnouncementMutation()
  const { t } = useTranslation()
  const navigate = useNavigate()

  const onSubmit = async (formValues: AnnouncementFormValues) => {
    try {
      await postAnnouncement({
        ...formValues,
        image: formValues.image || null,
        mainCategoryId: parseInt(formValues.category),
        errorMessage: t('notifications.error') || true,
        successMessage: t('notifications.announcement.postSuccess') || true,
      })
        .unwrap()
        .then(response => console.log(response))
    } catch {}
  }
  return onSubmit
}

export const useFormProps = () => {
  const announcementSchema = useAnnouncementSchema()
  const methods = useForm<AnnouncementFormValues>({
    defaultValues: defaultValues,
    resolver: yupResolver(announcementSchema),
    reValidateMode: 'onSubmit',
  })

  const onSubmit = useOnSubmit(methods.reset)
  return { ...methods, onSubmit }
}
