import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Cards from "./Cards";
import Footer from "./Footer";

//create your first component
const Home = () => {
	const cardInfo = [
		{
			imageUrl: "https://picsum.photos/1000/1000?random=1",
			title: "Feelings and how to destroy them",
			description:
				"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam iusto, eum ut facilis deleniti ullam voluptatum?",
			button: "Click Me",
		},
		{
			imageUrl: "https://picsum.photos/1000/1000?random=2",
			title: "Waiting is not easy",
			description:
				"Fugit corrupti sunt repudiandae doloribus distinctio ex dignissimos omnis, dolor adipisci quibusdam, quibusdam harum, ipsum optio minima adipisci voluptas.",
			button: "Read More",
		},
		{
			imageUrl: "https://picsum.photos/1000/1000?random=3",
			title: "How to read a book",
			description:
				"Quae cupiditate nobis veritatis minus debitis doloribus eligendi eum, saepe blanditiis cumque amet consectetur adipisicing elit voluptatem quas mollitia, fuga nemo aliquid molestias!",
			button: "Add To Cart",
		},
		{
			imageUrl: "https://picsum.photos/1000/1000?random=4",
			title: "How to avoid work?",
			description:
				"Rem quam dolorem molestiae a doloremque facere laboriosam ullam animi ab modi nesciunt pariatur enim ad minus sunt tempore, dolore, incidunt in.",
			button: "Buy Now",
		},
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. At
			excepturi ipsa assumenda voluptas fuga perferendis quos. Ad aut cum
			similique reprehenderit dolor adipisci quibusdam rem dicta porro
			assumenda, exercitationem doloribus?
		</p>,
	];

	return (
		<div>
			<Navbar />
			<div className="container">
				<Jumbotron />
				<Cards cardInfo={cardInfo} />
			</div>
			<Footer />
		</div>
	);
};

export default Home;
