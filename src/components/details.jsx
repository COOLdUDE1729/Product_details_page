import React from 'react';
import h1 from '../asets/img/h1.jpeg';
import head3 from '../asets/img/head3.jpg';
export default function() {
    return (
        <div className='w-[1440px] mx-auto p-[80px] sm:px-[120px] sm:py-[50px] bg-white grid sm:grid-cols-2 gap-[30px] '>
            <div>
                <img src={head3} alt="product" className='w-[100%] mx-auto sm:w-[588px] sm:h-[397px]'/>
                <div className='flex justify-center mx-auto my-[20px] sm:my-[10px] w-full'>
                       <img src={h1} alt="" className='mx-[13px] sm:w-[88px] w-[15%] h-[150px] sm:h-[59px] sm:mx-[7px] border-4 sm:border-2 border-gray-400'/>
                       <img src={h1} alt="" className='mx-[13px] sm:w-[88px] w-[15%] h-[150px] sm:h-[59px] sm:mx-[7px] border-4 sm:border-2 border-gray-400'/>
                       <img src={h1} alt="" className='mx-[13px] sm:w-[88px] w-[15%] h-[150px] sm:h-[59px] sm:mx-[7px] border-4 sm:border-2 border-gray-400'/>
                       <img src={h1} alt="" className='mx-[13px] sm:w-[88px] w-[15%] h-[150px] sm:h-[59px] sm:mx-[7px] border-4 sm:border-2 border-gray-400'/>
                </div>
            </div>  
            <div className='w-[100%] h-[78rem] mx-auto  my-[80px] sm:my-0 sm:w-[582px] sm:h-[397px]'>
                <h1 className='font-bold sm:ml-5 mt-3 sm:mt-0 text-6xl sm:text-2xl'>
                    Philips New Torso Headphone
                </h1>
                <h1 className='font-bold sm:ml-5 mt-8 sm:mt-1 text-6xl sm:text-xl'>
                    Double Base Headset
                </h1>
                <hr className='mt-2 sm:mt-1 sm:ml-4 border-2 sm:border-1 border-gray-400 font-bold sm:font-semibold'></hr>
                <div className='flex juatify-between'>
                     <ul className='inline-block sm:ml-5 mt-3 sm:mt-1 font-medium text-5xl sm:text-lg'>
                        <li className='my-14 sm:my-1'>Pricing</li>
                        <li className='my-14 sm:my-4'>Model</li>
                        <li className='my-14 sm:my-4'>Engine </li>
                        <li className='my-14 sm:my-4'>Engine Type</li>
                        <li className='my-14 sm:my-4'>Max PTO</li>
                        <li className='my-14 sm:my-4'>HP</li>
                        <li className='my-14 sm:my-3'>Displacement</li>
                    </ul>
                    <ul className='inline-block sm:mr-5 mt-3 font-medium sm:mt-1 ml-auto text-right text-5xl sm:text-lg'>
                        <li className='my-14 sm:my-1'>15000</li>
                        <li className='my-14 sm:my-4'>Model Name</li>
                        <li className='my-14 sm:my-4'>1520bhp </li>
                        <li className='my-14 sm:my-4'>2WD</li>
                        <li className='my-14 sm:my-4'>48HP</li>
                        <li className='my-14 sm:my-4'>55HP</li>
                        <li className='my-14 sm:my-3'>2931cc</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-[50px] sm:gap-2 mt-[20px] sm:mt-1'>
                    <div className='flex gap-[50px] sm:gap-[20px]'>
                        <button className='text-6xl sm:text-base border-4 sm:border-2 border-black  bg-black font-semibold text-white w-[48%] p-11 sm:p-1'>Take AI Trial</button>
                        <button className='text-6xl sm:text-base border-4 sm:border-2 border-black font-semibold w-[48%] p-11 sm:p-1'>Contact Us</button>
                    </div>
                    <div className='flex gap-[50px] sm:gap-[20px]'>
                        <button className='text-6xl sm:text-base border-4 sm:border-2 border-black font-semibold w-[48%] p-11 sm:p-1'>Let's bargain</button>
                        <button className='text-6xl sm:text-base border-4 sm:border-2 border-black  bg-black font-semibold text-white w-[48%] p-11 sm:p-1'>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}