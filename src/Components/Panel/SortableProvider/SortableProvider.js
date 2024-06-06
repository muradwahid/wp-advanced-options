import React from 'react';
import { ReactSortable } from "react-sortablejs";
import Sortable, { MultiDrag, Swap } from "sortablejs";
/**
 * SortableProvider Component
 * 
 * @param {object} props - The props object
 * @param {function} props.onChange - The function to handle changes in the sortable items
 * @param {array} props.items - The items to be sorted
 * @param {React.ReactNode} props.children - The children components
 * @param {object} props.style - The style object for the sortable provider
 * @param {string} props.className - The class name for the sortable provider
 * @returns {JSX.Element} React component
 */

Sortable.mount(new MultiDrag(), new Swap());
export const SortableProvider = (props) => {
  const {
    onChange = () => { },
    items,
    children,
    style,
    className,
  } = props;
  return (
    <div>
      <ReactSortable
        animation={200}
        delayOnTouchStart={true}
        delay={2}
        list={items}
        setList={(val) => onChange(val)}
        style={style}
        className={className}
      >
        {children}
      </ReactSortable>
    </div>
  );
};