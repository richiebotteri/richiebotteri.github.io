// @ts-check
import { defineConfig } from 'astro/config';

const LOCALHOST_URL = 'http://localhost:3000'
const LIVE_URL = 'https://richiebotteri.github.io'


// https://astro.build/config
export default defineConfig({
    site: LIVE_URL
});
