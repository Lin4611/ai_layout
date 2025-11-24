<script setup>
import { useVersionOneData } from '@/composables/useVersionOneData'

const { content, loading, error, reload } = useVersionOneData('landingPage')

const palette = {
  neonPurple: '#c084fc',
  pastelBlue: '#7dd3fc',
  electricPink: '#ff5fcb',
  chromeSilver: '#d9e6ff',
  deepBlack: '#03000b'
}

const glowShadow = '0 35px 120px rgba(132, 94, 247, 0.65)'
const panelShadow = '0 24px 90px rgba(0, 0, 0, 0.85)'
</script>

<template>
  <section
    class="version1-landing min-h-screen overflow-hidden text-slate-100"
    :style="{
      '--neon-purple': palette.neonPurple,
      '--pastel-blue': palette.pastelBlue,
      '--electric-pink': palette.electricPink,
      '--chrome-silver': palette.chromeSilver,
      '--deep-black': palette.deepBlack
    }"
  >
    <div v-if="loading" class="flex min-h-screen items-center justify-center text-lg">
      載入中...
    </div>
    <div v-else-if="error" class="mx-auto max-w-2xl space-y-4 px-6 py-16 text-center">
      <p class="text-xl text-red-200">無法載入資料：{{ error }}</p>
      <button
        type="button"
        @click="reload"
        class="rounded-full border border-white/30 px-6 py-2 text-sm uppercase tracking-[0.3em] text-white/80 transition hover:border-white"
      >
        重新整理
      </button>
    </div>
    <div v-else-if="content" class="mx-auto max-w-6xl space-y-20 px-6 py-16 lg:px-10">
      <header
        class="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/10 p-10 shadow-[0_0_60px_rgba(168,85,247,0.35)] backdrop-blur-3xl"
      >
        <div class="neon-particles" aria-hidden="true"></div>
        <div class="flex flex-col gap-12 lg:flex-row lg:items-center">
          <div class="space-y-6 lg:w-1/2">
            <p class="text-xs uppercase tracking-[0.7em] text-white/70">{{ content.hero.product }}</p>
            <h1 class="text-4xl font-semibold leading-tight text-white drop-shadow-[0_10px_40px_rgba(255,105,210,0.35)] lg:text-5xl">
              {{ content.hero.headline }}
            </h1>
            <p class="text-lg text-slate-200/90">{{ content.hero.subhead }}</p>
            <div class="flex flex-wrap gap-4">
              <button
                v-for="action in content.hero.actions"
                :key="action"
                type="button"
                class="group relative overflow-hidden rounded-full border border-white/20 px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white"
                :style="{ boxShadow: glowShadow }"
              >
                <span class="relative z-10">{{ action }}</span>
                <span class="absolute inset-0 bg-gradient-to-r from-[color:var(--electric-pink)] to-[color:var(--pastel-blue)] opacity-70 transition group-hover:opacity-100"></span>
              </button>
            </div>
            <div
              v-if="content.socialProof"
              class="mt-6 space-y-3 rounded-2xl border border-white/10 bg-white/5 p-5 text-xs uppercase tracking-[0.5em] text-white/60"
            >
              <p>被以下團隊信任</p>
              <div class="flex flex-wrap gap-4 text-[0.7rem] text-white/50">
                <span v-for="logo in content.socialProof.logos" :key="logo">{{ logo }}</span>
              </div>
            </div>
          </div>
          <div class="relative lg:w-1/2">
            <div
              class="neon-frame relative overflow-hidden rounded-[30px] border border-white/10 bg-slate-900/40 p-4"
              :style="{ boxShadow: glowShadow }"
            >
              <img
                :src="content.hero.heroImage"
                alt="Orbit Studio 示意圖"
                class="h-72 w-full rounded-2xl object-cover opacity-90"
              />
              <video
                v-if="content.hero.videoDemo"
                :src="content.hero.videoDemo"
                :poster="content.hero.heroImage"
                controls
                class="mt-4 w-full rounded-2xl border border-white/10"
              ></video>
              <div class="pointer-events-none absolute inset-0 rounded-[30px] border border-white/15 opacity-40" aria-hidden="true"></div>
            </div>
          </div>
        </div>
      </header>

      <section v-if="content.features?.length" class="space-y-6">
        <div class="section-heading">
          <p>ORBIT SENSE LAYER</p>
          <h2>充滿存在感的巨型模組</h2>
        </div>
        <div class="grid gap-6 md:grid-cols-2">
          <article
            v-for="feature in content.features"
            :key="feature.title"
            class="neon-card"
            :style="{ boxShadow: panelShadow }"
          >
            <p class="text-4xl">{{ feature.icon }}</p>
            <h3 class="text-2xl font-semibold text-white">{{ feature.title }}</h3>
            <p class="text-slate-200/80">{{ feature.description }}</p>
          </article>
        </div>
      </section>

      <section v-if="content.workflow?.length" class="space-y-10">
        <div class="section-heading">
          <p>WORKFLOW</p>
          <h2>三步進入全像研究宇宙</h2>
        </div>
        <div class="workflow-grid">
          <article v-for="step in content.workflow" :key="step.step" class="workflow-card">
            <div class="text-sm uppercase tracking-[0.5em] text-white/50">{{ step.duration }}</div>
            <h3 class="text-2xl font-semibold">{{ step.step }}</h3>
            <p class="text-slate-200/70">{{ step.detail }}</p>
          </article>
        </div>
      </section>

      <section v-if="content.milestones?.length" class="space-y-6">
        <div class="section-heading">
          <p>IMPACT</p>
          <h2>指標化的宇宙軌跡</h2>
        </div>
        <div class="grid gap-6 md:grid-cols-4">
          <article v-for="milestone in content.milestones" :key="milestone.metric" class="stat-card">
            <h3 class="text-4xl font-semibold text-white">{{ milestone.metric }}</h3>
            <p class="text-sm uppercase tracking-[0.4em] text-white/60">{{ milestone.label }}</p>
          </article>
        </div>
      </section>

      <section v-if="content.plans?.length" class="space-y-10">
        <div class="section-heading">
          <p>PLANS</p>
          <h2>選擇你的指揮艙</h2>
        </div>
        <div class="grid gap-8 md:grid-cols-3">
          <article
            v-for="plan in content.plans"
            :key="plan.name"
            class="plan-card"
            :style="{ boxShadow: panelShadow }"
          >
            <p class="text-xs uppercase tracking-[0.6em] text-white/60">{{ plan.name }}</p>
            <h3 class="text-3xl font-semibold text-white">{{ plan.price }}</h3>
            <p class="text-slate-200/70">{{ plan.description }}</p>
            <ul class="space-y-2 text-sm text-white/80">
              <li v-for="highlight in plan.highlights" :key="highlight" class="flex items-start gap-2">
                <span class="mt-1 h-2 w-2 rounded-full bg-[color:var(--electric-pink)]"></span>
                <span>{{ highlight }}</span>
              </li>
            </ul>
            <button type="button" class="rounded-full border border-white/20 px-6 py-2 text-xs uppercase tracking-[0.4em] text-white/80">
              訂閱方案
            </button>
          </article>
        </div>
      </section>

      <section v-if="content.integrations?.length" class="space-y-8">
        <div class="section-heading">
          <p>INTEGRATIONS</p>
          <h2>接上你熟悉的星軌</h2>
        </div>
        <div class="grid gap-6 md:grid-cols-2">
          <article v-for="integration in content.integrations" :key="integration.name" class="integration-card">
            <div>
              <h3 class="text-2xl font-semibold text-white">{{ integration.name }}</h3>
              <p class="text-sm uppercase tracking-[0.4em] text-white/50">{{ integration.status }}</p>
            </div>
            <p class="text-slate-200/70">{{ integration.description }}</p>
          </article>
        </div>
      </section>

      <section v-if="content.timeline?.length" class="space-y-6">
        <div class="section-heading">
          <p>TIMELINE</p>
          <h2>Orbit 演化紀錄</h2>
        </div>
        <div class="timeline">
          <article v-for="event in content.timeline" :key="event.year" class="timeline-item">
            <p class="text-sm uppercase tracking-[0.4em] text-white/50">{{ event.year }}</p>
            <h3 class="text-xl font-semibold text-white">{{ event.event }}</h3>
          </article>
        </div>
      </section>

      <section v-if="content.testimonials?.length" class="space-y-8">
        <div class="section-heading">
          <p>VOICE</p>
          <h2>來自宇宙夥伴的訊號</h2>
        </div>
        <div class="grid gap-6 md:grid-cols-3">
          <article v-for="testimonial in content.testimonials" :key="testimonial.name" class="testimonial-card">
            <p class="text-lg text-white">“{{ testimonial.quote }}”</p>
            <p class="text-sm text-white/60">{{ testimonial.name }} · {{ testimonial.role }}</p>
          </article>
        </div>
      </section>

      <section v-if="content.resources?.length" class="space-y-6">
        <div class="section-heading">
          <p>RESOURCES</p>
          <h2>下載更多增幅套件</h2>
        </div>
        <div class="grid gap-6 md:grid-cols-3">
          <a
            v-for="resource in content.resources"
            :key="resource.title"
            :href="resource.url"
            class="resource-card"
          >
            <p class="text-xs uppercase tracking-[0.5em] text-white/60">{{ resource.type }}</p>
            <h3 class="text-2xl font-semibold text-white">{{ resource.title }}</h3>
            <p class="text-slate-200/70">{{ resource.description }}</p>
          </a>
        </div>
      </section>

      <section v-if="content.cta" class="cta">
        <div>
          <p class="text-xs uppercase tracking-[0.5em] text-white/60">{{ content.cta.title }}</p>
          <h2 class="text-3xl font-semibold text-white">{{ content.cta.body }}</h2>
        </div>
        <div class="flex flex-wrap gap-4">
          <button type="button" class="cta-btn">{{ content.cta.primary }}</button>
          <button type="button" class="cta-btn secondary">{{ content.cta.secondary }}</button>
        </div>
      </section>

      <section v-if="content.contact" class="contact">
        <div>
          <p class="text-sm uppercase tracking-[0.5em] text-white/60">隨時連線</p>
          <h2 class="text-2xl font-semibold text-white">Orbit Studio 聯絡資訊</h2>
        </div>
        <div class="grid gap-6 md:grid-cols-2">
          <article class="contact-card">
            <p class="text-sm text-white/60">Email</p>
            <p class="text-xl text-white">{{ content.contact.email }}</p>
            <p class="text-sm text-white/60">{{ content.contact.responseTime }}</p>
          </article>
          <article class="contact-card">
            <p class="text-sm text-white/60">Phone</p>
            <p class="text-xl text-white">{{ content.contact.phone }}</p>
            <p class="text-sm text-white/60">{{ content.contact.officeHours }}</p>
          </article>
          <article class="contact-card md:col-span-2">
            <p class="text-sm text-white/60">Sales</p>
            <p class="text-white">{{ content.contact.salesRegions.join(' · ') }}</p>
          </article>
        </div>
      </section>
    </div>
  </section>
