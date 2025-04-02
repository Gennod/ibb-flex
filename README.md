# IBB "Flex"

Данный проект представляет собой приложение с анимациями, созданными с помощью framer motion

## Функционал
- Прокрутка фильмов
- Переход на страничку фильма

## Технологии
- ![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
- ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
- ![Zustand](https://img.shields.io/badge/Zustand-blue?style=for-the-badge)
- ![Lucide React](https://img.shields.io/badge/Lucide_React-F56565?style=for-the-badge)
- ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
- ![Framer Motion](https://img.shields.io/badge/Motion-EF2D5E?style=for-the-badge&logo=framer&logoColor=white)
- ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
- ![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)

## Установка и запуск

1. Клонируйте репозиторий:

```bash
git clone https://github.com/Gennod/ibb-flex.git
```

2. Установите зависимости:

```bash
npm install
```

3. Запустите приложение:

```bash
npm run dev
```

## Демо

Посмотреть работающее приложение можно здесь:
[IBB-FLEX](https://ibb-flex.netlify.app/)

## Структура проекта

```

    ├── profile-img.jpg
    ├── vercel.svg
    ├── video.mp4
    └── window.svg
├── src
    ├── app
    │   ├── Home.tsx
    │   ├── Providers.tsx
    │   ├── carousel
    │   │   ├── Carousel.tsx
    │   │   ├── CarouselItem.tsx
    │   │   ├── CarouselItemDetails.tsx
    │   │   ├── animations
    │   │   │   └── carousel-item.animation.ts
    │   │   └── hooks
    │   │   │   ├── useCarousel.ts
    │   │   │   └── useCarouselItemAngle.ts
    │   ├── favicon.ico
    │   ├── filters
    │   │   ├── Filters.tsx
    │   │   └── filters.data.ts
    │   ├── globals.css
    │   ├── layout.tsx
    │   ├── media
    │   │   └── [slug]
    │   │   │   ├── MediaDetails.tsx
    │   │   │   ├── animation.ts
    │   │   │   ├── details
    │   │   │       └── MediaPage.tsx
    │   │   │   ├── episodes
    │   │   │       ├── EpisodeItem.tsx
    │   │   │       └── Episodes.tsx
    │   │   │   ├── page.tsx
    │   │   │   ├── products
    │   │   │       ├── Products.tsx
    │   │   │       └── product.animation.ts
    │   │   │   ├── useMediaBackdrop.ts
    │   │   │   └── video-player
    │   │   │       └── VideoPlayer.tsx
    │   └── page.tsx
    ├── components
    │   └── main-wrapper
    │   │   ├── MainWrapper.tsx
    │   │   └── header
    │   │       ├── Header.tsx
    │   │       ├── Menu.tsx
    │   │       └── menu.data.ts
    ├── config
    │   └── page.config.ts
    ├── media
    │   ├── media.data.ts
    │   ├── media.types.ts
    │   └── seasons.data.ts
    ├── middleware.ts
    ├── store
    │   ├── carousel.store.ts
    │   ├── main-animation.ts
    │   ├── store.ts
    │   └── video-player.store.ts
    └── utils
    │   └── get-background-image.ts
└── tsconfig.json

```
