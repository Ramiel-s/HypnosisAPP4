<<<<<<< HEAD
=======
import { waitUntil } from 'async-wait-until';
>>>>>>> cf09cb02c590de46d565966e950150bafcf24c54
import App from './App.vue';
import './global.css';

$(async () => {
  await waitGlobalInitialized('Mvu');
<<<<<<< HEAD
=======
  await waitUntil(() => _.has(getVariables({ type: 'message' }), 'stat_data'));
>>>>>>> cf09cb02c590de46d565966e950150bafcf24c54
  createApp(App).use(createPinia()).mount('#app');
});
