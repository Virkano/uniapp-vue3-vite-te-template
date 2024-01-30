import { createSSRApp } from 'vue'
import App from './App.vue'
import 'uno.css'
import { setupStore } from '@/state'
import { setupRouter } from '@/router'
import uviewPlus from 'uview-plus'

export function createApp() {
  const app = createSSRApp(App)

  // Configure store
  setupStore(app)

  // Configure router
  setupRouter(app)

  // uview-plus
  app.use(uviewPlus)
  return {
    app,
  }
}
