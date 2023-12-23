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
import Buket2 from "./components/Buket2";
import Buket3 from "./components/Buket3";
import ErrorPage from "./components/ErrorPage";

const home = {title: "Главная", desc: "Добро пожаловать в наш магазин цветов! Мы рады представить вам широкий ассортимент прекрасных цветов – от свежих срезанных цветов до красивых цветочных композиций и букетов. В нашем магазине вы найдете все, что нужно, для создания ярких и незабываемых подарков, украшения своего дома или офиса, а также для особых событий в вашей жизни."}
const onas = {title: "О нас", desc: "Добро пожаловать в Букетную Мануфактуру- ваш идеальный партнер по цветам и подаркам! Мы являемся одним из ведущих онлайн-магазинов цветов, предлагающим широкий выбор свежих и красивых цветков для любого случая."}
const dostavka = {title: 'Букетнаямануфактура - способы и условия доставки наших букетов! СПБ', desc: "Ознакомьтесь со всеми способами и условиями доставки наших цветочных композиций в Санкт-Петербурге!"}
const blog = {title: "Букетнаямануфактура - Полезный блог о букетах! СПБ", desc: "В нашем блоге вы узнаете много полезных новостей по выбору или составлению цветочных композиций! Санкт-Петербург"}
const otziv = {title: "Букетнаямануфактура - отзывы наших клиентов! Санкт-Петербург", desc: "Ознакомьтесь с отзывами о качестве наших цветочных композиций! Доставка по Санкт-Петербургу"}
const contact = {title:"Букетнаямануфактура - наша контактная информация для связи с нами! СПБ", desc:"Вы можете связаться с нами и задать свои вопросы! Работаем в Санкт-Петербурге"}

export const routes = [
    { id: 1, path: '/', element: <Layout title={home.title} desc={home.title}><Home /></Layout>, logo:'', kor: '', title: 'Букетная-мануфактура', priority: "1.0" },
    { id: 2, path:'/about-us', element:<Layout title={onas.title} desc={onas.desc}><Onas /></Layout>, logo:'', kor: '', title: 'Онас', priority: "0.8" },
    { id: 3, path:'/delivery', element:<Layout title={dostavka.title} desc={dostavka.desc}><Dostavka /></Layout>, logo:'', kor: '', title: 'Доставка', priority: "0.7" },
    { id: 4, path:'/blog', element: <Layout title={blog.title} desc={blog.desc}><Blog /></Layout>, logo:'', kor: '', title: 'Блог', priority: "0.6" },
    { id: 5, path:'/blog/:id', element: <Layout title={blog.title} desc={blog.desc}><BlogDetail /></Layout>, logo:logo, kor: kor, title:'Букетная-мануфактура', priority: "0.6" },
    { id: 6, path:'/reviews', element: <Layout title={otziv.title} desc={otziv.desc}><Otziv /></Layout>, logo:'', kor: '', title: 'Отзывы', priority: "0.5" },
    { id: 7, path:'/basket', element: <Layout><Korzinka1 /></Layout>, logo:logo, kor: kor, title: 'Корзина', priority: "0.7" },
    { id: 8, path:'/basket/2', element:<Layout><Korzinka2 /></Layout>, logo:logo, kor: kor, title: 'Корзина', priority: "0.7" },
    { id: 9, path:'/basket/3', element: <Layout><Korzinka3 /></Layout>, logo:logo, kor: kor, title: 'Корзина', priority: "0.7" },
    // { id:10, path:'/bouquets', element: <Buket />, logo:'', kor: '', title: 'Букеты', priority: "0.5" },
    { id:10, path:'/bouquets/categories/:id', element: <Buket2 />, logo:'', kor: '', title: 'Букеты', priority: "0.6" },
    { id:11, path:'/bouquets/category/:id', element: <Buket3 />, logo:'', kor: '', title: 'Букеты', priority: "0.6" },
    { id:12, path:'/bouquets/:id', element:<Layout><BuketDetail /></Layout>, logo:logo, kor: kor, title: 'Букетная-мануфактура', priority: "0.6" },
    { id:13, path:'/basket/4', element: <Layout><Korzinka4 /></Layout>, logo:logo, kor: kor, title: 'Корзина', priority: "0.7" },
    { id:14, path:'/basket/5', element: <Layout><Korzinka5 /></Layout>, logo:logo, kor: kor, title: 'Корзина', priority: "0.7" },
    { id:15, path:'/contact', element: <Layout title={contact.title} desc={contact.desc}><Contact /></Layout>, logo:logo, kor: kor, title: 'Корзина', priority: "0.7" },
    { id:16, path:'/pay', element: <Layout><Payment /></Layout>, logo:logo, kor: kor, title: 'Оплата', priority: "0.7" },
    { id: 17, path: "*", element: <ErrorPage />, priority: "0.5" }
  ]
  

