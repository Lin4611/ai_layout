<script setup>
import { useVersionOneData } from '@/composables/useVersionOneData'

const { content, loading, error, reload } = useVersionOneData('shop')
</script>

<template>
  <section class="shop" aria-live="polite">
    <div v-if="loading" class="shop__state" role="status">
      載入中…
    </div>

    <div v-else-if="error" class="shop__state shop__state--error" role="alert">
      <p class="body-medium">無法載入資料：{{ error }}</p>
      <button type="button" class="btn btn-outlined" @click="reload">重新整理</button>
    </div>

    <div v-else-if="content" class="shop__body">
      <header class="shop__hero" aria-labelledby="shop-hero-title">
        <div class="shop__hero-text">
          <p class="label-large shop__hero-eyebrow">{{ content.hero.eyebrow }}</p>
          <h1 id="shop-hero-title" class="shop__hero-headline">{{ content.hero.headline }}</h1>
          <p class="shop__hero-description body-large">{{ content.hero.description }}</p>
          <div class="shop__hero-actions">
            <button type="button" class="btn btn-filled">{{ content.hero.primaryAction }}</button>
            <button type="button" class="btn btn-outlined">{{ content.hero.secondaryAction }}</button>
          </div>
        </div>
        <figure class="shop__hero-media" aria-hidden="true">
          <img :src="content.hero.media" alt="商店主視覺" />
        </figure>
      </header>

      <section class="shop-section" aria-labelledby="collections-title">
        <div class="shop-section__header">
          <p class="label-medium section-eyebrow">Collections</p>
          <h2 id="collections-title" class="shop-section__title">精選系列</h2>
          <p class="body-medium shop-section__description">以粉色調卡片呈現每個主題，搭配柔和陰影與適度留白。</p>
        </div>
        <div class="shop-grid shop-grid--collections">
          <article
            v-for="collection in content.collections"
            :key="collection.title"
            class="collection-card"
          >
            <img :src="collection.image" :alt="collection.title" class="collection-card__media" />
            <div class="collection-card__content">
              <h3 class="collection-card__title">{{ collection.title }}</h3>
              <p class="body-medium collection-card__text">{{ collection.description }}</p>
              <button type="button" class="btn btn-text collection-card__cta">探索系列</button>
            </div>
          </article>
        </div>
      </section>

      <section class="shop-section" aria-labelledby="featured-title">
        <div class="shop-section__header">
          <p class="label-medium section-eyebrow">Best Picks</p>
          <h2 id="featured-title" class="shop-section__title">明星商品</h2>
          <p class="body-medium shop-section__description">以卡片顯示價格、描述與亮點徽章，遵循 4px 間距節奏。</p>
        </div>
        <div class="shop-grid shop-grid--products">
          <article
            v-for="product in content.featuredProducts"
            :key="product.sku"
            class="product-card"
          >
            <img :src="product.image" :alt="product.name" class="product-card__media" />
            <div class="product-card__body">
              <div class="product-card__header">
                <p class="label-medium product-card__sku">#{{ product.sku }}</p>
                <p class="product-card__price">{{ product.price }}</p>
              </div>
              <h3 class="product-card__title">{{ product.name }}</h3>
              <p class="body-medium product-card__description">{{ product.description }}</p>
              <ul class="product-card__badges">
                <li v-for="badge in product.badges" :key="badge" class="chip">{{ badge }}</li>
              </ul>
              <button type="button" class="btn btn-filled product-card__cta">加入購物車</button>
            </div>
          </article>
        </div>
      </section>

      <section class="shop-section shop-section--surface" aria-labelledby="testimonials-title">
        <div class="shop-section__header">
          <p class="label-medium section-eyebrow">Voices</p>
          <h2 id="testimonials-title" class="shop-section__title">客戶回饋</h2>
          <p class="body-medium shop-section__description">對話框式樣搭配陰影層級 1，呈現真實反饋。</p>
        </div>
        <div class="shop-testimonials">
          <figure v-for="entry in content.testimonials" :key="entry.name" class="testimonial-card">
            <blockquote class="testimonial-card__quote">「{{ entry.quote }}」</blockquote>
            <figcaption class="testimonial-card__meta">{{ entry.name }} · {{ entry.role }}</figcaption>
          </figure>
        </div>
      </section>

      <section
        v-if="content.lookbook"
        class="shop-section shop-lookbook"
        aria-labelledby="lookbook-title"
      >
        <div class="shop-lookbook__intro">
          <p class="label-medium section-eyebrow">Lookbook</p>
          <h2 id="lookbook-title" class="shop-section__title">{{ content.lookbook.title }}</h2>
          <p class="body-large shop-lookbook__text">{{ content.lookbook.description }}</p>
          <button type="button" class="btn btn-text">閱讀 Lookbook</button>
        </div>
        <div class="shop-lookbook__gallery">
          <article
            v-for="entry in content.lookbook.entries || []"
            :key="entry.caption"
            class="lookbook-card"
          >
            <img :src="entry.image" :alt="entry.caption" class="lookbook-card__media" />
            <p class="body-medium lookbook-card__caption">{{ entry.caption }}</p>
          </article>
        </div>
      </section>
    </div>
  </section>
