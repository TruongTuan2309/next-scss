// @ts-check
import { fileURLToPath } from "node:url";

import withBundleAnalyzer from "@next/bundle-analyzer";
import { createJiti } from "jiti";
import withPlugins from "next-compose-plugins";

const jiti = createJiti(fileURLToPath(import.meta.url));

jiti.import("./src/env");

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: ['./src/styles']
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            namedExport: 'ReactComponent'
          }
        }
      ]
    })
    return config
  }
}

export default withPlugins(
  [withBundleAnalyzer({ enabled: process.env.ANALYZE === "true" })],
  nextConfig
);
