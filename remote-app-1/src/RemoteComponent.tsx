import React from "react";

interface RemoteComponentProps {
  title?: string;
  message?: string;
}

const RemoteComponent: React.FC<RemoteComponentProps> = ({
  title = "Remote Component 1",
  message = "This component is loaded from the remote application!",
}) => {
  return (
    <div style={{ padding: "20px", border: "2px solid blue", margin: "10px" }}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
};

export default RemoteComponent;
