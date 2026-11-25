<<<<<<< HEAD
=======
import { waitUntil } from 'async-wait-until';
>>>>>>> c264c1a620cdf0169281cbcc1ead53e3dcc7f4dc
import App from './App.vue';
import './global.css';

$(async () => {
  await waitGlobalInitialized('Mvu');
<<<<<<< HEAD
=======
  await waitUntil(() => _.has(getVariables({ type: 'message' }), 'stat_data'));
>>>>>>> c264c1a620cdf0169281cbcc1ead53e3dcc7f4dc
  createApp(App).use(createPinia()).mount('#app');
});
