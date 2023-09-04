import React from 'react';
import man from '../asets/img/man.png';
import staricon from '../asets/img/staricon.png';
export default function(){
    return (
        <div className='w-[130rem] sm:w-[100rem] px-[80px] py-[80px] sm:px-[120px] sm:py-[5px] sm:h-[20rem] mb-[30px] '>
            <h1 className='text-6xl sm:text-xl font-bold'>Reviews</h1>
            <hr className='mt-3 border-2 border-gray-400 font-bold w-[40%]'></hr>
            <div className='grid grid-cols-4 mt-11 sm:mt-5 text-white gap-[20px]'>
                <div className='border bg-gray-800 w-[450px] h-[190px] md:w-[320px] md:h-[171px] mr-[30px] rounded '>
                    <div className='flex h-13'>
                    <img src={man} alt="" className='w-6 h-full mt-6 ml-7'/>
                    <h4 className='mt-6 ml-2 font-sans font-semibold'>Nidhi Singla</h4>
                    </div>
                    <img src={staricon} alt="" className='w-20 h-12 ml-8' />
                    <p className='text-sm mx-8 text-neutral-300 font-medium '>The staff is very attentive,helping and polite.</p>
                </div>
                <div className='border bg-gray-800 w-[450px] h-[190px] md:w-[320px] md:h-[171px] rounded '>
                    <div className='flex h-13'>
                    <img src={man} alt="" className='w-6 h-full mt-6 ml-7'/>
                    <h4 className='mt-6 ml-2 font-sans font-semibold'>Riya Bansal</h4>
                    </div>
                    <img src={staricon} alt="" className='w-20 h-12 ml-8' />
                    <p className='text-sm mx-8 text-neutral-300 font-medium '>The staff is very attentive,helping and polite.</p>
                </div>
                <div className='border bg-gray-800 w-[450px] h-[190px] md:w-[320px] md:h-[171px] rounded '>
                    <div className='flex h-13'>
                    <img src={man} alt="" className='w-6 h-full mt-6 ml-7'/>
                    <h4 className='mt-6 ml-2 font-sans font-semibold'>Shekhar</h4>
                    </div>
                    <img src={staricon} alt="" className='w-20 h-12 ml-8' />
                    <p className='text-sm mx-8 text-neutral-300  font-medium '>The staff is very attentive,helping and polite.</p>
                </div>
                <div className='border bg-gray-800 w-[450px] h-[190px] md:w-[320px] md:h-[171px] rounded '>
                    <div className='flex h-13'>
                    <img src={man} alt="" className='w-6 h-full mt-6 ml-7'/>
                    <h4 className='mt-6 ml-2 font-sans font-semibold'>Nidhi Singla</h4>
                    </div>
                    <img src={staricon} alt="" className='w-20 h-12 ml-8' />
                    <p className='text-sm mx-8 text-neutral-300 font-medium '>The staff is very attentive,helping and polite.</p>
                </div>
                
            </div>
            
        </div>
    )
}