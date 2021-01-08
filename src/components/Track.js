import React from 'react';
import firebase from './firebase';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

export default function Track({ trackList }) {
  
  const deleteJob = () => {
    const jobRef = firebase.database().ref('Job Track').child(trackList.id);
    jobRef.remove();
    toast(trackList.jobTitle + " at "+ trackList.companyName + " was removed successful.");
  };

  const jobStatus = () => {
    const jobRef = firebase.database().ref('Job Track').child(trackList.id);
    jobRef.update({
      complete: !trackList.complete,
      currentStatus: "Under Review",
    });
    toast(trackList.jobTitle + " at "+ trackList.companyName + " was updated.");
  };
  return (
    <div className="trackList">
      <div className={trackList.complete ? 'complete' : ''}>
        <p>Job Title: {trackList.jobTitle}</p>
        <p>Company Name: {trackList.companyName}</p> 
        <p>Recruiter: {trackList.recruiter}</p>
        <p>Recruiter Email: {trackList.recruiterEmail}</p>
        <p>Salary: {trackList.salary}</p>
        <p>Location: {trackList.location}</p>
        <p>Programming Languages Requirements: {trackList.programmingLang}</p>
        <p>Status: {trackList.currentStatus}</p>
        <p>Offer (Yes / No): {trackList.offer}</p>
      </div>
      <div className="btn-ud"> 
        <button className="complete" onClick={jobStatus}>Update Status</button>
        <button className="delete" onClick={deleteJob}>Delete</button>
      </div>
    </div>
  );
}