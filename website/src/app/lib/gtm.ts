interface GTMEvent {
    event: string;
    [key: string]: string | number | boolean | object | undefined;
  }
  
  export const sendGTMEvent = (eventName: string, eventData?: Omit<GTMEvent, 'event'>) => {
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || []; // Ensure it exists
      window.dataLayer.push({ event: eventName, ...eventData });
    }
  };
  