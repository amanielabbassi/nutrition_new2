import React from 'react'
import { useDispatch } from "react-redux"
import { useHistory } from 'react-router-dom'
import { getProfil } from '../../JS/actions/profilAction';
import './home2.css'
import { Link } from 'react-router-dom'
import Navigation from '../navigaton/Navigation'
import ListArticl from '../articl/ListArticl';
const home2 = () => {
    
    
    return (
        <div>
           
           <Navigation/>
<body>

  <section className="titles">

    <h1></h1>
    <p>The doctor-nutritionist anticipates, diagnoses and takes charge of disorders related to nutrition (diabetes, food allergy or intolerance, obesity, cholesterol, anorexia, etc.).</p>

  </section>
<div>
  {/* <ListArticl/>  */}
</div>
  <section className="container-boxes">
    <div className="box">

      <div className="icon">
        <a href=""><i class="fas fa-fire"></i></a>
      </div>

      <div className="text">
        <a href="">
          <h3>The Nutitionniste</h3>
          <p>The best teacher you can have, internationally renowned "hooker".</p>
        </a>
      </div>

    </div>

    <div className="box">

      <div claclassNamess="icon">
        <a href=""><i class="fas fa-seedling"></i></a>
      </div>

      <div className="text">
        <a href="">
          <h3>My Nutrition</h3>
          <p>We will use only animal-friendly, fair-trade yarn. Only the best!</p>
        </a>
      </div>

    </div>

    <div className="box">

      <div className="icon">
        <a href=""><i class="fas fa-address-card"></i></a>
      </div>

      <div className="text">
        <a href="">
          <h3>My Nutrition</h3>
          <p>Become a member, become family. Teamwork is everything.</p>
        </a>
      </div>

    </div>
  </section>

</body>


        </div>
    )
}

export default home2
