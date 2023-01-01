import { defineNuxtModule } from '@nuxt/kit'
import { RuntimeConfig } from '@nuxt/schema'

declare module '@nuxt/schema' {
  interface NuxtOptions {
    mymodule: Record<any, any>;
  }
}

export default defineNuxtModule({
  meta: {
    name: 'nuxt-mymodule',
    configKey: 'mymodule'
  },
  setup (options, nuxt) {
    nuxt.options.runtimeConfig.public.mymodule = {
      mergedByNuxt: options,
      fromConfig: nuxt.options.mymodule
    };
  }
})
