// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
// 38265B -> is the color of the logo

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Hyperplaza NFT Marketplace SDK',
  tagline: 'Create your NFT Marketplace using HYPR SDK',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://airdropped.tech/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'hyperplaza', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/airdropgames/hyper-sdk-docs/tree/main',
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
      // Replace with your project's social card
      image: 'img/hyper_logo_light.jpg',
      navbar: {
        title: 'Hyperplaza NFT Marketplace SDK',
        logo: {
          alt: 'Hyperplaza logo',
          src: 'img/hyper_logo_light.png',
          srcDark: 'img/hyper_logo_dark.png',
        },
        items: [
          {to: '/docs', label: 'Docs', position: 'left'},
          {
            href: 'https://github.com/airdropgames/nft-marketplace-sdk',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentation',
                to: '/docs/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/hyper',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Docs',
                to: '/docs',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/airdropgames/nft-marketplace-sdk',
              },
            ],
          },
        ],
        copyright: `Copyright © 2023Airdropped, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
