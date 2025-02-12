import { useEffect } from "react";

const CredlyBadge = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "//cdn.credly.com/assets/utilities/embed.js";
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div
            data-iframe-width="150"
            data-iframe-height="270"
            data-share-badge-id="d8d98d1c-08c3-4806-9de7-c1155b691ace"
            data-share-badge-host="https://www.credly.com"
        ></div>
    );
};

export default CredlyBadge;
