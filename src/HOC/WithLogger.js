import React, { useEffect } from "react";

const withLogger = (WrappedComponent) => {
  const WithLogger = (props) => {
    useEffect(() => {
      console.log(`Component ${WrappedComponent.name} mounted.`);
      return () => {
        console.log(`Component ${WrappedComponent.name} unmounted.`);
      };
    }, []);

    useEffect(() => {
      console.log(`Component ${WrappedComponent.name} updated.`);
    });

    return <WrappedComponent {...props} />;
  };

  return WithLogger;
};

const MyComponent = () => <div>{<p>HOC, withLogger</p>}</div>;

const MyComponentWithLogger = withLogger(MyComponent);
export default MyComponentWithLogger;
