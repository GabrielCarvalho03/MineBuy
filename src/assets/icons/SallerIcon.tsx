function SallerIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="30"
      height="30"
      fill="none"
      viewBox="0 0 30 30"
    >
      <path fill="url(#pattern0_40_5)" d="M0 0H30V30H0z"></path>
      <defs>
        <pattern
          id="pattern0_40_5"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use transform="scale(.02)" xlinkHref="#image0_40_5"></use>
        </pattern>
        <image
          id="image0_40_5"
          width="50"
          height="50"
          xlinkHref="data:image/png;base64,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"
        ></image>
      </defs>
    </svg>
  );
}

export default SallerIcon;
