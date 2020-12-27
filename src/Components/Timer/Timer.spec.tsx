import react from "react";
import {shallow} from "enzyme";
// import App from "./App";
import Timer from "./Timer";
describe("render the App component",()=>{
    let container=shallow(<Timer/>);
    it("it render div",()=>{
        
        expect(container.find("div").length).toBeGreaterThanOrEqual(1)
    });
    // it("it sho div",()=>{
        
    //     expect(container.containsMatchingElement(<Timer/>)).toEqual(true);
    // });
    it("should render instances of the TimerButton component", () => {
        expect(container.find("TimerButton").length).toEqual(3)
      })
    
})