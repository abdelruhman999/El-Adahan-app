import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Test1 from './Test1';

export default function Eladhan() {
  const [data,setdata]=useState('')
  const [city,setcity]=useState('')
  let datnow = new Date()
  console.log(datnow);
  console.log(datnow.getDate());
  console.log(datnow.getMonth());
  
  function HenddleClick(e){
    setcity(e.target.value)
  }

  async function getdata(city) {
    const url = `https://api.aladhan.com/v1/timingsByAddress/${datnow}?address=${city}`
    try{
      const res = await axios.get(url)
      console.log(res.data.data.timings);  
      if(res.data.data.timings){
          setdata(res.data.data.timings)      
      }else{
          setdata('')
      }
      setdata({
          timeFajr:res.data.data.timings.Fajr,
          timeDhuhr:res.data.data.timings.Dhuhr,
          timeAsr:res.data.data.timings.Asr,
          timeMaghrib:res.data.data.timings.Maghrib,
          timeIsha:res.data.data.timings.Isha,
      })
      
    }
    catch(error){console.log(error);}
  }
 
  useEffect(()=>{
    if(city==='')
    {
      getdata('القاهره')
    }
    
      getdata(city)
    
  },[city])
  return (
      <div className='border rounded-lg xs:w-[300px] gap-[30px] flex flex-col items-center   p-[20px] w-[588px] bg-gray-800 bg-opacity-[0.5]'>
     {data?(
      <>
      <div className='flex xs:gap-2  xs:flex-col-reverse  gap-[150px] w-full items-center  flex-row-reverse justify-center'>
      <div className='flex xs:items-center  flex-col items-end gap-2'>
        <div>
        <p className='font-semibold text-white text-xl'>المدينه</p>
        </div>
        <div>
        <select
    onClick={HenddleClick}
    className='text-white text-lg w-[250px] h-[38px] rounded-lg outline-none p-1  font-semibold bg-orange-700'
    name="city">
      <option value="Cairo">القاهرة</option>
      <option value="Alexandria">الإسكندرية</option>
      <option value="Matruh">مطروح</option>
      <option value="Giza">الجيزة</option>
      <option value="Ismailia">الإسماعيلية</option>
      <option value="Port Said">بورسعيد</option>
      <option value="Minya">المنيا</option>
      <option value="Assiut">أسيوط</option>
      <option value="Sohag">سوهاج</option>
      <option value="Qena">قنا</option>
      <option value="Luxor">الأقصر</option>
      <option value="Aswan">أسوان</option>
      <option value="Suez">السويس</option>
     </select>
        </div>
      </div>
      
    
      <div className='flex xs:items-center xs:gap-1 flex-col items-end'>
        <p className='text-white text-xl font-semibold'>التاريخ</p>
        <p className='text-white text-xl font-semibold'>{datnow.getMonth()+1}/{datnow.getDate()}/{datnow.getFullYear()}</p>
      </div>
      </div>
      <div className='h-[2px] bg-gray-500 w-full'></div>
        <div className='w-full flex gap-5 flex-col '>
          <Test1 text1={data.timeFajr} text2 = 'الفجر'/>
          <Test1 text1={data.timeDhuhr} text2 = 'الظهر'/>
          <Test1 text1={data.timeAsr} text2 = 'العصر'/>
          <Test1 text1={data.timeMaghrib} text2 = 'المغرب'/>
          <Test1 text1={data.timeIsha} text2 = 'العشاء'/>
        </div>
      </>

      ):(<p className='text-xl text-black'>Loding....</p>)}
    </div>
 
  
   
  )
}

