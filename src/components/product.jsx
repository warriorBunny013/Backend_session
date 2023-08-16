import React from 'react';
const Product = () => {
    return (
       <>
       <div className=''>
        <div className=' flex justify-center'>
            
            <img src='banner1.png' alt='banner' className='rounded-3xl' />
        
            
        </div>
        <div className=' flex mt-10 mx-40 px-5 font-semibold text-slate-800 justify-between'>
            <div className='flex'>Saturday, August 26</div>
            <div className='flex gap-4'>
                <span>heart</span>
                <span>upload</span>
            </div>
        </div>
        <div className=' mx-40 flex justify-between'>
            <div className='w-[88vh]'>
                <h1 className='font-bold text-5xl p-4'>Avid Media Composer for Premiere Users Bootcamp</h1>
                <p className='p-5 font-semibold text-[0.8rem]'>2 DAY BOOTCAMP • INTRO TO AVID MEDIA COMPOSER BASICS • DOUBLE YOUR SKILLSET, DOUBLE YOUR INCOME</p>
                <div className='flex justify-between rounded-md mb-5 p-4 bg-slate-100 '>
                    <div>
                        <span>By Diana J. Brodie</span>
                        <div>27 followers</div>
                    </div>
                    <button className="px-8 rounded-md bg-blue-400 py-2 font-bold text-[0.9rem] text-white">Follow</button>
                </div>

            </div>
            <div className=' w-[50vh] flex flex-col justify-center'>
                <div className=' border p-5 flex flex-col rounded-xl'>
                    <span className='flex justify-center p-5'>$ 890</span>
                    <button className="px-8 rounded-md bg-orange-400 py-2 font-bold text-[0.9rem] text-white">Reserve a spot</button>
                </div>
            </div>
        </div>
        <div className='mx-40 '>
           <div className='my-10'>
            <p className='font-bold text-xl'>When and Where</p>
             <div className='flex'> 
                <div className=' text-[1.1rem] border-r-2 p-4 pr-10'>
                  <p className='font-semibold'>Date and time</p>
                  <p className='text-[0.9rem] text-slate-800'>August 26 · 10:30pm - August 28 · 3:30am IST</p>
                </div>
                <div className='text-[1.1rem] p-4 pl-10'>
                  <p className='font-semibold'>Location</p>
                  <p className='text-[0.9rem] text-slate-800'>Online</p>
                </div>
             </div>
           </div>
           <div className='my-10'>
            <p className='font-bold text-xl'>Refund policy</p>
             <div className='text-[0.9rem] text-slate-800 p-5'> 
             Contact the organizer to request a refund.
Eventbrite's fee is nonrefundable.
             </div>
           </div>
           <div className='my-10'>
            <p className='font-bold text-xl'>About this event</p>
            <div className='flex gap-10 my-2'>
                <div  className='font-semibold'>1 day 5 hours</div>
                <div   className='font-semibold'>1 day 5 hours</div>
            </div>
            
           </div>
           <div className='font-bold text-xl my-10'>Description</div>
           <div className='font-bold text-xl my-10'>Frequently asked questions</div>
           
        </div>
       </div>
       </>
    );
}

export default Product;
