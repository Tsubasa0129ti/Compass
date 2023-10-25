import { createApp } from 'vue';
import '../../scss/index.scss'

// import App from '../components/app.vue';

// createApp(App).mount('#app');

const elem: HTMLElement = document.getElementById("btn")!;

elem.addEventListener("click", () => {
    const str: string = "message";
    console.log(str);
});