// @ts-check
import { defineConfig } from 'astro/config';

import playformCompress from '@playform/compress';

// https://astro.build/config
export default defineConfig({
  // @ts-ignore
  integrations: [playformCompress()]
});