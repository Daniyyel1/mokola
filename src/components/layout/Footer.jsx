import React from 'react'

const Footer = () => {
  return (
    <footer>
    <div className='bg-[#eae5dd] h-[18vh] max-md:h-[36vh] max-md:py-1.5 max-md:mt-3'>
       <div className='max-w-[1100px] m-auto mt-7 flex items-center gap-[120px] max-md:flex-col max-md:gap-[5px] max-md:items-start max-md:mt-4 max-[390px]:max-w-[320px] max-[400px]:max-w-[340px] max-[430px]:max-w-[380px]'>
          <h1 className='text-[25px] font-[550] max-md:text-[20px]'>
            Mokola Ibadan Community
          </h1>
           <div className='footerLinks flex items-center mt-7 gap-[60px] max-md:flex-col max-md:gap-[10px] max-md:items-start max-md:mt-1'>
             <ul>
              <li>Home</li>
              <li>Community</li>
             </ul>
             <ul>
              <li>Support</li>
              <li>Contact</li>
             </ul>
             <ul>
              <li>Faq</li>
              <li>Tel:</li>
             </ul>
           </div>
       </div>
    </div>
    </footer>
  )
}

export default Footer