import React from 'react';
import store from '../asets/img/store.jpeg';
import {CiShoppingTag} from 'react-icons/ci' ;
export default function() {
    return (
        <div className=' mx-40 h-[20rem] my-10 '>
            <h1 className='mx-4 text-2xl font-bold mt-5'>Similar Products</h1>
            <hr className='mx-4 mt-1 border-2 border-gray-400 font-bold w-[20%]'></hr>

            <div className=' h-[90%] mt-3 bg-gray-50  flex'>
                <div className=' w-[18%] h-full ml-5'>
                    <img src={store} alt="" className='px-6 pt-3 rounded'/>
                    <h2 className='font-bold mx-5 mt-2'>Luisa via Roma</h2>
                    <div className='flex'>
                        <div className='w-10 h-4 border border-black text-center ml-4 mt-2'> 
                            <p className='text-xs '>55</p>
                        </div>
                        <p className='pl-3 mt-1 text-xs'>Mens's clothing , women western kids clothing</p>
                    </div>
                    <div className='flex'>
                        <CiShoppingTag className='ml-3'/>
                        <p className='text-xs pl-2'>Shirts starting from 599</p>
                    </div>
                    <div className='flex'>
                        <CiShoppingTag className='ml-3'/>
                        <p className='text-xs pl-2'>Free Delivery</p>
                    </div>
                    <button className='border border-black font-bold text-xs px-3 py-1 w-[90%] mt-2 bg-gray-300 rounded ml-2'>
                        View details</button>
                </div>  
                <div className=' w-[18%] h-full ml-10'>
                    <img src={store} alt="" className='px-6 pt-3'/>
                    <h2 className='font-bold mx-5 mt-2'>Luisa via Roma</h2>
                    <div className='flex'>
                        <div className='w-10 h-4 border border-black text-center ml-4 mt-2'> 
                            <p className='text-xs'>55</p>
                        </div>
                        <p className='pl-3 mt-1 text-xs'>Mens's clothing , women western kids clothing</p>
                    </div>
                    <div className='flex'>
                        <CiShoppingTag className='ml-3'/>
                        <p className='text-xs pl-2'>Shirts starting from 599</p>
                    </div>
                    <div className='flex'>
                        <CiShoppingTag className='ml-3'/>
                        <p className='text-xs pl-2'>Free Delivery</p>
                    </div>
                    <button className='border border-black font-bold text-xs px-3 py-1 w-[90%] mt-2 bg-gray-300 rounded ml-2'>
                        View details</button>
                </div>
                <div className=' w-[18%] h-full ml-10'>
                    <img src={store} alt="" className='px-6 pt-3'/>
                    <h2 className='font-bold mx-5 mt-2'>Luisa via Roma</h2>
                    <div className='flex'>
                        <div className='w-10 h-4 border border-black text-center ml-4 mt-2'> 
                            <p className='text-xs'>55</p>
                        </div>
                        <p className='pl-3 mt-1 text-xs'>Mens's clothing , women western kids clothing</p>
                    </div>
                    <div className='flex'>
                        <CiShoppingTag className='ml-3'/>
                        <p className='text-xs pl-2'>Shirts starting from 599</p>
                    </div>
                    <div className='flex'>
                        <CiShoppingTag className='ml-3'/>
                        <p className='text-xs pl-2'>Free Delivery</p>
                    </div>
                    <button className='border border-black font-bold text-xs px-3 py-1 w-[90%] mt-2 bg-gray-300 rounded ml-2'>
                        View details</button>
                </div>
                <div className='k w-[18%] h-full ml-10'>
                    <img src={store} alt="" className='px-6 pt-3'/>
                    <h2 className='font-bold mx-5 mt-2'>Luisa via Roma</h2>
                    <div className='flex'>
                        <div className='w-10 h-4 border border-black text-center ml-4 mt-2'> 
                            <p className='text-xs'>55</p>
                        </div>
                        <p className='pl-3 mt-1 text-xs '>Mens's clothing , women western kids clothing</p>
                    </div>
                    <div className='flex'>
                        <CiShoppingTag className='ml-3'/>
                        <p className='text-xs pl-2'>Shirts starting from 599</p>
                    </div>
                    <div className='flex'>
                        <CiShoppingTag className='ml-3'/>
                        <p className='text-xs pl-2'>Free Delivery</p>
                    </div>
                    <button className='border border-black font-bold text-xs px-3 py-1 w-[90%] mt-2 bg-gray-300 rounded ml-2'>
                        View details</button>
                </div>
            </div>  
        </div>
    );
}