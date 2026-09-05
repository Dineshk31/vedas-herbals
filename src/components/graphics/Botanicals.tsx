import type { SVGProps } from "react";

export function LeafOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 160" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M50 5C20 30 8 70 20 105C28 128 42 145 50 155C58 145 72 128 80 105C92 70 80 30 50 5Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M50 20V148" stroke="currentColor" strokeWidth="1" strokeOpacity="0.6" />
      <path d="M50 45C42 52 32 58 24 60" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
      <path d="M50 45C58 52 68 58 76 60" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
      <path d="M50 75C40 82 28 87 20 88" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
      <path d="M50 75C60 82 72 87 80 88" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
      <path d="M50 105C42 111 33 115 27 116" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
      <path d="M50 105C58 111 67 115 73 116" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
    </svg>
  );
}

export function TeaCupOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 160 140" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M20 45H120V85C120 107 102 125 80 125H60C38 125 20 107 20 85V45Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M120 55H132C142 55 148 63 148 72C148 81 142 89 132 89H120"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M10 132H130" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M45 45C43 35 48 28 45 18" stroke="currentColor" strokeWidth="1" strokeOpacity="0.6" strokeLinecap="round" />
      <path d="M70 45C68 33 74 25 70 12" stroke="currentColor" strokeWidth="1" strokeOpacity="0.6" strokeLinecap="round" />
      <path d="M95 45C93 35 98 28 95 18" stroke="currentColor" strokeWidth="1" strokeOpacity="0.6" strokeLinecap="round" />
    </svg>
  );
}

export function SteamWisp(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 40 120" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M20 115C20 115 5 95 20 78C35 61 20 41 20 41C20 41 5 21 20 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function BranchDivider(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 300 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M0 20H120" stroke="currentColor" strokeWidth="1" />
      <path d="M180 20H300" stroke="currentColor" strokeWidth="1" />
      <circle cx="150" cy="20" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M130 20C135 12 145 12 150 20C155 28 165 28 170 20" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

export function MandalaRing(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="100" cy="100" r="98" stroke="currentColor" strokeWidth="0.75" opacity="0.5" />
      <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
      {Array.from({ length: 24 }).map((_, i) => {
        const angle = (i / 24) * Math.PI * 2;
        const x1 = 100 + Math.cos(angle) * 80;
        const y1 = 100 + Math.sin(angle) * 80;
        const x2 = 100 + Math.cos(angle) * 98;
        const y2 = 100 + Math.sin(angle) * 98;
        return (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
        );
      })}
    </svg>
  );
}
