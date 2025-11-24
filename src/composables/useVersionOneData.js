import { onMounted, ref } from 'vue'

const ENDPOINTS = {
  shop: '/data/shop.json',
  musicApp: '/data/musicApp.json',
  landingPage: '/data/landingPage.json',
}

const cache = {}

export function useVersionOneData(sectionKey) {
  const content = ref(null)
  const loading = ref(true)
  const error = ref(null)

  const load = async () => {
    loading.value = true
    error.value = null

    try {
      const target = ENDPOINTS[sectionKey]

      if (!target) {
        throw new Error('找不到對應的資料來源')
      }

      if (!cache[sectionKey]) {
        cache[sectionKey] = {
          payload: null,
          promise: null,
        }
      }

      if (!cache[sectionKey].payload) {
        if (!cache[sectionKey].promise) {
          cache[sectionKey].promise = fetch(target).then((response) => {
            if (!response.ok) {
              throw new Error('無法載入版型資料')
            }

            return response.json()
          })
        }

        cache[sectionKey].payload = await cache[sectionKey].promise
      }

      content.value = cache[sectionKey].payload
    } catch (err) {
      error.value = err instanceof Error ? err.message : String(err)
    } finally {
      loading.value = false
    }
  }

  onMounted(() => {
    load()
  })

  return {
    content,
    loading,
    error,
    reload: load,
  }
}
