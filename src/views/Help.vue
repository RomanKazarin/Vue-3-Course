<template>
  <app-page back title="Часто задаваемые вопросы">
    <question-item
      v-for="q in questions"
      :key="q.title"
      :question="q"
    ></question-item>
  </app-page>
</template>

<script>
import AppPage from '@/components/ui/AppPage'
import QuestionItem from '@/components/question/QuestionItem'

export default {
  setup() {
    const questions = [
      {title: 'Как устроиться на работу джуном?', text: 'Нужно быть мидлом'},
      {title: 'Какой функционал тут реализован?', text: 'Весь стандартный функционал: Routing, Store, Authtorization, Composition API, http requests & respons'},
      {title: 'Как устроена авторизация и работа с базой данных?', text: 'Все реализовано через Firebase!'},
    ]

    return {
      questions
    }
  },
  components: {
    AppPage,
    QuestionItem
  }
}
</script>

<style>

</style>
