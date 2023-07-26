<template>
    <q-calendar-month
      mode="month"
      :weekdays="[1,2,3,4,5]"
    ></q-calendar-month>

</template>

<script setup>
import { ref } from "vue";
import { QCalendarMonth } from "@quasar/quasar-ui-qcalendar";
import '@quasar/quasar-ui-qcalendar/src/css/calendar-day.sass'


const drawer = ref(false);
const miniState = ref(true);
</script>
