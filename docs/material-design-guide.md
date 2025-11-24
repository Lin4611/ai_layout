# Material Design Style Guide

## 專案概述

本專案遵循 Google Material Design 3 (Material You) 設計系統，並採用 **TWICE 主題色系**，確保介面的一致性、可用性與甜美可愛的視覺風格。

本檔案的結構與 `material-design-guide.md` 保持 1:1，僅將配色與部分說明調整為 TWICE 版本。
material-design-guide

---

## 配色系統 (Color System)

### 主要顏色 (Primary Colors)

```css
--md-primary: #FF5FA2;           /* TWICE 主粉色 - 用於主要操作按鈕 */
--md-on-primary: #FFFFFF;        /* 主色上的文字 */
--md-primary-container: #FFD1E8; /* 粉色容器背景 */
--md-on-primary-container: #630028; /* 粉色容器上的文字 */

```

### 次要顏色 (Secondary Colors)

```css
--md-secondary: #B47DFF;         /* TWICE 糖果紫 - 次要元素 */
--md-on-secondary: #FFFFFF;
--md-secondary-container: #EBDDFF;
--md-on-secondary-container: #2F0063;

```

### 第三顏色 (Tertiary Colors)

```css
--md-tertiary: #7DD3F7;          /* 氣泡藍 - 強調與輔助對比 */
--md-on-tertiary: #003544;
--md-tertiary-container: #D4F3FF;
--md-on-tertiary-container: #001F24;

```

### 錯誤顏色 (Error Colors)

```css
--md-error: #BA1A1A;
--md-on-error: #FFFFFF;
--md-error-container: #FFDAD6;
--md-on-error-container: #410002;

```

### 背景顏色 (Background & Surface)

```css
--md-background: #FFF8FC;        /* 柔粉頁面背景 */
--md-on-background: #1C1B1F;     /* 背景上的文字 */

--md-surface: #FFF8FC;           /* 卡片、對話框背景 */
--md-on-surface: #1C1B1F;

--md-surface-variant: #F2E5F7;   /* 粉紫變體表面 */
--md-on-surface-variant: #4D3E58;

```

### 外框與分隔線 (Outline)

```css
--md-outline: #9A8CA8;           /* 粉紫描邊線 */
--md-outline-variant: #D9CDE0;   /* 較淡的描邊線 */

```

---

## 字體系統 (Typography)

### 字體家族

```css
font-family: 'Roboto', 'Noto Sans TC', sans-serif;

```

### 字體階層

```css
/* Display - 大標題 */
.display-large {
  font-size: 57px;
  line-height: 64px;
  font-weight: 400;
  letter-spacing: -0.25px;
}

.display-medium {
  font-size: 45px;
  line-height: 52px;
  font-weight: 400;
}

.display-small {
  font-size: 36px;
  line-height: 44px;
  font-weight: 400;
}

/* Headline - 標題 */
.headline-large {
  font-size: 32px;
  line-height: 40px;
  font-weight: 400;
}

.headline-medium {
  font-size: 28px;
  line-height: 36px;
  font-weight: 400;
}

.headline-small {
  font-size: 24px;
  line-height: 32px;
  font-weight: 400;
}

/* Title - 次標題 */
.title-large {
  font-size: 22px;
  line-height: 28px;
  font-weight: 400;
}

.title-medium {
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  letter-spacing: 0.15px;
}

.title-small {
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  letter-spacing: 0.1px;
}

/* Body - 內文 */
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

.body-small {
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  letter-spacing: 0.4px;
}

/* Label - 標籤 */
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

.label-small {
  font-size: 11px;
  line-height: 16px;
  font-weight: 500;
  letter-spacing: 0.5px;
}

```

---

## 間距系統 (Spacing)

使用 4px 基準的間距系統：

```css
--spacing-xs: 4px;    /* 極小間距 */
--spacing-sm: 8px;    /* 小間距 */
--spacing-md: 16px;   /* 中等間距 - 最常用 */
--spacing-lg: 24px;   /* 大間距 */
--spacing-xl: 32px;   /* 極大間距 */
--spacing-2xl: 48px;  /* 超大間距 */
--spacing-3xl: 64px;  /* 特大間距 */

```

### 組件內部間距規則

