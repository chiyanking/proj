import Header from "./page/Header.vue";
import Footer from "./page/Footer.vue";
import Home from "./page/Home.vue";
import CreateStepFirst from "./page/CreateStepFirst.vue";
const routes = [
  {path: '/',components: {header: Header,footer: Footer,default: Home}},
  {path: '/createStepFirst',components: {footer: Footer,default: CreateStepFirst}}
]
export default routes;
