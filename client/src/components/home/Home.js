import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div class="contai">
      <nav class="navbar navbar-expand-xl navbar-light main-nav fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX29vZYWVv5+fn9/f3Nzc2qqqqGhobp6en///9PUFK0tLRTVFZnZ2dQUVPt7e1VVljY2NilpafAwcGbm5yWlpfHx8htbm+OjpC9vb5JSkzh4eHPz9Hx8fHk5ORyc3W2trZ4eXtDREaAgIFgYGJvb3LIs/4lAAAIf0lEQVR4nO2ai3KjIBRA9SJRfIGi8RGNqfb/v3FV0GiS2tptp03nnt1pqyJyhMCFYBgIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgrwD/HQBvhcgYJGfLsR3AlbkFpYNYITVT5fl64FeLCsCZgrvYhyLzOnr86fL9LWQgzwEpmnyoxkcOG/thlrwlxyJ9DxuDvDxv5cUjJ3FH1KEMjBXDLrnwP7pcn0VYJSSm7d4btn8kUoEQc3gTtA0/WP7R/pUpw3ua3CsxUP5Nyox9B76mSZrnZ8u25cA6csbVZiIvxHFVbS8PFbsusufGBNpwR4LDtXI4qcPVEE0b30MR8TzD/sQswdiU61y/+Xph31Cuxsp0wy683QUpD9dwP+n1YaZ73Pu9bE372jezr6Xp58ygq5Dbl5ceUo8lmdR1h3mzqeIxE8X8f+A01kL0jzrR0DGoyIqL4XHGOdB4BWRLH+6jP9HeCj4OCwIAsSWzPSyup/8SprCsYuiVpJnnwrbIr4UZiHl0GWC07CiHox6L6gq0vPTBfx/gIS0jitlAjkL5B+QuoXMsZmTeGYh1u3y+QK3EELo532VUVWVEfY/RwPoCQ1rmCcGZ3uStg0bRAk2DEmr/uewClepv3qGHH4d4NI4aiSV1HVFFkcupXULffDmNpJ1L2yg6HzaWH1amcduQ628vyZKWZeSNrSUMpWCSsulUmS/cQJJnYjILJKJS6uoMaSMmoMFYKWpdbqSpmlfvVEVJXErpSOttIxqg8qYykNyolEihWUlIk1/nyGkskxOcZpbcVTnYWLFJ2o3QJJbskE7SuumtISsG9uOhN2kbq+e53HVNHFZupb71UErfAHE6f8pgICjf4NzR39SpxtuGA7m4+tfnyjApuDJen5OW4rEpE+Pa24Nt+A7U0ubG9LqxM3h48vkrj1ek66vrRvhTaYPsrlps+TRScffrENfr31VjTsQz+rl6lgfNtNgBZa6rAa+2r1nSrq61ohw8b778WQgn47DNzOZP1MPThqOv1WHkyGketxydWqSFcPxS6gPpTqcu3J/TM7GyyQq2B0vyv7mWtHJqyM5jNcKvaoB8ctdJusFjzAY098EgR811AsPvAZtOK61sNlQHc6GRzXbs5XFg/VtlsPDa4E5z3/JYcw0mA3vFj+KlSFpdIJ1Je409FryvYYmL9Kpnew0BL0QwuJVze40NPXzv8+wf4s2fMYQxNTOzquF872GXLWBfYaFN6CXKfh4UKwN+8k9m1ZRg4RsGar7R16WQx2R08sq6mUl7jXUz99jCCIbo7LX8RxvVYym7tSGLO4HCsPq9EuwNwz5+RrnyeUnrpqrdj3h3G1oMgv2GRoq4nK0jKVCOGNlONYoEfz6hLcMg8iZQ7ll0ReNmHdLh/2G/GjsNJzSBOs0d4a903gbU2PSW4aPC+yor0L43TP2G5qMku8yTJQT3W8IdTFc7caCeIdFmn2GqtxFCd9jaKj+Xnf3uwxVRl5Wj4m8RV+zy9BTheSXLzeMnSGqdNV79MoPfQ7X4abPx8wd9ZterXYZslOmCtQ4X2voJXmT01aPHJfN8bA7K15Xg+FpvNiFhI6bdPxP1iGzwrGh9oPi1xqaXh9QTt/tF6ftEZ8r9IhqLNLy1tGfx0UssM8w1Q0pSJKvNVxQSGdZ6jdjGrYwBJtPp1Ts5mVzXLPTEECVnfvmNxkWcrq+w5CoF8+q4bs7VQfhpw3Fy/Ipbxm+ftaQX7/k3lOHR11xPWqjB2umfPYaLsK/peG60zcqHX+Fy7ze+Ryqr74D+mHDa1AKolCvp+jR49pxXlXfa2iEU/S4MAQ1NfMSnbwcn8i7lcyGYRAJkeg3Z2+3Uk+GtmLRSLP7nQHTbZ8wJPkiRp0MLXWOqcc67fhEfllOY7bHQwK2LtkcNn98xK8ebO2Y89lvaMB1M8xkaFS6mfjlEA8n7LbFvWfYN++pwRZT5XzYEPJ1+1V01ecNyznD2XBqJ7w4Zi3T7W09T3s3atM14R02R4tHhjronueNqmx6qv8Jw76s7NZwnmD3z5k3VWSrrN811F2+ycTWiH9vCELFkseDJlPCF/Jpw7mrvBoOE/mbVsJNG1Z5vR95q8h+Xgv6oOHUW4kpYHXUjboJfcpwnkxdDfuZz1rR4zd7m943nPqwd2bAtwVW75sf5/NgFYuUHzVU0d5UOjjoXmEx4BHXnLercY9darjJSxkWW7MnFQp5F2NhyN4x1GVj7uK8clZT/Q8aCjYEu9PD+vlmN0a/q6VJYtMzU4u4XXa/774fM4dbvPUKoDqpaw3iYMyWqRWsZDwy9Xei/Yg0XnNv35xKxpcvm46nVO1vG8K0qg/VyDWKMMbj9W5QIFCJNM+tunq0Y+Q2D8XqpE6ivwa/ecbj+x8VBZZJt7+3gK6y9xGO7LzpW6m6TcPs8PxkW4YG+QtsCX43m2/3mdEdCdhvbiV9UvVx00AvBnJYbRCHyjyXeqMQwLgTatpY4GTi+TZGDRG7lduhZVtxQS8E0rjJkioX6TAONCURTWVYp7SMh+GW5RV9vi3t5Nx6p0jKKD8YnYSifnWpvHTDrNm/+Cc/knaRFQkb1hEu/TX/N25/2gJKXpqhKTzbF1HeNq0wM8HDTpwgb0V+zNvoQKl05amPupq2yV/jJ9u1T5IovmRmZkYBtZKsk/6lycwDp/LcG8ouYtlLyepL5Pq52XZR+CKfrBIhtcM8zMvYjgUpU5F3SW3kZV7blpHHVd3UYRrG5GSRNDzFFUB+G7v/enRHCqrjJPk5gmv3qi7oP9UO02fsTVeUkf3sCu8ATzcYIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIN/JP2w6u7v+m4d1AAAAAElFTkSuQmCC"
              width="150" 
              class="img-fluid"
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <Link to="/login">
                  <a class="nav-link bg-primary text-white" href="/">
                    Signin
                  </a>
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/register">
                  <a class="nav-link bg-primary text-white" href="/">
                    Signup
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div class="titular">
        <img
          src="https://designinghealthycommunities.org/wp-content/uploads/2020/03/shutterstock_1343893241-scaled.jpg"
          class="bg"
        />

        <p class="tagline">Health. Connect. Consultation.</p>
        <p class="subtitle">Join us to be a part of a community</p>
      </div>
      <div class="context">
        <br />
        <br />
        <h1>WHY CONSULT A NUTRITIONIST?</h1>
        <center>
          <p class="line"></p>
        </center>
        <p>
          Overweight, bad eating habits, health problems and food allergies,
          <br />
          these are problems that can affect anyone in the world.
        </p>
      </div>

      <div class="area">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

      <div class="gallery">
        <h1>With Nutrition ....</h1>
        <div class="grid">
          <div>
            <img src="https://cdn.med.tn/img/step1.svg" />
            <p>Get quick access to your doctor</p>
          </div>
          <div>
            <img src="https://cdn.med.tn/img/step2.svg" />
            <p>Make an appointment online at any time</p>
          </div>
          <div>
            {" "}
            <img src="https://cdn.med.tn/img/step3.svg" />
            <p>Receive personalized reminder SMS / email</p>
          </div>
        </div>
        <footer class="footer_banner">
          <div>
            <h1>About Nutrition</h1>
            <p>
              Become a healthier you. Schedule your appointment today!
              <br />
              Phone: (401) 308-5531 <br />
              Email: nutrition@gmail.com
            </p>{" "}
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Home;
