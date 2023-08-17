import React, { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

const SearchBar = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = async () => {
        // Simulate fetching search results
        const results = await fetchSearchResults(searchQuery);
        onSearch(results);
    };

    // Simulated function to fetch search results
    const fetchSearchResults = (query) => {
        // Simulate an API call
        return new Promise((resolve) => {
            setTimeout(() => {
                const dummyResults = [
                    { name: 'John Doe', email: 'john@example.com' },
                    { name: 'Jane Smith', email: 'jane@example.com' },
                    { name: 'Alex Johnson', email: 'alex@example.com' },
                ];
                resolve(dummyResults);
            }, 1000);
        });
    };

    return (
        <div className="mb-4">
            <Form inline>
                <FormControl
                    type="text"
                    placeholder="Search for members"
                    className="mr-sm-2"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button variant="outline-primary" onClick={handleSearch}>
                    Search
                </Button>
            </Form>
        </div>
    );
};

export default SearchBar;
