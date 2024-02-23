import React from "react";

const withLoading = (WrappedComponent) => {
  class WithLoading extends React.Component {
    state = { isLoading: true };

    componentDidMount() {
      setTimeout(() => {
        this.setState({ isLoading: false });
      }, 2000);
    }

    render() {
      return (
        <WrappedComponent {...this.props} loading={this.state.isLoading} />
      );
    }
  }

  return WithLoading;
};

const MyComponent = ({ loading }) => (
  <div>{loading ? <p>Loading...</p> : <p>HOC, withLoading</p>}</div>
);

export const MyComponentWithLoading = withLoading(MyComponent);
