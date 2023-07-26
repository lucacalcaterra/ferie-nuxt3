<template>
<div>
  <q-calendar-day
    ref="calendar"
    v-model="selectedDate"
    :date-type="dateType"
    animated
    bordered
    @change="onChange"
    @moved="onMoved"
    @click-date="onClickDate"
    @click-time="onClickTime"
    @click-interval="onClickInterval"
    @click-head-intervals="onClickHeadIntervals"
    @click-head-day="onClickHeadDay"
  />
</div>

</template>

<script setup>
import { ref } from "vue";

import { QCalendarDay, today } from '@quasar/quasar-ui-qcalendar'
import '@quasar/quasar-ui-qcalendar/src/QCalendarVariables.sass'
import '@quasar/quasar-ui-qcalendar/src/QCalendarTransitions.sass'
import '@quasar/quasar-ui-qcalendar/src/QCalendarDay.sass'


const drawer = ref(false);
const miniState = ref(true);
</script>
