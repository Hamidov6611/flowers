import React from 'react'
import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

function Dostavka() {
    return (
        <Wrapper>
            <div class="w-[98%] md:w-[94%] mx-auto">
                <h3>Доставка</h3>
                <p>Мы находимся в Санкт-Петербурге по адресу <strong>Большой Сампсониевский проспект, д. 25</strong> Вы можете оформить самовывоз любого понравившегося на сайте букета
                    из магазина или подобрать самостоятельно уже на месте.
                    График работы Вы можете посмотреть в разделе <ins>контакты</ins> или проконсультироваться с менеджером по номеру телефона
                    <b><Link to={"tel: +79119276162"}>+ 7 (911) 927-61-62</Link></b></p>
                <p><b>БЕСПЛАТНО</b>  с доставкой до дома и офиса во все районы Санкт-Петербурга в пределах КАДа, а также в ближайшие
                    пригороды.</p>
                <div className="images w-[100%] flex items-center justify-center mb-3 md:mb-6">
                    <img src="./images/dostavka1.svg" alt="" className='h-full w-full'/>
                    <img className="card" src="./images/dostavka2.svg" alt="" />
                </div>
               <div className='w-[100%] rounded-2xl' style={{position: 'relative', overflow: 'hidden'}}><a href="https://yandex.ru/maps/org/buketnaya_manufaktura/117992422020/?utm_medium=mapframe&utm_source=maps" style={{color: '#eee', fontSize: 12, position: 'absolute', top: 0}}>Букетная Мануфактура</a><a href="https://yandex.ru/maps/2/saint-petersburg/category/flower_shop/184108325/?utm_medium=mapframe&utm_source=maps" style={{color: '#eee', fontSize: 12, position: 'absolute', top: 14}}>Магазин цветов в Санкт‑Петербурге</a><a href="https://yandex.ru/maps/2/saint-petersburg/category/flowers_and_bouquets_delivery/184108319/?utm_medium=mapframe&utm_source=maps" style={{color: '#eee', fontSize: 12, position: 'absolute', top: 28}}>Доставка цветов и букетов в Санкт‑Петербурге</a><iframe src="https://yandex.ru/map-widget/v1/org/buketnaya_manufaktura/117992422020/?ll=30.343557%2C59.965202&z=14" width={'100%'} height={600} frameBorder={1} allowFullScreen="true" style={{position: 'relative'}} /></div>

            </div>
        </Wrapper>
    )
}

export default Dostavka

const Wrapper = styled.section`

    a {
        color: ${props => props.theme.colors.blackColor};
        text-decoration: none;
        padding-left: 8px; 
    }
    
    h3 {
        margin-bottom: 40px;
        font-family: 'Cormorant';
        font-style: normal;
        font-weight: 600;
        font-size: 48px;
        line-height: 58px;
        color: #15100C;
    }

    p {
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 31px;
        color: #443926;
        margin-bottom: 40px;
    }

    .images {
        position: relative;
        
        .card {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%) rotate(3.88deg);
        }
    }

`