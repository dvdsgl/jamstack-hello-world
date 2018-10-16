// @ts-check
import React from "react";

import "./glide-app.css";

const GlideApp = ({ appId }) => (
  <div className="glide-app-container">
    <iframe
      className="glide-app"
      src={`https://app.heyglide.com/app.html?app=${appId}`}
    />
  </div>
);

export default GlideApp;
