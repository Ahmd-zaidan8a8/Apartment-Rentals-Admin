import { useState } from "react";

const ExpandableText = ({ children, maxChars = 100 }) => {
  const [isExpanded, setExpanded] = useState(false);
  if (!children) return null;

  if (children.length <= maxChars) return <p>{children}</p>;
  const text = isExpanded ? children : children.substring(0, maxChars);
  return (
    <p>
      {text}...
      <button
        className="btn btn-secondary"
        onClick={() => setExpanded(!isExpanded)}
      >
        {isExpanded ? "Less" : "More"}
      </button>
    </p>
  );
};

export default ExpandableText;
