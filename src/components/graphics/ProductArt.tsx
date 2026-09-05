import type { SVGProps } from "react";

/** Bilva — bael leaf, distinctively trifoliate */
export function BilvaArt(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M100 110V172" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <g strokeWidth="1.5" stroke="currentColor">
        <path d="M100 110C100 110 95 78 68 62C46 49 30 52 30 52C30 52 32 76 52 92C68 105 100 110 100 110Z" />
        <path d="M100 110C100 110 105 78 132 62C154 49 170 52 170 52C170 52 168 76 148 92C132 105 100 110 100 110Z" />
        <path d="M100 108C100 108 88 68 100 30C112 68 100 108 100 108Z" />
      </g>
      <path d="M100 30V60M52 92C58 88 66 86 76 88M148 92C142 88 134 86 124 88" stroke="currentColor" strokeWidth="0.75" strokeOpacity="0.55" />
    </svg>
  );
}

/** Arjuna — tree bark and oblong leaves */
export function ArjunaArt(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M100 175V95" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M92 175V100M108 175V100" stroke="currentColor" strokeWidth="0.6" strokeOpacity="0.5" />
      <path d="M100 128C86 118 70 116 58 120M100 112C88 104 76 100 66 100M100 145C112 137 126 135 138 139" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      <g stroke="currentColor" strokeWidth="1.25">
        <ellipse cx="46" cy="112" rx="18" ry="8" transform="rotate(-24 46 112)" />
        <ellipse cx="60" cy="90" rx="16" ry="7" transform="rotate(-38 60 90)" />
        <ellipse cx="150" cy="130" rx="18" ry="8" transform="rotate(22 150 130)" />
        <ellipse cx="132" cy="100" rx="17" ry="7.5" transform="rotate(35 132 100)" />
      </g>
      <circle cx="100" cy="70" r="4" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

/** Raavi — peepal leaf, heart-shaped with a long drip-tip */
export function RaaviArt(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M100 30C60 55 40 95 48 125C55 150 78 160 100 145C122 160 145 150 152 125C160 95 140 55 100 30Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M100 145C96 158 92 168 88 178" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M100 60V140" stroke="currentColor" strokeWidth="0.9" strokeOpacity="0.6" />
      <path
        d="M100 75C90 82 78 86 68 86M100 95C88 100 76 104 64 106M100 115C90 121 80 125 70 128"
        stroke="currentColor"
        strokeWidth="0.7"
        strokeOpacity="0.5"
      />
      <path
        d="M100 75C110 82 122 86 132 86M100 95C112 100 124 104 136 106M100 115C110 121 120 125 130 128"
        stroke="currentColor"
        strokeWidth="0.7"
        strokeOpacity="0.5"
      />
    </svg>
  );
}

/** Lemongrass — tall clustered blades */
export function LemongrassArt(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M70 172C70 172 66 120 78 78C86 50 96 34 96 34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M100 172C100 172 100 110 100 70C100 46 100 26 100 26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M130 172C130 172 134 120 122 78C114 50 104 34 104 34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M85 172C85 172 82 135 90 100" stroke="currentColor" strokeWidth="1.1" strokeOpacity="0.6" strokeLinecap="round" />
      <path d="M115 172C115 172 118 135 110 100" stroke="currentColor" strokeWidth="1.1" strokeOpacity="0.6" strokeLinecap="round" />
      <path d="M55 172H145" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/** Pudina — mint, scalloped opposite leaves on a stem */
export function PudinaArt(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M100 172V38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {[152, 124, 96, 68].map((y, i) => (
        <g key={y}>
          <path
            d={`M100 ${y}C${100 - (i % 2 === 0 ? 26 : 22)} ${y - 10} ${100 - (i % 2 === 0 ? 30 : 26)} ${y + 8} 100 ${y + 14}Z`}
            stroke="currentColor"
            strokeWidth="1.25"
          />
          <path
            d={`M100 ${y}C${100 + (i % 2 === 0 ? 26 : 22)} ${y - 10} ${100 + (i % 2 === 0 ? 30 : 26)} ${y + 8} 100 ${y + 14}Z`}
            stroke="currentColor"
            strokeWidth="1.25"
          />
        </g>
      ))}
    </svg>
  );
}

/** Thati Bellam — palm silhouette over a coffee cup */
export function ThatiBellamArt(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M100 108V150" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <g stroke="currentColor" strokeWidth="1.25">
        <path d="M100 108C100 108 78 96 70 74C90 78 100 92 100 108Z" />
        <path d="M100 108C100 108 122 96 130 74C110 78 100 92 100 108Z" />
        <path d="M100 100C100 100 84 84 82 60C100 68 104 84 100 100Z" />
        <path d="M100 100C100 100 116 84 118 60C100 68 96 84 100 100Z" />
        <path d="M100 96C100 96 96 76 100 54C104 76 100 96 100 96Z" />
      </g>
      <g stroke="currentColor" strokeWidth="1.5">
        <path d="M62 152H138V172C138 180 132 186 124 186H76C68 186 62 180 62 172V152Z" />
        <path d="M138 158H148C154 158 158 163 158 169C158 175 154 180 148 180H138" />
      </g>
      <path d="M78 152C77 146 81 141 78 133M100 152C99 146 103 141 100 133M122 152C121 146 125 141 122 133" stroke="currentColor" strokeWidth="1" strokeOpacity="0.55" strokeLinecap="round" />
    </svg>
  );
}

export const PRODUCT_ART: Record<string, (props: SVGProps<SVGSVGElement>) => React.JSX.Element> = {
  "bilva-tea": BilvaArt,
  "arjuna-tea": ArjunaArt,
  "raavi-tea": RaaviArt,
  "lemongrass-tea": LemongrassArt,
  "pudina-tea": PudinaArt,
  "thati-bellam-coffee": ThatiBellamArt,
};
