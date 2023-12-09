import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { styled } from "styled-components";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { url, uri } from "../layout/config";

const BlogDetail = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const [contentHover, setContentHover] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {

    const handleScrolling = (event) => {
      if(contentRef !== null) {
        if(contentHover === false) {
          contentRef.current.scrollTop= 0;
        }
      }
    }

    window.addEventListener("wheel", handleScrolling);

    return () => {
      window.removeEventListener("wheel", handleScrolling);
    }
  })



  const getblogDetail = async () => {
    const { data } = await axios.get(
      `${url}/blogs_deteiles_sites_views/${id}/`
    );
    setData(data);
  };
  useEffect(() => {
    getblogDetail();
  }, []);

  return (
    <Wrapper>
      <div ref={contentRef} className="w-[96%] md:w-[70%] second-page mx-auto mb-6 sm:py-[40px] min-h-[60vh] flex justify-center">
        {data.map((item) => (
          <div className=" md:w-[800px] sm:w-[400px] w-[360px]  bg-white border border-gray-200 rounded-lg shadow-2xl">
            <div className="w-[100%] flex justify-center h-[300px] md:h-[600px]">
              <img
                classname="rounded-t-lg flex"
                style={{borderTopLeftRadius: "8px", borderTopRightRadius:"8px"}}
                src={`${
                  item.img
                    ? `${uri}${item?.img}`
                    : "../images/defaultimg.webp"
                }`}
                width={'100%'}
              />
            </div>
            <div className="p-5">
              <div className="flex justify-center">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                  {item?.title}
                </h5>
              </div>
              <div className="flex justify-center flex-col flex-wrap">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"
                dangerouslySetInnerHTML={{
                  __html: (item?.content )
                }}
                />
              </div>
              <Link className="flex flex-row justify-center items-center ">
                <p className="mr-[10px] font-semibold text-[20px] text-gray-700">{item?.eye}</p>
                <RemoveRedEyeIcon  className="text-gray-700"/>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default BlogDetail;
const Wrapper = styled.section``;
