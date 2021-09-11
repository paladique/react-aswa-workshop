import React from 'react';

// Import the DogList component
import DogList from './DogList'

function App() {
    return (
        <article>
            <h1>Dog names</h1>
            {/* Display the DogList component */}
            <DogList />
            <br/>
            {/* TODO: Add message */}
            <p>hello world!</p>

        </article>
    )
}

export default App;