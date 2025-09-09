import React from "react";

export default function Ticker({
  message = "OGCLUB is acquired by Brinc and is now VentureVerse.",
  speed = 28 // seconds per loop — tweak for faster/slower
}) {
  const itemsPerGroup = 8; // more items = denser ticker text
  const group = Array.from({ length: itemsPerGroup }, (_, i) => (
    <React.Fragment key={i}>
      <span className="globalTicker__text">{message}</span>
      <span className="globalTicker__sep" aria-hidden="true">•</span>
    </React.Fragment>
  ));

  return (
    <div className="globalTicker" role="status" aria-live="polite">
      <div className="globalTicker__track" style={{ animationDuration: `${speed}s` }}>
        {/* two identical groups for a seamless loop */}
        <div className="globalTicker__group">{group}</div>
        <div className="globalTicker__group" aria-hidden="true">{group}</div>
      </div>
    </div>
  );
}
