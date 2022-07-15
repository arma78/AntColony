
import {Button } from 'semantic-ui-react'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { getAnt } from '../actions'
import './read.css';

const Read = ({ dispatch }) => {
    const [APIData, setAPIData] = useState([]);
    const setData = (data) => {
        dispatch(getAnt(data));

    }


    const onDelete = (id) => {
        axios.delete(`https://62d15a99dccad0cf1765d332.mockapi.io/api/v1/ant_colony_mockup/${id}`)
            .then(() => {
                getData();
            })
    }

    const getData = () => {
        axios.get(`https://62d15a99dccad0cf1765d332.mockapi.io/api/v1/ant_colony_mockup`)
            .then((getData) => {
                setAPIData(getData.data);
            })
    }


    useEffect(() => {
        axios.get(`https://62d15a99dccad0cf1765d332.mockapi.io/api/v1/ant_colony_mockup`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])

    return (
        <div className="grid-container">

            {APIData.map((data) => {
                return (
                    <div className="card" key={data.id}>
                        <img src={data.avatar} alt="Avatar" width={180} height={180}  />
                        <div className="container">
                            <h4><b>{data.name}</b></h4>
                            <p>{data.Title}</p>
                            <Link to='/edit'>
                                <Button onClick={() => setData(data)}>Update</Button>
                            </Link>
                            &nbsp; &nbsp; &nbsp;
                            <Button onClick={() => onDelete(data.id)}>Delete</Button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default connect()(Read)