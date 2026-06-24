"use client";

import { useEffect, useRef } from "react";

const COLORS = {
  bg: "#1e293b",
  nodeFill: "#334155",
  nodeStroke: "#475569",
  textFill: "#f8fafc",
  lineStroke: "#94a3b8",
  edgeBg: "#1e293b",
  edgeText: "#cbd5e1",
  clusterFill: "#0f172a",
  clusterStroke: "#475569",
  activeFill: "#475569",
};

function recolorSvg(svg: SVGElement) {
  // 1. 所有文字 → 白色
  svg.querySelectorAll("text, tspan").forEach((el) => {
    (el as SVGElement).style.fill = COLORS.textFill;
  });

  // 2. 所有方框/圆形/多边形节点 → slate fill
  svg
    .querySelectorAll("rect, circle, ellipse, polygon, path")
    .forEach((el) => {
      const tag = el.tagName.toLowerCase();
      if (tag === "path" && el.getAttribute("d")?.includes("M")) {
        return; // path 留给边线处理
      }
      (el as SVGElement).style.fill = COLORS.nodeFill;
      (el as SVGElement).style.stroke = COLORS.nodeStroke;
      (el as SVGElement).style.strokeWidth = "1.5";
    });

  // 3. 边线 — 加流动动画
  svg.querySelectorAll(".edgePath path").forEach((el) => {
    const s = el as SVGElement;
    s.style.stroke = COLORS.lineStroke;
    s.style.strokeWidth = "2";
    s.style.fill = "none";
    s.setAttribute("stroke-dasharray", "5 5");
    s.classList.add("flow-line");
  });
  // 时序图消息线
  svg.querySelectorAll(".messageLine0, .messageLine1, .loopLine").forEach((el) => {
    const s = el as SVGElement;
    s.style.stroke = COLORS.lineStroke;
    s.style.strokeWidth = "2";
    s.setAttribute("stroke-dasharray", "5 5");
    s.classList.add("flow-line");
  });
  // line 元素
  svg.querySelectorAll("line").forEach((el) => {
    const s = el as SVGElement;
    s.style.stroke = COLORS.lineStroke;
    s.style.strokeWidth = "2";
    s.setAttribute("stroke-dasharray", "5 5");
    s.classList.add("flow-line");
  });

  // 4. 边标签
  svg.querySelectorAll(".edgeLabel rect").forEach((el) => {
    (el as SVGElement).style.fill = COLORS.edgeBg;
    (el as SVGElement).style.stroke = COLORS.nodeStroke;
  });
  svg.querySelectorAll(".edgeLabel text, .edgeLabel tspan").forEach((el) => {
    (el as SVGElement).style.fill = COLORS.edgeText;
  });

  // 5. 激活/时序条
  svg.querySelectorAll(".activation0, .activation1, .activation2, .activation, .actor").forEach((el) => {
    (el as SVGElement).style.fill = COLORS.activeFill;
    (el as SVGElement).style.stroke = COLORS.nodeStroke;
  });

  // 6. 聚类框
  svg.querySelectorAll(".cluster rect, .cluster path").forEach((el) => {
    (el as SVGElement).style.fill = COLORS.clusterFill;
    (el as SVGElement).style.stroke = COLORS.clusterStroke;
  });
  svg.querySelectorAll(".cluster text, .cluster tspan").forEach((el) => {
    (el as SVGElement).style.fill = COLORS.edgeText;
  });
}

export default function MermaidContent({ html }: { html: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const blocks = containerRef.current.querySelectorAll<HTMLElement>(
      "code.language-mermaid"
    );
    if (blocks.length === 0) return;

    let cancelled = false;

    const renderCharts = async () => {
      const mermaid = (await import("mermaid")).default;

      mermaid.initialize({
        startOnLoad: false,
        theme: "default",
        securityLevel: "loose",
        fontSize: 18,
      });

      for (const block of Array.from(blocks)) {
        if (cancelled) return;
        const pre = block.parentElement;
        if (!pre || pre.tagName !== "PRE") continue;

        const code = block.textContent || "";
        const chartId = `mc${Math.random().toString(36).slice(2, 8)}`;

        try {
          const { svg } = await mermaid.render(chartId, code.trim());

          const wrapper = document.createElement("div");
          wrapper.className = "my-6 not-prose";
          wrapper.innerHTML = `<div class="mermaid-box">${svg}</div>`;

          const svgEl = wrapper.querySelector("svg");
          if (svgEl) {
            svgEl.setAttribute("preserveAspectRatio", "xMinYMin meet");
            // 直接 JS 改颜色，100% 生效
            recolorSvg(svgEl as unknown as SVGElement);
          }

          pre.replaceWith(wrapper);
        } catch {
          // keep original
        }
      }
    };

    renderCharts();

    return () => {
      cancelled = true;
    };
  }, [html]);

  return (
    <>
      <style>{`
        .mermaid-box {
          background: #1e293b;
          border-radius: 0.75rem;
          padding: 1.5rem;
          overflow-x: auto;
        }
        .mermaid-box svg {
          display: block;
          margin: 0 auto;
          max-width: 100%;
          height: auto;
        }
        .mermaid-box svg * {
          font-size: 13px !important;
          font-family: ui-sans-serif, system-ui, -apple-system, sans-serif !important;
        }
        /* dashmotion 风格流动边线 */
        .flow-line {
          stroke-dasharray: 5 5;
        }
        @media (prefers-reduced-motion: no-preference) {
          .flow-line {
            animation: flowDash 0.75s linear infinite;
          }
        }
        @keyframes flowDash {
          to { stroke-dashoffset: -10; }
        }
      `}</style>
      <div
        ref={containerRef}
        className="prose prose-slate dark:prose-invert prose-base md:prose-lg max-w-none text-slate-800 dark:text-slate-200 transition-colors duration-700 scroll-smooth"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </>
  );
}
