import { ImageResponse } from "next/og";

export const alt = "Krisna Gema Rada — Consultoría gastronómica y contabilidad general remota";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "linear-gradient(135deg, #f8f2e8 0%, #f3ebdd 100%)",
          fontFamily: "Georgia, serif"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 18,
              background: "#2a211a",
              color: "#c79a4e",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 42,
              fontWeight: 600
            }}
          >
            K
          </div>
          <div
            style={{
              fontSize: 22,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#8a5e22",
              fontFamily: "Arial, sans-serif"
            }}
          >
            Consultora senior · +30 años
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 70, color: "#241b13", lineHeight: 1.05, maxWidth: 980 }}>
            Orden y claridad para que tu negocio funcione mejor.
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 30,
              color: "#6e6053",
              maxWidth: 980,
              fontFamily: "Arial, sans-serif"
            }}
          >
            Consultoría en administración gastronómica · Contabilidad general remota
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "2px solid #e4d8c4",
            paddingTop: 28,
            fontFamily: "Arial, sans-serif"
          }}
        >
          <div style={{ fontSize: 30, color: "#241b13", fontFamily: "Georgia, serif" }}>
            Krisna Gema Rada
          </div>
          <div style={{ fontSize: 26, color: "#8a5e22" }}>kgemarr@gmail.com</div>
        </div>
      </div>
    ),
    size
  );
}
