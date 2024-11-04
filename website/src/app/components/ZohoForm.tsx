import React, { useEffect } from 'react';

const ZohoFormEmbed: React.FC = () => {
  useEffect(() => {
    try {
      const container = document.getElementById("zf_div_OjsIKLiy5r3GL9SIEhxsQeVZjV_JRfJw837vsS25Pzc");

      // Check if the iframe already exists to avoid duplication
      if (container && container.getElementsByTagName("iframe").length === 0) {
        const iframe = document.createElement("iframe");
        iframe.src = 'https://forms.zohopublic.com/russellphoeni1/form/TestEmbeddedForm/formperma/OjsIKLiy5r3GL9SIEhxsQeVZjV_JRfJw837vsS25Pzc?zf_rszfm=1';
        iframe.style.border = "none";
        iframe.style.height = "933px";
        iframe.style.width = "90%";
        iframe.style.transition = "all 0.5s ease";
        iframe.setAttribute("aria-label", 'Test Embedded Form');
        iframe.style.background = "rgba(245, 245, 245, 1)"
        iframe.id = "zoho-embed-iframe"; // Unique ID for the iframe

        container.appendChild(iframe);
      }

      const handleMessage = (event: MessageEvent) => {
        const evntData = event.data;
        if (evntData && typeof evntData === "string") {
          const zf_ifrm_data = evntData.split("|");
          if (zf_ifrm_data.length === 2 || zf_ifrm_data.length === 3) {
            const zf_perma = zf_ifrm_data[0];
            const zf_ifrm_ht_nw = `${parseInt(zf_ifrm_data[1], 10) + 15}px`;
            const iframeElement = container?.getElementsByTagName("iframe")[0];
            if (iframeElement && iframeElement.src.includes("formperma") && iframeElement.src.includes(zf_perma)) {
              const prevIframeHeight = iframeElement.style.height;
              const zf_tout = zf_ifrm_data.length === 3;
              if (prevIframeHeight !== zf_ifrm_ht_nw) {
                if (zf_tout) {
                  setTimeout(() => {
                    iframeElement.style.height = zf_ifrm_ht_nw;
                  }, 500);
                } else {
                  iframeElement.style.height = zf_ifrm_ht_nw;
                }
              }
              if (zf_tout) iframeElement.scrollIntoView();
            }
          }
        }
      };

      window.addEventListener('message', handleMessage, false);

      return () => {
        window.removeEventListener('message', handleMessage);
      };
    } catch (e) {
      console.error("Error embedding Zoho form:", e);
    }
  }, []);

  return (
    <div id="zf_div_OjsIKLiy5r3GL9SIEhxsQeVZjV_JRfJw837vsS25Pzc"></div>
  );
};

export default ZohoFormEmbed;
