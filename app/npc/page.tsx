'use client'
import { useEffect, useState } from "react";
import axios from "axios";

export default function Page () {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData]= useState<any>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`http://localhost:4444/api/category`);
        console.log(response?.data)
        const data = response?.data;
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

    return(
        <div>
            <div className='grid grid-cols-3'>
        {
          data?.length != 0 ? (
            data.map((item, index) => (
              <p key={index}>{item?.title}</p>
            ))
          ) : (
            isLoading ?
              <>
                <p>Загрузка...</p>
                <p>Загрузка...</p>
                <p>Загрузка...</p>
                <p>Загрузка...</p>
              </>
              :
              <p className='text-[#9da3ae]'>Нет данных. Попробуйте зайти позднее!</p>
          )
        }
      </div>
        </div>
    )
}