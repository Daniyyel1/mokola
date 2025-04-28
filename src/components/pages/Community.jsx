import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import ore from '../../assets/ore.jpg'
import ore1 from '../../assets/ore1.jpg'
import ore2 from '../../assets/ore2.jpg'
import ore3 from '../../assets/ore3.jpg'
import sabo from '../../assets/sabo.jpeg'
import sabo1 from '../../assets/sabo1.jpg'
import sabo2 from '../../assets/sabo2.jpg'
import sabo3 from '../../assets/sabo3.jpg'
import ago from '../../assets/ago.jpg'
import ago1 from '../../assets/ago1.jpeg'
import ago2 from '../../assets/ago2.jpg'
import ago3 from '../../assets/ago3.jpg'


const Community = () => {

  const Slides = [
     {
      id:1,
      img:ore,
      des: 'adewumi layout, oremeji, mokola ibadan.'
     },
     {
      id:2,
      img:ore1,
       des: 'structurally sound tenement building, oremeji mokola,samonda, ibadan'
     },
     {
      id:3,
      img:ore2,
      des: 'mokola fly-over ibadan.'
     },
     {
      id:4,
      img:ore3,
      des: 'mokola area of ibadan, oyo state.'
     },
  ]

  const SaboSlides = [
    {
      id:1,
      img:sabo,
      des: 'sabo community road'
    },
    {
      id:2,
      img:sabo1,
      des: 'college university, sabo, mokola, ibadan.'
    },
    {
      id:3,
      img:sabo2,
      des: 'sabo central mosque, mokola ibadan.'
    },
    {
      id:4,
      img:sabo3,
      des: 'sabo street.'
    },
  ]

  const AgoSlides = [
     {
      id:1,
      img:ago,
      des: 'agodi gardens, mokola hill, ibadan, nigeria.'
     },
     {
      id:2,
      img:ago1,
      des: 'commercial story building, ago tapa, mokola, ibadan.'
     },
     {
      id:3,
      img:ago2,
      des: 'cultural center mokola, ibadan.'
     },
     {
      id:4,
      img:ago3,
      des: 'constrution of jade cuisine, mokola, ibadan.'
     },
  ]

  return (
    <div className='w-full'>
        <div className='max-w-[1200px] m-auto max-[400px]:max-w-[360px] max-[400px]:text-center max-[390px]:max-w-[340px] max-[430px]:max-w-[400px] max-[430px]:text-center'>
           <div className='mt-[120px] max-md:mt-[90px]'>
             <h1 className='text-[20px] text-center font-[550] max-[400px]:text-[18px]' >Oremeji, Mokola Ibadan</h1>
             <p className='text-[18px] max-[400px]:text-[16px] max-[390px]:text-[15px]'>Oremeji is a neighborhood situated within the Mokola area of Ibadan, Oyo State, Nigeria. This locality is known for its blend of residential and commercial properties, contributing to the vibrant urban landscape of Ibadan.</p>
             <p className='text-[18px] max-[400px]:text-[16px] max-[390px]:text-[15px]'>Overall, Oremeji in Mokola stands out as a dynamic neighborhood that combines educational facilities, residential properties, and accessible transportation, contributing to the diverse and vibrant character of Ibadan.</p>
           </div>
        </div>
        <div className='w-full relative overflow-hidden'>
        <Swiper
         modules={[ Autoplay]}
         spaceBetween={30}
         slidesPerView={1}
         autoplay={{ delay: 3000, disableOnInteraction: false }}
         loop={true}
        >
          {
            Slides.map((slide)=>(
              <SwiperSlide key={slide.id}>
                  <div className='flex flex-col'>
                    <div className='w-[100%] h-[500px]'>
                       <img className='object-center w-[100%] h-[100%]' src={slide.img} alt='images' />
                    </div>
                    <div className=''>
                      <h1 className='text-center text-[17px] font-[550] capitalize max-[390px]:text-[15px] max-[430px]:text-[16px] max-[400px]:text-[15px]'>{slide.des}</h1>
                    </div>
                  </div>
                </SwiperSlide>
            ))
          }
        </Swiper>
        </div>
        <div className='max-w-[1200px] m-auto max-[400px]:max-w-[370px] max-[400px]:m-auto max-[390px]:max-w-[346px] max-[430px]:max-w-[400px]'>
            <ul>
              <li className='text-[19px] font-[550] max-md:text-[18px]'>Educational Institutions:
                <p className='text-[18px] font-light max-[400px]:text-[16px] max-[390px]:text-[15px] max-[430px]:text-[17px]'>One notable educational institution in Oremeji is the Oba Akinbiyi High School II, which serves the local community by providing secondary education</p>
              </li>
              <li className='text-[19px] font-[550] max-md:text-[18px]'>Transportation and Accessibility:
                <p className='text-[18px] font-light max-[400px]:text-[16px] max-[390px]:text-[15px] max-[430px]:text-[17px]'>Oremeji benefits from its proximity to major roads and transportation hubs, making commuting to other parts of Ibadan convenient. The area's infrastructure supports both private and public transportation, facilitating easy movement for residents and visitors alike.</p>
              </li>
              <li className='text-[19px] font-[550] max-md:text-[18px]'>Community Leadership:
                <p className='text-[18px] font-light max-[400px]:text-[16px] max-[390px]:text-[15px] max-[430px]:text-[17px]'>However, the area benefits from collaborative efforts between local organizations and law enforcement to ensure community safety and development.</p>
                <p className='text-[18px] font-light max-[400px]:text-[16px] max-[390px]:text-[15px] max-[430px]:text-[17px]'>For instance, in July 2024, Assistant Commissioner of Police (ACP) Mohammed Ajose assured stakeholders in Mokola, including Oremeji, of enhanced security collaboration. During this engagement, community leaders, such as the Aare Musulumi of Adamasingba and environs, Dr. Raymond Adeyinka Adewale, emphasized the importance of professionalism and cooperation between the police and the community.</p>
                <p className='text-[18px] font-light max-[400px]:text-[16px] max-[390px]:text-[15px] max-[430px]:text-[17px]'>These collective efforts by professional associations, health advocacy groups, and law enforcement contribute significantly to the development and well-being of the Oremeji community.</p>
              </li>
            </ul>
        </div>
        <div>
           <div className='max-w-[1200px] mt-[20px] m-auto max-[400px]:max-w-[360px] max-[400px]:text-center max-[390px]:max-w-[340px] max-[430px]:max-w-[400px] max-[430px]:text-center'>
              <h1 className='text-[20px] text-center font-[550] max-[400px]:text-[18px]'>Sabo Mokola, Ibadan</h1>
              <p className='text-[18px] max-[400px]:text-[16px] max-[390px]:text-[15px]'>​Sabo Mokola is a densely populated neighborhood in Ibadan, Oyo State, Nigeria, situated near the bustling Mokola Roundabout. It is home to a diverse community, predominantly comprising Hausa residents, and is known for its vibrant markets, cultural landmarks, and socio-economic challenges.</p>
           </div>
           <div className='relative overflow-hidden w-full'>
           <Swiper
         modules={[ Autoplay]}
         spaceBetween={30}
         slidesPerView={1}
         autoplay={{ delay: 3000, disableOnInteraction: false }}
         loop={true}
        >
          {
            SaboSlides.map((item)=>(
              <SwiperSlide key={item.id}>
                  <div className='flex flex-col'>
                    <div className='w-[100%] h-[500px]'>
                       <img className='object-center w-[100%] h-[100%]' src={item.img} alt='images' />
                    </div>
                    <div className=''>
                      <h1 className='text-center text-[17px] font-[550] capitalize max-[390px]:text-[15px] max-[430px]:text-[16px] max-[400px]:text-[15px]'>{item.des}</h1>
                    </div>
                  </div>
                </SwiperSlide>
            ))
          }
        </Swiper>
           </div>
             <div className='max-w-[1200px] m-auto max-[400px]:max-w-[370px] max-[400px]:m-auto max-[390px]:max-w-[346px] max-[430px]:max-w-[400px]'>
                <h1 className='text-[20px] font-[550] max-md:text-[19px]'>Key Features of Sabo Mokola</h1>
               <ul className=' list-disc pl-5 max-md:pl-3'>
                <li className='text-[18px] font-[550] max-md:text-[16px] '>Cultural and Religious Centers:
                  <p className='text-[17px] font-light max-[400px]:text-[16px] max-[390px]:text-[15px] max-[430px]:text-[17px]'>The area houses the Sabo Central Mosque, a significant place of worship located near the Sabo Public Healthcare Centre and Alafia Hospital. These institutions serve as central hubs for the community's religious and health-related activities .</p>
                  </li>
                 <li className='text-[18px] font-[550] max-md:text-[16px] '>Commercial Activity:
                  <p className='text-[17px] font-light max-[400px]:text-[16px] max-[390px]:text-[15px] max-[430px]:text-[17px]'>Sabo Mokola is a lively commercial zone where traders sell a variety of goods, including second-hand furniture, electronics, and household items. The proximity to Mokola Roundabout enhances its accessibility, connecting it to major areas like Dugbe, University of Ibadan, and Agodi.</p>
                 </li>
                 <li className='text-[18px] font-[550] max-md:text-[16px]'>Socio-Economic Challenges:
                  <p className='text-[17px] font-light max-[400px]:text-[16px] max-[390px]:text-[15px] max-[430px]:text-[17px]'>The community faces issues such as inadequate waste management, with refuse often dumped near residences, leading to unsanitary conditions. Additionally, the area has a significant population of beggars and destitute individuals, some of whom sleep under sheds and rely on alms for survival . Efforts by the Oyo State government to relocate these individuals have met with limited success, as many return to Sabo Mokola.</p>
                 </li>
               </ul>
             </div>

             <div className='max-w-[1200px] mt-[20px] m-auto max-[400px]:max-w-[360px] max-[400px]:text-center max-[390px]:max-w-[340px] max-[430px]:max-w-[400px] max-[430px]:text-center'>
               <h1 className='text-[20px] text-center font-[550] max-[400px]:text-[18px]'>Ago Tapa</h1>
               <p className='text-[18px] max-[400px]:text-[16px] max-[390px]:text-[15px]'>Ago Tapa is a neighborhood located within the Mokola area of Ibadan, Oyo State, Nigeria. It's part of Ward IX in the Ibadan North Local Government Area, and is situated near landmarks like Oba Akinbiyi High School and Alafia Primary School .​</p>
             </div>
             <div className='overflow-hidden relative'>
             <Swiper
         modules={[ Autoplay]}
         spaceBetween={30}
         slidesPerView={1}
         autoplay={{ delay: 3000, disableOnInteraction: false }}
         loop={true}
        >
          {
            AgoSlides.map((item)=>(
              <SwiperSlide key={item.id}>
                  <div className='flex flex-col'>
                    <div className='w-[100%] h-[500px]'>
                       <img className='object-center w-[100%] h-[100%]' src={item.img} alt='images' />
                    </div>
                    <div className=''>
                      <h1 className='text-center text-[17px] font-[550] capitalize max-[390px]:text-[14px] max-[430px]:text-[16px] max-[400px]:text-[15px]'>{item.des}</h1>
                    </div>
                  </div>
                </SwiperSlide>
            ))
          }
        </Swiper>
             </div>
             <div className='max-w-[1200px] m-auto max-[400px]:max-w-[370px] max-[400px]:m-auto max-[390px]:max-w-[346px] max-[430px]:max-w-[400px]'>
               <ul className='list-disc pl-5 max-md:pl-3'>
                  <li className='text-[18px] font-[550] max-md:text-[16px] '>Community and Services:
                    <p className='text-[17px] font-light max-[400px]:text-[16px] max-[390px]:text-[15px] max-[430px]:text-[17px]'>The area hosts various community services and initiatives. Notably, the Ago Tapa Healthcare Center provides essential health services, including prenatal care and hygiene support for pregnant and nursing women.</p>
                     <p className='text-[17px] font-light max-[400px]:text-[16px] max-[390px]:text-[15px] max-[430px]:text-[17px]'>Additionally, organizations like the Hascha Foundation have been active in the community, addressing issues such as hunger.</p>
                  </li>
                  <li className='text-[18px] font-[550] max-md:text-[16px]'>
                  Economic and Social Activities:
                  <p className='text-[17px] font-light max-[400px]:text-[16px] max-[390px]:text-[15px] max-[430px]:text-[17px]'>Ago Tapa is a hub for local commerce, featuring small businesses and thrift shops. For instance, Shally Essentials & Thrift operates in the area, offering affordable goods to residents. The neighborhood also engages in health awareness campaigns; a notable example is a hepatitis B and C screening conducted for over 100 residents.</p>
                  </li>
               </ul>
             </div>

             <div className='max-w-[1200px] mt-[20px] m-auto max-[400px]:max-w-[360px] max-[400px]:text-center max-[390px]:max-w-[340px] max-[430px]:max-w-[400px] max-[430px]:text-center'>
              <h1 className='text-[20px] text-center font-[550] max-[400px]:text-[18px]'>Ago Ebira</h1>
              <p className='text-[18px] max-[400px]:text-[16px] max-[390px]:text-[15px]'>Ago Ebira in Mokola, Ibadan, refers to a neighborhood within the Mokola area that is home to a significant population of the Ebira people, an ethnic group originally from Kogi State and other parts of North-Central Nigeria. This community has been part of Ibadan's multicultural fabric for decades, contributing to the city's rich diversity.</p>
             </div>
             <div className='max-w-[1200px] m-auto max-[400px]:max-w-[370px] max-[400px]:m-auto max-[390px]:max-w-[346px] max-[430px]:max-w-[400px]'>
                <ul className='list-disc pl-5 max-md:pl-3'>
                  <li className='text-[18px] font-[550] max-md:text-[16px] '>Community Institutions:
                    <p className='text-[17px] font-light max-[400px]:text-[16px] max-[390px]:text-[15px] max-[430px]:text-[17px]'>A notable institution in the area is the Ago-Ibira Central Mosque, which serves as a religious and social hub for the Ebira Muslim community. In 2022, two officials from the mosque were involved in a legal case concerning alleged misappropriation of funds. </p>
                  </li>
                  <li className='text-[18px] font-[550] max-md:text-[16px] '>Local Infrastructure:
                    <p className='text-[17px] font-light max-[400px]:text-[16px] max-[390px]:text-[15px] max-[430px]:text-[17px]'>The Mokola Primary Health Center, located in the Ago Tapa area of Ibadan North, provides essential healthcare services to residents. Established in 2016, the center offers medical, surgical, pediatric, obstetric, and gynecological services, among others. However, it lacks facilities like an onsite laboratory and ambulance services.</p>
                  </li>
                </ul>
                <p>Other communities are Oju-Irin, Oke-Itunu/Okoro, Ago Ilorin.</p>
             </div>
        </div>
    </div>
  )
}

export default Community