// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GG',
  url: 'https://greeng00se.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/duck.png',

  organizationName: 'greeng00se',
  projectName: 'greeng00se.github.io',
  trailingSlash: false,
  i18n: {
    defaultLocale: "ko",
    locales: ["ko"],
  },
  markdown: {
    mermaid: true,
  },
  themes: [
    '@docusaurus/theme-mermaid'
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: {
          showReadingTime: true,
          routeBasePath: '/',
          archiveBasePath: '/blog',
          postsPerPage: 1,

          editUrl:
            'https://github.com/greeng00se/greeng00se.github.io/tree/main/',
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: true,
          editUrl:
            'https://github.com/greeng00se/greeng00se.github.io/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-17TREGCW4H',
          anonymizeIP: true,
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**', '/docs/**', '/page/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'greengööse',
        items: [
          {
            to: '/blog', 
            label: '블로그', 
            position: 'left'
          },
          // {
          //   position: 'left',
          //   type: 'doc',
          //   label: '문서',
          //   docId: 'intro',
          // },
          {
            href: 'https://github.com/greeng00se',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      algolia: {
        appId: 'YSMNU47L51',
        apiKey: '16caa11a7af7bf5db56b5f640fa738cd',
        indexName: 'gh',
        contextualSearch: true,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['java', 'kotlin', 'groovy'],
      },
      metadata: [{
        name: 'google-site-verification', 
        content: 'APK6j79LMymudgmQDTV8u_RYyncFYyuFUjY9A0hVPv4'
      }],
      colorMode: {
        defaultMode: "dark",
        respectPrefersColorScheme: true,
      },
      mermaid: {
        theme: {
          light: 'neutral', 
          dark: 'dark'
        },
      },
    }),
};

module.exports = config;
