import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react'
import { useSelector } from 'react-redux'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Edit() {
    
    

    
    const antcolony = useSelector(state => state);

    const [Name, setName] = useState(antcolony.antValues.name);
    const [avatar, setAvatar] = useState(antcolony.antValues.avatar);
    const [Title, setTitle] = useState(antcolony.antValues.Title);

    const updateAPIData = () => {
        axios.put(`https://62d15a99dccad0cf1765d332.mockapi.io/api/v1/ant_colony_mockup/${antcolony.antValues.id}`, {
            Name,
            avatar,
            Title
        })
    }

   
    return (

        <div>
                <Form className="create-form">
                    <Form.Field>
                        <label>Name</label>
                        <input type="text" placeholder={antcolony.antValues.name} onChange={(e) => setName(e.target.value)} />
                    </Form.Field>
                    <Form.Field>
                        <label>Avatar Image Url</label>
                        <input type="text" multiple placeholder={antcolony.antValues.avatar}  onChange={(e) => setAvatar(e.target.value)} />
                    </Form.Field>
                    <Form.Field>
                        <label>Title</label>
                        <input type="text"  placeholder={antcolony.antValues.Title}  onChange={(e) => setTitle(e.target.value)} />
                    </Form.Field>
                    <Link to='/'> <Button type='submit' onClick={updateAPIData}>Save</Button></Link>
                </Form>
            </div>
    )
}