# Repository Guidelines

## Project Structure & Module Organization
本專案採用 Vue 3 + Vite。`src/main.js` 建立應用並掛載 `App.vue`，路由定義集中在 `src/router/index.js`。新頁面放在 `src/views/<Feature>/`，加入後記得更新路由表。共享樣式與 Tailwind 層級統一寫在 `src/assets/all.css`，靜態資源需繞過打包時放在 `public/`。建置相關設定位於 `vite.config.js` 與 `jsconfig.json`，修改前請確認是否影響整體模組解析。

## Build, Test, and Development Commands
在 Node 20+ 執行 `npm install` 以安裝依賴。開發時使用 `npm run dev`，它會啟動 Vite 並提供 HMR，預設位址為 `http://localhost:5173`。`npm run build` 會將產出輸出至 `dist/`，對路由、CSS 或環境變數有調整時務必先跑一次。`npm run preview` 將以本地伺服器模擬部署環境，方便檢查 History 模式與資源路徑。

## Coding Style & Naming Conventions
單檔元件統一使用 `<script setup>` 與兩格空白縮排，檔名遵循 PascalCase（如 `DashboardPanel.vue`）。composable 放在 `src/composables/useThing.js` 且以 `use` 開頭；工具模組使用具名匯出，避免與元件預設匯出混淆。布局多利用 Tailwind 工具類，若需要自訂變數、關鍵影格或重複樣式，集中於 `src/assets/all.css`。

## Testing Guidelines
目前尚未配置正式測試框架，若功能變複雜，建議導入 Vitest 與 Vue Test Utils。測試檔可放在 `src/__tests__/ComponentName.spec.js`，以行為描述命名（例：`renders empty state when list is empty`），必要時模擬 router。建立測試腳本後，統一以 `npm run test`（通常對應 `vitest run`）執行並在 PR 中附上結果，新增功能需提供充分涵蓋率，並說明任何 `skip` 或 `todo` 理由。

## Commit & Pull Request Guidelines
參考現有歷史，提交訊息保持簡短明確（如 `初始化 Vue 3 專案，新增基本檔案結構與配置`），若有細節可寫在訊息內文。使用 `Fixes #123` 或 `Refs #123` 關聯議題，單一提交僅處理一組邏輯變更。PR 描述需包含動機、主要變更點，UI 調整附上截圖或 GIF，並列出已執行的指令（`npm run build`、`npm run preview`、測試等）。提交審查前確認 CI（導入後）全數通過並至少請一位維護者審核。

## Security & Configuration Tips
機密設定請寫入 `.env.local` 並加入 `.gitignore`；導入新依賴前先評估其維護狀況與體積，優先選用輕量級 Vue 插件。部署時需確保環境變數 `BASE_URL` 與 `createWebHistory` 所期望的路徑一致，以免造成重新整理後的 404。
