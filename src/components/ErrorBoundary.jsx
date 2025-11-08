import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Optionally log error to a monitoring service
    // console.error('ErrorBoundary caught:', error, errorInfo);
  }

  render() {
    const { hasError } = this.state;
    if (hasError) {
      return (
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="rounded-xl border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/40 p-4 text-red-800 dark:text-red-200">
            <div className="font-semibold mb-1">Something went wrong rendering this section.</div>
            <div className="text-sm opacity-80">Please refresh the page. If the issue persists, try disabling extensions or WebGL-heavy content.</div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
