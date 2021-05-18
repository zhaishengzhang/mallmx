
import HomePage from '../pages/mall/home/index.jsx';
// import AboutPage from "../pages/about.jsx";
import SearchPage from "../pages/mall/search/index";
import Deatil from "../pages/mall/detail/index";
import MallCate from "../pages/mall/category/index";
import Comments from "../pages/mall/comments/index";
//选菜
import VegeHomePage from '../pages/vegetable/home/index.jsx';
import VegeSearchPage from "../pages/vegetable/search/index";
import VegeDeatil from "../pages/vegetable/detail/index";
import VegeMallCate from "../pages/vegetable/category/index";



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
    summary:"mall搜索",
    name:"mallSearch",
    path:'/search',
    component: SearchPage
  },
  {
    summary:"商城详情",
    name:"mallDetail",
    path:'/detail',
    component: Deatil
  },
  {
    summary:"mall分类页面",
    name:"mallcate",
    path:'/mallcate',
    component: MallCate
  },
  {
    summary:"mall评论页面",
    name:"mallComment",
    path:'/comment',
    component: Comments
  },
  {
    summary:"vege搜索",
    name:"vegeSearch",
    path: '/vegeindex',
    component: VegeHomePage,
  },
  {
    summary:"vege搜索",
    name:"vegeSearch",
    path:'/vegesearch',
    component: VegeSearchPage
  },
  {
    summary:"选菜详情",
    name:"vegeDetail",
    path:'/vegedetail',
    component: VegeDeatil
  },
  {
    summary:"选菜分类页面",
    name:"vegeCate",
    path:'/vegecate',
    component: VegeMallCate
  },
];

export default routes;
