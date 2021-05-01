import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faUserSecret,
  faSearch,
  faGripVertical,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faUserSecret, faSearch, faGripVertical);

Vue.component('FontAwesomeIcon', FontAwesomeIcon);
