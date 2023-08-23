import React from "react";
import { styled } from "styled-components";
import MyCarousel from "./MyCarousel";

function OnasSection() {
  return (
    <Wrapper>
      <div className="w-[98%] mx-auto">
        <p>О нас</p>
        <p className="pre">
          Мы- команда профессиональных флористов, работающая на цветочном рынке
          уже несколько лет. За это время у нас сформировалась база клиентов,
          которые доверяют нам воплощение любых флористических идей, передачу
          своих чувств к любимым получателям на языке цветов. Наша миссия-
          вызывать положительные эмоции!
        </p>
        <p className="pre">
          Чтобы букеты вызывали восторженные эмоции, наши флористы регулярно
          проходят курсы по повышению квалификации и флористического мастерства.
        </p>
        <p className="pre">
          Мы работаем с лучшими поставщиками, тщательно отбираем цветы и всегда
          стараемся держать в своем холодильнике самые необычные сорта.
        </p>
        <div className=" w-[100%] flex items-center justify-center mb-3 md:mb-6">
                    <img src="./images/onas1.svg" alt="" className='h-full w-full'/>
                    {/* <img className="card" src="./images/dostavka2.svg" alt="" /> */}
                </div>
        {/* <div className="w-[100%] flex items-center justify-center relative">
          <img className="hero-img w-full h-full" src="./images/onas1.svg" alt="" />
        </div> */}
        <h3>Наша миссия</h3>
        <p className="nash-p">
          Миссия нашего цветочного магазина в Санкт-Петербурге - создавать
          красоту и радость в жизни людей, предоставляя качественные цветы и
          букеты для всех случаев, от повседневных до торжественных. Мы
          становимся надежным партнером для наших клиентов, предоставляя
          индивидуальный подход к каждому заказу и обеспечивая быстрое и
          качественное обслуживание. Мы стремимся к тому, чтобы наш цветочный
          магазин стал символом красоты и уюта для всех наших клиентов.
        </p>

        <h3>Наша компания в цифрах</h3>

        <ul className="result">
          <li className="result-numbers">
            <h2 className="h2">300 тыс.</h2>
            <p className="p">Довольных покупателей</p>
          </li>
          <li className="result-numbers">
            <h2 className="h2">60%</h2>
            <p className="p">Повторных заказов</p>
          </li>
          <li className="result-numbers">
            <h2 className="h2">22</h2>
            <p className="p">Вежливых курьера</p>
          </li>
        </ul>

        <h3>Почему выбирают нас?</h3>
        <ul className="card1">
          <li className="card-item1">
            <svg
              width={150}
              height={150}
              viewBox="0 0 65 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_610_153)">
                <path
                  d="M47.9194 32.5C47.9119 30.0721 47.6517 27.6517 47.143 25.2778H53.643C53.3083 24.2875 52.904 23.3222 52.4333 22.3889H46.3847C45.2476 18.5901 43.484 15.0079 41.1666 11.7903C39.686 11.1677 38.1423 10.7076 36.5625 10.418C39.7372 13.8292 42.1336 17.8888 43.5861 22.3166H33.8541V10.1111H31.1458V22.3347H21.4138C22.8693 17.8989 25.272 13.8327 28.4555 10.418C26.8825 10.7028 25.3448 11.1568 23.8694 11.7722C21.5429 14.9764 19.7671 18.5462 18.6152 22.3347H12.5305C12.0513 23.285 11.6409 24.2686 11.3027 25.2778H17.8569C17.3483 27.6517 17.0881 30.0721 17.0805 32.5C17.0855 35.1555 17.3883 37.8022 17.9833 40.3903H11.5916C11.9652 41.4023 12.4117 42.3859 12.9277 43.3333H18.7597C19.8651 46.7924 21.5038 50.0576 23.6166 53.0111C25.1296 53.66 26.7102 54.1384 28.3291 54.4375C25.3823 51.2232 23.116 47.446 21.6666 43.3333H31.1638V54.7805H33.8722V43.3333H43.3333C41.8789 47.4478 39.6064 51.2251 36.6527 54.4375C38.2792 54.1281 39.866 53.6376 41.3833 52.975C43.4928 50.0326 45.1314 46.7798 46.2402 43.3333H52.018C52.5317 42.4034 52.9782 41.438 53.3541 40.4444H46.9444C47.5677 37.8415 47.8948 35.1764 47.9194 32.5ZM31.1458 40.3903H20.7819C19.5107 35.4211 19.455 30.2189 20.6194 25.2236H31.1458V40.3903ZM44.218 40.3903H33.8541V25.2778H44.3805C44.8992 27.6498 45.1535 30.0719 45.1388 32.5C45.1535 35.1577 44.8443 37.8073 44.218 40.3903Z"
                  fill="#779243"
                />
                <path
                  d="M32.5002 3.61108C26.7865 3.61108 21.2012 5.30539 16.4504 8.47974C11.6997 11.6541 7.99691 16.1659 5.81038 21.4447C3.62385 26.7234 3.05175 32.532 4.16643 38.1359C5.28112 43.7398 8.03252 48.8873 12.0727 52.9275C16.1129 56.9677 21.2604 59.7191 26.8643 60.8338C32.4682 61.9485 38.2768 61.3764 43.5555 59.1898C48.8343 57.0033 53.3461 53.3005 56.5205 48.5498C59.6948 43.799 61.3891 38.2137 61.3891 32.5C61.3891 24.8382 58.3455 17.4902 52.9278 12.0724C47.51 6.65473 40.162 3.61108 32.5002 3.61108ZM32.5002 57.7777C27.5008 57.7777 22.6136 56.2952 18.4566 53.5177C14.2997 50.7401 11.0598 46.7923 9.14661 42.1734C7.23339 37.5545 6.73281 32.4719 7.70816 27.5685C8.68351 22.6651 11.091 18.161 14.6261 14.6259C18.1613 11.0907 22.6654 8.68325 27.5688 7.7079C32.4722 6.73255 37.5547 7.23314 42.1736 9.14635C46.7925 11.0596 50.7404 14.2995 53.5179 18.4564C56.2955 22.6133 57.778 27.5005 57.778 32.5C57.778 39.2041 55.1148 45.6336 50.3743 50.3741C45.6338 55.1146 39.2043 57.7777 32.5002 57.7777Z"
                  fill="#779243"
                />
              </g>
              <defs>
                <clipPath id="clip0_610_153">
                  <rect width={65} height={65} fill="white" />
                </clipPath>
              </defs>
            </svg>

            <p>Свежие цветы со всего мира</p>
          </li>
          <li className="card-item1">
      <svg width={150} height={150} viewBox="0 0 54 58" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M27.207 54.4188C22.6547 54.9824 18.0399 54.1106 14.007 51.925C9.97399 49.7394 6.7241 46.3491 4.71094 42.2273C2.69778 38.1055 2.02183 33.4581 2.77744 28.9336C3.53305 24.4091 5.68251 20.2335 8.92578 16.9896L23.3504 2.56502C23.655 2.26071 24.0681 2.08978 24.4987 2.08978C24.9293 2.08978 25.3423 2.26071 25.647 2.56502L40.0716 16.9896C42.9404 19.8565 44.9617 23.4599 45.9127 27.4025C46.8637 31.3452 46.7075 35.4739 45.4612 39.3334M35.332 50.1667L40.7487 55.5834L51.582 44.75" stroke="#779243" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
</svg>


            <p>Никакой химии в производстве</p>
          </li>
          <li className="card-item1">
            <svg
              width={150}
              height={150}
              viewBox="0 0 66 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask id="path-1-inside-1_610_164" fill="white">
                <path d="M53.1599 34.1758C52.0258 33.5156 50.5023 32.957 48.5896 32.5C50.5023 32.043 52.0258 31.4844 53.1599 30.8242C54.1982 30.2883 55.1169 29.5473 55.8603 28.6459C56.6038 27.7446 57.1565 26.7017 57.4851 25.5804C57.8136 24.4591 57.9112 23.2828 57.7717 22.1228C57.6323 20.9627 57.2589 19.843 56.674 18.8315C56.0891 17.82 55.305 16.9378 54.3691 16.2383C53.4333 15.5387 52.3652 15.0364 51.2295 14.7618C50.0938 14.4872 48.9142 14.4461 47.7621 14.6407C46.61 14.8354 45.5094 15.262 44.5271 15.8945C43.3845 16.5293 42.1403 17.5703 40.7946 18.9922C41.3532 17.1133 41.6325 15.5137 41.6325 14.2188C41.6325 11.9292 40.723 9.7334 39.104 8.11443C37.4851 6.49546 35.2893 5.58594 32.9997 5.58594C30.7102 5.58594 28.5144 6.49546 26.8954 8.11443C25.2764 9.7334 24.3669 11.9292 24.3669 14.2188C24.3669 15.5137 24.6462 17.1133 25.2048 18.9922C23.8591 17.5703 22.615 16.5293 21.4724 15.8945C20.49 15.262 19.3894 14.8354 18.2374 14.6407C17.0853 14.4461 15.9057 14.4872 14.77 14.7618C13.6343 15.0364 12.5662 15.5387 11.6303 16.2383C10.6944 16.9378 9.91032 17.82 9.32545 18.8315C8.74057 19.843 8.36711 20.9627 8.22769 22.1228C8.08827 23.2828 8.1858 24.4591 8.51435 25.5804C8.84291 26.7017 9.39566 27.7446 10.1391 28.6459C10.8826 29.5473 11.8013 30.2883 12.8396 30.8242C13.9906 31.4844 15.514 32.043 17.4099 32.5C15.514 32.957 13.9906 33.5156 12.8396 34.1758C11.1976 35.1296 9.91584 36.5981 9.19291 38.3541C8.46998 40.11 8.34617 42.0553 8.84067 43.8887C9.33517 45.7221 10.4204 47.3413 11.9282 48.4956C13.4361 49.6498 15.2824 50.2747 17.1814 50.2734C18.6903 50.274 20.1719 49.8707 21.4724 49.1055C22.615 48.4707 23.8591 47.4297 25.2048 46.0078C24.6462 47.8867 24.3669 49.4863 24.3669 50.7812C24.3669 53.0708 25.2764 55.2666 26.8954 56.8856C28.5144 58.5045 30.7102 59.4141 32.9997 59.4141C35.2893 59.4141 37.4851 58.5045 39.104 56.8856C40.723 55.2666 41.6325 53.0708 41.6325 50.7812C41.6325 49.4863 41.3532 47.8867 40.7946 46.0078C42.1403 47.4297 43.3845 48.4707 44.5271 49.1055C45.8276 49.8707 47.3091 50.274 48.8181 50.2734C50.717 50.2747 52.5634 49.6498 54.0712 48.4956C55.5791 47.3413 56.6643 45.7221 57.1588 43.8887C57.6533 42.0553 57.5295 40.11 56.8065 38.3541C56.0836 36.5981 54.8019 35.1296 53.1599 34.1758ZM27.4138 32.5C27.4138 31.3952 27.7414 30.3152 28.3552 29.3966C28.969 28.478 29.8414 27.7621 30.8621 27.3393C31.8828 26.9165 33.0059 26.8059 34.0895 27.0214C35.173 27.2369 36.1684 27.7689 36.9496 28.5501C37.7308 29.3314 38.2628 30.3267 38.4783 31.4102C38.6939 32.4938 38.5832 33.6169 38.1605 34.6376C37.7377 35.6583 37.0217 36.5307 36.1031 37.1445C35.1845 37.7583 34.1045 38.0859 32.9997 38.0859C31.5203 38.0793 30.1034 37.4886 29.0572 36.4425C28.0111 35.3964 27.4205 33.9794 27.4138 32.5ZM46.0505 18.5098C47.3367 17.769 48.8645 17.5696 50.2977 17.9553C51.731 18.341 52.9523 19.2802 53.6931 20.5664C54.4338 21.8526 54.6333 23.3804 54.2476 24.8136C53.8619 26.2469 52.9226 27.4682 51.6364 28.209C49.7575 29.2754 46.2282 30.0879 41.404 30.5449C41.0202 28.8784 40.1445 27.3657 38.8903 26.2031C41.7087 22.2422 44.1716 19.6016 46.0505 18.5098ZM32.9997 8.63281C34.4791 8.63949 35.8961 9.23015 36.9422 10.2763C37.9883 11.3224 38.579 12.7393 38.5857 14.2188C38.5857 16.377 37.5192 19.8301 35.5134 24.248C33.8761 23.7399 32.1233 23.7399 30.486 24.248C28.4802 19.8301 27.4138 16.377 27.4138 14.2188C27.4205 12.7393 28.0111 11.3224 29.0572 10.2763C30.1034 9.23015 31.5203 8.63949 32.9997 8.63281ZM12.3318 20.5664C13.0752 19.2901 14.2919 18.3583 15.7179 17.9733C17.1439 17.5883 18.6642 17.781 19.9489 18.5098C21.8278 19.6016 24.2907 22.2422 27.1091 26.2031C25.855 27.3657 24.9792 28.8784 24.5954 30.5449C19.7712 30.0879 16.2419 29.2754 14.363 28.209C13.7272 27.8411 13.1703 27.3514 12.724 26.768C12.2777 26.1846 11.9509 25.5189 11.7622 24.809C11.5735 24.0991 11.5267 23.359 11.6245 22.631C11.7222 21.903 11.9625 21.2014 12.3318 20.5664ZM19.9489 46.4902C18.6627 47.231 17.135 47.4304 15.7017 47.0447C14.2684 46.659 13.0471 45.7198 12.3064 44.4336C11.5656 43.1474 11.3662 41.6196 11.7519 40.1864C12.1375 38.7531 13.0768 37.5318 14.363 36.791C16.2419 35.7246 19.7712 34.9121 24.5954 34.4551C24.9792 36.1216 25.855 37.6343 27.1091 38.7969C24.2907 42.7578 21.8278 45.3984 19.9489 46.4902ZM32.9997 56.3672C31.5203 56.3605 30.1034 55.7698 29.0572 54.7237C28.0111 53.6776 27.4205 52.2607 27.4138 50.7812C27.4138 48.623 28.4802 45.1699 30.486 40.752C32.1233 41.2601 33.8761 41.2601 35.5134 40.752C37.5192 45.1699 38.5857 48.623 38.5857 50.7812C38.579 52.2607 37.9883 53.6776 36.9422 54.7237C35.8961 55.7698 34.4791 56.3605 32.9997 56.3672ZM53.6677 44.4336C52.9243 45.7099 51.7076 46.6417 50.2816 47.0267C48.8556 47.4117 47.3353 47.219 46.0505 46.4902C44.1716 45.3984 41.7087 42.7578 38.8903 38.7969C40.1445 37.6343 41.0202 36.1216 41.404 34.4551C46.2282 34.9121 49.7575 35.7246 51.6364 36.791C52.2722 37.1589 52.8292 37.6486 53.2754 38.232C53.7217 38.8154 54.0485 39.4811 54.2372 40.191C54.4259 40.9009 54.4727 41.641 54.375 42.369C54.2773 43.097 54.0369 43.7986 53.6677 44.4336Z" />
              </mask>
              <path
                d="M53.1599 34.1758C52.0258 33.5156 50.5023 32.957 48.5896 32.5C50.5023 32.043 52.0258 31.4844 53.1599 30.8242C54.1982 30.2883 55.1169 29.5473 55.8603 28.6459C56.6038 27.7446 57.1565 26.7017 57.4851 25.5804C57.8136 24.4591 57.9112 23.2828 57.7717 22.1228C57.6323 20.9627 57.2589 19.843 56.674 18.8315C56.0891 17.82 55.305 16.9378 54.3691 16.2383C53.4333 15.5387 52.3652 15.0364 51.2295 14.7618C50.0938 14.4872 48.9142 14.4461 47.7621 14.6407C46.61 14.8354 45.5094 15.262 44.5271 15.8945C43.3845 16.5293 42.1403 17.5703 40.7946 18.9922C41.3532 17.1133 41.6325 15.5137 41.6325 14.2188C41.6325 11.9292 40.723 9.7334 39.104 8.11443C37.4851 6.49546 35.2893 5.58594 32.9997 5.58594C30.7102 5.58594 28.5144 6.49546 26.8954 8.11443C25.2764 9.7334 24.3669 11.9292 24.3669 14.2188C24.3669 15.5137 24.6462 17.1133 25.2048 18.9922C23.8591 17.5703 22.615 16.5293 21.4724 15.8945C20.49 15.262 19.3894 14.8354 18.2374 14.6407C17.0853 14.4461 15.9057 14.4872 14.77 14.7618C13.6343 15.0364 12.5662 15.5387 11.6303 16.2383C10.6944 16.9378 9.91032 17.82 9.32545 18.8315C8.74057 19.843 8.36711 20.9627 8.22769 22.1228C8.08827 23.2828 8.1858 24.4591 8.51435 25.5804C8.84291 26.7017 9.39566 27.7446 10.1391 28.6459C10.8826 29.5473 11.8013 30.2883 12.8396 30.8242C13.9906 31.4844 15.514 32.043 17.4099 32.5C15.514 32.957 13.9906 33.5156 12.8396 34.1758C11.1976 35.1296 9.91584 36.5981 9.19291 38.3541C8.46998 40.11 8.34617 42.0553 8.84067 43.8887C9.33517 45.7221 10.4204 47.3413 11.9282 48.4956C13.4361 49.6498 15.2824 50.2747 17.1814 50.2734C18.6903 50.274 20.1719 49.8707 21.4724 49.1055C22.615 48.4707 23.8591 47.4297 25.2048 46.0078C24.6462 47.8867 24.3669 49.4863 24.3669 50.7812C24.3669 53.0708 25.2764 55.2666 26.8954 56.8856C28.5144 58.5045 30.7102 59.4141 32.9997 59.4141C35.2893 59.4141 37.4851 58.5045 39.104 56.8856C40.723 55.2666 41.6325 53.0708 41.6325 50.7812C41.6325 49.4863 41.3532 47.8867 40.7946 46.0078C42.1403 47.4297 43.3845 48.4707 44.5271 49.1055C45.8276 49.8707 47.3091 50.274 48.8181 50.2734C50.717 50.2747 52.5634 49.6498 54.0712 48.4956C55.5791 47.3413 56.6643 45.7221 57.1588 43.8887C57.6533 42.0553 57.5295 40.11 56.8065 38.3541C56.0836 36.5981 54.8019 35.1296 53.1599 34.1758ZM27.4138 32.5C27.4138 31.3952 27.7414 30.3152 28.3552 29.3966C28.969 28.478 29.8414 27.7621 30.8621 27.3393C31.8828 26.9165 33.0059 26.8059 34.0895 27.0214C35.173 27.2369 36.1684 27.7689 36.9496 28.5501C37.7308 29.3314 38.2628 30.3267 38.4783 31.4102C38.6939 32.4938 38.5832 33.6169 38.1605 34.6376C37.7377 35.6583 37.0217 36.5307 36.1031 37.1445C35.1845 37.7583 34.1045 38.0859 32.9997 38.0859C31.5203 38.0793 30.1034 37.4886 29.0572 36.4425C28.0111 35.3964 27.4205 33.9794 27.4138 32.5ZM46.0505 18.5098C47.3367 17.769 48.8645 17.5696 50.2977 17.9553C51.731 18.341 52.9523 19.2802 53.6931 20.5664C54.4338 21.8526 54.6333 23.3804 54.2476 24.8136C53.8619 26.2469 52.9226 27.4682 51.6364 28.209C49.7575 29.2754 46.2282 30.0879 41.404 30.5449C41.0202 28.8784 40.1445 27.3657 38.8903 26.2031C41.7087 22.2422 44.1716 19.6016 46.0505 18.5098ZM32.9997 8.63281C34.4791 8.63949 35.8961 9.23015 36.9422 10.2763C37.9883 11.3224 38.579 12.7393 38.5857 14.2188C38.5857 16.377 37.5192 19.8301 35.5134 24.248C33.8761 23.7399 32.1233 23.7399 30.486 24.248C28.4802 19.8301 27.4138 16.377 27.4138 14.2188C27.4205 12.7393 28.0111 11.3224 29.0572 10.2763C30.1034 9.23015 31.5203 8.63949 32.9997 8.63281ZM12.3318 20.5664C13.0752 19.2901 14.2919 18.3583 15.7179 17.9733C17.1439 17.5883 18.6642 17.781 19.9489 18.5098C21.8278 19.6016 24.2907 22.2422 27.1091 26.2031C25.855 27.3657 24.9792 28.8784 24.5954 30.5449C19.7712 30.0879 16.2419 29.2754 14.363 28.209C13.7272 27.8411 13.1703 27.3514 12.724 26.768C12.2777 26.1846 11.9509 25.5189 11.7622 24.809C11.5735 24.0991 11.5267 23.359 11.6245 22.631C11.7222 21.903 11.9625 21.2014 12.3318 20.5664ZM19.9489 46.4902C18.6627 47.231 17.135 47.4304 15.7017 47.0447C14.2684 46.659 13.0471 45.7198 12.3064 44.4336C11.5656 43.1474 11.3662 41.6196 11.7519 40.1864C12.1375 38.7531 13.0768 37.5318 14.363 36.791C16.2419 35.7246 19.7712 34.9121 24.5954 34.4551C24.9792 36.1216 25.855 37.6343 27.1091 38.7969C24.2907 42.7578 21.8278 45.3984 19.9489 46.4902ZM32.9997 56.3672C31.5203 56.3605 30.1034 55.7698 29.0572 54.7237C28.0111 53.6776 27.4205 52.2607 27.4138 50.7812C27.4138 48.623 28.4802 45.1699 30.486 40.752C32.1233 41.2601 33.8761 41.2601 35.5134 40.752C37.5192 45.1699 38.5857 48.623 38.5857 50.7812C38.579 52.2607 37.9883 53.6776 36.9422 54.7237C35.8961 55.7698 34.4791 56.3605 32.9997 56.3672ZM53.6677 44.4336C52.9243 45.7099 51.7076 46.6417 50.2816 47.0267C48.8556 47.4117 47.3353 47.219 46.0505 46.4902C44.1716 45.3984 41.7087 42.7578 38.8903 38.7969C40.1445 37.6343 41.0202 36.1216 41.404 34.4551C46.2282 34.9121 49.7575 35.7246 51.6364 36.791C52.2722 37.1589 52.8292 37.6486 53.2754 38.232C53.7217 38.8154 54.0485 39.4811 54.2372 40.191C54.4259 40.9009 54.4727 41.641 54.375 42.369C54.2773 43.097 54.0369 43.7986 53.6677 44.4336Z"
                fill="#779243"
                stroke="#779243"
                strokeWidth={4}
                mask="url(#path-1-inside-1_610_164)"
              />
            </svg>

            <p>Каждый букет собирает флорист</p>
          </li>
          <li className="card-item1">
            <svg
              width={150}
              height={150}
              viewBox="0 0 66 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.625 32.5H33V36.5625H8.625V32.5ZM4.5625 22.3438H24.875V26.4062H4.5625V22.3438Z"
                fill="#779243"
              />
              <path
                d="M61.2722 33.7309L55.1784 19.5122C55.022 19.1467 54.7617 18.8352 54.4299 18.6164C54.098 18.3976 53.7092 18.281 53.3117 18.2812H47.2179V14.2188C47.2179 13.68 47.0039 13.1634 46.623 12.7824C46.2421 12.4015 45.7254 12.1875 45.1867 12.1875H12.6867V16.25H43.1554V41.7544C42.2299 42.2918 41.4198 43.0072 40.7721 43.8593C40.1243 44.7113 39.6517 45.6831 39.3814 46.7188H26.617C26.1226 44.804 24.9468 43.1352 23.3101 42.0253C21.6734 40.9154 19.688 40.4406 17.7262 40.6898C15.7644 40.9389 13.9608 41.8951 12.6535 43.3789C11.3462 44.8627 10.625 46.7724 10.625 48.75C10.625 50.7276 11.3462 52.6373 12.6535 54.1211C13.9608 55.6049 15.7644 56.5611 17.7262 56.8102C19.688 57.0594 21.6734 56.5846 23.3101 55.4747C24.9468 54.3648 26.1226 52.696 26.617 50.7812H39.3814C39.8232 52.5245 40.8338 54.0707 42.2531 55.1752C43.6724 56.2797 45.4195 56.8793 47.2179 56.8793C49.0164 56.8793 50.7634 56.2797 52.1828 55.1752C53.6021 54.0707 54.6126 52.5245 55.0545 50.7812H59.4054C59.9442 50.7812 60.4608 50.5672 60.8417 50.1863C61.2227 49.8054 61.4367 49.2887 61.4367 48.75V34.5312C61.4368 34.2561 61.3808 33.9838 61.2722 33.7309ZM18.7804 52.8125C17.9769 52.8125 17.1915 52.5742 16.5234 52.1278C15.8554 51.6814 15.3347 51.047 15.0272 50.3047C14.7197 49.5623 14.6392 48.7455 14.796 47.9574C14.9527 47.1694 15.3397 46.4455 15.9078 45.8774C16.476 45.3092 17.1998 44.9223 17.9879 44.7656C18.7759 44.6088 19.5928 44.6893 20.3351 44.9967C21.0774 45.3042 21.7119 45.8249 22.1583 46.493C22.6047 47.1611 22.8429 47.9465 22.8429 48.75C22.8419 49.8271 22.4135 50.8598 21.6519 51.6214C20.8902 52.3831 19.8575 52.8114 18.7804 52.8125ZM47.2179 22.3438H51.9711L56.3261 32.5H47.2179V22.3438ZM47.2179 52.8125C46.4145 52.8125 45.629 52.5742 44.9609 52.1278C44.2929 51.6814 43.7722 51.047 43.4647 50.3047C43.1572 49.5623 43.0767 48.7455 43.2335 47.9574C43.3902 47.1694 43.7772 46.4455 44.3453 45.8774C44.9135 45.3092 45.6373 44.9223 46.4254 44.7656C47.2134 44.6088 48.0303 44.6893 48.7726 44.9967C49.5149 45.3042 50.1494 45.8249 50.5958 46.493C51.0422 47.1611 51.2804 47.9465 51.2804 48.75C51.2794 49.8271 50.851 50.8598 50.0894 51.6214C49.3277 52.3831 48.295 52.8114 47.2179 52.8125ZM57.3742 46.7188H55.0545C54.6071 44.9788 53.5949 43.4366 52.1767 42.3338C50.7585 41.231 49.0144 40.63 47.2179 40.625V36.5625H57.3742V46.7188Z"
                fill="#779243"
              />
            </svg>

            <p>Быстрая доставка</p>
          </li>
        </ul>

        <h3 className="end-h3">Наш ассортимент</h3>
        <p className="nash-p">
          Наша компания предоставляет более 1200 композиций цветов, на любой
          вкус и цвет. Мы являемся прямым импортером цветов из Голландии,
          Эквадора, Колумбии, Израиля. Силами наших профессиональных флористов
          мы собрали для Вас лучшие композии мировой флористики. Мы импортируем
          более 2500 разновидностей цветов.
        </p>
        <h3>Мы доставляем больше чем цветы...</h3>
        <p className="nash-p">
          За весь наш многолетний опыт – наша компания научилась давать больше
          чем цветы, наши курьеры и менеджеры дарят позитивное настроение и
          чувство высокой удовлетворенности после пользования услугами нашего
          сервиса. Так же, мы доставляем сладкие сюрпризы, живые цветы и другие
          товары!
        </p>
      </div>
    </Wrapper>
  );
}

