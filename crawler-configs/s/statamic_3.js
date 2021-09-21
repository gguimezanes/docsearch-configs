new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://statamic.dev/modifiers/",
    "https://statamic.dev/",
    "https://statamic.dev/variables/",
    "https://statamic.dev/quick-start",
  ],
  renderJavaScript: false,
  sitemaps: ["https://statamic.dev/sitemap.xml"],
  exclusionPatterns: [
    "https://statamic.dev/fieldtypes",
    "https://statamic.dev/knowledge-base",
    "https://statamic.dev/tags",
    "https://statamic.dev/modifiers",
  ],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://statamic.dev/**"],
  schedule: "at 15:40 on Friday",
  actions: [
    {
      indexName: "statamic_3",
      pathsToMatch: ["https://statamic.dev/modifiers/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".ignored, .deprecated";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#content h2",
            content:
              "#content article p,#content article li,#content article blockquote",
            lvl0: {
              selectors: "#content h1",
            },
          },
          indexHeadings: false,
        });
      },
    },
    {
      indexName: "statamic_3",
      pathsToMatch: ["https://statamic.dev/variables/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".ignored, .deprecated";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#content h2",
            content:
              "#content article p,#content article li,#content article blockquote",
            lvl0: {
              selectors: "#content h1",
            },
          },
          indexHeadings: false,
        });
      },
    },
    {
      indexName: "statamic_3",
      pathsToMatch: ["https://statamic.dev/quick-start**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".ignored, .deprecated";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#content h2",
            content:
              "#content header p,#content article p,#content article li,#content article blockquote",
            lvl0: {
              selectors: "#content h1",
            },
            lvl2: "#content h3",
            lvl3: "#content h4",
            lvl4: "#content h5",
            lvl5: "#content h6",
            pageRank: "5",
          },
          indexHeadings: false,
        });
      },
    },
    {
      indexName: "statamic_3",
      pathsToMatch: [
        "https://statamic.dev**/**",
        "!https://statamic.dev/modifiers/**",
        "!https://statamic.dev/variables/**",
        "!https://statamic.dev/quick-start**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".ignored, .deprecated";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#content h2",
            content:
              "#content header p,#content article p,#content article li,#content article blockquote",
            lvl0: {
              selectors: "#content h1",
            },
            lvl2: "#content h3",
            lvl3: "#content h4",
            lvl4: "#content h5",
            lvl5: "#content h6",
          },
          indexHeadings: false,
        });
      },
    },
  ],
  initialIndexSettings: {
    statamic_3: {
      attributesForFaceting: ["type", "lang"],
      attributesToRetrieve: ["hierarchy", "content", "anchor", "url"],
      attributesToHighlight: ["hierarchy", "hierarchy_camel", "content"],
      attributesToSnippet: ["content:10"],
      camelCaseAttributes: ["hierarchy", "hierarchy_radio", "content"],
      searchableAttributes: [
        "unordered(hierarchy_radio_camel.lvl0)",
        "unordered(hierarchy_radio.lvl0)",
        "unordered(hierarchy_radio_camel.lvl1)",
        "unordered(hierarchy_radio.lvl1)",
        "unordered(hierarchy_radio_camel.lvl2)",
        "unordered(hierarchy_radio.lvl2)",
        "unordered(hierarchy_radio_camel.lvl3)",
        "unordered(hierarchy_radio.lvl3)",
        "unordered(hierarchy_radio_camel.lvl4)",
        "unordered(hierarchy_radio.lvl4)",
        "unordered(hierarchy_radio_camel.lvl5)",
        "unordered(hierarchy_radio.lvl5)",
        "unordered(hierarchy_radio_camel.lvl6)",
        "unordered(hierarchy_radio.lvl6)",
        "unordered(hierarchy_camel.lvl0)",
        "unordered(hierarchy.lvl0)",
        "unordered(hierarchy_camel.lvl1)",
        "unordered(hierarchy.lvl1)",
        "unordered(hierarchy_camel.lvl2)",
        "unordered(hierarchy.lvl2)",
        "unordered(hierarchy_camel.lvl3)",
        "unordered(hierarchy.lvl3)",
        "unordered(hierarchy_camel.lvl4)",
        "unordered(hierarchy.lvl4)",
        "unordered(hierarchy_camel.lvl5)",
        "unordered(hierarchy.lvl5)",
        "unordered(hierarchy_camel.lvl6)",
        "unordered(hierarchy.lvl6)",
        "content",
      ],
      distinct: true,
      attributeForDistinct: "url",
      customRanking: [
        "desc(weight.page_rank)",
        "desc(weight.level)",
        "asc(weight.position)",
      ],
      ranking: [
        "words",
        "filters",
        "typo",
        "attribute",
        "proximity",
        "exact",
        "custom",
      ],
      highlightPreTag: '<span class="algolia-docsearch-suggestion--highlight">',
      highlightPostTag: "</span>",
      minWordSizefor1Typo: 3,
      minWordSizefor2Typos: 7,
      allowTyposOnNumericTokens: false,
      minProximity: 1,
      ignorePlurals: true,
      advancedSyntax: true,
      attributeCriteriaComputedByMinProximity: true,
      removeWordsIfNoResults: "allOptional",
      synonyms: [
        ["js", "javascript"],
        ["views", "templates"],
      ],
    },
  },
});