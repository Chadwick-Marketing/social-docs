// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Help Center | SocialWP',
  url: 'https://help.socialwp.io',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon:
    'https://ik.imagekit.io/chadwickmarketing/social/icon_128_darker_Mm1-aP4zFzA6.png?ik-sdk-version=javascript-1.4.3&updatedAt=1627638775563',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'chadwick-marketing', // Usually your GitHub org/user name.
  projectName: 'social-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Chadwick-Marketing/social-docs/blob/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        blog: false,
      }),
    ],
  ],

  plugins: [
    async function loadTailwindCSS(context, options) {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require('tailwindcss'));
          postcssOptions.plugins.push(require('autoprefixer'));
          return postcssOptions;
        },
      };
    },
    [
      '@cmfcmf/docusaurus-search-local',
      {
        indexBlog: false,
      },
    ],
    [
      '@docusaurus/plugin-sitemap',
      {
        id: 'docs-socialwp',
        changefreq: 'weekly',
        priority: 0.5,
        ignorePatterns: ['/tags/**'],
        filename: 'sitemap.xml',
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Help Center',
        logo: {
          alt: 'SocialWP logo',
          src: 'img/logo.webp',
        },
        items: [
          {
            type: 'doc',
            docId: '/category/getting-started-with-social',
            activeBaseRegex: '^/$',
            position: 'left',
            label: 'Guides',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Quicklinks',
            items: [
              {
                label: 'Contact',
                to: '/contact',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'WordPress.org',
                href: 'https://wordpress.org/support/plugin/social-lite/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Legal notice',
                href: 'https://socialwp.io/legal',
              },
              {
                label: 'Privacy policy',
                href: 'https://socialwp.io/legal',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Chadwick Marketing.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
