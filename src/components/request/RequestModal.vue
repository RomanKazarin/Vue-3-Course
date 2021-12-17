<template>
  <form @submit.prevent="onSubmit">

    <div :class="['form-control', {invalid: nameError}]">
      <label for="fullName">ФИО</label>
      <input type="text" id="fullName" v-model="nameValue" @blur="nameBlur">
      <small v-if="nameError">{{ nameError }}</small>
    </div>

    <div :class="['form-control', {invalid: telError}]">
      <label for="tel">Телефон</label>
      <input type="text" id="tel" v-model="telValue" @blur="telBlur">
      <small v-if="telError">{{ telError }}</small>
    </div>

    <div :class="['form-control', {invalid: summError}]">
      <label for="summ">Сумма</label>
      <input type="number" id="summ" v-model.number="summValue" @blur="summBlur">
      <small v-if="summError">{{ summError }}</small>
    </div>

    <div class="form-control">
      <label for="status">Статус</label>
      <select id="status" v-model="status">
        <option value="done">Завершен</option>
        <option value="cancelled">Отменен</option>
        <option value="active">Активен</option>
        <option value="pending">Выполняется</option>
      </select>
    </div>

    <button class="btn primary" type="submit" :disabled="isSubmitting">Создать</button>

  </form>
</template>

<script>
import {useRequestForm} from '@/use/request-form'
import { useStore } from 'vuex'

export default {
  emits: ['created'],
  setup(_, {emit}) {
    const store = useStore()
    const submit = async (values) => {
      await store.dispatch('request/create', values)
      emit('created')
    }

    return {
      ...useRequestForm(submit)
    }
  }
}
</script>

<style>

</style>