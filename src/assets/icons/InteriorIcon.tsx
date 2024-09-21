function InteriorIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="30"
      height="30"
      fill="none"
      viewBox="0 0 30 30"
    >
      <path fill="url(#pattern0_40_4)" d="M0 0H30V30H0z"></path>
      <defs>
        <pattern
          id="pattern0_40_4"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use transform="scale(.02)" xlinkHref="#image0_40_4"></use>
        </pattern>
        <image
          id="image0_40_4"
          width="50"
          height="50"
          xlinkHref="data:image/png;base64,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"
        ></image>
      </defs>
    </svg>
  );
}

export default InteriorIcon;
