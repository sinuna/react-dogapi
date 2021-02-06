import React from 'react';
import DogPost from './DogPost';
import styled from 'styled-components';

const App = () => {

	const posts = DogPost();

	const rendereedPosts = posts.map((post) => {
		return (
			<div>
			<img src={post.image.url} alt="img"/>
			<p key={post.id}>{post.name}</p>
			</div>
			);
	});
	
	return (
		<div>
			<h1>Adopt a dog!</h1>
			{rendereedPosts}
		</div>
	)
	
}

export default App;