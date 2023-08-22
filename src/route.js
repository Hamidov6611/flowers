import Layout from "./layout/Layout";
import Home from "./page/Home";
import logo from './images/logo.svg'
import kor from "./images/korzinka.svg"
import Onas from "./page/Onas";
import Dostavka from "./page/Dostavka";
import Blog from "./page/Blog";
import BlogDetail from "./components/BlogDetail";
import Otziv from "./page/otziv";
import Korzinka1 from "./page/korzinka/Korzinka1";
import Korzinka2 from "./page/korzinka/Korzinka2";
import Korzinka3 from "./page/korzinka/Korzinka3";
import Buket from "./components/Buket";
import BuketDetail from "./components/BuketDetail";
import Korzinka4 from "./page/korzinka/Korzinka4";
import Korzinka5 from "./page/korzinka/Korzinka5";
import Contact from "./page/Contact";
import Payment from "./components/payment";


export const routes = [
    {id:1, path:'/', element: <Layout><Home /></Layout>, logo:'', kor: '', title: 'Букетная-мануфактура', },
    {id:2, path:'/oнас', element:<Layout><Onas /></Layout>, logo:'', kor: '', title: 'Онас',},
    {id:3, path:'/доставка', element:<Layout><Dostavka /></Layout>, logo:'', kor: '', title: 'Доставка',},
    {id:4, path:'/блог', element: <Layout><Blog /></Layout>, logo:'', kor: '', title: 'Блог',},
    {id:5, path:'/блог/:id', element: <Layout><BlogDetail /></Layout>, logo:logo, kor: kor, title:'Букетная-мануфактура' },
    {id:6, path:'/oтзывы', element: <Layout><Otziv /></Layout>, logo:'', kor: '', title: 'Отзывы',},
    {id:7, path:'/корзина', element: <Layout><Korzinka1 /></Layout>, logo:logo, kor: kor, title: 'Корзина',},
    {id:8, path:'/корзина/2', element:<Layout><Korzinka2 /></Layout>, logo:logo, kor: kor, title: 'Корзина',},
    {id:9, path:'/корзина/3', element: <Layout><Korzinka3 /></Layout>, logo:logo, kor: kor, title: 'Корзина',},
    {id:10, path:'/букеты', element: <Layout><Buket /></Layout>, logo:'', kor: '', title: 'Букеты',},
    {id:10, path:'/букеты/категория/:id', element: <Layout><Buket /></Layout>, logo:'', kor: '', title: 'Букеты',},
    {id:11, path:'/букеты/:id', element:<Layout><BuketDetail /></Layout>, logo:logo, kor: kor, title: 'Букетная-мануфактура' },
    {id:12, path:'/корзина/4', element: <Layout><Korzinka4 /></Layout>, logo:logo, kor: kor, title: 'Корзина',},
    {id:13, path:'/корзина/5', element: <Layout><Korzinka5 /></Layout>, logo:logo, kor: kor, title: 'Корзина',},
	{id:14, path:'/контакт', element: <Layout><Contact /></Layout>, logo:logo, kor: kor, title: 'Корзина',},
	{id:15, path:'/оплата', element: <Layout><Payment /></Layout>, logo:logo, kor: kor, title: 'Оплата',},
]

