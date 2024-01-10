/**
 * unocss defineConfig
 * @link unocss: https://github.com/unocss/unocss
 * @link unocss-preset-weapp: https://github.com/MellowCo/unocss-preset-weapp
 * */

import { defineConfig, presetIcons } from 'unocss';
import presetWeapp from 'unocss-preset-weapp';
import { transformerAttributify, transformerClass } from 'unocss-preset-weapp/transformer';

const transformRules = {
  '.': '-d111-',
  '/': '-s111-',
  ':': '-c111-',
  '%': '-p111-',
  '!': '-e111-',
  '#': '-w111-',
  '(': '-b111l-',
  ')': '-b111r-',
  '[': '-f111l-',
  ']': '-f111r-',
  $: '-r111-',
  ',': '-r222-',
};

export default defineConfig({
  presets: [
    // https://github.com/MellowCo/unocss-preset-weapp
    presetWeapp({
      nonValuedAttribute: true,
      whRpx: true,
      transform: true,
      platform: 'uniapp',
      transformRules,
    }),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
  ],
  shortcuts: [
    {
      'border-base': 'border border-gray-500_10',
      'z-tar-both': 'z-988',
      'head-fixed': 'fixed top-0 left-0 w-full z-tar-both',
      'f-c-c': 'flex justify-center items-center',
    },
  ],
  theme: {},
  transformers: [
    transformerAttributify({
      transformRules,
      nonValuedAttribute: true,
    }),
    transformerClass({
      transformRules,
    }),
  ],
});
