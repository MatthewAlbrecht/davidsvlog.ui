import React from './node_modules/react'

export default function FooterSwoosh() {
  return (
    <svg viewBox="0 0 1024 56">
      <defs>
        <path
          id="footerPath"
          opacity="1"
          fillRule="evenodd"
          d="M0,0 C0,0 126.8313286423647,42.27583251554029 381.4821724966544,42.27583251554029 C498.41008045853937,42.27583251554029 603.3119462843728,14.283003395135239 801.9999999999998,12.460510140333838 C909.4883400487713,11.47455869008176 1024.000000000002,42.27583251553989 1024.000000000002,42.27583251553989 L1024.000000000002,55.999999999999154 L4.696243394164422e-14,56.00000000000007 L0,0Z"
        />
        <linearGradient id="footerGradient" x1="1" y1="0.9" x2="0.01" y2="0.88">
          <stop offset="0" stopColor="rgb(200,238,239)" stopOpacity="1" />
          <stop offset="0.36" stopColor="rgb(162,163,249)" stopOpacity="1" />
          <stop offset="0.44" stopColor="rgb(110,246,240)" stopOpacity="1" />
          <stop offset="0.57" stopColor="rgb(240,215,166)" stopOpacity="1" />
          <stop offset="0.65" stopColor="rgb(254,131,150)" stopOpacity="1" />
          <stop offset="1" stopColor="rgb(249,51,158)" stopOpacity="1" />
        </linearGradient>
      </defs>
      <g opacity="1">
        <use href="#footerPath" fill="url(#footerGradient)" fillOpacity="1" />
      </g>
    </svg>
  )
}
