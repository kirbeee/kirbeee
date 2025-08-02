import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import tailwindPlugin from "./plugins/tailwind-config.cjs";
import 'dotenv/config'
// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
    title: 'Sean website',
    tagline: 'Computer Science student at the University, sharing my thoughts and projects',
    favicon: 'img/favicon.ico',

    // GitHub pages deployment config.
    url: 'https://kirbeee.dpdns.org',
    baseUrl: '/',
    organizationName: 'kirbeee', // Usually your GitHub org/user name.
    projectName: 'kirbeee', // Usually your repo name.
    trailingSlash: false,
    deploymentBranch: "gh-pages",

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-TW-Hans".

    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'zh-TW', 'ja-JP'],
        localeConfigs: {
            en: {
                label: 'English',
            },
            'zh-TW': {
                label: '繁體中文',
            },
            'ja-JP': {
                label: '日本語',
            }
        }
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                    showLastUpdateAuthor: true,
                    showLastUpdateTime: true,
                },
                blog: {
                    blogSidebarCount: 'ALL',
                    blogSidebarTitle: 'All posts',
                    showReadingTime: true,
                    feedOptions: {
                        type: ['rss', 'atom'],
                        xslt: true,
                    },
                    onInlineTags: 'warn',
                    onInlineAuthors: 'warn',
                    onUntruncatedBlogPosts: 'warn',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
                gtag: {
                    trackingID: 'G-QYDJFN4WVD',
                    anonymizeIP: true,
                },
                sitemap: {
                    lastmod: 'date',
                    changefreq: 'weekly',
                    priority: 0.5,
                    ignorePatterns: ['/tags/**'],
                    filename: 'sitemap.xml',
                    createSitemapItems: async (params) => {
                        const {defaultCreateSitemapItems, ...rest} = params;
                        const items = await defaultCreateSitemapItems(rest);
                        return items.filter((item) => !item.url.includes('/page/'));
                    },
                },
            } satisfies Preset.Options,
        ],
    ],

    plugins: [
        tailwindPlugin,
        [
            '@docusaurus/plugin-ideal-image',
            {
                quality: 70,
                max: 1030, // max resized image's size.
                min: 640, // min resized image's size. if original is lower, use that size.
                steps: 2, // the max number of images generated between min and max (inclusive)
                disableInDev: false,
            },
        ]
    ],

    themeConfig: {
        // TODO: Add my own logo
        image: 'img/docusaurus-social-card.jpg',
        metadata: [
            {name: 'keywords', content: 'computer science, blog'},
        ],
        algolia: {
            appId: process.env.REACT_APP_ALGOLIA_APP_ID,
            apiKey: process.env.REACT_APP_ALGOLIA_SEARCH_API_KEY,
            indexName: process.env.REACT_APP_ALGOLIA_INDEX_NAME,

            // Optional: see doc section below
            contextualSearch: true,

            // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
            // externalUrlRegex: 'external\\.com|domain\\.com',

            // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
            // Optional: Algolia search parameters
            searchParameters: {},

            // Optional: path for search page that enabled by default (`false` to disable it)
            searchPagePath: 'search',

            // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
            insights: false,
        },
        navbar: {
            title: 'Sean\'s website',
            logo: {
                alt: 'My Site Logo',
                src: 'img/logo.svg',
            },
            items: [
                {to: '/docs', label: 'Docs', position: 'left'},
                {to: '/blog', label: 'Blog', position: 'left'},
                {
                    href: 'https://github.com/kirbeee',
                    label: 'GitHub',
                    position: 'right',
                },
                {
                    type: 'localeDropdown',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [],
            copyright: `Copyright © ${new Date().getFullYear()}`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
