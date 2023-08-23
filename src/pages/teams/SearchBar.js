import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';

const SearchBar = ({ onSearch, onClose }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleInputChange = event => {
        const query = event.target.value;
        setSearchQuery(query);
        onSearch(query); // Pass the query to the parent component's onSearch function
    };

    const handleSearchClose = () => {
        setSearchQuery('');
        onClose();
    };

    return (
        <Card className="search-bar-card">
            <Card.Body>
                <Form inline className="search-bar-form">
                    <Form.Control
                        type="text"
                        placeholder="Search new member..."
                        value={searchQuery}
                        onChange={handleInputChange}
                    />
                    <Button variant="outline-secondary" onClick={handleSearchClose}>
                        Cancel
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default SearchBar;
