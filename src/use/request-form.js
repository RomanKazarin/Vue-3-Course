import { useField, useForm } from 'vee-validate'
import * as yup from 'yup'

export function useRequestForm (fn) {
  const {handleSubmit, isSubmitting, submitCount} = useForm({
    initialValues: {
      status: 'active'
    }
  })

    const {value: nameValue, errorMessage: nameError, handleBlur: nameBlur} = useField(
      'fullName',
      yup
        .string()
        .trim()
        .required('Пожалуйста введите ФИО')
    )
    const {value: telValue, errorMessage: telError, handleBlur: telBlur} = useField(
      'tel',
      yup
        .string()
        .trim()
        .required('Телефон не может быть пустым')
    )
    const {value: summValue, errorMessage: summError, handleBlur: summBlur} = useField(
      'summ',
      yup
        .number()
        .required('Пожалуйста введите сумму')
        .min(0, 'Сумма не может быть меньше 0')
    )
    const {value: status} = useField(
      'status',
      yup
        .string()
        .required('Пожалуйста укажите статус')
    )

    const onSubmit = handleSubmit(fn)

    return {
      handleSubmit, isSubmitting, submitCount,
      nameValue, nameError, nameBlur,
      telValue, telError, telBlur,
      summValue, summError, summBlur,
      status,
      onSubmit
    }
}