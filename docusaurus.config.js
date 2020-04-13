/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

module.exports = {
  title: 'Tigerspack',
  tagline: 'The fastest UI framework for React',
  url: 'https://tigerspack.awb.pw/',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'tigerspack', // Usually your GitHub org/user name.
  projectName: 'tigerspack-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Tigerspack',
      logo: {
        alt: 'Tigerspack Logo',
        src: 'img/logo.png',
      },
      links: [
        {
          to: 'docs/getting-started',
          activeBasePath: 'docs/getting-started',
          label: 'Getting Started',
          position: 'left',
        },
        {
          to: 'docs/components/button',
          activeBasePath: 'docs/components',
          label: 'Components',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'right'},
        // Please keep GitHub link to the right for consistency.
        {
          href: 'https://github.com/tigerspack/tigerspack',
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
              label: 'Style Guide',
              to: 'docs/doc1',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/tigerspack/tigerspack',
            },
          ],
        },
      ],
      logo: {
        alt: 'Facebook Open Source Logo',
        src: 'img/oss_logo.png',
        href: 'https://opensource.facebook.com/',
      },
      // Please do not remove the credits, help to publicize Docusaurus :)
      copyright: `Copyright © ${new Date().getFullYear()} Tigerspack. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/tigerspack/tigerspack-docs/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
