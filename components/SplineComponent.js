import React, { Suspense } from "react";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

export default function App() {
  return (
    <div style={{ height: "100%" }}>
      <Suspense fallback={<div>Loading...</div>}>
        <Spline scene="https://prod.spline.design/HQQHK6rasJU44sD9/scene.splinecode" />
      </Suspense>
    </div>
  );
}
