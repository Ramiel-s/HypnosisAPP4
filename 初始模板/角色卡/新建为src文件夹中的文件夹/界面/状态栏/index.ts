<<<<<<< HEAD
=======
import { waitUntil } from 'async-wait-until';
>>>>>>> 884ced41021768bed2bf7e03c14e0da9ce08e010
import App from './App.vue';
import './global.css';

$(async () => {
  await waitGlobalInitialized('Mvu');
<<<<<<< HEAD
=======
  await waitUntil(() => _.has(getVariables({ type: 'message' }), 'stat_data'));
>>>>>>> 884ced41021768bed2bf7e03c14e0da9ce08e010
  createApp(App).use(createPinia()).mount('#app');
});
