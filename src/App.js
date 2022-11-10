import React from "react";
import "./styles.css";
import SectionItemsFactory from "./sections/section_items_factory";

export default function App() {
  // mock up a session_id
  const session_id = 2;

  // mock up the configs
  const configs = [
    {
      itype: "string",
      label: "desc"
    },
    {
      itype: "number",
      label: "height"
    }
  ];

  // the item_handler_generator
  const item_handler_generator = (sid) => {
    return function (iid) {
      console.log(`${sid} ${iid}`);

      // the detailed logic implemented here.
    };
  };

  return (
    <SectionItemsFactory
      configs={configs}
      section_id={session_id}
      section_handler={item_handler_generator}
    />
  );
}
