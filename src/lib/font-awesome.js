import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faUserSecret,
  faSearch,
  faGripVertical,
  faEnvelope,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(
  faUserSecret,
  faSearch,
  faGripVertical,
  faPhone,
  faWhatsapp,
  faEnvelope
);

Vue.component('FontAwesomeIcon', FontAwesomeIcon);
