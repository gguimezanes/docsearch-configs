new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://jp.vuejs.org/v2/api/",
    "https://jp.vuejs.org/",
    "https://jp.vuejs.org/v2/guide/",
    "https://v1-jp.vuejs.org/api/",
    "https://v1-jp.vuejs.org/",
    "https://v1-jp.vuejs.org/guide/",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://jp.vuejs.org/**", "https://v1-jp.vuejs.org/**"],
  schedule: "at 05:40 on Saturday",
  actions: [
    {
      indexName: "vuejs_jp",
      pathsToMatch: ["https://jp.vuejs.org/v2/api/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".version-select";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".content h1",
            content: ".content p",
            lvl0: {
              selectors: ".sidebar h2",
            },
            lvl2: ".content h2",
            lvl3: ".content h3",
            lvl4: ".content h4",
            version: {
              defaultValue: ["v2"],
            },
            pageRank: "1",
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "vuejs_jp",
      pathsToMatch: ["https://jp.vuejs.org/v2/guide/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".version-select";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".content h1",
            content: ".content p",
            lvl0: {
              selectors: ".sidebar h2",
            },
            lvl2: ".content h2",
            lvl3: ".content h3",
            lvl4: ".content h4",
            version: {
              defaultValue: ["v2"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "vuejs_jp",
      pathsToMatch: ["https://v1-jp.vuejs.org/api/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".version-select";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".content h1",
            content: ".content p",
            lvl0: {
              selectors: ".sidebar h2",
            },
            lvl2: ".content h2",
            lvl3: ".content h3",
            lvl4: ".content h4",
            version: {
              defaultValue: ["v1"],
            },
            pageRank: "1",
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "vuejs_jp",
      pathsToMatch: ["https://v1-jp.vuejs.org/guide/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".version-select";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".content h1",
            content: ".content p",
            lvl0: {
              selectors: ".sidebar h2",
            },
            lvl2: ".content h2",
            lvl3: ".content h3",
            lvl4: ".content h4",
            version: {
              defaultValue: ["v1"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
  ],
  initialIndexSettings: {
    vuejs_jp: {
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
    },
  },
});