import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faUser,
  faSearch,
  faGripVertical,
  faLink,
  faEnvelope,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(
  faUser,
  faLink,
  faSearch,
  faGripVertical,
  faPhone,
  faWhatsapp,
  faEnvelope
);

Vue.component('FontAwesomeIcon', FontAwesomeIcon);
