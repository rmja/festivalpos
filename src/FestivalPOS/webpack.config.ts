import * as MiniCssExtractPlugin from "mini-css-extract-plugin";
import * as autoprefixer from "autoprefixer";

import {
  Configuration,
  DefinePlugin,
  ProvidePlugin,
  RuleSetUseItem,
} from "webpack";

import { AureliaPlugin } from "aurelia-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import { DateTime } from "luxon";
import { InjectManifest } from "workbox-webpack-plugin";
import { addTemplatedURLs } from "ur-workbox-utils";
import { resolve } from "path";

const config = (
  _env: any,
  argv?: { mode?: "production" | "development" }
): Configuration => {
  const mode = (argv || {}).mode || "development";
  const isRelease = mode === "production";
  const cssLoader: RuleSetUseItem[] = [
    { loader: "css-loader" },
    {
      loader: "postcss-loader",
      options: { postcssOptions: { plugins: [() => autoprefixer()] } },
    },
  ];

  return {
    mode: mode,
    ...(!isRelease && { devtool: "inline-source-map" }),
    entry: {
      app: ["aurelia-bootstrapper"],
    },
    output: {
      path: resolve("./wwwroot/dist"),
      publicPath: "dist/",
      filename: "[name].js",
      chunkFilename: "[name].[chunkhash].js",
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          include: /src/,
          use: {
            loader: "ts-loader",
            options: {
              silent: true,
            },
          },
        },
        {
          test: /\.html$/,
          use: [
            "html-loader",
            "aurelia-webpack-plugin/html-requires-loader",
            "aurelia-fontawesome-loader/loader",
          ],
        },
        {
          // CSS required in templates cannot be extracted safely
          // https://github.com/aurelia/webpack-plugin/wiki/CSS-doesn't-load
          test: /\.css$/,
          issuer: /\.html$/,
          use: cssLoader,
        },
        {
          test: /\.css$/,
          issuer: (path) => !/\.html$/.test(path),
          use: [MiniCssExtractPlugin.loader, ...cssLoader],
        },
        // {
        //     test: /\.(sass|scss)$/,
        //     use: [{ loader: MiniCssExtractPlugin.loader, options: { publicPath: './' } }, ...cssLoader, 'sass-loader']
        // },
        // {
        //     test: /\.(jpg|png)(\?|$)/,
        //     use: { loader: "url-loader", options: { limit: 8192 } }
        // },
        // {
        //     test: /\.woff(\?|$)/,
        //     use: { loader: "url-loader", options: { limit: 8192, mimetype: "application/font-woff" } }
        // },
        // {
        //     test: /\.woff2(\?|$)/,
        //     use: { loader: "url-loader", options: { limit: 8192, mimetype: "application/font-woff2" } }
        // },
        // {
        //     test: /\.(eot|svg|ttf)(\?|$)/,
        //     use: "file-loader"
        // }
      ],
    },
    resolve: {
      extensions: [".ts", ".js"],
      modules: ["src", resolve(__dirname, "node_modules")],
      alias: {
        locales: resolve("./locales"),
      },
      symlinks: false,
    },
    plugins: [
      new AureliaPlugin({
        noHtmlLoader: true,
        features: {
          ie: false,
          svg: false,
          polyfills: "esnext",
        },
      }),
      new BundleAnalyzerPlugin({
        analyzerMode: "static",
        reportFilename: "report.html",
        openAnalyzer: false,
      }),
      new MiniCssExtractPlugin(),
      new DefinePlugin({
        __DEBUG__: JSON.stringify(!isRelease),
        __VERSION__: JSON.stringify(DateTime.local().toJSON()),
      }),
      new ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
      }),

      new InjectManifest({
        swSrc: "./src/workbox/service-worker.ts",
        swDest: resolve("./wwwroot/service-worker.js"),
        maximumFileSizeToCacheInBytes: (isRelease ? 4 : 64) * 1024 * 1024,
        manifestTransforms: [
          addTemplatedURLs({
            Index: ["Pages/Index.cshtml*"],
          }),
        ],
      }),
    ],
  };
};
export default config;
