import React  from 'react'


const About = () => {
  return (
    <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Whon are we?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>Hi there, this is Anish Ahammad Mulla</strong> I am a developer of this app and I have created this for a sole purpose of storing your important notes on routines and your todo things that no one except only you can access it and read, write, update and delete it.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        What is this app ?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is iNotebook app .</strong> This a cloud based notes app where you can store your notes with a proper heading and proper note description with your assigned tags(which helps in reminding the information in the notes).
        and about only you can access your stored notes and purform CRUD(create,read,upadte,delete) operations on it.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        What are the Tech Stacks used to build it ?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>The app is build with advanced web technologies like React,MongoDB atlas cloud,Node.js,Express.js .</strong> 
        The mentioned skills aquired buy me through learning on web develoment.
      </div>
    </div>
  </div>
</div>
  )
}

export default About