import { defineNuxtConfig } from 'nuxt/config'
import myModule from '../../src/module'

export default defineNuxtConfig({
  mymodule: {
    arr: ['optAsub', 'optBsub']
  }
})
