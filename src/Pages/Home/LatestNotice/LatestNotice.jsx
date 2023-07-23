import React from 'react';
import Marquee from "react-fast-marquee";
import moment from 'moment';

const LatestNotice = () => {
    return (
        <>
            <div className=''>
                
                <div className='my-4 bg-slate-200'>

                    <div className='flex container mx-14'>
                        <h1 className='bg-[#FF42A5] px-4 py-2 rounded-md text-white my-4'>Latest</h1>
                        <Marquee speed={100} pauseOnHover={true}>
                            শিক্ষা মন্ত্রণালয়ের নির্দেশক্রমে সাপ্তাহিক ছুটি শুক্রবার ও শনিবার নির্ধারণ করা হল- অধ্যক্ষ।
                            <p className='mx-4'>{moment().format("dddd, MMMM D, YYYY")}</p>
                        </Marquee>
                    </div>
                </div>
            </div>

        </>
    );
};

export default LatestNotice;