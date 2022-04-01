import React from "react";
import  ReactDOM  from "react-dom";
import { render, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import '@testing-library/jest-dom/extend-expect';
import App from "../App.jsx";

it('Renders component without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
    ReactDOM.unmountComponentAtNode(div);
})

