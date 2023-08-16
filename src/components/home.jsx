import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload,faHeart } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
const Home = () => {
    return (
        <div>
             <div>
    <div className="">
      <div className="mx-60">
        <div>
          <div className="mt-5"><span className="bg-yellow-400 rounded-full px-2 py-1 font-semibold text-[0.8rem]">event ended</span></div>
          <div className="border-b-2 flex justify-between pb-8">
            <div className="text-5xl mt-4 font-bold">API Days Patna</div> 
            <div className=" flex flex-col justify-end">
              <Link to="/details" className="text-blue-600 font-semibold text-[0.9rem]">View details</Link>
              </div>
          </div>
          <div className="py-8">
            <span className="text-lg">Follow this organizer to stay informed on future events</span>
            </div>
          <div className="flex">
            <div className=" bg-slate-100 flex gap-4 px-5 py-5 rounded-md text-slate-800 text-[0.8rem]">
              
              <div>logo</div>
              <div>
                <div className="text-[0.9rem]">By <span className="text-black font-medium">Postman Student Leaders</span></div>
                <div>57 followers</div>
              </div>
              <button className="px-8 rounded-md bg-blue-400 py-2 font-bold text-[0.9rem] text-white">Follow</button>
            </div>
            </div>
        </div>
       
      </div>
      <div className="px-60 bg-slate-100 mt-10">
      <div className="">
          <h1 className="text-xl font-bold py-5 text-slate-700">Events you might like</h1>
          <div className=" flex gap-5">
            <Link to="/details" className="bg-white shadow-md mb-4">
              <div className="relative">
              <img src="banner1.png" className="w-100 h-[30vh]"/>

              <span className='text-slate-700'>
              <FontAwesomeIcon className="absolute right-3 -bottom-5 rounded-full bg-white shadow-sm border p-3" icon={faHeart} size="md" />
              </span>
              </div>
              
              
              <div className="pb-5 p-3 mt-5">
                <span className="font-bold">3-Day Virtual Coding Workshop For Beginners</span>
                <div className="text-red-600 text-[0.8rem] font-semibold">Mon, Aug 21, 2023 3:30 AM IST</div>
                <span className="text-[0.8rem]">Online • Patna, BR</span>
                <div className="text-[0.8rem]">Free</div>

              </div>
              <div className="flex justify-end">
                <span className="text-slate-700 p-2 px-5">
                <FontAwesomeIcon icon={faUpload} />
                </span>
              </div>
            </Link>
            <Link to="/details" className="bg-white shadow-md mb-4">
              <div className="relative">
              <img src="banner1.png" className="w-100 h-[30vh]"/>

              <span className='text-slate-700'>
              <FontAwesomeIcon className="absolute right-3 -bottom-5 rounded-full bg-white shadow-sm border p-3" icon={faHeart} size="md" />
              </span>
              </div>
              
              
              <div className="pb-5 p-3 mt-5">
                <span className="font-bold">3-Day Virtual Coding Workshop For Beginners</span>
                <div className="text-red-600 text-[0.8rem] font-semibold">Mon, Aug 21, 2023 3:30 AM IST</div>
                <span className="text-[0.8rem]">Online • Patna, BR</span>
                <div className="text-[0.8rem]">Free</div>

              </div>
              <div className="flex justify-end">
                <span className="text-slate-700 p-2 px-5">
                <FontAwesomeIcon icon={faUpload} />
                </span>
              </div>
            </Link>
            <Link to="/details" className="bg-white shadow-md mb-4">
              <div className="relative">
              <img src="banner1.png" className="w-100 h-[30vh]"/>

              <span className='text-slate-700'>
              <FontAwesomeIcon className="absolute right-3 -bottom-5 rounded-full bg-white shadow-sm border p-3" icon={faHeart} size="md" />
              </span>
              </div>
              
              
              <div className="pb-5 p-3 mt-5">
                <span className="font-bold">3-Day Virtual Coding Workshop For Beginners</span>
                <div className="text-red-600 text-[0.8rem] font-semibold">Mon, Aug 21, 2023 3:30 AM IST</div>
                <span className="text-[0.8rem]">Online • Patna, BR</span>
                <div className="text-[0.8rem]">Free</div>

              </div>
              <div className="flex justify-end">
                <span className="text-slate-700 p-2 px-5">
                <FontAwesomeIcon icon={faUpload} />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
     
       
       <div>FOOTER</div>
    </div>
   </div>
            
        </div>
    );
}

export default Home;
