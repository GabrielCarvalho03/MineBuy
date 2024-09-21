function LogoIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="30"
      height="30"
      fill="none"
      viewBox="0 0 30 30"
    >
      <path fill="url(#pattern0_48_4)" d="M0 0H30V30H0z"></path>
      <defs>
        <pattern
          id="pattern0_48_4"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use transform="scale(.02)" xlinkHref="#image0_48_4"></use>
        </pattern>
        <image
          id="image0_48_4"
          width="50"
          height="50"
          xlinkHref="data:image/png;base64,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"
        ></image>
      </defs>
    </svg>
  );
}

export default LogoIcon;
