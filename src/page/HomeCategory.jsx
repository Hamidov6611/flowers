import React, { useEffect, useState } from "react";
import { uri, url } from "../layout/config";
import axios from "axios";
import { Link } from "react-router-dom";

const HomeCategory = () => {
  const [category, setCategory] = useState([]);

  const categoryHandler = async () => {
    try {
      const { data } = await axios.get(`${url}/category_all_views/`);
      setCategory(data);
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    categoryHandler();
  }, []);

  let widthCard = [{left: 30, right: 68}, {left: 58, right: 40}, {left: 38, right: 60}];
  const shuffleBg = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    widthCard = array;
    return array;
  };
  useEffect(() => {
    shuffleBg(widthCard)
    console.log(widthCard)
  }, [])

  

  return (
    <div className="flex flex-col mb-4 p-1 sm:p-4 md:w-[96%] mx-auto mt-[40px]">
      <div className="relative mb-4 flex flex-wrap justify-between md:flex-row flex-col">
        {category?.map((item, index) => (
          <Link
            to={`/букеты/категория/${item?.id}`}
            key={item?.id}
            className={`w-[100%] ${
              index % 2 == 0 ? "md:w-[60%]" : "md:w-[38%]"
            } relative mb-4`}
          >
            <div className="w-[100%] h-[500px]">
              <img
                src={`${uri}${item?.img}`}
                className="w-[100%] h-[100%] object-cover"
              />
            </div>
            <div className="absolute top-0 left-0 bg-modal3 w-[100%]">
              <p
              style={{textTransform:"capitalize", letterSpacing: '5px'}}
                className="py-3 text-[18px] font-medium capitalize sm:text-[24px] md:text-[34px] md:font-semibold text-white text-center"
            
              >
                {item?.title.toLowerCase()}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <div className="w-[100%] flex justify-center">
      <Link to={'/букеты'} className="py-[20px] px-[60px] text-[12px] lg:text-[20px] font-montserrat rounded-lg text-[#fff] bg-[#C59A77]">
        Смотреть все разделы
      </Link>
      </div>
    </div>
  );
};

export default HomeCategory;
