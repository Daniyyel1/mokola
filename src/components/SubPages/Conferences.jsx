import React from 'react'

const Conferences = () => {
  return (
    <div>
        <div className='max-w-[1200px] m-auto max-[400px]:max-w-[360px] max-[400px]:text-center max-[390px]:max-w-[340px] max-[430px]:max-w-[400px] max-[430px]:text-center'>
           <div className='mt-[120px] max-md:mt-[80px]'>
               <h1 className='text-[20px] text-center font-[550] max-[400px]:text-[18px]'>Conferences</h1>
              <p className='text-[18px] max-[400px]:text-[16px] max-[390px]:text-[15px]'>Mokola, located within Ibadan North, Oyo State, serves as a vibrant hub for various conferences and events. Here are some notable conferences and venues associated with Mokola:​</p>
           </div>
        </div>
        <div className='max-w-[1200px] m-auto max-[400px]:max-w-[370px] max-[400px]:m-auto max-[390px]:max-w-[346px] max-[430px]:max-w-[400px]'>
           <ul className='list-disc pl-5 max-md:pl-3'>
              <li className='text-[18px] font-[550] max-md:text-[16px]'>
              National Scientific Conference and Annual General Meeting:
                <p className='text-[17px] font-light max-[400px]:text-[16px] max-[390px]:text-[15px] max-[430px]:text-[17px]'>In November 2021, the Dietitians Association of Nigeria hosted its National Scientific Conference and Annual General Meeting at Premier Hotel in Mokola. This event brought together professionals in the field of dietetics and nutrition.</p>
              </li>
              <li className='text-[18px] font-[550] max-md:text-[16px]'>
              Godly Courtship and Marriage Advocate (GCMA) Conference:
                <p className='text-[17px] font-light max-[400px]:text-[16px] max-[390px]:text-[15px] max-[430px]:text-[17px]'>Held in February 2024 at the Army Barracks in Mokola, this conference focused on themes related to godly relationships and marriage advocacy.</p>
              </li>
              <li className='text-[18px] font-[550] max-md:text-[16px]'>
              Mystery Conference 2024:
                <p className='text-[17px] font-light max-[400px]:text-[16px] max-[390px]:text-[15px] max-[430px]:text-[17px]'>Organized by Mystery Media and the Gospel Outreach Christian Centre, this conference took place in July 2024, featuring teachings and prayers centered around the theme "Fullness."</p>
              </li>
           </ul>
        </div>
    </div>
  )
}

export default Conferences