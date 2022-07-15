import { Button, Form } from 'semantic-ui-react'
import React, { useState } from 'react';
import axios from 'axios';
export default function Create() {
    const [Name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [Title, setTitle] = useState('');



    const postData = () => {
        axios.post(`https://62d15a99dccad0cf1765d332.mockapi.io/api/v1/ant_colony_mockup`, {
            Name,
            avatar,
            Title
        })
    }

    return (
        <div>
            <Form className="create">
                <Form.Field>
                    <label>Name: </label>
                    <input placeholder='Name' onChange={(e) => setName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Title: </label>
                    <input placeholder='Title' onChange={(e) => setTitle(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Avatar URL: </label>
                    <input placeholder='URL' onChange={(e) => setAvatar(e.target.value)} />
                </Form.Field>
                <Button type='submit' onClick={postData}>Save</Button>
            </Form>
        </div>
    );


    
}

