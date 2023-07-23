import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import infrapic from '../../../assets/infra.jpg'
const Event = () => {
    return (
        <>
            <SectionTitle heading={"Recent Event"} subHeading={"Life at Daffodil is very much eventful. Through a lot of meaningful and impactful events students get the opportunity to develop their skills and portfolio beyond the curriculam"}></SectionTitle>

            <div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 container mx-auto">

                    <div className="rounded overflow-hidden shadow-lg mx-1">
                        <img src={infrapic} className="w-full h-52" />
                        <div className="px-6 text-center py-4">
                            <div className="font-bold text-xl mb-2">DIU 21ST FOUNDING ANNIVERSARY </div>
                            <div className=" text-sm mb-2"> With great enthusiasm and festive mood, DIU celebrates its 21st year of glory at Daffodil Smart City, Birulia, Savar, Dhaka. </div>
                            <div className="card-actions justify-center">
                                <button className="btn">Read More</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Event;