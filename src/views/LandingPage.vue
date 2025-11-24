<script setup>
const features = [
  {
    id: 1,
    title: '40 小時續航',
    copy: '智慧節電與 ANC 平衡演算法維持整日電量。',
  },
  {
    id: 2,
    title: '主動降噪',
    copy: '四麥克風結構即時反制噪音，專心沉浸。',
  },
  {
    id: 3,
    title: '極簡音色',
    copy: '經調校的石墨烯單體呈現乾淨、柔和的細節。',
  },
]

const products = [
  {
    id: 1,
    name: 'Nebula M0',
    price: 'NT$6,990',
    description: '為每日通勤打造的輕量耳罩式耳機。',
  },
  {
    id: 2,
    name: 'Nebula M0 Studio',
    price: 'NT$8,990',
    description: '加入平衡線輸入與雙裝置無縫切換。',
  },
  {
    id: 3,
    name: 'Nebula Air',
    price: 'NT$4,590',
    description: '開放式設計保持耳朵舒適與環境感知。',
  },
]
</script>

<template>
  <div class="landing-page">
    <header class="hero">
      <div class="hero-text">
        <p class="eyebrow">Nebula Audio</p>
        <h1>極簡線條，純粹聲景</h1>
        <p class="hero-copy">
          為專注創作者打造的耳機系列，只留下必要元素；輕巧的金屬結構與柔霧灰色調，搭配
          ANC 與環境模式，在任何空間維持質感與效率。
        </p>
        <div class="hero-actions">
          <button class="primary">立即預購</button>
          <button class="ghost">探索產品</button>
        </div>
      </div>
      <div class="hero-visual" aria-label="產品示意圖"></div>
    </header>

    <section class="features" aria-label="產品特色">
      <article v-for="feature in features" :key="feature.id">
        <h3>{{ feature.title }}</h3>
        <p>{{ feature.copy }}</p>
      </article>
    </section>

    <section class="products" aria-label="熱銷耳機">
      <header>
        <p class="eyebrow">Products</p>
        <h2>找到適合你的聲音</h2>
      </header>
      <div class="product-grid">
        <article v-for="product in products" :key="product.id" class="product-card">
          <div class="product-image" aria-hidden="true"></div>
          <div class="product-content">
            <div>
              <h3>{{ product.name }}</h3>
              <p>{{ product.description }}</p>
            </div>
            <div class="product-meta">
              <span>{{ product.price }}</span>
              <button class="text-link">加入購物車</button>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section class="cta">
      <div>
        <h2>預約體驗，感受靜謐</h2>
        <p>於台北概念店預約 30 分鐘試聽時段，享專屬音色設定。</p>
      </div>
      <button class="primary">預約試聽</button>
    </section>
  </div>
</template>

<style scoped>
.landing-page {
  min-height: 100vh;
  padding: 3rem 1.5rem 4rem;
  background: #f9fafb;
  color: #0f172a;
  font-family: 'Inter', 'Noto Sans TC', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.hero {
  display: grid;
  gap: 2rem;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  margin-bottom: 3rem;
}

.hero-text h1 {
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  margin: 0.5rem 0 1rem;
  letter-spacing: -0.03em;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.3em;
  font-size: 0.7rem;
  color: #94a3b8;
}

.hero-copy {
  color: #475569;
  max-width: 32rem;
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.5rem;
}

.primary,
.ghost,
.text-link {
  font-size: 0.95rem;
  border-radius: 999px;
  padding: 0.9rem 1.5rem;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s ease;
}

.primary {
  background: #0f172a;
  color: #f8fafc;
}

.ghost {
  background: transparent;
  color: #0f172a;
  border: 1px solid #cbd5f5;
}

.primary:hover,
.ghost:hover,
.text-link:hover {
  opacity: 0.85;
}

.hero-visual {
  width: 100%;
  min-height: 320px;
  background: linear-gradient(135deg, #d1d5db, #e2e8f0);
  border-radius: 32px;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3.5rem;
}

.features article {
  padding: 1.5rem;
  background: #fff;
  border-radius: 20px;
  border: 1px solid #e2e8f0;
}

.features h3 {
  margin-bottom: 0.5rem;
}

.features p {
  color: #475569;
  line-height: 1.5;
}

.products header {
  text-align: left;
  margin-bottom: 1.5rem;
}

.products h2 {
  margin-top: 0.4rem;
  font-size: 2rem;
}

.product-grid {
  display: grid;
  gap: 1.5rem;
}

.product-card {
  display: grid;
  grid-template-columns: minmax(140px, 1fr) 2fr;
  gap: 1.5rem;
  padding: 1.5rem;
  background: #fff;
  border-radius: 24px;
  border: 1px solid #e2e8f0;
}

.product-image {
  width: 100%;
  min-height: 160px;
  background: #d4d4d8;
  border-radius: 18px;
}

.product-content h3 {
  margin: 0 0 0.4rem;
}

.product-content p {
  color: #475569;
  line-height: 1.5;
  margin: 0;
}

.product-meta {
  margin-top: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.product-meta span {
  font-weight: 600;
}

.text-link {
  background: transparent;
  color: #0f172a;
  padding: 0.3rem 0.5rem;
}

.cta {
  margin-top: 4rem;
  padding: 2rem;
  border-radius: 28px;
  background: #0f172a;
  color: #f8fafc;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  align-items: center;
  justify-content: space-between;
}

.cta h2 {
  margin: 0 0 0.5rem;
}

@media (max-width: 720px) {
  .product-card {
    grid-template-columns: 1fr;
  }

  .landing-page {
    padding: 2.5rem 1.25rem;
  }
}
</style>
