module.exports = {
  pluginOptions: {
    i18n: {
      locale: "de",
      fallbackLocale: "de",
      enableInSFC: true,
    },
  },
  chainWebpack: (config) => {
    if (process.env.TARGET !== "APP") {
      // Shadow dom style loading
      config.module
        .rule("vue")
        .use("vue-loader")
        .loader("vue-loader")
        .tap((options) => {
          options.shadowMode = true;
          return options;
        });

      config.module
        .rule("css")
        .oneOf("vue")
        .use("vue-style-loader")
        .tap((options) => {
          options.shadowMode = true;
          return options;
        });

      config.module
        .rule("scss")
        .oneOf("vue")
        .use("vue-style-loader")
        .tap((options) => {
          options.shadowMode = true;
          return options;
        });

      if (process.env.TARGET === "WEB_COMPONENT") {
        // generate demo index.html based on the index.html in the public folder
        config.plugin("demo-html").use(require("html-webpack-plugin"), [
          {
            template: "public/index.html",
            inject: false,
            filename: "index.html",
          },
        ]);

        // copy needed assets, everything but html files from the public folder
        config.plugin("copy").use(require("copy-webpack-plugin"), [
          [
            {
              from: "public",
              to: ".",
              ignore: ["*.html"],
            },
          ],
        ]);

        // delete not needed demo.html
        config.plugin("remove").use(require("clean-webpack-plugin"), [
          {
            cleanAfterEveryBuildPatterns: ["demo.html"],
          },
        ]);
      }
    }
  },
  configureWebpack: {
    externals: {
      axios: "axios",
      vue: "Vue",
      "vue-i18n": "VueI18n",
    },
  },
};
