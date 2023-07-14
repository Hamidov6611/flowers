import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { styled } from "styled-components";
import Button from "./Button";
import axios from "axios";
import { uri, url } from "../layout/config.js";
import { setId } from "@material-tailwind/react/components/Tabs/TabsContext";

function BlogSection() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [id, setId] = useState(Number)
  const location = useLocation()
  
  const getBlogDataHandler = async () => {
    try {
      const { data } = await axios.get(
        `${url}/blogs_all_sites_views/?page=1`
      );
      setData(data?.results);
    } catch (error) {
      console.log(error);
    }
  };
  const likeHandler =  (id) => {
    data?.map(item => {
      if(item?.id === id) {
         axios.put(
          `${url}/blogs_deteiles_sites_views/${id}/`
        );
      }
    })
    getBlogDataHandler()
  }
  useEffect(() => {
    data?.map(item => setId(item?.id))
  },[id])

  useEffect(() => {
    getBlogDataHandler();
  }, []);

  return (
    <Wrapper>
      <div className="md:w-[80%] w-[96%] mx-auto min-h-[40vh]" >
        
        <div className="w-[100%] flex justify-center lg:justify-start">
        <p className="title">Блог</p>
        </div>

        <ul className="blogs">
          {data?.length > 0 &&
            data?.map((item, index) => {
              return (
                (index < 3 || show) && (
                  <li className="blog-item overflow-hidden flex-wrap" key={index}>
                    <span className="date">
                      {item?.create_date?.substr(0, 10)}
                    </span>

                    <div className=" h-[300px]">
                      <img
                        src={`${item?.img ? `${uri}${item?.img}` : `../images/bydefault.jpg`}`}
                        alt=""
                        className="image w-full h-[100%] object-cover"
                      />
                    </div>
                    <div className="info-title h-[200px] my-4">
                      <h3 className="title">{item?.title}</h3>
                      <p className="text"
                      dangerouslySetInnerHTML={{
                        __html: (item?.content.slice(0,150) )
                      }}
                      />
                    </div>
                    <div className="blog-footer">
                      <div className="info">
                        <div className="hart">
                          <img src="./images/hart.svg" alt="" className="cursor-pointer" onClick={() => likeHandler(item?.id)} />
                          <span>{item?.like}</span>
                        </div>

                        <div className="eye relative bottom-0" >
                          <img src="./images/eye.svg" alt=""  className="cursor-pointer"/>
                          <span>{item?.eye}</span>
                        </div>
                      </div>

                      <Link to={`/блог/${item?.id}`}>Читать</Link>
                    </div>
                  </li>
                )
              );
            })}
        </ul>

        <div className="btn1" style={{ textAlign: "center" }}>
          {
          <Link to={location.pathname == '/' && '/блог'}>
              <Button onClick={() => setShow(!show)}>
              {show ? "Cократить" : "Все статьи"}
            </Button>
          </Link>
          }
        </div>
      </div>
    </Wrapper>
  );
}

export default BlogSection;

const Wrapper = styled.section`
  padding: 80px 0;

  

  .title {
    font-family: "Cormorant";
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 58px;
    color: ${(props) => props.theme.colors.blackColor};
  }

  .blogs {
    position: relative;
    z-index: 1;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    justify-items: center;
    gap: 10px;
    margin-top: 40px;
    margin-bottom: 60px;

    .blog-item {
      width: 100%;
      background: #90aa91;
      box-shadow: 4px 4px 4px rgba(187, 187, 187, 0.25);
      border-radius: 5px;

      .info-title {
        padding: 34px 28px;

        .title {
          font-style: normal;
          font-weight: 500;
          font-size: 20px;
          line-height: 24px;
          color: ${(props) => props.theme.colors.whiteColor};
        }

        .text {
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 25px;
          color: ${(props) => props.theme.colors.whiteColor};
        }
      }
    }

    .date {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      color: ${(props) => props.theme.colors.whiteColor};
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
        color: ${(props) => props.theme.colors.whiteColor};
      }

      .hart,
      .eye {
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
      color: ${(props) => props.theme.colors.whiteColor};
    }
  }
`;
