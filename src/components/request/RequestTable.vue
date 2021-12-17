<template>
 <h4 v-if="requests.length === 0" class="text-center">Заявок пока нет</h4>
  <table v-else
  class="table">
    <thead>
      <tr>
        <th>#</th>
        <th>ФИО</th>
        <th>Телефон</th>
        <th>Сумма</th>
        <th>Статус</th>
        <th>Действие</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(request, idx) in requests" :key="request.id">
        <td>{{ idx + 1 }}</td>
        <td>{{ request.fullName }}</td>
        <td>{{ request.tel }}</td>
        <td>{{ currency(request.summ) }}</td>
        <td><app-status :type="request.status"></app-status></td>
        <td>
          <router-link v-slot="{navigate}" custom :to="{name: 'Request', params: {id: request.id}}">
            <button class="btn" @click="navigate">Открыть</button>
          </router-link>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import {currency} from '@/utils/currency'
import AppStatus from '@/components/ui/AppStatus'

export default {
  props: ['requests'],
  setup() {
    return {
      currency
    }
  },
  components: {
    AppStatus
  }
}
</script>

<style>

</style>