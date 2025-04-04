import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Dan Mocnik",
  description: "Dan's personal website",
  srcDir: './src',
  head: [
    // Icon
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    // Google Analytics
    ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-56GYELHDWC' }],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-56GYELHDWC');`
    ]
  ],
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Resume', link: '/resume' },
      {
        text: 'Projects',
        link: '/projects/nextcloud',
        activeMatch: '/projects/'
      },
      {
        text: 'Blog',
        link: '/blog/initializing',
        activeMatch: '/blog/'
      }
    ],

    sidebar: [
      {
        text: 'Projects',
        collapsed: false,
        items: [
          { text: 'Nextcloud', link: '/projects/nextcloud' },
          { text: 'Dashboard.lol', link: '/projects/dashboard.lol' },
          { text: 'Scribe', link: '/projects/scribe' },
          { text: 'IGVC Robot', link: '/projects/igvc' },
          //{ text: 'Lyric Generator', link: '/projects/lyric-generator' }
        ]
      },
      {
        text: 'Blog',
        collapsed: false,
        items: [
          { text: 'Intializing...', link: '/blog/initializing' }
        ]
      }
    ],

    socialLinks: [
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/>'
        },
        link: 'mailto:hello@dmocnik.xyz'
      },
      { icon: 'github', link: 'https://github.com/dmocnik' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/daniel-mocnik/' }
    ],

    outline: 'deep',

    footer: {
      copyright: '© 2024 Dan Mocnik'
    },

    lastUpdated: {
      text: 'Last Updated',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium',
      }
    },

    search: {
      provider: 'local'
    }
  }
})
