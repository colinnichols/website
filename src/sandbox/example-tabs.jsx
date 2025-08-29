import { useState, useLayoutEffect } from "react";

export const TabContainer = ({ children, className }) => {
  const [isLoading, setIsLoading] = useState(true);

  let initialTab = children[0].props.anchor;

  useLayoutEffect(() => {
    const hash = window.location.hash;
    if (hash != "" && hash != initialTab) {
      setActiveTab(hash.substring(1));
    }
    setIsLoading(false);
  }, []);

  const [activeTab, setActiveTab] = useState(initialTab);

  const handleClick = (anchor) => {
    setActiveTab(anchor);
    window.location.hash = anchor;
  };

  return (
    <div className={className}>
      <div className="tabs" role="tablist">
        {children.map((child) => (
          <button
            key={child.props.anchor}
            role="tab"
            aria-selected={activeTab === child.props.anchor ? "true" : "false"}
            className={
              activeTab === child.props.anchor ? "bg-white" : "bg-gray-100"
            }
            onClick={() => handleClick(child.props.anchor)}
          >
            {child.props.title}
          </button>
        ))}
      </div>
      <div className="tabs-content" role="tabpanel">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          children.map((child) => {
            if (child.props.anchor === activeTab) {
              return child;
            }
          })
        )}
      </div>
    </div>
  );
};

export const Tab = ({ children }) => {
  return <div className="p-5 border border-gray-200">{children}</div>;
};

/*
<TabContainer className="tab-container md:flex-2/3 md:mr-5 pb-5">
  <Tab title="Tab 1" anchor="tab1">
    <p>Lorem ipsum 1</p>
  </Tab>
  <Tab title="Tab 2" anchor="tab2">
    <p>Lorem ipsum 2</p>
  </Tab>
</TabContainer>
*/
