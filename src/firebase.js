// src/firebase.js

// 1. Импортируем только то, что нам нужно
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // <-- ВАЖНО: импортируем getAuth

// 2. Ваш конфиг, который вы нашли (он правильный)
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// 3. Инициализируем приложение
const app = initializeApp(firebaseConfig);

// 4. Получаем сервис аутентификации и ЭКСПОРТИРУЕМ его
//    Именно эта строка `export` исправляет ошибку
export const auth = getAuth(app);