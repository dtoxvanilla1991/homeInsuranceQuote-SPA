import ReactDom from "react-dom";
import { render, screen, cleanup } from "@testing-library/react";
import App from "./App";
import Button from "./components/Button";
import "jest-dom/extend-expect";

afterEach(cleanup);
//integration test
it('rendering without crashes', () => {

    const div = document.createElement('div');
    ReactDom.render(<App />, div);

});
it("renders button correctly", () => {
    
    render(<Button buttonTitle="Select this addon" style={{padding: '0.5em 2em'}} ></Button>);
    
});