- **按鈕內距**: 水平 24px, 垂直 10px
- **卡片內距**: 16px
- **列表項內距**: 水平 16px, 垂直 8px
- **表單欄位間距**: 16px

---

## 圓角系統 (Border Radius)

```css
--radius-none: 0px;
--radius-xs: 4px;      /* 小元件 */
--radius-sm: 8px;      /* 按鈕、輸入框 */
--radius-md: 12px;     /* 卡片 */
--radius-lg: 16px;     /* 大卡片 */
--radius-xl: 28px;     /* FAB, Chips */
--radius-full: 9999px; /* 圓形 */

```

---

## 陰影系統 (Elevation)

Material Design 使用陰影表示層級：

```css
/* Level 0 - 無陰影 */
--elevation-0: none;

/* Level 1 - 輕微浮起 */
--elevation-1:
  0px 1px 2px 0px rgba(0, 0, 0, 0.3),
  0px 1px 3px 1px rgba(0, 0, 0, 0.15);

/* Level 2 - 中等浮起 */
--elevation-2:
  0px 1px 2px 0px rgba(0, 0, 0, 0.3),
  0px 2px 6px 2px rgba(0, 0, 0, 0.15);

/* Level 3 - 明顯浮起 */
--elevation-3:
  0px 4px 8px 3px rgba(0, 0, 0, 0.15),
  0px 1px 3px 0px rgba(0, 0, 0, 0.3);

/* Level 4 - 強烈浮起 */
--elevation-4:
  0px 6px 10px 4px rgba(0, 0, 0, 0.15),
  0px 2px 3px 0px rgba(0, 0, 0, 0.3);

/* Level 5 - 最高層級 */
--elevation-5:
  0px 8px 12px 6px rgba(0, 0, 0, 0.15),
  0px 4px 4px 0px rgba(0, 0, 0, 0.3);

```

### 元件陰影層級建議

- **App Bar**: elevation-0 或 elevation-2
- **Card**: elevation-1
- **FAB (休息)**: elevation-3
- **FAB (懸停)**: elevation-4
- **Dialog**: elevation-3
- **Navigation Drawer**: elevation-1
- **Menu**: elevation-2

---

## 組件規範 (Components)

### 按鈕 (Buttons)

### 1. Filled Button (實心按鈕)

TWICE 版本使用主粉色作為實心按鈕背景。

```html
<button class="btn-filled">
  <span>按鈕文字</span>
</button>

```

```css
.btn-filled {
  background-color: var(--md-primary);
  color: var(--md-on-primary);
  padding: 10px 24px;
  border-radius: var(--radius-xl);
  border: none;
  font: var(--label-large);
  min-height: 40px;
  box-shadow: var(--elevation-0);
  transition: all 0.2s ease;
}

.btn-filled:hover {
  box-shadow: var(--elevation-1);
  background-color: color-mix(in srgb, var(--md-primary) 92%, white);
}

```

### 2. Outlined Button (外框按鈕)

```css
.btn-outlined {
  background-color: transparent;
  color: var(--md-primary);
  padding: 10px 24px;
  border-radius: var(--radius-xl);
  border: 1px solid var(--md-outline);
  font: var(--label-large);
  min-height: 40px;
}

```

### 3. Text Button (文字按鈕)

```css
.btn-text {
  background-color: transparent;
  color: var(--md-primary);
  padding: 10px 12px;
  border-radius: var(--radius-xl);
  border: none;
  font: var(--label-large);
  min-height: 40px;
}

```

### 4. FAB (浮動操作按鈕)

```css
.fab {
  width: 56px;
  height: 56px;
  border-radius: var(--radius-lg);
  background-color: var(--md-primary-container);
  color: var(--md-on-primary-container);
  box-shadow: var(--elevation-3);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

```

---

### 卡片 (Cards)

TWICE 版本以柔粉背景為面板，並以粉色/紫色系文字呈現。

```html
<div class="card">
  <img src="..." class="card-media" />
  <div class="card-content">
    <h3 class="card-title">標題</h3>
    <p class="card-text">內容描述</p>
  </div>
  <div class="card-actions">
    <button class="btn-text">操作</button>
  </div>
</div>

```

