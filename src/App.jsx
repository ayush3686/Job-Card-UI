import React from 'react'
import Card from './components/Card'

const App = () => {

  const jobOpenings = [
  {
    brandlogo: "https://img.icons8.com/?size=48&id=17949&format=png",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$35/hr",
    location: "Mumbai, India"
  },
  {
    brandlogo: "https://images.icon-icons.com/1195/PNG/512/1490889698-amazon_82521.png",
    companyName: "Amazon",
    datePosted: "2 weeks ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$40/hr",
    location: "Hyderabad, India"
  },
  {
    brandlogo: "https://img.icons8.com/?size=48&id=22989&format=png",
    companyName: "Microsoft",
    datePosted: "10 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$50/hr",
    location: "Bangalore, India"
  },
  {
    brandlogo: "https://img.icons8.com/?size=80&id=GJ1x26ZmfZ96&format=png",
    companyName: "Netflix",
    datePosted: "3 weeks ago",
    post: "UI/UX Designer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$30/hr",
    location: "Remote"
  },
  {
    brandlogo: "https://upload.wikimedia.org/wikipedia/commons/6/60/Adobe_Acrobat_Reader_icon_%282020%29.svg",
    companyName: "Adobe",
    datePosted: "1 week ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$28/hr",
    location: "Noida, India"
  },
  {
    brandlogo: "https://www.citypng.com/public/uploads/preview/flipkart-logo-icon-hd-png-701751694706828v1habfry9b.png",
    companyName: "Flipkart",
    datePosted: "6 days ago",
    post: "Product Manager",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$45/hr",
    location: "Bangalore, India"
  },
  {
    brandlogo: "https://hexmos.com/freedevtools/svg_icons/accenture/tcs.svg",
    companyName: "TCS",
    datePosted: "2 days ago",
    post: "System Engineer",
    tag1: "Full Time",
    tag2: "Entry Level",
    pay: "$20/hr",
    location: "Pune, India"
  },
  {
    brandlogo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg",
    companyName: "Infosys",
    datePosted: "4 weeks ago",
    post: "Java Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$25/hr",
    location: "Chennai, India"
  },
  {
    brandlogo: "https://i.pinimg.com/736x/f4/34/e3/f434e30f1c5a170fc4700661cc99c3ab.jpg",
    companyName: "Zomato",
    datePosted: "8 days ago",
    post: "Data Analyst",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$22/hr",
    location: "Gurgaon, India"
  },
  {
    brandlogo: "https://cdn.iconscout.com/icon/free/png-512/free-paytm-icon-svg-download-png-226448.png?f=webp&w=256",
    companyName: "Paytm",
    datePosted: "12 days ago",
    post: "Mobile App Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$32/hr",
    location: "Noida, India"
  }
];


  return (
    <div className='parent'>
      {jobOpenings.map(function(elem){
        return <Card company = {elem.companyName} logo = {elem.brandlogo} span = {elem.datePosted} post = {elem.post} tag1 = {elem.tag1} tag2 = {elem.tag2} pay = {elem.pay} location = {elem.location}/>
      })}
    </div>
  )
}

export default App

