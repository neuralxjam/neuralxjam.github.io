export default function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      {/* blue — upper left */}
      <div
        className="aurora-blob absolute"
        style={{
          width: "70vw",
          height: "60vh",
          top: "-10%",
          left: "-15%",
          background: "radial-gradient(ellipse at center, rgba(47,107,255,0.20), transparent 70%)",
          filter: "blur(90px)",
          animation: "aurora-1 20s ease-in-out infinite",
        }}
      />
      {/* purple — upper right */}
      <div
        className="aurora-blob absolute"
        style={{
          width: "55vw",
          height: "55vh",
          top: "-5%",
          right: "-10%",
          background: "radial-gradient(ellipse at center, rgba(139,92,246,0.15), transparent 70%)",
          filter: "blur(110px)",
          animation: "aurora-2 15s ease-in-out infinite",
        }}
      />
      {/* teal — lower center */}
      <div
        className="aurora-blob absolute"
        style={{
          width: "60vw",
          height: "50vh",
          bottom: "15%",
          left: "20%",
          background: "radial-gradient(ellipse at center, rgba(6,182,212,0.10), transparent 70%)",
          filter: "blur(120px)",
          animation: "aurora-3 25s ease-in-out infinite",
        }}
      />
    </div>
  );
}
