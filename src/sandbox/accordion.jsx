import { useState } from "react";

export const AccordionContainer = ({ children, activeItem = null }) => {
  const [activeAccordion, setActiveAccordion] = useState(activeItem);

  return (
    <div>
      {children.map((child, i) => {
        const isActive = activeAccordion === child.props.title ? true : false;

        return (
          <div className="border-b border-gray-200" key={i}>
            <button
              onClick={() => setActiveAccordion(child.props.title)}
              className="block w-full p-2 text-left border border-gray-200"
              style={{
                fontWeight: isActive ? "bold" : "normal",
              }}
            >
              {child.props.title}
              <span
                className={
                  isActive
                    ? "block float-right h-7 rotate-180"
                    : "block float-right h-7"
                }
              >
                ^
              </span>
            </button>
            <div
              className="p-2 border-l border-r border-gray-200"
              style={{
                display: isActive ? "block" : "none",
              }}
            >
              {child}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const AccordionItem = ({ children }) => {
  return children;
};
