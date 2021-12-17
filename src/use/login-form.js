import {computed, watch} from 'vue'
import * as yup from 'yup'
import { useField, useForm } from 'vee-validate'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'

export function useLoginForm() {
  const store = useStore()
  const router = useRouter()
  const {handleSubmit, isSubmitting, submitCount} = useForm()

    const {value: eValue, errorMessage: eError, handleBlur: eBlur} = useField(
      'email',
      yup
        .string()
        .trim()
        .required('Пожалуйста введите email')
        .email('Необходимо ввечти корректный email')
    )
    const {value: pValue, errorMessage: pError, handleBlur: pBlur} = useField(
      'password',
      yup
        .string()
        .trim()
        .required('Пожалуйста введите пароль')
        .min(6, 'Необходимо ввести минимум 6 символов')
    )

    const isToManyAttempts = computed(() => submitCount.value >= 3)

    watch(isToManyAttempts, val => {
      if (val) {
        setTimeout(() => {
          submitCount.value = 0
        }, 5000);
      }
    })

    const onSubmit = handleSubmit(async (values) => {
      try {
        await store.dispatch('auth/login', values)
        router.push('/')
      } catch (e) {
        
      }
    })

    return {
      eValue, eError, eBlur,
      pValue, pError, pBlur,
      onSubmit, isSubmitting,
      isToManyAttempts
    }
}