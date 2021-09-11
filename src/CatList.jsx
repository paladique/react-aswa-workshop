import React, { useState, useEffect } from 'react';
import { loadCats } from './store'

function CatList() {
    // Registers a state object named Cats
    // and a function named setCats to update the value
    const [Cats, setCats] = useState([]);

    // Runs at load time
    useEffect(async () => {
        // Retrieve all Cats from the server
        const loadedCats = await loadCats();
        // Update the Cats array with loaded Cats from server
        setCats([...loadedCats]);
    }, []);

    // Create the list of Cats to display
    const CatDisplay = Cats.map(
        (Cat, id) => <li key={id} className="list-group-item">{Cat}</li>
    );

    // Generate the display
    return (
        <ul className="list-group">
            {CatDisplay}
        </ul>
    )
}

export default CatList;