export default OnasSection;

const Wrapper = styled.section`
  p {
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 58px;
    color: #15100c;
    // padding-left: 150px;
    margin-bottom: 10px;
  }
  .pre {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #443926;
    margin-bottom: 20px;
  }

  .hero-img {
    // width: 1110px;
    height: 346px;
    margin-bottom: 80px;
    margin-top: 40px;
  }

  .nash-p {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #443926;
    margin-top: 40px;
    margin-bottom: 80px;
  }

  h3 {
    font-family: "Cormorant";
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 58px;
    color: #15100c;
    margin-bottom: 40px;
  }

  .result-numbers h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 59px;
    text-align: center;
    color: #443926;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin-bottom: 12px;
  }

  .p {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    color: #443926;
    display: flex;
    justify-content: center;
  }

  .result {
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin-top: 40px;
    margin-bottom: 80px;
  }

  .card1 {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
  }

  .card-item1 {
    border: 2px solid #779243;
    border-radius: 127.5px 0px 127.5px 40px;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 49px 56px;

    p {
      text-align: start;
      width: 137px;
      margin-top: 20px;
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      color: #443926;
    }
  }

  .card1 img {
    width: 49px;
    height: 53px;
  }

  .end-h3 {
    margin-top: 80px;
  }

  .end-p {
    margin-bottom: 80px;
  }
  @media screen and (max-width: 992px) {
    .card1 {
      width: 90%;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 30px;
    }
    .hero-img {
      width: 95%;
      margin: 0 auto;
    }
    .card-item1 {
      padding: 16px;
    }
    .card-item1 p {
      font-size: 18px;
    }
  }
  @media screen and (max-width: 720px) {
    .card1 {
      width: 90%;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(1, 1fr);
    }
    .result {
      display: flex;
      flex-direction: column;
    }
    .card-item1 {
      padding: 16px;
    }
    .card-item1 p {
      font-size: 12px;
    }
  }
`;
