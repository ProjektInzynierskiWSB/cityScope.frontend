import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useAnnouncementSchema } from './AnnouncementForm.validator'

export const mock = [
  {
    value: 1,
    key: 'Grocery',
  },
  {
    value: 2,
    key: 'Tools',
  },
  {
    value: 3,
    key: 'Industrial',
  },
  {
    value: 4,
    key: 'Home',
  },
  {
    value: 5,
    key: 'Automotive',
  },
  {
    value: 6,
    key: 'Electronics',
  },
  {
    value: 7,
    key: 'Outdoors',
  },
  {
    value: 8,
    key: 'Beauty',
  },
  {
    value: 10,
    key: 'Health',
  },
]

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
  [AnnouncementFormFields.Category]: number
}

export const defaultValues: AnnouncementFormValues = {
  [AnnouncementFormFields.Title]: '',
  [AnnouncementFormFields.Description]: '',
  [AnnouncementFormFields.Price]: 1,
  [AnnouncementFormFields.Image]: undefined,
  [AnnouncementFormFields.Category]: mock[0].value,
}

const useOnSubmit = (reset: () => void) => {
  const onSubmit = (data: AnnouncementFormValues) => {
    console.log(data)
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
