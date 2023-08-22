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
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    categoryHandler();
  }, []);

  return (
    <div className="flex flex-col my-4 p-1 sm:p-4">
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
            <div className="absolute top-0 left-0 bg-modal w-[100%]">
              <p
                className="py-3 text-[34px] font-semibold text-white text-center"
                style={{ letterSpacing: "5px" }}
              >
                {item?.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeCategory;
