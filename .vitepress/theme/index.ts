// https://vitepress.dev/guide/custom-theme
import DefaultTheme from 'vitepress/theme'

// the zoom crap
import 'viewerjs/dist/viewer.min.css';
import imageViewer from 'vitepress-plugin-image-viewer';
import vImageViewer from 'vitepress-plugin-image-viewer/lib/vImageViewer.vue';
import { useRoute } from 'vitepress';

import './style.css'
import './font.css'
import './custom.css'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
      DefaultTheme.enhanceApp(ctx);
      ctx.app.component('vImageViewer', vImageViewer);
  },
  setup() {
      const route = useRoute();
      imageViewer(route);
  }
}