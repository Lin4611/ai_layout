<script setup>
import { useVersionOneData } from '@/composables/useVersionOneData'

const { content, loading, error, reload } = useVersionOneData('musicApp')
</script>

<template>
  <section class="version1-music">
    <div v-if="loading">載入中...</div>
    <div v-else-if="error">
      <p>無法載入資料：{{ error }}</p>
      <button type="button" @click="reload">重新整理</button>
    </div>
    <div v-else-if="content">
      <header>
        <p>{{ content.hero.tagline }}</p>
        <h1>{{ content.hero.title }}</h1>
        <p>{{ content.hero.copy }}</p>
        <div>
          <button
            v-for="action in content.hero.actions"
            :key="action"
            type="button"
          >
            {{ action }}
          </button>
        </div>
        <img :src="content.hero.artwork" alt="音樂應用程式主視覺" />
      </header>

      <section>
        <h2>正在播放</h2>
        <div>
          <img :src="content.nowPlaying.artwork" alt="專輯封面" />
          <div>
            <p>{{ content.nowPlaying.title }}</p>
            <p>{{ content.nowPlaying.artist }} · {{ content.nowPlaying.album }}</p>
            <p>
              進度：{{ content.nowPlaying.elapsed }}s / {{ content.nowPlaying.duration }}s
            </p>
          </div>
        </div>
        <ul>
          <li v-for="line in content.nowPlaying.lyrics" :key="line">
            {{ line }}
          </li>
        </ul>
      </section>

      <section>
        <h2>客製混音</h2>
        <article v-for="mix in content.mixes" :key="mix.name">
          <h3>{{ mix.name }}</h3>
          <p>{{ mix.description }}</p>
          <img :src="mix.cover" :alt="mix.name" />
        </article>
      </section>

      <section>
        <h2>即將到來的 Session</h2>
        <ul>
          <li v-for="session in content.sessions" :key="session.city">
            {{ session.date }} · {{ session.city }} {{ session.venue }} — {{ session.highlight }}
          </li>
        </ul>
      </section>

      <section>
        <h2>聆聽統計</h2>
        <p>本週分鐘數：{{ content.stats.weeklyMinutes }}</p>
        <p>連續聆聽天數：{{ content.stats.listeningStreak }}</p>
        <p>偏好風格：</p>
        <ul>
          <li v-for="genre in content.stats.favoriteGenres" :key="genre">
            {{ genre }}
          </li>
        </ul>
      </section>
    </div>
  </section>
</template>
