import React from 'react'
import Card from './components/Card'

const App = () => {
  
  const jobs = [
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    postedDate: "2026-03-15",
    jobLabel: "Senior Level",
    jobType: "Part time",
    role: "Frontend React Engineer",
    pricePerHour: "$50/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    postedDate: "2026-03-14",
    jobLabel: "Mid Level",
    jobType: "Full Time",
    role: "Backend Node.js Developer",
    pricePerHour: "$45/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    postedDate: "2026-03-13",
    jobLabel: "Senior Level",
    jobType: "Full Time",
    role: "Full Stack Developer (MERN)",
    pricePerHour: "$60/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/tcs.com",
    companyName: "TCS",
    postedDate: "2026-03-12",
    jobLabel: "Junior Level",
    jobType: "Full Time",
    role: "Java Developer",
    pricePerHour: "$20/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    postedDate: "2026-03-11",
    jobLabel: "Senior Level",
    jobType: "Full Time",
    role: "iOS Developer",
    pricePerHour: "$70/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/accenture.com",
    companyName: "Accenture",
    postedDate: "2026-03-10",
    jobLabel: "Mid Level",
    jobType: "Part Time",
    role: "Python Developer",
    pricePerHour: "$35/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    postedDate: "2026-03-09",
    jobLabel: "Senior Level",
    jobType: "Full Time",
    role: "Data Scientist",
    pricePerHour: "$80/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/flipkart.com",
    companyName: "Flipkart",
    postedDate: "2026-03-08",
    jobLabel: "Mid Level",
    jobType: "Full Time",
    role: "Android Developer",
    pricePerHour: "$40/hr",
    location: "Gurgaon, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    postedDate: "2026-03-07",
    jobLabel: "Senior Level",
    jobType: "Full Time",
    role: "DevOps Engineer",
    pricePerHour: "$90/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/zoho.com",
    companyName: "Zoho",
    postedDate: "2026-03-06",
    jobLabel: "Junior Level",
    jobType: "Internship",
    role: "Software Developer Intern",
    pricePerHour: "$12/hr",
    location: "Chennai, India"
  }
];

  return (
    <div className="parent">
        {jobs.map((element)=>{

          return <Card brandLogo={element.brandLogo}
                       companyName={element.companyName}
                       postedDate={element.postedDate}
                       role={element.role}
                       jobType={element.jobType}
                       jobLabel={element.jobLabel}
                       pricePerHour={element.pricePerHour}
                       location={element.location}    
                   />
                 })
          }
          
    </div>
  )
}

export default App
