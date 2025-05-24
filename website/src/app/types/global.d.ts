declare global {
    interface Window {
      dataLayer: Array<{ event: string; [key: string]: string | number | boolean | object | undefined }>;
    }
  }
  
  export {};
  