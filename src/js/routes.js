
import HomePage from '../pages/mall/home/index.jsx';
import AboutPage from "../pages/about.jsx";
import SearchPage from "../pages/mall/search/index";
import Deatil from "../pages/mall/detail/index";

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/index.html',
    component: HomePage,
  },
  {
    path:'/about',
    component: AboutPage
  },
  {
    path:'/search',
    component: SearchPage
  },
  {
    path:'/detail',
    component: Deatil
  }
];

export default routes;
