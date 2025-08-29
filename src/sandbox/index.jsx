import { useState, useEffect, useRef } from "react";
import { TabContainer, Tab } from "./tabs.jsx";
import { AccordionContainer, AccordionItem } from "./accordion.jsx";
import { TodoList } from "./todoList.jsx";
import { useFormReset } from "./useFormReset.jsx";

const Counter = ({ initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  }, [count]);

  return count;
};

//You've been on this page for <Counter initialCount={10} /> seconds!

const Container = () => {
  const [container, setContainer] = useState({
    content: "helloworld",
    open: true,
    chartType: "bar",
  });

  const ref = useRef(null);

  useEffect(() => {
    //console.log(container);
  }, [container]);

  return (
    <>
      <button
        onClick={() => {
          setContainer((currentContainer) => ({
            ...currentContainer,
            open: !container["open"],
          }));
        }}
      >
        Toggle Content {container["open"] ? "-" : "+"}
      </button>
      <div
        style={{
          backgroundColor: "#ccc",
          display: container["open"] ? "block" : "none",
        }}
      >
        <input ref={ref} placeholder="enter new content" />
        <p>{container["content"]}</p>
        <button
          onClick={() => {
            const newValue = ref.current.value
              ? ref.current.value
              : container["content"];
            setContainer((currentContainer) => ({
              ...currentContainer,
              content: newValue,
            }));
          }}
        >
          Update Content
        </button>

        <label>
          <input
            type="radio"
            value="bar"
            name="chartType"
            defaultChecked={container["chartType"] == "bar"}
            onClick={(e) => {
              setContainer((currentContainer) => ({
                ...currentContainer,
                chartType: e.target.value,
              }));
            }}
          />
          Bar
        </label>
        <label>
          <input
            type="radio"
            value="pie"
            name="chartType"
            defaultChecked={container["chartType"] == "pie"}
            onClick={(e) => {
              setContainer((currentContainer) => ({
                ...currentContainer,
                chartType: e.target.value,
              }));
            }}
          />
          Pie
        </label>

        <p>{container["chartType"]}</p>
      </div>
    </>
  );
};

const Sandbox = () => {
  const { values, resetForm, handleInputChange } = useFormReset({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log("Form submitted:", values);
    resetForm();
  };

  return (
    <>
      {/* <TodoList />
      <div className="border-t border-gray-400 my-10" />
      <AccordionContainer activeItem="Item 2">
        <AccordionItem title="Item 1">Helloworld1</AccordionItem>
        <AccordionItem title="Item 2">Helloworld2</AccordionItem>
        <AccordionItem title="Item 3">Helloworld3</AccordionItem>
        <AccordionItem title="Item 4">Helloworld4</AccordionItem>
      </AccordionContainer>
      <div className="border-t border-gray-400 my-10" />
      You've been on this page for <Counter initialCount={10} /> seconds!
      <div className="border-t border-gray-400 my-10" />
      <TabContainer className="tab-container md:flex-2/3 md:mr-5 pb-5">
        <Tab title="Tab 1" anchor="tab1">
          <p>Lorem ipsum 1</p>
        </Tab>
        <Tab title="Tab 2" anchor="tab2">
          <p>Lorem ipsum 2</p>
        </Tab>
      </TabContainer>
      <div className="border-t border-gray-400 my-10" />
      <Container isOpen={false} /> */}
      <div className="border-t border-gray-400 my-10" />
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleInputChange}
            className="border-1"
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={values.email}
            onChange={handleInputChange}
            className="border-1"
          />
        </label>
        <br />
        <label>
          Message:
          <input
            type="text"
            name="message"
            value={values.name}
            onChange={handleInputChange}
            className="border-1"
          />
        </label>
        <br />
        <button type="submit">Submit</button>
        <button type="button" onClick={resetForm}>
          Reset
        </button>
      </form>
    </>
  );
};

export default Sandbox;
