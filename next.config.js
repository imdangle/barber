/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'export',
  //   images: { unoptimized: true },
  // webpack: (config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
  //   // Add image-webpack-loader
  //   config.module.rules.push({
  //       test: /\.(jpe?g|png|gif|svg)$/i,
  //       use: [
  //           {
  //               loader: 'image-webpack-loader',
  //               options: {
  //                   bypassOnDebug: true, // Bypass during development
  //                   disable: true, // Disable during development
  //                   mozjpeg: {
  //                       progressive: true,
  //                       quality: 65
  //                   },
  //                   optipng: {
  //                       enabled: true
  //                   },
  //                   pngquant: {
  //                       quality: [0.65, 0.90],
  //                       speed: 4
  //                   },
  //                   gifsicle: {
  //                       interlaced: false
  //                   },
  //                   webp: {
  //                       quality: 75
  //                   }
  //               }
  //           }
  //       ]
  //   })

  //   // Important: return the modified config
  //   return config
  // }
};

module.exports = nextConfig;
