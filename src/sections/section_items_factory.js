import React from "react";

export function SectionItemFactory(props) {
  const { itype, label, item_id, itemHandleChange } = props;
  return (
    <label>
      {label}
      <input
        type={itype}
        name={label}
        id={item_id}
        onChange={() => itemHandleChange(item_id)}
      ></input>
    </label>
  );
}

export default function SectionItemsFactory(props) {
  const { configs, section_id, section_handler } = props;
  const item_handler = section_handler(section_id);
  return (
    <>
      {configs.map(({ itype, label }, index) => (
        <SectionItemFactory
          itype={itype}
          label={label}
          key={index}
          item_id={index}
          itemHandleChange={item_handler}
        />
      ))}
    </>
  );
}
