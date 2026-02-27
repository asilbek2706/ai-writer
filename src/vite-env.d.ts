/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_GEMINI_KEY: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}