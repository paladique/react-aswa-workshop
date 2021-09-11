import React from 'react';

// Import the DogList component
import DogList from './DogList'
import CatList from './CatList'

function App() {
    return (
        <article>
            <h1>Dog names</h1>
            {/* Display the DogList component */}
            <DogList />

            {/* TODO: Add message */}
            
            <h1>Cat names</h1>
            {/* Display the DogList component */}
             <CatList />

        </article>
    )
}

export default App;