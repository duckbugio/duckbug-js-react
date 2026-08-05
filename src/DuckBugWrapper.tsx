import React from 'react'
import {  DuckBugProvider, DuckSDK, LogProviderConfig } from '@duckbug/js';

type Props = {
    children: React.ReactNode
    providers: DuckBugProvider[]
    config?: LogProviderConfig
}

let duck: DuckSDK | null = null;

export const DuckBugWrapper = ({children, config, providers}: Props) => {
  duck = new DuckSDK(providers, config);

  window.onerror = (message, source, error) => {
    duck?.error(message.toString(), {source, error})
    return false
  }

  window.onunhandledrejection = (event) => {
    duck?.error('Unhandled Promise Rejection', { 
      reason: event?.reason,
      stack: event?.reason?.stack 
    })
  }
  
  return (
    <div>{children}</div>
  )
}

export const useDuckBug = () => {
  if (!duck) {
    throw new Error('DuckBug not initialized. Use DuckBugWrapper first.');
  }
  return duck;
}

export { DuckBugProvider }