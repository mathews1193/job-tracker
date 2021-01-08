import React from 'react';
import firebase from '../firebase';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import './Recipe.css';

toast.configure();

export default function Track({ jobList }) {
  
  const deleteJob = () => {
    const jobRef = firebase.database().ref('Job Track').child(jobList.id);
    recipeRef.remove();
    toast(jobList.jobTitle + " at "+ jobList.companyName + " was removed successful.");
  };

  const jobStatus = () => {
    const jobRef = firebase.database().ref('Job Track').child(jobList.id);
    jobRef.update({
      complete: !jobList.complete,
      recipeListStatus: "Found",
    });
    toast(jobList.jobTitle + " at "+ jobList.companyName + " was updated.");
  };
  return (
    <div className="shoppingList">
      <div className={jobLst.complete ? 'complete' : ''}>
        <p>Job Title: {recipeList.recipeName}</p>
        <p>Company Name: {recipeList.amount} {recipeList.unit} {recipeList.item}</p> 
        <h3>Instructions</h3>
        <p>{recipeList.instructions}</p>
        <p>Category: {recipeList.category}</p>
        <p>Item Created: {recipeList.time} {recipeList.date}</p>
        <p>Item Status: {recipeList.shoppingListStatus}</p>
      </div>
      <div className="btn-ud"> 
        <button className="complete" onClick={itemStatus}>Complete</button>
        <button className="delete" onClick={deleteItem}>Delete</button>
      </div>
    </div>
  );
}
© 2021 GitHub, Inc.