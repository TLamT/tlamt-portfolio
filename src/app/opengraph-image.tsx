import { ImageResponse } from "next/og";

export const alt = "TLamT · Neon Side Projects";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0f0b1a",
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 104,
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: "#ffffff",
          }}
        >
          TLamT
          <span style={{ color: "#e889f9" }}>.dev</span>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 40,
            color: "#9ca3af",
            marginTop: 20,
          }}
        >
          Neon side projects · Made in Hong Kong
        </div>
      </div>
    ),
    { ...size }
  );
}
