// @ts-check
import { defineConfig } from 'astro/config';

import playformCompress from '@playform/compress';
import playformInline from "@playform/inline";

// https://astro.build/config
export default defineConfig({
  integrations: [playformCompress(), playformInline({ Critters: { fonts: false } })]
});