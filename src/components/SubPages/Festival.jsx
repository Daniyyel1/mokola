import React from 'react'

const Festival = () => {
  return (
    <div className='mt-[120px] max-md:mt-[90px]'>
        <div className='max-w-[1200px] m-auto max-[400px]:max-w-[360px] max-[400px]:text-center max-[390px]:max-w-[340px] max-[430px]:max-w-[400px] max-[430px]:text-center'>
         <h1 className='text-[20px] text-center font-[550] max-[400px]:text-[18px]'>Religious and traditional Festivals and events </h1>
          <p className='text-[18px] max-[400px]:text-[16px] max-[390px]:text-[15px]'>Mokola Ibadan North, like other areas in Yoruba land, hosts both religious and traditional festivals. These include the annual Sango Festival, a celebration of the Yoruba deity Sango, and the Oro Festival, a male-centric traditional event. The Oke-Ibadan festival is also a notable event in the region, showcasing the unique traditions and values of the Aboke people.</p>
        </div>
        <div className='max-w-[1200px] m-auto max-[400px]:max-w-[370px] max-[400px]:m-auto max-[390px]:max-w-[346px] max-[430px]:max-w-[400px]'>
            <ul className='list-disc pl-7 max-md:pl-3'>
                <li className='text-[18px] font-[550] max-md:text-[16px]'>Sango Festival:
                    <p className='text-[17px] font-light max-[400px]:text-[16px] max-[390px]:text-[15px] max-[430px]:text-[17px]'>This festival, which marks the beginning of the Yoruba traditional New Year in August, is a significant ancestral worship event dedicated to the deity Sango. It is a ten-day festival strongly connected to the social, religious, cultural, and political institutions of the Oyo State. </p>
                </li>
                <li className='text-[18px] font-[550] max-md:text-[16px]'>Oro Festival:
                    <p className='text-[17px] font-light max-[400px]:text-[16px] max-[390px]:text-[15px] max-[430px]:text-[17px]'>This patriarchal festival, celebrated by male descendants of Yoruba origin, involves various rituals and ceremonies specific to the location where it's being held. </p>
                </li>
                <li className='text-[18px] font-[550] max-md:text-[16px]'>Oke-Ibadan Festival:
                    <p className='text-[17px] font-light max-[400px]:text-[16px] max-[390px]:text-[15px] max-[430px]:text-[17px]'>This annual festival in Yorubaland aims to reinforce the values, beliefs, traditions, and cultural distinctiveness of the Aboke people. It features activities designed to entertain, educate, promote unity, and address inappropriate behavior within the community. </p>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Festival