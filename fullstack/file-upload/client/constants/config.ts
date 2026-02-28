export const APP_URL = process.env.NEXT_PUBLIC_ENV === "production"
    ? process.env.NEXT_PUBLIC_LIVE_BACKEND_URL
    : process.env.NEXT_PUBLIC_LOCAL_BACKEND_URL