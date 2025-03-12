import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { Link } from 'react-router-dom';
const Jobs = () => {
    const jobsData = useLoaderData();
    console.log(jobsData);
    
  return (
    <div  className='py-10 px-0 w-full flex justify-center flex-wrap  gap-5'>
        {jobsData.map((job) => {
           return ( 
            <Link key={job.id} to={`/jobs/${job.id}`} className='decoration-0  p-2.5 bg-gray-200 hover:bg-gray-100 hover:shadow-gray-400'>
                <h2 className='text-xl font-bold'> {job.title}</h2>
                <p>Salary : {job.salary}</p>
                <p>Location : {job.location}</p>
            </Link>)
})}
    </div>
  )
}

export default Jobs

export const jobsLoader = async () => {
    try {
        const response = await fetch('http://localhost:5000/jobs');
        if (!response.ok) {
            throw new Error('Failed to fetch jobs');
        }
        return  response.json();
    } catch (err) {
        console.error('Error fetching jobs:', err);
        return [];  // Return an empty array instead of undefined
    }
};



