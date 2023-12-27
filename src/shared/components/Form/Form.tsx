import { HTMLProps, PropsWithChildren } from 'react'
import {
  FieldValues,
  FormProvider,
  FormProviderProps,
  SubmitHandler,
} from 'react-hook-form'

export type FormProps<T extends FieldValues> = Omit<
  FormProviderProps<T> &
    Omit<HTMLProps<HTMLFormElement>, 'onSubmit'> & {
      onSubmit: SubmitHandler<T>
    },
  'children'
> & {
  formProps?: Partial<HTMLProps<HTMLFormElement>>
}

const Form = <T extends FieldValues>({
  children,
  onSubmit,
  formProps,
  ...props
}: PropsWithChildren<FormProps<T>>) => (
  <form {...formProps} onSubmit={props.handleSubmit(onSubmit)}>
    <FormProvider {...props}>{children}</FormProvider>
  </form>
)

export default Form
