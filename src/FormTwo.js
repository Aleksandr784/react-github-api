import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Media, Form, Button } from 'react-bootstrap';

export default function FormTwo() {
    return (
        <div>
            <Form inline onSubmit={this.handleSubmit}>
                <Form.Group controlId="formInlineName">
                    <Form.Control
                        type="text"
                        value={this.state.searchTerm}
                        placeholder="Enter Search Term"
                        onChange={this.handleChange}
                    />
                </Form.Group>
                {' '}
                <Button type="submit">
                    Search
                </Button>
            </Form>
            <h3>GitHub Users Results</h3>
            {this.state.isLoading &&
                <ReactLoading type="spinningBubbles" color="#444" />
            }
            {listUsers}
        </div>
    )
}


