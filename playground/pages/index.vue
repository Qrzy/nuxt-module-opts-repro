<template>
  <pre>{{ JSON.stringify(config.public.mymodule, null, 2) }}</pre>
</template>

<script setup lang="ts">
import { useRuntimeConfig } from '#app';

const config = useRuntimeConfig();
</script>