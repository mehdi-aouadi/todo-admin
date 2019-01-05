import 'moment/locale/fr';
// import _ from 'lodash';
import moment from 'moment';
import Vue from 'vue';
// import cookie from '@/utils/cookie';
import VueI18n from 'vue-i18n';
import locales from './locales';

Vue.use(VueI18n);

/* if (_.isUndefined(cookie.get('lang'))) {
  let lang = navigator.languages
    && (navigator.languages[0].match(/^\w{2}/g)[0] || navigator.language.match(/^\w{2}/g)[0]);

  if (lang !== 'fr' || lang !== 'en' || lang !== 'es') {
    lang = 'en';
  }

  cookie.set('lang', lang);
} */

Vue.config.lang = 'en'; // cookie.get('lang');

moment.locale(Vue.config.lang);

export default new VueI18n({
  locale: Vue.config.lang,
  messages: locales,
});
