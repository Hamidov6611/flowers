import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import Button from "./Button";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { url } from "../layout/config";

const ContactForm = ({setIsOrder}) => {
    const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("")

  const submitForm = async (e) => {
    e.preventDefault()
    try {
      const postData = {full_name: firstName, phone, content: message}
      if(firstName && phone && message) {
        const data = await axios.post(`${url}/forma_post_sites_views/`, postData)
        console.log(data)
      toast.success("Сообщение было отправлено")
      }else {
        toast.error("Заполните все поля")
      }
      
    } catch (error) {
      console.log(error)
    }
  }

  const handleCLose = () => setIsOrder(false)
  return (
    <div 
    className="fixed top-0 left-0 w-full h-[100vh] bg-modal2 flex items-center justify-center z-[9999]" onClick={handleCLose}>
        <div className="w-[95%] rounded-lg text-[#151] md:w-[60%] bg-[#EDFCD6]">
        <form className="left w-[100%]" onSubmit={submitForm} onClick={e => e.stopPropagation()}>
              <div className="box p-6">
                <h3 className="w-[100%] flex font-montserrat justify-center text-[16px] mb-4 sm:text-[20px] md:text-[24px] font-medium md:font-semibold tracking-wide">
                  Введите контактные данные
                </h3>
                <div className="input-label flex flex-col ">
                  <div className="flex md:flex-row flex-col md:justify-between">
                    <div className="input-label-1 md:w-[48%] w-[100%] mb-2">
                      <h4 className="mb-2 font-montserrat">Ваше имя и фамилия</h4>
                      <input
                        className="main-input  w-[100%] p-3 dark:bg-white"
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                      <label for=""></label>
                    </div>
                    <div className="input-label-2 md:w-[48%] w-[100%]">
                      <h4 className="mb-2 font-montserrat">Ваш телефон</h4>
                      <input
                        className="main-input dark:bg-white  w-[100%]  p-3"
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                      <label for=""></label>
                    </div>
                  </div>
                  <div className="flex w-[100%] justify-between">
                    <div className="w-[100%]">
                      <h4 className="mb-2 font-montserrat">Ваш комментарий </h4>
                      <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="border-2   p-3 resize-none focus:outline-0 focus:border-[#779243] rounded-lg border-[#779243] h-[100px] outline-0 w-[100%] dark:bg-white"></textarea>
                    </div>
                  </div>
                  <div className="flex justify-between gap-x-11">
                  <button onClick={handleCLose} type="submit" className="bg-[#ae2727] w-[30%] text-lg font-montserrat md:mt-4 p-2 text-white rounded-lg">
                  Отмена
                  </button><button type="submit" className="bg-[#779243] text-lg font-montserrat md:mt-4 p-2 text-white rounded-lg w-[30%]">
                    Отправить
                  </button>
                  </div>
                </div>
              </div>
            </form>
        </div>
    </div>
  )
}

export default ContactForm