import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { SectionItemFactory } from "../section_items_factory";
import SectionItemsFactory from "../section_items_factory";

Enzyme.configure({ adapter: new Adapter() });

describe("test section items", () => {
  beforeEach(() => {});

  afterEach(() => {});

  it("test SectionItemFactory", () => {
    let wrapper = shallow(<SectionItemFactory itype="string" label="desc" />);
    expect(wrapper.html()).toEqual(
      '<label>desc<input type="string" name="desc"/></label>'
    );
  });

  it("test SectionItemsFactory", () => {
    let wrapper = shallow(
      <SectionItemsFactory
        configs={[
          {
            itype: "string",
            label: "desc"
          },
          {
            itype: "number",
            label: "height"
          }
        ]}
      />
    );
    expect(wrapper.html()).toEqual(
      '<label>desc<input type="string" name="desc"/></label><label>height<input type="number" name="height"/></label>'
    );
  });
});
