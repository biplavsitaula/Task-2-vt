import { useState } from "react";
import "./Animation.css";

const Animation = () => {
    const [active, setActive]= useState('1')

    const handleActive=(index)=>{
        setActive(index)
    }
  return (
    <div className="animation-component">
         <div className={`${active =='1' ? 'active': ''} animation-card-container`} onClick={()=>handleActive('1')}>
      <p className="view-courses">
        View all Courses
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.3417 4.50838C10.7973 4.05277 11.536 4.05277 11.9916 4.50838L16.6583 9.17505C17.1139 9.63066 17.1139 10.3694 16.6583 10.825L11.9916 15.4916C11.536 15.9472 10.7973 15.9472 10.3417 15.4916C9.8861 15.036 9.8861 14.2973 10.3417 13.8417L13.0168 11.1667L4.16667 11.1667C3.52233 11.1667 3 10.6443 3 10C3 9.35567 3.52233 8.83334 4.16667 8.83334H13.0168L10.3417 6.1583C9.8861 5.70269 9.8861 4.96399 10.3417 4.50838Z"
            fill="#F9EBEC"
          />
        </svg>
      </p>
      <figure className="course-images">
        <img src="/Frame811897.png" />
      </figure>
      <div className="course-title-wrap">
        <h3>All Courses</h3>
        <p>courses you're powering through right now.</p>
      </div>
      <p className="course-number">
        23<sup>+</sup>
      </p>
      <div className="course-logo"></div>
    </div>

    {/*second*/}
    <div className={`${active =='2' ? 'active': ''} animation-card-container`}  onClick={()=>handleActive('2')}>
      <p className="view-courses">
        View all Courses
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.3417 4.50838C10.7973 4.05277 11.536 4.05277 11.9916 4.50838L16.6583 9.17505C17.1139 9.63066 17.1139 10.3694 16.6583 10.825L11.9916 15.4916C11.536 15.9472 10.7973 15.9472 10.3417 15.4916C9.8861 15.036 9.8861 14.2973 10.3417 13.8417L13.0168 11.1667L4.16667 11.1667C3.52233 11.1667 3 10.6443 3 10C3 9.35567 3.52233 8.83334 4.16667 8.83334H13.0168L10.3417 6.1583C9.8861 5.70269 9.8861 4.96399 10.3417 4.50838Z"
            fill="#F9EBEC"
          />
        </svg>
      </p>
      <figure className="course-images">
        <img src="/Frame811897.png" />
      </figure>
      <div className="course-title-wrap">
        <h3>All Courses</h3>
        <p>courses you're powering through right now.</p>
      </div>
      <p className="course-number">
        23<sup>+</sup>
      </p>
      <div className="course-logo"></div>
    </div>
    {/*third*/}
    <div className={`${active =='3' ? 'active': ''} animation-card-container`}  onClick={()=>handleActive('3')}>
      <p className="view-courses">
        View all Courses
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.3417 4.50838C10.7973 4.05277 11.536 4.05277 11.9916 4.50838L16.6583 9.17505C17.1139 9.63066 17.1139 10.3694 16.6583 10.825L11.9916 15.4916C11.536 15.9472 10.7973 15.9472 10.3417 15.4916C9.8861 15.036 9.8861 14.2973 10.3417 13.8417L13.0168 11.1667L4.16667 11.1667C3.52233 11.1667 3 10.6443 3 10C3 9.35567 3.52233 8.83334 4.16667 8.83334H13.0168L10.3417 6.1583C9.8861 5.70269 9.8861 4.96399 10.3417 4.50838Z"
            fill="#F9EBEC"
          />
        </svg>
      </p>
      <figure className="course-images">
        <img src="/Frame811897.png" />
      </figure>
      <div className="course-title-wrap">
        <h3>All Courses</h3>
        <p>courses you're powering through right now.</p>
      </div>
      <p className="course-number">
        23<sup>+</sup>
      </p>
    </div>
    </div>
   
  );
};
export default Animation;
