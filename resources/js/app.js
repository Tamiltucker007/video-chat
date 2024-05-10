import Vue from 'vue'; // Import Vue
import ExampleComponent from './components/ExampleComponent.vue'; // Import your Vue components
import VideoChat from './components/VideoChat.vue';
import AgoraChat from './components/AgoraChat.vue';
import Broadcaster from './components/Broadcaster.vue';
import Viewer from './components/Viewer.vue';

Vue.component('example-component', ExampleComponent); // Register the components globally
Vue.component('video-chat', VideoChat);
Vue.component('agora-chat', AgoraChat);
Vue.component('broadcaster', Broadcaster);
Vue.component('viewer', Viewer);

// Create a new Vue instance
new Vue({
    el: '#app', // Element to mount Vue instance
    // Any additional configuration
});
