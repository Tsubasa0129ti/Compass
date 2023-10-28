import { createApp } from 'vue';
// import { ref } from 'vue';
import '../../scss/index.scss'

import App from '../components/app.vue';

/* const header = createApp({
    setup() {
        const header = ref("Hello");
        return {
            header
        }
    }
});

header.mount('#header'); */

createApp(App).mount('#app');