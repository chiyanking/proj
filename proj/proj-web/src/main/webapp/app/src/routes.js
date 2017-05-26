import Header from "./page/Header.vue";
import Footer from "./page/Footer.vue";
import Home from "./page/Home.vue";
import Left from "./page/Left.vue";
import CreateStepFirst from "./page/CreateStepFirst.vue";
const routes = [
  {path: '/', components: {header: Header, footer: Footer, left: Left, default: Home}},
  {path: '/createStepFirst', components: {header: Header, footer: Footer, left: Left, default: CreateStepFirst}}
]
export default routes;