```css
.card {
  background-color: var(--md-surface);
  border-radius: var(--radius-md);
  box-shadow: var(--elevation-1);
  overflow: hidden;
}

.card-media {
  width: 100%;
  height: 194px;
  object-fit: cover;
}

.card-content {
  padding: 16px;
}

.card-title {
  font: var(--title-large);
  color: var(--md-primary); /* TWICE: 以主粉色作為卡片標題 */
  margin-bottom: 8px;
}

.card-text {
  font: var(--body-medium);
  color: var(--md-on-surface-variant);
}

.card-actions {
  padding: 8px;
  display: flex;
  gap: 8px;
  justify-content: flex-end;
}

```

---

### 文字欄位 (Text Fields)

### Filled Text Field

```html
<div class="text-field">
  <label class="text-field-label">標籤</label>
  <input type="text" class="text-field-input" placeholder="提示文字">
</div>

```

```css
.text-field {
  position: relative;
  width: 100%;
}

.text-field-input {
  width: 100%;
  background-color: var(--md-surface-variant); /* 粉紫表面 */
  border: none;
  border-bottom: 1px solid var(--md-on-surface-variant);
  border-radius: var(--radius-xs) var(--radius-xs) 0 0;
  padding: 24px 16px 8px;
  font: var(--body-large);
  color: var(--md-on-surface);
}

.text-field-input:focus {
  outline: none;
  border-bottom-width: 2px;
  border-bottom-color: var(--md-primary); /* 聚焦時以主粉色強調 */
}

.text-field-label {
  position: absolute;
  left: 16px;
  top: 8px;
  font: var(--body-small);
  color: var(--md-on-surface-variant);
}

```

---

### Chips (標籤)

TWICE 版本使用次要容器色 (糖果紫) 作為底色。

```html
<div class="chip">
  <span>標籤文字</span>
  <button class="chip-close">×</button>
</div>

```

```css
.chip {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 16px;
  border-radius: var(--radius-xs);
  background-color: var(--md-secondary-container);
  border: 1px solid var(--md-outline-variant);
  font: var(--label-large);
  color: var(--md-on-secondary-container);
}

```

---

### Dialog (對話框)

```html
<div class="dialog-overlay">
  <div class="dialog">
    <div class="dialog-header">
      <h2 class="dialog-title">標題</h2>
    </div>
    <div class="dialog-content">
      內容文字
    </div>
    <div class="dialog-actions">
      <button class="btn-text">取消</button>
      <button class="btn-filled">確認</button>
    </div>
  </div>
</div>

```

```css
.dialog-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.dialog {
  background-color: var(--md-surface);
  border-radius: var(--radius-xl);
  box-shadow: var(--elevation-3);
  min-width: 280px;
  max-width: 560px;
  padding: 24px;
}

.dialog-title {
  font: var(--headline-small);
  color: var(--md-primary); /* 使用主粉色突出標題 */
  margin-bottom: 16px;
}

.dialog-content {
  font: var(--body-medium);
  color: var(--md-on-surface-variant);
  margin-bottom: 24px;
}

.dialog-actions {
  display: flex;
  gap: 8px;
  justify-content: flex-end;
}

```

---

## 動畫與轉場 (Motion)

### 標準動畫時長

```css
--duration-short: 100ms;   /* 快速回饋 */
--duration-medium: 250ms;  /* 標準轉場 */
--duration-long: 400ms;    /* 複雜動畫 */

```

### 緩動函數 (Easing)

```css
--easing-standard: cubic-bezier(0.2, 0.0, 0, 1.0);     /* 標準 */
--easing-emphasized: cubic-bezier(0.0, 0.0, 0, 1.0);   /* 強調 */
--easing-decelerate: cubic-bezier(0.0, 0.0, 0.2, 1.0); /* 減速 */
--easing-accelerate: cubic-bezier(0.3, 0.0, 1.0, 1.0); /* 加速 */

```

### 常用轉場效果

```css
/* 淡入淡出 */
.fade-enter {
  opacity: 0;
  transition: opacity var(--duration-medium) var(--easing-standard);
}

.fade-enter-active {
  opacity: 1;
}

/* 滑入效果 */
.slide-enter {
  transform: translateY(20px);
  opacity: 0;
  transition: all var(--duration-medium) var(--easing-emphasized);
}

.slide-enter-active {
  transform: translateY(0);
  opacity: 1;
}

```

