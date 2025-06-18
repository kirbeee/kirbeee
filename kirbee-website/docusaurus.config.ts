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
    projectName: 'kirbeee.github.io', // Usually your repo name.
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
                path: 'zh-TW',
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
                    routeBasePath: '/docs',
                    showLastUpdateAuthor: true,
                    showLastUpdateTime: true,
                    editUrl:
                        'https://github.com/kirbeee/kirbeee',
                },
                blog: {
                    blogSidebarTitle: 'All posts',
                    blogSidebarCount: 'ALL',
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
        headTags: [
            // 預先連線到常用外部資源
            {
                tagName: 'link',
                attributes: {
                    rel: 'preconnect',
                    href: 'https://fonts.gstatic.com',
                    crossorigin: true,
                },
            },

            // 網站 icon
            {
                tagName: 'link',
                attributes: {
                    rel: 'icon',
                    href: '/img/favicon.ico',
                },
            },

            // 網站描述（SEO 用）
            {
                tagName: 'meta',
                attributes: {
                    name: 'description',
                    content: 'Sean網站，分享AWS學習筆記、爬山冒險、日本旅遊經驗與歌曲心得。',
                },
            },

            // Open Graph（Facebook 等社群分享）
            {
                tagName: 'meta',
                attributes: {
                    property: 'og:title',
                    content: 'Sean網站',
                },
            },
            {
                tagName: 'meta',
                attributes: {
                    property: 'og:description',
                    content: 'AWS 學習、爬山分享、日本旅遊與歌曲筆記。',
                },
            },
            {
                tagName: 'meta',
                attributes: {
                    property: 'og:image',
                    content: 'https://yourdomain.com/img/og-image.jpg', // <-- 換成你的封面圖網址
                },
            },
            {
                tagName: 'meta',
                attributes: {
                    property: 'og:url',
                    content: 'https://kirbeee.dpdns.org', // <-- 換成你的網站網址
                },
            },

            // Twitter Card
            {
                tagName: 'meta',
                attributes: {
                    name: 'twitter:card',
                    content: 'summary_large_image',
                },
            },
            {
                tagName: 'meta',
                attributes: {
                    name: 'twitter:title',
                    content: 'Sean網站',
                },
            },
            {
                tagName: 'meta',
                attributes: {
                    name: 'twitter:description',
                    content: 'AWS 學習、爬山分享、日本旅遊與歌曲筆記。',
                },
            },
            {
                tagName: 'meta',
                attributes: {
                    name: 'twitter:image',
                    content: 'https://yourdomain.com/img/og-image.jpg', // <-- 換成你的封面圖網址
                },
            },

            // 結構化資料 JSON-LD（Google 搜尋用）
            {
                tagName: 'script',
                attributes: {
                    type: 'application/ld+json',
                },
                innerHTML: `
      {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Sean",
        "url": "https://kirbeee.dpdns.org",
        "sameAs": [],
        "description": "Sean分享AWS雲端學習筆記、登山心得與日本旅行音樂內容。",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://kirbeee.dpdns.org"
        }
      }
    `,
            },
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

            //... other Algolia params
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
            copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,

};

export default config;
