import Vue from 'vue';
import ElementUI from 'element-ui';
import i18n from '@/i18n';

// Normalize
import 'normalize.css';
// FontAwesome
import 'font-awesome/scss/font-awesome.scss';
// Progress
import '@/sass/styles.scss';

Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value),
});
