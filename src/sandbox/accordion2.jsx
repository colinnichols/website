import { useState, useEffect } from "react";

{
  /*
import { useState } from 'react';

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <Panel
        title="About"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel
        title="Etymology"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
      </Panel>
    </>
  );
}

function Panel({
  title,
  children,
  isActive,
  onShow
}) {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={onShow}>
          Show
        </button>
      )}
    </section>
  );
}

*/
}

const useAccordionState = () => {
  const [activeIndex, setActiveIndex] = useState();

  return { activeIndex, setActiveIndex };
};

export const AccordionContainer2 = (props) => {
  const { setActiveIndex } = useAccordionState();

  useEffect(() => {
    setActiveIndex("1");
  }, []);

  return (
    <div>
      {props.children.map((child) => {
        return <div className="border-b border-gray-200">{child}</div>;
      })}
    </div>
  );
};

export const AccordionItem2 = (props) => {
  //console.log(props);
  return <div>{props.children}</div>;
};

export const AccordionTitle2 = (props) => {
  const { activeIndex } = useAccordionState();
  console.log(props);

  return (
    <div>
      {props.children} [{props.itemKey}] (activeIndex ="{activeIndex}")
    </div>
  );
};

export const AccordionContent2 = ({ children }) => {
  return <div>{children}</div>;
};
