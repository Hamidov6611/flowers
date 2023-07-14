import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import Button from "./Button";
import { Link } from "react-router-dom";
import axios from 'axios'
import { url, uri  } from '../layout/config.js'
import Carousel from "react-multi-carousel";

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const CustomButtonGroup = ({ next, previous }) => {
    return (
      <div className="custom-button-group">
        <button onClick={previous}>Previous</button>
        <button onClick={next}>Next</button>
      </div>
    );
  };
function Reviews() {
    const [data, setData] = useState([]);
    const commentHandler = async () => {
        try {
         const { data } = await axios.get(
           `${url}/commit_vidoes_sites_views/`
         );
         console.log(data);
         setData(data);
        } catch (error) {
         console.log(error)
        }
       };

       useEffect(() => {
         commentHandler()
       }, [])
       
  return (
    <Wrapper>
      <div className="reviews-section">
                <div className="w-[100%] flex justify-center">
                <p className='title '>Отзывы</p>
                </div>

                <ul className='reviews flex md:flex-row flex-col w-[90%] mx-auto'>
                    <li className='item1 w-[100%] md:w-[50%]'>
                        <img src="./images/screen1.png" alt="" />
                    </li>

                    <li className='item2 w-[100%] md:w-[50%]'>
                        <img src="./images/screen2.png" alt="" />
                    </li>
                </ul>
     {/* <div className="w-[80%] mx-auto">
     {data?.results && (
        <Carousel responsive={responsive}  className="carousel ">
          {data?.results?.slice(0,5)?.map((item, index) => (
            <div key={index} className="h-[250px] flex  mr-3 ">
              <img
                src={`${uri}${item?.comment}`}
                style={{ backgroundPosition: "center center"}}
                width={"100%"}
                className="img object-cover"
              />
            </div>
            )
          )}
        </Carousel>
      )}
     </div> */}

      <div className="flex justify-center md:mb-[40px]">
        <Link
          to={"/oтзывы"}
          className="bg-[#443926] text-[16px] font-montserrat md:py-6 md:px-12 py-3 text-white rounded-lg px-5"
        >
          Смотреть все отзывы
        </Link>
      </div>

      </div>

                <div className="images">
                    <img className='bg-1 hidden md:flex  mx-auto' src="./images/sharh1.png" alt="" />
                    <img className='bg-2 hidden md:flex mx-auto' src="./images/sharh2.png" alt="" />
                </div>
    </Wrapper>
  );
}

export default Reviews;

const Wrapper = styled.section`
  position: relative;

  .reviews-section {
    width: 100%;
    position: relative;
    z-index: 1;
  }

  .title {
    font-family: "Cormorant";
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 58px;
    color: #15100c;
  }

  .reviews {
    list-style: none;
    display: flex;
    gap: 30px;
    margin-top: 100px;
    margin-bottom: 60px;

    .item1,
    .item2 {
      background: #8c5c38;
      padding: 26px 75px;
    }

    .item1 {
      border-radius: 0px 98.5px 98.5px 0px;
      text-align: end;
    }

    .item2 {
      border-radius: 98.5px 0px 0px 98.5px;
    }
  }

  .btn {
    text-align: center;
    margin-bottom: 160px;
  }

  .images {
    width: 100%;
  }

  .bg-1 {
    position: absolute;
    top: 55px;
    left: 40px;
  }

  .bg-2 {
    position: absolute;
    top: 55px;
    right: 0;
  }
  @media screen and (max-width: 450px) {
    .title {
    }
  }
`;
