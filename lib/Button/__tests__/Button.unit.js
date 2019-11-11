import * as renderer from "react-test-renderer";
import React from "react";
import Button from "../Button"
import { mount } from "enzyme";

describe("Button", () => {
  it("Button", () => {
    const json = renderer.create(<Button appearance="ghost"/>).toJSON();
    expect(json).toMatchSnapshot();
  });
  it("Button click", () => {
    const fn = jest.fn();
    const fn2 = jest.fn()
    const component = mount(<Button onClick={fn} />);
    component.find("svg").simulate("click");
    expect(fn).toBeCalled();
  })
});
