// @ts-check
import { defineConfig } from 'astro/config';


import sanity from '@sanity/astro';
import react from '@astrojs/react';


const LIVE_URL = 'https://richiebotteri.github.io'


// https://astro.build/config
export default defineConfig({
  site: LIVE_URL,
  integrations: [sanity({
    projectId: "hauxx0m4",
    dataset: "production",
    useCdn: false, // for static builds
  }), react()]
});