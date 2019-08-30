import * as renderer from "react-test-renderer";
import React from "react";
import Icon from "../Icon";
import { mount } from "enzyme";

describe("Icon", () => {
  it("是个 Icon", () => {
    const json = renderer.create(<Icon name="wechat" />).toJSON();
    expect(json).toMatchSnapshot();
  });
  it("onClick", () => {
    const fn = jest.fn();
    const fn2 = jest.fn()
    const component = mount(<Icon name="wechat" onClick={fn} />);
    component.find("svg").simulate("click");
    expect(fn).toBeCalled();
  });
});
