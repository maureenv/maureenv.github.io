import * as React from "react"

function Logo(props) {
  return (
    <div style={{ width: '100%' }}>
      <svg viewBox="0 0 14.18 14.17" {...props}>
        <defs>
          <style>{".prefix__cls-1{fill:#252a2b}"}</style>
        </defs>
        <title>{"Asset 1"}</title>
        <g id="prefix__Layer_2" data-name="Layer 2">
          <g id="prefix__Layer_1-2" data-name="Layer 1">
            <path
              className="m"
              fill={ props.mColor }
              d="M2.65 7.54L0 2.24v11.94h2.84V7.91l-.19-.37zM11.34 7.91v6.27h2.84V2.24l-2.65 5.3-.19.37z"
            />
            <path
              className="v"
              fill={ props.vColor }
              d="M14.18 0l-2.84 5.67-4.25 8.5-3.54-7.08-.71-1.42L0 0h2.92l.63 1.26 3.54 7.09 3.54-7.09.63-1.26h2.92z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Logo
