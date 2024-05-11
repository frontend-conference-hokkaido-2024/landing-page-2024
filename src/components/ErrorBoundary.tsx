'use client';
import React from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<React.PropsWithChildren> {
  constructor(props: React.PropsWithChildren) {
    super(props);
    
  }
  state: ErrorBoundaryState = { hasError: false };

    static getDerivedStateFromError(): ErrorBoundaryState {
      return { hasError: true }; 
    }
    render() {
        if (this.state.hasError) {
        // カスタムフォールバックUIをレンダリング
        return <h1> 何かがうまくいきませんでした。</h1>;
    }
    return this.props.children;
}
}

export default ErrorBoundary;