"use client";
import React, {useState} from 'react';
import Dropdown from "@/components/dropdown";
import { tutorialsArray } from "@/app/assets/tutorials";
import { Tutorial } from '@/app/assets/types';
import 'animate.css';
import CategoriesView from '@/components/categoriesView';
import { categoriesArray } from './assets/categories';
import Link from "next/link";
import CategoryCard from '@/components/categoryCard';



const icon1= "M488-278h66.67v-404H406v66.67h82V-278ZM186.67-120q-27 0-46.84-19.83Q120-159.67 120-186.67v-586.66q0-27 19.83-46.84Q159.67-840 186.67-840h586.66q27 0 46.84 19.83Q840-800.33 840-773.33v586.66q0 27-19.83 46.84Q800.33-120 773.33-120H186.67Zm0-66.67h586.66v-586.66H186.67v586.66Zm0-586.66v586.66-586.66Z";
const icon2= "M363.33-278h233.34v-66.67H430V-448h100q27 0 46.83-19.83 19.84-19.84 19.84-46.84v-100.66q0-27-19.84-46.84Q557-682 530-682H363.33v66.67H530v100.66H430q-27 0-46.83 19.84Q363.33-475 363.33-448v170ZM186.67-120q-27 0-46.84-19.83Q120-159.67 120-186.67v-586.66q0-27 19.83-46.84Q159.67-840 186.67-840h586.66q27 0 46.84 19.83Q840-800.33 840-773.33v586.66q0 27-19.83 46.84Q800.33-120 773.33-120H186.67Zm0-66.67h586.66v-586.66H186.67v586.66Zm0-586.66v586.66-586.66Z";
const icon3="M363.33-278H530q27 0 46.83-19.83 19.84-19.84 19.84-46.84v-78q0-26.66-15.34-42.66-15.33-16-37.33-16 22 0 37.33-14.67 15.34-14.67 15.34-42v-77.33q0-27-19.84-46.84Q557-682 530-682H363.33v66.67H530v100.66h-84.67V-448H530v103.33H363.33V-278ZM186.67-120q-27 0-46.84-19.83Q120-159.67 120-186.67v-586.66q0-27 19.83-46.84Q159.67-840 186.67-840h586.66q27 0 46.84 19.83Q840-800.33 840-773.33v586.66q0 27-19.83 46.84Q800.33-120 773.33-120H186.67Zm0-66.67h586.66v-586.66H186.67v586.66Zm0-586.66v586.66-586.66Z";

const generateFilteredTutorials = (selectedCategory:string)=>{

  const filteredTutorials = tutorialsArray.filter((tutorial: Tutorial)=> tutorial.category == selectedCategory);
  const availableTutorials = selectedCategory == "All Categories" ? tutorialsArray : filteredTutorials; 
  const tutorialNames = availableTutorials.map(
    (tutorial)=>{
      return tutorial
  });
  return tutorialNames;
}



export default function Home() {
  const [category, setCategory]=useState("All Categories");
  const [chosenTutorial, setChosenTutorial]=useState<Tutorial >(tutorialsArray[0]);
  
  return (
    <div className="container justify-items-center  ">
      <CategoryCard />
        <div className="welcome-container flex justify-center items-center w-8/12">
            <div className="welcome-logo-container"> 
            <img src="/react-logo-play-learn-build.png" style={{width:"100rem"}} alt="react-playground-logo"/>
            </div>
            <div className="welcome-text-container">
              <h1 className="font-bold text-2xl">Level Up Your React Skills—</h1>
              <h1 className="font-bold text-2xl">One Tutorial at a Time</h1>
              <p> We're two self-taught developers on a mission to break down the trickier parts of React—secure
                 logins, chatbots, file uploads, and more. As we learn, we share step-by-step tutorials that are clear, practical, and beginner-friendly.
                  Whether you're leveling up or just curious, join us as we tackle the stuff that used to give us anxiety—so it doesn’t have to give you any. 🚀
              </p>
            </div>
        </div>
        <div className="user-flow-container flex justify-evenly w-full ">
          <div className="choose-program"> 
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-20"
            viewBox="0 -960 960 960" 
            fill="#001333">
              <path 
              d={icon1}
              />
              </svg>
            <Dropdown 
              dropdownTitle="Choose a category" 
              dropdownCategoryArray={categoriesArray} 
              setCategory={setCategory}
            />

            </div>
          <div className="choose-tutorial"> 
          <svg 
            className="w-20"
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 -960 960 960" 
            fill="#001333">
          <path 
            d={icon2}
          />
          </svg>
        
            <Dropdown 
              dropdownTitle="Choose a tutorial" 
              dropdownTutorialArray={generateFilteredTutorials(category)} 
              setChosenTutorial={setChosenTutorial}
            />
            </div>
          <div className="navigate-to-tutoril">
          <svg 
            className="w-20"
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 -960 960 960" 
            fill="#001333"
          >
          <path 
            d={icon3}
          />
          </svg>
          <Link href={`/singleTutorial/${chosenTutorial.id}`}>
              <button
            
              className={` tutorial-btn  flex shadow-react-glow items-center gap-2 px-3 py-2 rounded-md text-white bg-reactDarkBlue hover:bg-reactDarkBlue transition-colors `}>
                View Tutorial
              </button>
          </Link>
          </div>
        </div>
        <CategoriesView />
    </div>
  );
}
