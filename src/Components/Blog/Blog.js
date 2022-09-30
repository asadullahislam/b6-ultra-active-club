import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <h1 className='QNA'>Q&A</h1>
            <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        1.How Does React Work?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>React is designed around the concept of component-based architecture.</strong> Its components, or employees, are all multi-functional and eager to help their manager with the most challenging tasks. The smaller components can be put together to form bigger ones, and each one of them can be reused, even across different projects.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        2.What is difference between Props and state?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <h2>State</h2>
        <p>The state is an updatable structure that is used to contain data or information about the component and can change over time. The change in state can happen as a response to user action or system event. It is the heart of the react component which determines the behavior of the component and how it will render. A state must be kept as simple as possible. It represents the component's local state or information. It can only be accessed or modified inside the component or by the component directly.</p>
        <br />
        <h1>Props</h1>
        <p>Props are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It allows passing data from one component to other components. It is similar to function arguments and can be passed to the component the same way as arguments passed in a function. Props are immutable so we cannot modify the props from inside the component.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        3.Uses of useEffect
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <h4>useEffect use cases</h4>
      <ul>
        <li>Running once on mount: fetch API data</li>
        <li>Running on state change: validating input field</li>
        <li>Running on state change: live filtering</li>
        <li>Running on state change: trigger animation on new array value</li>
        <li>Running on props change: update paragraph list on fetched API data update</li>
        <li>Running on props change: updating fetched API data to get BTC updated price</li>
      </ul>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Blog;