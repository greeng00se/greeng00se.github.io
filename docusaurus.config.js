// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'greeng00se',
  url: 'https://greeng00se.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/duck.png',

  organizationName: 'greeng00se',
  projectName: 'greeng00se.github.io',
  trailingSlash: true,
  i18n: {
    defaultLocale: "ko",
    locales: ["ko"],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: {
          showReadingTime: true,
          routeBasePath: '/',
          archiveBasePath: '/blog',
          editUrl:
            'https://github.com/greeng00se/greeng00se.github.io/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'greeng00se',
        items: [
          {
            to: '/blog', 
            label: 'Blog', 
            position: 'left'
          },
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
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['java'],
      },
      metadata: [{
        name: 'google-site-verification', 
        content: 'APK6j79LMymudgmQDTV8u_RYyncFYyuFUjY9A0hVPv4'
      }],
    }),
};

module.exports = config;
