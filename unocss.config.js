/**
 * unocss defineConfig
 * @link unocss: https://github.com/unocss/unocss
 * @link unocss-preset-weapp: https://github.com/MellowCo/unocss-preset-weapp
 * */

import { defineConfig, presetIcons, presetAttributify, transformerVariantGroup } from 'unocss';
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
    // 支持css class属性化，eg: `<button bg="blue-400 hover:blue-500 dark:blue-500 dark:hover:blue-600" text="sm white">attributify Button</button>`
    presetAttributify(),
    // 支持图标，需要搭配图标库，eg: @iconify/json, 使用 `<button class="i-carbon-sun dark:i-carbon-moon" />`
    presetIcons({
      scale: 1.2,
      warn: true,
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
      },
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
    // 支持css class组合，eg: `<div class="hover:(bg-gray-400 font-medium) font-(light mono)">测试 unocss</div>`
    transformerVariantGroup(),
    transformerClass({
      transformRules,
    }),
  ],
});
