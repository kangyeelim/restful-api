import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <section id="generator-intro" class="b-top">
      	<div className="container">
      		<div className="row">
      			<div className="col">
      				<div className="text-center">
      					<h2 className="subtitle">What is a Quotes Generator?</h2>
      					<p>The Quotes Generator generates quotes from a huge collection of quotes with just a few clicks. The quotes are divided into categories to show you the matching quotes. After clicking on "Get Quotes", quotes will be generated and displayed.
                Try it now and find the right quotes for you!</p>
      					<div className="row mt-30">
      						<div className="col-lg-4 col-rows" >
      							<h4 className="subtitle">Generate Quotes</h4>
      							<p>With just a few clicks you can generate matching quotes, suitable for every occasion.</p>
                    <img
                      className="d-block w-100 home-image"
                      src={require("./img/generate.svg")}
                      alt="Second slide"
                    />
      						</div>
      						<div className="col-lg-4 col-rows">
      							<h4 className="subtitle">Category Selection</h4>
      							<p>Suitable quotes for every occasion. Simply filter by category to generate matching quotes.</p>
                    <img
                      className="d-block w-100 home-image"
                      src={require("./img/organised.svg")}
                      alt="Second slide"
                    />
      						</div>
      						<div className="col-lg-4 col-rows ">
      							<h4 className="subtitle">Large selection</h4>
      							<p>Choose the appropriate quotes from a selection of quotes, sorted by category and contribute to the databse of quotes.</p>
                    <img
                      className="d-block w-100 home-image"
                      id="home-image-3"
                      src={require("./img/add_file.svg")}
                      alt="Second slide"
                    />
      						</div>
      					</div>
      				</div>
      			</div>
      		</div>
      	</div>
      </section>
    );
  }
}

export default Home;