---

## 響應式設計 (Responsive)

### 斷點系統

```css
/* 手機 */
@media (max-width: 599px) { /* Compact */ }

/* 平板 */
@media (min-width: 600px) and (max-width: 839px) { /* Medium */ }

/* 桌面 */
@media (min-width: 840px) and (max-width: 1279px) { /* Expanded */ }

/* 大螢幕 */
@media (min-width: 1280px) { /* Large */ }

/* 超大螢幕 */
@media (min-width: 1600px) { /* Extra Large */ }

```

### 響應式間距

- Compact: 使用較小間距 (8px, 16px)
- Medium: 標準間距 (16px, 24px)
- Expanded+: 較大間距 (24px, 32px)

---

## 無障礙設計 (Accessibility)

### 顏色對比度

- 正文文字: 至少 4.5:1
- 大文字 (18px+): 至少 3:1
- UI 元件: 至少 3:1

### 觸控目標

- 最小尺寸: 48x48 dp
- 建議間距: 8dp

### 鍵盤導航

- 所有互動元件必須可用鍵盤操作
- 提供清晰的 focus 樣式

```css
*:focus-visible {
  outline: 2px solid var(--md-primary);
  outline-offset: 2px;
}

```

### ARIA 標籤

```html
<!-- 按鈕 -->
<button aria-label="關閉對話框">×</button>

<!-- 載入狀態 -->
<div role="status" aria-live="polite">載入中...</div>

<!-- 表單欄位 -->
<input aria-describedby="email-hint" />
<span id="email-hint">請輸入有效的電子郵件</span>

```

---

## 圖示系統 (Icons)

### 推薦圖示庫

- **Material Symbols**: Google 官方圖示
- **尺寸**: 18px, 24px, 36px, 48px

### 使用方式

```html
<!-- Material Symbols (推薦) -->
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet">

<span class="material-symbols-outlined">home</span>
<span class="material-symbols-outlined">search</span>
<span class="material-symbols-outlined">settings</span>

```

### 圖示顏色

- 高強調: `var(--md-on-surface)` (不透明度 100%)
- 中強調: `var(--md-on-surface-variant)` (不透明度 74%)
- 低強調: `var(--md-on-surface-variant)` (不透明度 38%)

> 若希望更貼近 TWICE 主題，可在特定場景（例如 FAB 上的 icon）使用 var(--md-on-primary-container) 或 var(--md-primary)。
> 

---

## 開發規範

### 命名規則

- **Class 命名**: BEM 方法論 (Block__Element--Modifier)
- **CSS 變數**: 使用 `-md-` 前綴
- **元件檔案**: PascalCase (例如: `ButtonFilled.vue`)

### 檔案結構

```
src/
├── assets/
│   └── styles/
│       ├── variables.css      # 設計 token (可建立 TWICE 版與預設版)
│       ├── typography.css     # 字體樣式
│       └── components/        # 元件樣式
├── components/
│   ├── buttons/
│   ├── cards/
│   └── forms/
└── views/

```

### Vue 組件範例

```
<template>
  <button
    :class="['btn', `btn-${variant}`]"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'filled',
    validator: (value) => ['filled', 'outlined', 'text'].includes(value)
  }
});

const emit = defineEmits(['click']);

const handleClick = (event) => {
  emit('click', event);
};
</script>

<style scoped>
.btn {
  /* 基礎按鈕樣式 */
  font: var(--label-large);
  padding: 10px 24px;
  border-radius: var(--radius-xl);
  min-height: 40px;
  transition: all var(--duration-short) var(--easing-standard);
}

.btn-filled {
  background-color: var(--md-primary);          /* TWICE 粉 */
  color: var(--md-on-primary);
  border: none;
}

/* 更多變體... */
</style>

```

---

## 參考資源

- **官方文件**: https://m3.material.io/
- **設計工具**: Figma Material 3 Design Kit
- **開發庫**: Vuetify 3, Material Components Web
- **顏色工具**: Material Theme Builder

---

## 版本資訊

- **版本**: 1.0.0 TWICE Edition
- **基於**: Material Design 3 (Material You)
- **最後更新**: 2025
- **維護者**: [Your Name]