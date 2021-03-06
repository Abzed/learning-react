import React from 'react';
import {data} from './data';
import { Link, useParams } from 'react-router-dom'

import './practise/practise.css';

const Person = () => {
    const [name, setName] = React.useState('default name');
    const {id} = useParams();

    React.useEffect((id) => {
        const newPerson = data.find((person) => person.id === parseInt(id));
        setName(newPerson.name)
    },[id])

    return(
        <div>
            <h1>{name}</h1>
            <Link to="/people" className="btn">Back To People</Link>
        </div>
    );
};

export default Person;