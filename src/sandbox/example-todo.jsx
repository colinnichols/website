import { useState, useRef } from "react";

export const TodoList = () => {
  const [list, setList] = useState([]);

  const ref = useRef(null);

  const handleRemoveItem = (id) => {
    setList((l) => l.filter((item) => item.id !== id));
  };

  const handleAddItem = () => {
    setList((oldArray) => [
      ...oldArray,
      { name: ref.current.value, id: new Date().valueOf() },
    ]);
  };

  return (
    <div>
      <strong>Todo List</strong> (
      <button
        onClick={() => {
          setList([]);
        }}
      >
        reset all
      </button>
      )
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddItem();
        }}
      >
        <input ref={ref} type="text" className="border border-gray-200" />
        <button type="submit">Add Item</button>
      </form>
      <ul>
        {list.map((item) => {
          return (
            <li>
              {item.name} (id: {item.id})
              <span
                onClick={() => {
                  handleRemoveItem(item.id);
                }}
              >
                x
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

//<TodoList />
