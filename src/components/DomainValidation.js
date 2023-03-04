import React, { useEffect, useState } from "react";

export default function DomainValidation({ children }) {
  const [isValid, setValid] = useState(false);

  useEffect(() => {
    if (
      process.env.NODE_ENV !== "development" &&
      window.parent &&
      !window.parent.location.hostname.includes("naremis.com")
    ) {
      window.location.assign("https://naremis.com/");
    } else setValid(true);
  });

  if (isValid) return <>{children}</>;
}
