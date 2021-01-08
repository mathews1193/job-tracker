import React, { useState } from 'react';
import './NewJob.css';
import firebase from '../firebase';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  

toast.configure();

export default function NewJob() {

    const [jobid,setJobid] = useState('');
    const [jobTitle,setJobTitle] = useState('');
    const [companyName,setCompanyName] = useState('');
    const [recruiter,setRecruiter] = useState('');
    const [recruiterEmail,setRecruiterEmail] = useState('');
    const [salary,setSalary] = useState('');
    const [location,setLocation] = useState('');
    const [programmingLang,setProgrammingLang] = useState('');
    const [offer, setOffer] = useState('');

    
    const getJobTitle = (e) => {
        setJobTitle(e.target.value);
        };

    const getCompanyName = (e) => {
        setCompanyName(e.target.value);
        };

    const getRecruiter = (e) => {
        setRecruiter(e.target.value);
        };

    const getRecruiterEmail = (e) => {
        setRecruiterEmail(e.target.value);
        };

    const getsalary = (e) => {
        setSalary(e.target.value);
        };

    const getLocation = (e) => {
        setLocation(e.target.value);
        };

    const getProgrammingLang = (e) => {
        setProgrammingLang(e.target.value);
        };

    const getOffer = (e) => {
        setOffer(e.target.value);
        };
    
    const createJobtrack = () => {

        var today = new Date();
        var currentDate = (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear();
        var hour = today.getHours()
        var day;

        if (hour > 12){
            hour = today.getHours() - 12 ; 
            day = "pm";
        }
        else {
            hour = today.getHours();
            day = "am";
        }

        var currentTime = hour + ':' + today.getMinutes() + day;

        const jobRef = firebase.database().ref('Job Track');

        const job = {
            jobid:Math.ceil(Math.random()),
            companyName,
            jobTitle,
            recruiter,
            salary,
            location,
            recruiterEmail,
            offer,
            programmingLang,
            date:currentDate,
            time:currentTime,
            complete:false,
            currentStatus:"New"
            };
        
            jobRef.push(job);
            setJobid(jobid + 1);
            toast("Job Track created Successfully");
        };

    return (
        <div className="new-order">
            <h1>New Job Track</h1>  
            <input
                type="text" 
                className="search-bar"
                onChange={getJobTitle}
                value= {jobTitle}
                placeholder="Job Title"/>
             <input
                type="text" 
                className="search-bar"
                onChange={getCompanyName}
                value={companyName}
                placeholder="Company Name"/>
           
            <input
                type="text"
                className="search-bar"
                onChange={getRecruiter}
                value={recruiter}
                placeholder="Recruiter Name"/>
                <input
                type="text"
                className="search-bar"
                onChange={getRecruiterEmail}
                value={recruiterEmail}
                placeholder="Recruiter Email"/>
                <input
                type="text"
                className="search-bar"
                onChange={getProgrammingLang}
                value={programmingLang}
                placeholder="Programming Languages Required"/>
            <input
                type="text"
                className="search-bar"
                onChange={getsalary}
                value={salary}
                placeholder="Salary"/>
            <input
                type="text"
                className="search-bar"
                onChange={getLocation}
                value={location}
                placeholder="Location"/>
            
            <input
                type="text"
                className="search-bar"
                onChange={getOffer}
                value={offer}
                placeholder="Job Offer"/>
            <button onClick={createJobtrack} className="btn-create">Add Job Track</button>
        </div>
    )
}
