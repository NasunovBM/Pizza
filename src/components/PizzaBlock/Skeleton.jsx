import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="277" y="34" rx="0" ry="0" width="5" height="5" />
    <circle cx="137" cy="124" r="125" />
    <rect x="0" y="269" rx="10" ry="10" width="280" height="30" />
    <rect x="0" y="324" rx="10" ry="10" width="280" height="90" />
    <rect x="7" y="446" rx="10" ry="10" width="73" height="30" />
    <rect x="126" y="436" rx="10" ry="10" width="150" height="50" />
  </ContentLoader>
);

export default Skeleton;