</template>

<style scoped>
.version1-landing {
  background: radial-gradient(circle at 20% -10%, rgba(255, 94, 203, 0.35), transparent 35%),
    radial-gradient(circle at 80% 0%, rgba(125, 211, 252, 0.2), transparent 40%),
    #03000b;
}

.section-heading {
  text-transform: uppercase;
  letter-spacing: 0.5em;
  color: rgba(255, 255, 255, 0.6);
}

.section-heading h2 {
  margin-top: 0.5rem;
  letter-spacing: normal;
  text-transform: none;
  color: white;
  font-size: 2.5rem;
  font-weight: 600;
}

.neon-card,
.workflow-card,
.stat-card,
.plan-card,
.integration-card,
.timeline-item,
.testimonial-card,
.resource-card,
.cta,
.contact,
.contact-card {
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 1.75rem;
  background: rgba(5, 5, 10, 0.65);
  backdrop-filter: blur(30px);
  padding: 1.75rem;
}

.neon-card,
.plan-card,
.integration-card,
.testimonial-card,
.resource-card {
  transition: transform 0.4s ease, border 0.4s ease;
}

.neon-card:hover,
.plan-card:hover,
.integration-card:hover,
.testimonial-card:hover,
.resource-card:hover {
  transform: translateY(-10px) scale(1.01);
  border-color: rgba(255, 94, 203, 0.8);
}

