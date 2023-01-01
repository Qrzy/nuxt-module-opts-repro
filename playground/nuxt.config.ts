import { defineNuxtConfig } from 'nuxt/config'
import myModule from '../src/module'

export default defineNuxtConfig({
  extends: ['./sub'],
  modules: [
    [myModule, { arr: ['optAinline', 'optBinline', 'optCinline'] }]
  ],
  mymodule: {
    arr: ['optA', 'optB']
  }
})
