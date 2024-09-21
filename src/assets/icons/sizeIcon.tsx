import { SVGProps } from "react"
const SizeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={30}
    height={30}
    fill="none"
    {...props}
  >
    <path fill="url(#a)" d="M0 0h30v30H0z" />
    <defs>
      <pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#b" transform="scale(.02)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABA0lEQVR4nO3ZMQ6CQBCF4b0JjPcw8UhqpZ6B0lmvYUNhTKTwRMzaazBBQnBhaXReMn+yPV8GFsI6Z1mWZc2IvCxzL9ekxVI4zRGHLfnwnFwsldNeEoYBIEkYBoE0ET/O8JDMhzX8ROgYNvDPSBTBoYSBxBGyH2wAWiFTiLYPRiMkFdHDaIPMRbRlp7By6AhVxRALLzuHEhlCSTYJLdkktGST0BLZe0JJZJP4UdnEJzPMJIilIi8HaEQHaS6wj4n9RFOJ6EM6DBxiCHmvEg4RgeAhUiAQiGlIfXEo5Vzfx2+t71sz5DNCCBhKggBgcpaiPYQkL7exQ8rmQPPf12tZluWgegEMS0c70HAG8AAAAABJRU5ErkJggg=="
        id="b"
        width={50}
        height={50}
      />
    </defs>
  </svg>
)
export default SizeIcon
