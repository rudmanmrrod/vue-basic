// Config language
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import {translations} from "../locale/translations.js"

Vue.use(VueI18n);

let lang = '';
if(localStorage.getItem("locale") != undefined){
  lang = localStorage.getItem("locale");
}
else{
  lang = navigator.language.split("-")[0];
}
 
export const i18n = new VueI18n({
  locale: lang, // set locale
  messages: translations, // set locale messages
});
