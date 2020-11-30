import React from 'react';
import ReactDom from 'react-dom';
import Button from "../Button";

import {cleanup, render} from "@testing-library/react";
import '@testing-library/jest-dom'


// afterEach(cleanup)
it('renders without crashing', ()=>{
    const div = document.createElement('div');
    ReactDom.render(<Button></Button>, div)
})

it('renders button correctly', ()=>{
    const {getByTestId} = render(<Button label="click me"></Button>)
    expect(getByTestId('button')).toHaveTextContent("click me")
})

it('renders button correctly', ()=>{
    const {getByTestId} = render(<Button label="save"></Button>)
    expect(getByTestId('button')).toHaveTextContent("save")
})
