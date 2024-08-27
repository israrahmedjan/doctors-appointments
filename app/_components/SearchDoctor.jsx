'use client'
import React, { useEffect, useRef, useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search,Loader,GraduationCap, MapPin,X } from "lucide-react";
import Image from "next/image";
import GlobalApi from "../_utils/GlobalApi";
import Link from 'next/link';

function SearchDoctor() {
    const [docName, setDocName] = useState("");
    const [doctorList, setDoctorList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showList, setShowList] = useState(false); // State to control the visibility of the list
    const btnRef = useRef();

    const fetchDoctorList = async (name) => {
        try {
            setLoading(true);
            const response = await GlobalApi.searchDoctorByName(name);
            setDoctorList(response.data.data);
        } catch (error) {
            console.error("Error fetching doctor data:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (docName.length > 2 && showList) {
            fetchDoctorList(docName);
        }
    }, [docName, showList]);

    const handleDoctorSelection = (doctor) => {
        btnRef.current.focus();
        btnRef.current.style.border = "2px solid gray";

        // Set the input field to display the selected doctor's name
        setDocName(doctor.attributes?.Name);

        // Hide the doctor list
        setShowList(false);
        setDoctorList([]);
    };

    const handleInputChange = (e) => {
        setDocName(e.target.value);
        setShowList(true); // Show the list when typing
    };

    return (
        <div className="relative w-full mt-3 max-w-sm flex flex-col items-center">
            <h1 className="text-3xl font-bold">Search Doctors</h1>
            <p>
                Search for a doctor and book an appointment with one click.
               
            </p>
            <div className="flex w-full mt-3 max-w-sm items-center space-x-2">
          


             <Input
             ref={btnRef}
                type="text"
                placeholder="Search..."
                onChange={handleInputChange}
                value={docName}
                className="w-full pr-20 outline-none focus:outline-none" // Add padding to the right for the loading text
            />
                <div className='absolute w-7 h-7 right-0 pr-4'>
                <Search className="text-primary" />
                </div>
                {loading && (
                <div className="absolute right-[10px] pr-4">
                     <Loader className="w-6 h-6 text-primary animate-spin" />
                </div>
            )}
               
                {/* <Button ref={btnRef} type="button">
                    <Search className="h-4 w-4 mr-2" />
                    Search
                </Button> */}
            </div>
           
            {(doctorList.length > 0 && showList && !loading) && (
                <div className='flex flex-col w-full border-b-gray-500 border rounded-md bg-gray-100 absolute my-[140px] gap-2'>
                    <div className='float-right w-full flex justify-end mr-0 pr-2 cursor-pointer'> <X className="w-4 h-4 mr-2" onClick={()=>setShowList(false)} /></div>
                    {doctorList.map((doctor, index) => (
                        <div
                            key={index}
                            onClick={() => handleDoctorSelection(doctor)}
                            className="cursor-pointer hover:bg-gray-100 p-2 border-b-gray-300 border flex justify-start gap-2"
                        >
                            <Image src={GlobalApi.getStrapiMedia(doctor.attributes?.image,'thumbnail')} width={75} height={75} />
                           <span  className="text-gray text-sm flex gap-2 items-center"> {doctor.attributes?.Name}</span>
                          
                           <Link href={"/details/" + doctor?.id} className="w-full">
                           <h2 className="text-primary text-sm flex gap-2 items-center">
                      <span>
                      
                        <GraduationCap />
                      </span>
                      <span>
                        {doctor.attributes?.Year_of_Experience} of Experince
                      </span>
                    </h2>
                    <h2 className="text-gray-500 text-sm flex items-center gap-2">
                      <span>
                        <MapPin />
                      </span>
                      <span>{doctor.attributes?.Address}</span>
                    </h2>
                  

                    </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default SearchDoctor;
