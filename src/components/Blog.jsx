import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import Button from './Button'
import { uri } from '../layout/config'

function Blog() {
    const [data, setData] = useState([])
    const [show, setShow] = useState(false)

    // useEffect(() => {
    //     axiosInstance.get("/blogs_base_all_views/")
    //         .then((res) => {
    //             console.log(res.data?.results);
    //             setData(res.data?.results)
    //         })
    // }, [])

    return (
        <Wrapper>
            <div className="container">
                <p className='title'>Блог</p>

                <ul className='blogs'>
                    {
                        data?.length > 0 && data.map((item, index) => {
                            return (
                                (index < 3 || show) && (
                                    <li className="blog-item" key={index}>
                                        <span className='date'>{item.create_date?.substr(0, 10)}</span>

                                        <img src={`${uri}${item.img}`} alt="" className='image'/>

                                        <div className="info-title">
                                            <h3 className='title'>{item.title}</h3>
                                            <p className='text'>{item.content}</p>
                                        </div>

                                        <div className="blog-footer">
                                            <div className="info">
                                                <div className="hart">
                                                    <img src="./images/hart.svg" alt="" />
                                                    <span>{item.like}</span>
                                                </div>

                                                <div className="eye">
                                                    <img src="./images/eye.svg" alt="" />
                                                    <span>{item.eye}</span>
                                                </div>
                                            </div>

                                            <Link to={"/blog/1"}>Читать</Link>
                                        </div>
                                    </li>
                                )

                            )
                        })
                    }
                </ul>

                <div className="btn" style={{ textAlign: "center" }}>
                    {
                        <Button onClick={() => setShow(!show)}>
                            {show ? "Cократить" : "Все статьи"}
                        </Button>
                    }
                </div>
            </div>

            <img src="./images/blog-bg1.png" alt="" className='bg-1' />
            <img src="./images/blog-bg2.png" alt="" className='bg-2' />
        </Wrapper>
    )
}

export default Blog

const Wrapper = styled.section`
    background: #C4D7A7;
    padding: 44px 0;
    position: relative;

    .image {
        display: flex;
        justify-content: center;
        height: 225px;
        width: 100%;
        object-fit: contain;
    }

    .title {
        font-family: 'Cormorant';
        font-style: normal;
        font-weight: 600;
        font-size: 48px;
        line-height: 58px;
        color: ${props => props.theme.colors.blackColor};
    }

    .blogs {
        position: relative;
        z-index: 1;
        list-style: none;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        justify-items: center;
        gap: 30px;
        margin-top: 40px;
        margin-bottom: 60px;

        .blog-item{
            width: 100%;
            background: #90AA91;
            box-shadow: 4px 4px 4px rgba(187, 187, 187, 0.25);
            border-radius: 5px;

            .info-title {
                padding: 34px 28px;
                
                .title {
                    font-style: normal;
                    font-weight: 500;
                    font-size: 20px;
                    line-height: 24px;
                    color: ${props => props.theme.colors.whiteColor};
                }

                .text {
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 25px;
                    color: ${props => props.theme.colors.whiteColor};
                }
            }

        }

        .date {
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 20px;
            color: ${props => props.theme.colors.whiteColor};
            margin: 21px;
            display: flex;
            justify-content: flex-end;
        }
    }

    .blog-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 28px;
        margin-bottom: 14px;

        .info {
            display: flex;
            align-items: center;
            gap: 14px;

            span {
                font-style: normal;
                font-weight: 400;
                font-size: 12px;
                line-height: 15px;
                color: ${props => props.theme.colors.whiteColor};
            }

            .hart, .eye {
                display: flex;
                align-items: center;
                gap: 3px;
            }
        }

        a {
            text-decoration: none;
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 22px;
            color: ${props => props.theme.colors.whiteColor};
        }
    }

    .bg-1{
        position: absolute;
        top: 370px;
    }

    .bg-2{
        position: absolute;
        top: 0;
        right: 0;
        z-index: 0;
    }
`