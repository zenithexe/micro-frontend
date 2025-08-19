import React, { Suspense } from "react";

// Lazy load the remote component
const RemoteComponent1 = React.lazy(() => import("remoteApp1/RemoteComponent"));
const RemoteComponent2 = React.lazy(() => import("remoteApp2/RemoteComponent"));

const App: React.FC = () => {
  return (
    <div>
      <h1>Host Application</h1>
      <div style={{ padding: "20px", border: "2px solid red", margin: "10px" }}>
        <h2>Host Content</h2>
        <p>This is the host application content.</p>
      </div>

      <Suspense fallback={<div>Loading Remote Components...</div>}>
        <RemoteComponent1
          title="Custom Remote Title"
          message="This is a custom message passed from host!"
        />
        <RemoteComponent2 />
      </Suspense>
    </div>
  );
};

export default App;
