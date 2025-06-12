import React from 'react';
import ReactDOM from 'react-dom/client';
import { Helmet } from 'react-helmet';
import './index.css';
import App from './App';

// Error Boundary Component
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught:", error, errorInfo);
    // Log to error tracking service (Sentry, etc.)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-fallback">
          <h1>Something went wrong</h1>
          <button onClick={() => window.location.reload()}>Refresh</button>
        </div>
      );
    }
    return this.props.children;
  }
}

// SEO Configuration
const SeoSetup = () => (
  <Helmet>
    <title>Todo List App - Manage Your Tasks Efficiently</title>
    <meta name="description" content="A productive todo list application built with React.js. Organize, prioritize and complete your daily tasks." />
    <meta name="keywords" content="todo, tasks, productivity, react app" />
    <meta property="og:title" content="Todo List App" />
    <meta property="og:description" content="Manage your tasks efficiently" />
    <meta property="og:type" content="website" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="canonical" href="https://yourdomain.com" />
  </Helmet>
);

// Performance Monitoring (optional)
const startPerformanceTracking = () => {
  if (process.env.NODE_ENV === 'production') {
    import('web-vitals').then(({ getCLS, getFID, getLCP, getFCP, getTTFB }) => {
      getCLS(console.log);
      getFID(console.log);
      getLCP(console.log);
      getFCP(console.log);
      getTTFB(console.log);
    });
  }
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <SeoSetup />
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);

// Initialize performance tracking
startPerformanceTracking();