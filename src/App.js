import React from "react";
import Accordion from './components/Accordion';

const items = [
    {
        title: 'What is React?',
        content: 'React is...'
    },
    {
        title: 'Why use React?',
        content: 'React is a favourite...'
    },
    {
        title: 'How do you use React?',
        content: 'Creating components...'
    },    
]

export default () => {
    return <div><Accordion items={items}/></div>
}