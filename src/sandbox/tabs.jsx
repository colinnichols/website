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
              activeTab === child.props.anchor
                ? "p-5 border border-gray-200"
                : "p-5 border border-gray-200 bg-gray-100"
            }
            onClick={() => handleClick(child.props.anchor)}
          >
            {child.props.title}
          </button>
        ))}
      </div>
      <div className="tabs-content" role="tabpanel">
        {isLoading ? (
          <div className="h-8 w-56 my-6 loader" title="Loading Content">
            <span className="sr-only">Loading Content</span>
          </div>
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