</template>

<style scoped>
.shop {
  min-height: 100vh;
  padding: var(--spacing-xl, 32px) var(--spacing-xl, 32px) var(--spacing-2xl, 48px);
  background: linear-gradient(145deg, var(--md-background, #fff8fc), var(--md-surface, #fff8fc));
  color: var(--md-on-background, #1c1b1f);
  font-family: 'Roboto', 'Noto Sans TC', sans-serif;
}

.shop__body {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2xl, 48px);
}

.shop__state {
  display: grid;
  place-items: center;
  gap: var(--spacing-md, 16px);
  padding: var(--spacing-2xl, 48px);
  border-radius: var(--radius-md, 12px);
  background-color: var(--md-surface, #fff8fc);
  box-shadow: var(--elevation-1);
}

.shop__state--error {
  border: 1px solid var(--md-error, #ba1a1a);
  color: var(--md-error, #ba1a1a);
}

.shop__hero {
  display: grid;
  gap: var(--spacing-xl, 32px);
  padding: var(--spacing-2xl, 48px);
  background-color: var(--md-primary-container, #ffd1e8);
  border-radius: var(--radius-lg, 16px);
  box-shadow: var(--elevation-2);
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  align-items: center;
}

.shop__hero-eyebrow {
  color: var(--md-on-primary-container, #630028);
}

.shop__hero-headline {
  font-size: 45px;
  line-height: 52px;
  font-weight: 400;
  color: var(--md-on-primary-container, #630028);
  margin-top: var(--spacing-sm, 8px);
  margin-bottom: var(--spacing-md, 16px);
}

.shop__hero-description {
  color: var(--md-on-primary-container, #630028);
}

.shop__hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm, 8px);
  margin-top: var(--spacing-lg, 24px);
}

.shop__hero-media img {
  width: 100%;
  border-radius: var(--radius-md, 12px);
  box-shadow: var(--elevation-3);
  object-fit: cover;
}

.shop-section {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg, 24px);
}

.shop-section__header {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs, 4px);
}

.section-eyebrow {
  color: var(--md-secondary, #b47dff);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.shop-section__title {
  font-size: 28px;
  line-height: 36px;
  font-weight: 400;
  color: var(--md-on-surface, #1c1b1f);
}

.shop-section__description {
  color: var(--md-on-surface-variant, #4d3e58);
}

.shop-grid {
  display: grid;
  gap: var(--spacing-lg, 24px);
}

.shop-grid--collections {
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
}

.shop-grid--products {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.collection-card,
.product-card {
  background-color: var(--md-surface, #fff8fc);
  border-radius: var(--radius-md, 12px);
  box-shadow: var(--elevation-1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.collection-card__media,
.product-card__media {
  width: 100%;
  height: 220px;
  object-fit: cover;
}

.collection-card__content,
.product-card__body {
  padding: var(--spacing-lg, 24px);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm, 8px);
}

.collection-card__title,
.product-card__title {
  font-size: 22px;
  line-height: 28px;
  font-weight: 400;
  color: var(--md-primary, #ff5fa2);
}

.collection-card__text,
.product-card__description {
  color: var(--md-on-surface-variant, #4d3e58);
}

.collection-card__cta {
  align-self: flex-start;
  margin-top: var(--spacing-sm, 8px);
}

.product-card__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.product-card__sku {
  color: var(--md-on-surface-variant, #4d3e58);
}

.product-card__price {
  font-size: 22px;
  font-weight: 500;
  color: var(--md-tertiary, #7dd3f7);
}

.product-card__badges {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs, 4px);
  margin: var(--spacing-sm, 8px) 0;
  padding: 0;
  list-style: none;
}

.product-card__cta {
  width: fit-content;
  margin-top: var(--spacing-sm, 8px);
}

.shop-section--surface {
  background-color: var(--md-surface, #fff8fc);
  padding: var(--spacing-xl, 32px);
  border-radius: var(--radius-lg, 16px);
  box-shadow: var(--elevation-1);
}

.shop-testimonials {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: var(--spacing-lg, 24px);
}

.testimonial-card {
  background-color: var(--md-surface-variant, #f2e5f7);
  padding: var(--spacing-lg, 24px);
  border-radius: var(--radius-md, 12px);
  box-shadow: var(--elevation-1);
}

.testimonial-card__quote {
  font-size: 18px;
  line-height: 28px;
  color: var(--md-on-surface, #1c1b1f);
  margin-bottom: var(--spacing-sm, 8px);
}

.testimonial-card__meta {
  font-size: 14px;
  color: var(--md-on-surface-variant, #4d3e58);
}

.shop-lookbook {
  padding: var(--spacing-2xl, 48px);
  background-color: var(--md-tertiary-container, #d4f3ff);
  border-radius: var(--radius-lg, 16px);
  box-shadow: var(--elevation-2);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl, 32px);
}

.shop-lookbook__intro {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm, 8px);
}

.shop-lookbook__text {
  color: var(--md-on-tertiary-container, #001f24);
}

.shop-lookbook__gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: var(--spacing-lg, 24px);
}

.lookbook-card {
  background-color: var(--md-surface, #fff8fc);
  border-radius: var(--radius-md, 12px);
  box-shadow: var(--elevation-1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.lookbook-card__media {
  width: 100%;
  height: 220px;
  object-fit: cover;
}

.lookbook-card__caption {
  color: var(--md-on-surface, #1c1b1f);
  padding: var(--spacing-md, 16px);
}

.btn {
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  letter-spacing: 0.1px;
  border-radius: var(--radius-xl, 28px);
  padding: 10px 24px;
  min-height: 40px;
  border: none;
  cursor: pointer;
  transition: all var(--duration-short, 100ms) var(--easing-standard, cubic-bezier(0.2, 0, 0, 1));
}

.btn-filled {
  background-color: var(--md-primary, #ff5fa2);
  color: var(--md-on-primary, #ffffff);
  box-shadow: var(--elevation-0, none);
}

.btn-filled:hover {
  box-shadow: var(--elevation-1);
}

.btn-outlined {
  background-color: transparent;
  border: 1px solid var(--md-outline, #9a8ca8);
  color: var(--md-primary, #ff5fa2);
}

.btn-text {
  background-color: transparent;
  color: var(--md-primary, #ff5fa2);
  padding-inline: 12px;
}

.chip {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs, 4px);
  padding: 6px 16px;
  border-radius: var(--radius-xs, 4px);
  background-color: var(--md-secondary-container, #ebddff);
  border: 1px solid var(--md-outline-variant, #d9cde0);
  color: var(--md-on-secondary-container, #2f0063);
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
}

.label-large {
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  letter-spacing: 0.1px;
}

.label-medium {
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
  letter-spacing: 0.5px;
}

.body-large {
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  letter-spacing: 0.5px;
}

.body-medium {
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  letter-spacing: 0.25px;
}

*:focus-visible {
  outline: 2px solid var(--md-primary, #ff5fa2);
  outline-offset: 2px;
}

@media (max-width: 599px) {
  .shop {
    padding: var(--spacing-lg, 24px);
  }

  .shop__hero-headline {
    font-size: 36px;
    line-height: 44px;
  }
}
</style>
