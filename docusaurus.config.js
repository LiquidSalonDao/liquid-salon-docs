/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'LiquidSalonDAO',
  tagline: 'LiquidSalonDAO are cool',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'LiquidSalonDAO-docs', // Usually your repo name.
  scripts: [
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=G-70RD8PHWZ8',
      async: true,
    },
    '/scripts/gtag.js'
  ],
  themeConfig: {
    navbar: {
      title: 'LiquidSalonDAO',
      logo: {
        alt: 'My Site Logo',
        src: 'img/index-logo.png',
      },
      items: [
        {
          href: 'https://liquid.salon',
          label: 'Home',
          position: 'left',
          target: '_self',
          className: 'nav-link-btn'
        },
        {
          type: 'doc',
          docId: 'Introduction',
          position: 'left',
          label: 'docs',
          className: 'nav-link-btn'
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/LiquidSalonDao',
          label: ' ', //GitHub
          position: 'right',
          className: 'nav-link-btn nav-github'
        }
      ],
    },
    xfooter: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: '/docs/Introduction',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Telegram',
              href: 'https://t.me/liquidsalondao',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/JEJgXNXBDw',
            },
            {
              label: 'Medium',
              href: 'https://medium.com/@LiquidSalonDAO',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/LiquidSalonDAO',
            },
          ],
        },
        {
          title: 'More',
          items: [
            // {
            //   label: 'Blog',
            //   to: '/blog',
            // },
            {
              label: 'GitHub',
              href: 'https://github.com/LiquidSalonDao',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} zkLink, Inc. Built with Docusaurus.`,
    },
    algolia: {
      apiKey: 'YOUR_API_KEY',
      indexName: 'YOUR_INDEX_NAME',
      // Optional: see doc section below
      contextualSearch: true,
      // Optional: see doc section below
      appId: 'YOUR_APP_ID',
      // Optional: Algolia search parameters
      searchParameters: {},
      //... other Algolia params
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: "/welcome/",
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
