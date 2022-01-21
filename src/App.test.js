import ReactDom from "react-dom";
// import { render, screen } from "@testing-library/react";
import App from "./App";
import About from "./components/About";


//integration test
test('rendering without crashes', () => {

    const div = document.createElement('div');
    ReactDom.render(<App />, div);
    ReactDom.render(<About />, div);

});