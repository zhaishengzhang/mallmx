
import HomePage from '../pages/home/index.jsx';
import AboutPage from "../pages/about.jsx";
import SearchPage from "../pages/search/index";

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path:'/about',
    component: AboutPage
  },
  {
    path:'/search',
    component: SearchPage
  }
];

export default routes;
