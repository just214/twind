const isProd = process.env.NODE_ENV === "production";

const title = "Twind";
const description =
  "The smallest, fastest, most feature complete tailwind-in-js solution in existence";

const site = isProd ? "https://www.twind.dev" : "http://localhost:3000";
const image = `${site}/assets/logo.png`;

const head = [
  ["meta", { name: "author", content: "Twind Team" }],
  [
    "meta",
    {
      name: "keywords",
      content: "twind, tailwind, tailwindcss, css-in-js",
    },
  ],

  ["link", { rel: "icon", type: "image/svg+xml", href: image }],

  ["meta", { name: "HandheldFriendly", content: "True" }],
  ["meta", { name: "MobileOptimized", content: "320" }],
  ["meta", { name: "theme-color", content: "#3b9188" }],

  ["meta", { name: "twitter:card", content: "summary" }],
  ["meta", { name: "twitter:site", content: site }],
  ["meta", { name: "twitter:title", value: title }],
  ["meta", { name: "twitter:description", value: description }],
  ["meta", { name: "twitter:image", content: image }],

  ["meta", { property: "og:type", content: "website" }],
  ["meta", { property: "og:locale", content: "en_US" }],
  ["meta", { property: "og:site", content: site }],
  ["meta", { property: "og:site_name", content: title }],
  ["meta", { property: "og:title", content: title }],
  ["meta", { property: "og:image", content: image }],
  ["meta", { property: "og:description", content: description }],
];

const guideSidebar = [
  {
    text: "Handbook",
    children: [
      { text: "Introduction", link: "/handbook/" },
      { text: "Installation", link: "/handbook/installation" },

      { text: "Styling with Twind", link: "/handbook/styling-with-tw" },
      { text: "Configuration and Theming", link: "/handbook/configuration" },
      { text: "Grouping Syntax", link: "/handbook/grouping-syntax" },
      { text: "CSS in Twind", link: "/handbook/css-in-twind" },
      { text: "Global Styles", link: "/handbook/global-styles" },
      { text: "Overwriting Styles", link: "/handbook/overwriting-styles" },
      { text: "The Shim", link: "/handbook/the-shim" },
      {
        text: "Improving Performance",
        link: "/handbook/improving-performance",
      },
      {
        text: "Extended Variants and Directives",
        link: "/handbook/extended-variants-directives",
      },
      { text: "Plugins", link: "/handbook/plugins" },
      { text: "Authoring Components", link: "/handbook/authoring-components" },
      {
        text: "Beyond Tailwind",
        link: "/handbook/beyond-tailwind",
      },
      {
        text: "Frequently Asked Questions",
        link: "/handbook/frequently-asked-questions",
      },
      { text: "Quick Reference", link: "/handbook/quick-reference" },
      { text: "Browser Support", link: "/handbook/browser-support" },
      { text: "Release Notes", link: "/handbook/release-notes" },
      { text: "Contributing", link: "/handbook/contributing" },
    ],
  },
  {
    text: "Migration Guides",
    children: [
      {
        text: "Migrate from Tailwind",
        link: "/migration-guides/migrate-from-tailwind",
      },
      {
        text: "Migrate from twin.macro",
        link: "/migration-guides/migrate-from-twinmacro",
      },
    ],
  },
  {
    text: "Usage Guides",
    children: [
      { text: "Use with Gatsby", link: "/usage-guides/use-with-gatsby" },
      {
        text: "Use with Lit Element",
        link: "/usage-guides/use-with-lit-element",
      },
      { text: "Use with NextJS", link: "/usage-guides/use-with-nextjs" },
      { text: "Use with Preact", link: "/usage-guides/use-with-preact" },
      { text: "Use with React", link: "/usage-guides/use-with-react" },
      { text: "Use with SSR", link: "/usage-guides/use-with-ssr" },
      { text: "Use with Svelte", link: "/usage-guides/use-with-svelte" },
      {
        text: "Use with Typescript",
        link: "/usage-guides/use-with-typescript",
      },
      { text: "Use with Vue", link: "/usage-guides/use-with-vue" },
      {
        text: "Use with Web Components",
        link: "/handbook/use-with-web-components",
      },
      { text: "Use with WMR", link: "/handbook/use-with-wmr" },
    ],
  },
];

const apiSidebar = [
  {
    text: "API",
    children: [
      // { text: "Modules Overview", link: "/api/m" },
      { text: "twind", link: "/api/twind.html" },
      { text: "twind/colors", link: "/api/twind-colors" },
      { text: "twind/css", link: "/api/twind-css" },
      { text: "twind/observe", link: "/api/twind-observe" },
      { text: "twind/server", link: "/api/twind-server" },
      { text: "twind/sheets", link: "/api/twind-sheets" },
      { text: "twind/shim", link: "/api/twind-shim" },
      { text: "twind/shim/server", link: "/api/twind-shim-server" },
    ],
  },
];

module.exports = {
  title,
  description,
  head,
  docsDir: ".",
  lang: "en-US",
  themeConfig: {
    algolia: {
      apiKey: "your_api_key",
      indexName: "index_name",
    },
    nav: [
      { text: "Handbook", link: "/handbook/" },
      { text: "API", link: "/api/" },
      { text: "GitHub", link: "https://github.com/tw-in-js/twind" },
      { text: "Discord", link: "https://discord.com/invite/2aP5NkszvD" },
    ],
    sidebar: {
      "/handbook/": guideSidebar,
      "/usage-guides/": guideSidebar,
      "/migration-guides/": guideSidebar,
      "/api/": apiSidebar,
    },
  },
};