declare module "remoteApp1/RemoteComponent" {
  import { ComponentType } from "react";

  interface RemoteComponentProps {
    title?: string;
    message?: string;
  }

  const RemoteComponent: ComponentType<RemoteComponentProps>;
  export default RemoteComponent;
}

declare module "remoteApp2/RemoteComponent" {
  import { ComponentType } from "react";

  interface RemoteComponentProps {
    title?: string;
    message?: string;
  }

  const RemoteComponent: ComponentType<RemoteComponentProps>;
  export default RemoteComponent;
}

declare module "remoteApp2/RemoteComponent" {
  import { ComponentType } from "react";

  interface RemoteComponentProps {
    title?: string;
    message?: string;
  }

  const RemoteComponent: ComponentType<RemoteComponentProps>;
  export default RemoteComponent;
}
