import React from 'react';
import logo from './logo.svg';
import './App.css';



function App() {
  return (
    <div className="App">
  
<iframe src="https://jinang99.github.io/VL1/"
            frameborder="0" 
            marginheight="0" 
            marginwidth="0" 
            width="100%" 
            height="500" 
            scrolling="auto"> 
            </iframe> 

<div className="description" >
<p>
  In the visualization you can see how the <strong>k-nearest neighbor (KNN)</strong> algorithm
  <strong>classifies</strong> new data points based on their <strong>k</strong> nearest neighbors, where the amount of neighbors k is specified using the slider above. The new point will be assigned the <strong>class</strong> that the majority of its k nearest neighbors hold.
  <br /><br />
  The initial circles are our "training" data set. The data set is divided into two classes: <strong>red and blue</strong>.
  When we add a new circle, we want to find out which class (aka color) we need to assign it to, depending on its neighbors.
  <br /><br />
  What's going on behind the scenes after you add a circle:
</p>
<ol>
  <li>The algorithm goes through all other circles and calculates their distance from your new circle.</li>
  <li>It then sorts them by distance from your circle in ascending order, meaning the circles with the smallest distances to the new circle come first.</li>
  <li>It picks the first k entries from the result of step 2.</li>
  <li>It looks at the k nearest neighbors' classes. If the majority of them are blue, our new point will be blue as well. If most of them are red, then the new point will be red.</li>
</ol>
<h3>The weighted KNN</h3>
<p>
  If you check the <strong>"Weighted" checkbox</strong> above, the algorithm is justified, so that the <strong>inverse of the distance</strong> of the k neighbors is taken into account. This is important during "ties", meaning that you chose an even amount of neighbors k and half of them are class red while the other half are blue. 
  If you don't use the weighted version of KNN in this case, the neighbor with the closest distance will <strong>ALWAYS</strong> win, so that your circle will take on its color. 
</p>
<h4>Let's look at an example:</h4>
<p>
  Imagine you chose <strong>k=4</strong> and the nearest neighbors are <strong>[(Blue,2), (Blue,500), (Red,3), (Red,4)]</strong>, where the numbers represent the distances from the new circle. In the unweighted KNN, the nearest neighbor's class - in this case Blue - would automatically win. But look at the distances: The two red circles are much closer to the new circle than the second blue circle. It might not be the right decision to just go on the closest circle and not take the others into account! </p>
<br /><br />
    When using the <strong>weighted KNN</strong>, the way of determining which class to assign to the new circle is different:<br />
  The weighted KNN sums up the <strong>inverted distance</strong> of all the nearest neighbors belonging to the <strong>same class</strong>. It then checks which of the classes' <strong>sums is the greatest</strong> and assigns the corresponding class to the new circle.<br /><br />
  In our example the weights of the classes are:

<ul>
  <li>Weight of Blue = 1/2 + 1/500 = 0.502</li>
  <li>Weight of Red = 1/3 + 1/4 = 0.583</li>
</ul>
<p>
Because the weight of class Red is greater than that of class Blue, the new circle will be <strong>red</strong>!<br /> </p>
</div>
</div>
    // {/* // ///////////////////////////////////YOYOYO//////////////////////////////
    // // <div className="App">
    // //   <header className="App-header">
    // //     <img src={logo} className="App-logo" alt="logo" />
    // //     <p>
    // //       Edit <code>src/App.js</code> and save to reload.
    // //     </p>
    // //     <a
    // //       className="App-link"
    // //       href="https://reactjs.org"
    // //       target="_blank"
    // //       rel="noopener noreferrer"
    // //     >
    // //       Learn React
    // //     </a>
    // //   </header>
    // // </div> */}
  );
}

export default App;
