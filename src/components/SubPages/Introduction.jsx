import React from "react";
import baale2 from "../../assets/baale2.jpg";
import { Link } from "react-router-dom";

const Introduction = () => {
  return (
    <div className="max-w-[1200px] m-auto">
      <div className="mt-[20px]">
        <h1 className="text-[27px] font-[550] uppercase mt-[20px] flex flex-row items-center max-[430px]:text-[17px] max-[430px]:px-1.5">
          Introduction:{" "}
          <h2 className="font-[550] mt-[8px] text-[14px] max-[430px]:text-[11px] max-[430px]:w-[100%]">
            THE BAALE MOKOLA COMMUNITY
          </h2>
        </h1>
        <div className="flex flex-row justify-center gap-3 mt-[10px] max-[430px]:flex-col">
          <div className="flex-[1] max-[390px]:w-[340px] max-[430px]:m-auto max-[430px]:w-[400px] max-[400px]:w-[370px] max-[400px]:m-auto">
            <img
              className="h-[500px] w-full object-cover rounded-[10px] max-[430px]:w-full max-[430px]:h-[350px]"
              src={baale2}
              alt="baale"
            />
          </div>
          <p className="flex-[1] text-[18px] max-md:text-[16px] mt-3.5 max-[400px]:w-[370px] max-[400px]:m-auto max-[430px]:w-[400px] max-[430px]:m-auto max-[390px]:w-[340px] max-[390px]:m-auto">
            At the investiture of the His Highness, The Baale of our highly
            esteemed and international community, considering the redefinition
            of our entire social order, the benefits of the different social
            media platforms and atlarge, the digital globe. It is a requisition
            for communities and organizations like our community to design and
            develop solutions that will place them in a strategic position to
            harness ICT media and solutions. Imperatively more so, the Mokola
            Community Development Association, requires a solution that can
            connect her children both at home and in the diasporas, and function
            as a selling point of its internationally diverse, modern cultural
            and traditional capacities. These tools shall serve as a manager of
            Elders, Administrative, Indigines and members, projects and events,
            its publications, and other activities. That solution should be a
            web-app that would be resident online and social media responsive.
          </p>
        </div>
        <p className="max-[400px]:px-2 max-[430px]:px-3 max-[390px]:px-2">
          At his coronation, the Baale gave his speech that outlines his
          committment, emphasizing his service, justice and principles of his
          reigns to the people of mokola community.
        </p>
        <div className="mt-1 max-[390px]:px-2 max-[400px]:px-2.5 max-[430px]:px-2.5">
          <p>Click the button below to see the speech of our Baale.</p>
          <Link to='/speech'>
          <button className="border-2 border-[#000] h-[30px] w-[100px] bg-[#000] text-[#fff] cursor-pointer rounded-[10px] mt-1">
            Click here
          </button>
          </Link>
        </div>
      </div>
      <section>
        <div className="mt-3">
          <h1 className="text-[30px] font-[550] text-center max-md:text-[25px] ">About Us</h1>
          <div className="max-md:px-2">
            <h1 className="text-[22px] font-[550] max-md:text-[20px]">Historical Background</h1>
            <ul className="">
              <li className="text-[16px] font-[550]">
                1. Origins and Growth:
                <p className="text-[15px] max-md:text-[15px] font-light mt-1.5 w-full">
                  Mokola's development is closely tied to the colonial and
                  post-colonial urbanization of Ibadan. During the British
                  colonial era, Ibadan was a key administrative and military
                  center, and as the city expanded, Mokola emerged as one of the
                  growing neighborhoods. Its central location made it attractive
                  for settlers, businesses, and later, government
                  establishments. Mokola started out as a residential area for
                  middle- to low-income earners and later became a key transport
                  and commercial hub. Mokola sits at a major road intersection
                  in Ibadan, linking areas like Dugbe, Sabo, Agodi Gate, and
                  Bodija. This made it a transport nexus, encouraging commerce
                  and mobility.As Ibadan grew (especially post-independence),
                  Mokola transformed from a quieter residential zone to a
                  bustling urban center.The area saw the development of markets,
                  garages, and road networks. Mokola became home to Mokola
                  Roundabout, a very active point for taxis, buses, and
                  commercial motorcycles. One notable development was the Cocoa
                  House, just nearby in Dugbe – the first skyscraper in West
                  Africa. Mokola also hosts the Cultural Centre, known for
                  performances, art, and Yoruba culture. In recent years, the
                  Oyo State government has made efforts to beautify and
                  modernize parts of Mokola — including roads and pedestrian
                  bridges.
                </p>
              </li>
              <li className="text-[16px] font-[550] mt-2">
                2. Post-Independence Development:
                <p className="text-[16px] font-light mt-1.5 w-full">
                  After Nigeria’s independence in 1960, Mokola continued to
                  evolve as Ibadan itself modernized. Roads were constructed,
                  and markets, schools, and other amenities sprang up. One key
                  structure associated with Mokola is the Mokola Flyover, which
                  was constructed in the 2010s to ease traffic
                  congestion—highlighting the area's significance in
                  transportation and mobility in the city.
                  <ul className="list-disc text-[15px] font-[550] pl-5 max-md:pl-3">
                    Infrastructure Expansion
                    <li className="text-[15px] font-light">
                      Road Networks: One of the biggest post-independence shifts
                      was the improvement of road networks. Mokola became a key
                      transport hub, linking central Ibadan to the north and
                      east. The Mokola Roundabout grew in importance as a major
                      junction.
                    </li>
                    <li className="text-[15px] font-light">
                      Bridges and Traffic Control: To address congestion,
                      pedestrian bridges and flyovers were constructed in later
                      years, especially during the 2010s under Governor
                      Ajimobi’s administration.
                    </li>
                  </ul>
                  <ul className="text-[16px] font-[550] list-disc pl-5 max-md:pl-3">
                    Urbanization & Commercial Growth
                    <li className="text-[15px] font-light">
                      Markets and Shops: Informal trading and small-scale
                      businesses began flourishing after independence. Mokola
                      turned into a center for tailors, food vendors, motor
                      mechanics, and more.
                    </li>
                    <li className="text-[15px] font-light">
                      Mokola Shopping Complex was established to accommodate
                      growing commerce and formalize business activities.
                    </li>
                    <li className="text-[15px] font-light">
                      Public Transportation: It also became a critical area for
                      motor parks and taxi stands, connecting different parts of
                      the city.
                    </li>
                  </ul>
                </p>
              </li>
              <li className="text-[16px] font-[550] mt-2">
                3. Military and Administrative Significance:
                <p className="text-[16px] font-light mt-1.5 w-full">
                  The area also became known for housing military barracks and
                  police installations. Its proximity to other administrative
                  zones in Ibadan made it important for security and governance.
                </p>
              </li>
            </ul>
            <div>
              <h1 className="text-[22px] font-[550] mt-1.5 ">
                Vision & Objectives
              </h1>
              <p className="mt-2 text-[16px]">
                Mokola is a prominent area in Ibadan, Nigeria, known for its
                vibrant community and institutions. One notable institution in
                this area is St. Louis Grammar School, established on February
                11, 1961, by the Catholic Mission. The school's mission is the
                holistic formation of the girl-child, aiming to develop
                well-rounded students who are academically prepared and active
                participants in their communities.
              </p>
              <p className="text-[16px]">
                Additionally, the Ibadan North West Local Government, which
                encompasses areas like Mokola, has outlined objectives focused
                on community development. These include improving
                infrastructure, enhancing health and education services, and
                promoting cultural and tourism activities to enrich the quality
                of life for residents
              </p>
            </div>
            <div>
              <h1 className="text-[22px] font-[550] mt-1.5">
                Mission/Aims/Targets/Action Plans
              </h1>
              <p className="text-[16px] mt-2">
                ​Mokola, a prominent area in Ibadan, Oyo State, has been the
                focus of several developmental initiatives aimed at enhancing
                its infrastructure and cultural significance.
              </p>
              <ul className="text-[16px] font-[550] mt-1.5 pl-5 max-md:pl-3">
                1. ICT Hub Development
                <li className="text-[16px] font-light mt-1.5">
                  In collaboration with Landgard Investment Limited, the Oyo
                  State Government initiated the construction of an Information
                  and Communications Technology (ICT) Hub in Mokola. This
                  public-private partnership project commenced in February 2021
                  with an 18-month timeline and is nearing completion as of June
                  2022. The hub aims to foster technological advancement and
                  innovation in the region.
                </li>
              </ul>
              <ul className="text-[16px] font-[550] mt-1.5 pl-5 max-md:pl-3 list-disc">
                2. Cultural Centre Revitalization
                <p className="text-[16px] font-light">
                  The Mokola Cultural Centre has been the subject of multiple
                  revitalization efforts:
                </p>
                <li className="text-[16px] font-light">
                  Renovation by Goldberg Lager: In December 2020, Goldberg Lager
                  completed a renovation of the Cultural Centre, transforming it
                  into a modern recreational facility. The upgraded centre now
                  features a cluster market, standard car park, and enhanced
                  relaxation amenities, aiming to provide a destination for
                  relaxation, fun, and excitement.
                </li>
                <li className="text-[16px] font-light">
                  Government Initiatives: On March 31, 2024, during the World
                  Theatre Day celebrations, the Oyo State Commissioner for
                  Culture and Tourism announced plans to transform the Cultural
                  Centre into a world-class edifice. The proposed developments
                  include building a theatre village, a cultural market, and
                  hosting quarterly performances to promote arts and culture,
                  thereby attracting investors and tourists to the state.
                </li>
                <li className="text-[16px] font-light">
                  Legislative Motion for 3D Cinema: In February 2023, Hon.
                  Babajide Gabriel moved a motion in the Oyo State House of
                  Assembly for the urgent renovation and transformation of the
                  Cultural Centre into a modern 3D cinema complex. This
                  initiative aims to rejuvenate the centre, attract tourists,
                  and boost economic activity in Oyo State.
                </li>
              </ul>
            </div>
          </div>
        </div>
         <div>
           <h1 className="text-[30px] font-[550] text-center mt-4 max-md:text-[25px]">Activities/Events Of The Society</h1>
            <div className="grid grid-cols-4 gap-15 max-w-[1000px] m-auto max-[430px]:grid-cols-1 max-[430px]:max-w-[250px] max-[430px]:gap-2">
               <div className="box flex justify-center items-center">
                 <h1 className="text-[28px] uppercase w-[245px] text-[#fff]">religious and traditional festival events</h1>
               </div>
               <div className="box flex justify-center items-center">
                  <h1 className="text-[30px] w-[245px] text-[#fff] uppercase">Conferences</h1>
               </div>
               <div className="box flex justify-center items-center ">
                 <h1 className="text-[28px] text-[#fff] w-[245px] uppercase">Workshops, Seminars and Training</h1>
               </div>
               <div className="box flex justify-center items-center">
                <h1 className="text-[28px] text-[#fff] w-[245px] uppercase">Community Intervention Initiatives</h1>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Introduction;
