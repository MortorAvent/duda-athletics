// export default defineNuxtConfig({
//   modules: [
//     '@nuxtjs/google-analytics',
//     '@nuxt/content'
//   ],
//   // googleAnalytics: {
//   //   id: 'UA-XXXXXXXXX-X' //Zastąp swoim ID śledzenia Google Analytics
//   //  },
//   //  content:{

//   //  }, 
//   app: {
//     head: {
//       title: 'Duda Athletics',
//       meta: [
//         { name: 'description', content: 'Duda Athletics - Mistrz Polski w Trójboju Siłowym. Usługi trenera personalnego.' },
//         { name: 'keywords', content: 'trójbój siłowy, trener personalny, fitness, zdrowie, trening, trening siłowy' },
//         { property: 'og:title', content: 'Duda Athletics' },
//         { property: 'og:description', content: 'Duda Athletics - Mistrz Polski w Trójboju Siłowym. Usługi trenera personalnego.' },
//         { property: 'og:type', content: 'website' },
//         { property: 'og:url', content: 'https://www.dudaathletics.pl' },
//         { property: 'og:image', content: 'https://www.dudaathletics.pl/og-image.jpg' },
//       ],
//       link: [
//         { rel: 'canonical', href: 'https://www.dudaathletics.pl' }
//       ]
//     }
//   },
//   css: [
//     '~/assets/styles.css'
//   ]
// })
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2024-07-16',
  app: {
    head: {
      title: 'Duda Athletics',
      meta: [
        { name: 'description', content: 'Duda Athletics - Mistrz Polski w Trójboju Siłowym. Usługi trenera personalnego.' }
      ],
      link: [
        { rel: 'canonical', href: 'https://www.dudaathletics.pl' }
      ],
      script: [
        {
          hid: 'ga',
          src: 'https://www.googletagmanager.com/gtag/js?id=UA-XXXXXXXXX-X',
          async: true
        },
        {
          hid: 'ga-init',
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-XXXXXXXXX-X', {
              page_path: window.location.pathname,
            });
          `,
          type: 'text/javascript'
        }
      ],
      
    }
  },
  css: [
    '~/assets/styles.css'
  ]
})