.workflow-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.stat-card {
  text-align: center;
  box-shadow: inset 0 0 20px rgba(255, 94, 203, 0.15);
}

.plan-card button {
  margin-top: 1.5rem;
}

.timeline {
  display: grid;
  gap: 1rem;
}

.timeline-item {
  position: relative;
  padding-left: 2.5rem;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: 1rem;
  top: 1rem;
  bottom: 1rem;
  width: 2px;
  background: linear-gradient(var(--electric-pink), var(--neon-purple));
}

.timeline-item::after {
  content: '';
  position: absolute;
  left: 0.85rem;
  top: 1rem;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 999px;
  background: var(--electric-pink);
  box-shadow: 0 0 20px rgba(255, 94, 203, 0.8);
}

.resource-card {
  text-decoration: none;
  color: inherit;
}

.cta {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: flex-start;
  border-radius: 2.5rem;
  background: linear-gradient(120deg, rgba(255, 94, 203, 0.4), rgba(125, 211, 252, 0.25));
  padding: 3rem;
}

.cta-btn {
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 0.85rem 2.8rem;
  text-transform: uppercase;
  letter-spacing: 0.4em;
  font-size: 0.65rem;
  background: rgba(0, 0, 0, 0.2);
  color: white;
  transition: all 0.3s ease;
}

.cta-btn.secondary {
  background: transparent;
}

.cta-btn:hover {
  border-color: rgba(255, 94, 203, 0.7);
  box-shadow: 0 0 30px rgba(255, 94, 203, 0.4);
}

.contact-card {
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.05);
}

.neon-particles::before,
.neon-particles::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle, rgba(255, 94, 203, 0.25) 0%, transparent 50%);
  filter: blur(40px);
}

.neon-particles::after {
  background: radial-gradient(circle, rgba(125, 211, 252, 0.2) 0%, transparent 50%);
  transform: translate(40%, -10%);
}

@media (min-width: 1024px) {
  .cta {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
