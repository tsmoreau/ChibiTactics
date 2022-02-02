import "animate.css/animate.min.css";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";

export default function Roadmap() {
  return (
    <div className="">
      {/* <div className="section"></div> */}
      <Controller>
        <div className=" h-full w-full">
          <Scene duration={1400} pin={false} reverse={true} offset={50}>
            {(progress) => (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 2600">
                <rect
                  width="1920"
                  height="2600"
                  fill="th-background"
                  fill-opacity="0.0"
                />
                <Timeline
                  progress={progress}
                  paused
                  target={
                    <polyline
                      stroke="#f9b700"
                      strokeWidth="8"
                      fill="none"
                      points="377.54 351.86 1498.93 354.27 1498.93 477.51 950.57 477.94 950.57 751.94 599.92 871.76 1258.23 871.76 950.57 986.8 950.55 1272.04 599.9 1391.86 1393.21 1391.86 950.55 1506.9 950.55 1950.53"
                    />
                  }
                >
                  <Tween
                    from={{
                      strokeDasharray: 6245.26,
                      strokeDashoffset: 6245.26
                    }}
                    to={{
                      strokeDashoffset: 0
                    }}
                  />
                </Timeline>

                <Timeline
                  progress={progress}
                  paused
                  target={
                    <polyline
                      stroke="#f9b700"
                      strokeWidth="8"
                      fill="none"
                      points="950.55 1948.53 927.23 1990.23 974.76 1990.59 950.55 1948.53 950.57 1976.14 974.76 1990.59"
                    />
                  }
                >
                  <Tween
                    delay="2.65"
                    from={{
                      strokeDasharray: 1000,
                      strokeDashoffset: 1000
                    }}
                    to={{
                      strokeDashoffset: 0
                    }}
                  />
                </Timeline>

                <Timeline
                  progress={progress}
                  paused
                  target={
                    <line
                      x1="927.23"
                      y1="1990.23"
                      x2="950.57"
                      y2="1976.14"
                      stroke="#f9b700"
                      strokeWidth="8"
                      fill="none"
                    />
                  }
                >
                  <Tween
                    delay="2.6"
                    animation-direction="reverse"
                    reverse="true"
                    from={{
                      strokeDasharray: 100,
                      strokeDashoffset: 100
                    }}
                    to={{
                      strokeDashoffset: 0
                    }}
                  />
                </Timeline>

                <Timeline
                  duration="0.01"
                  progress={progress}
                  paused
                  target={
                    <a href="/tokens/yggdrasil">
                      <g xmlns="http://www.w3.org/2000/svg">
                        <rect
                          width="475.39"
                          height="123.97"
                          x="164.7"
                          y="289.44"
                          fill="#eddec3"
                          rx="10"
                        ></rect>
                        <rect
                          width="464.35"
                          height="112.22"
                          x="170.21"
                          y="295.32"
                          fill="none"
                          stroke="#000"
                          strokeMiterlimit="10"
                          rx="4"
                        ></rect>
                        <circle
                          cx="201.23"
                          cy="351.64"
                          r="24.24"
                          stroke="#eddec3"
                          strokeMiterlimit="10"
                          strokeWidth="3"
                          opacity="0.31"
                        ></circle>
                        <path
                          fill="none"
                          stroke="#eddec3"
                          strokeMiterlimit="10"
                          strokeWidth="3"
                          d="M218.37 368.79L184.09 334.5"
                        ></path>
                        <path
                          fill="none"
                          stroke="#eddec3"
                          strokeMiterlimit="10"
                          strokeWidth="3"
                          d="M184.09 368.79L218.37 334.5"
                        ></path>
                        <text
                          fontFamily="FuturaPT-Medium, Futura PT"
                          fontSize="40"
                          fontWeight="300"
                          transform="translate(235.88 372.3)"
                        >
                          <tspan>Yggdrasil Token Drop</tspan>
                        </text>
                        <text
                          className="font-futurapt font-thin border"
                          fontSize="18"
                          transform="translate(235.88 332.77)"
                        >
                          JANUARY 28th 2022
                        </text>
                      </g>
                    </a>
                  }
                >
                  <Tween
                    delay=".005"
                    from={{
                      opacity: 0
                    }}
                    to={{
                      opacity: 3
                    }}
                  />
                </Timeline>

                <Timeline
                  progress={progress}
                  paused
                  duration="0.01"
                  target={
                    <a href="/tokens/anthropos">
                      <g>
                        <rect
                          x={706.25}
                          y={287.66}
                          width={493.82}
                          height={127.97}
                          rx={12}
                        />
                        <path
                          d="M1188.07 289.66a10 10 0 0 1 10 10v104a10 10 0 0 1-10 10H718.25a10 10 0 0 1-10-10v-104a10 10 0 0 1 10-10h469.82m0-4H718.25a14 14 0 0 0-14 14v104a14 14 0 0 0 14 14h469.82a14 14 0 0 0 14-14v-104a14 14 0 0 0-14-14Z"
                          style={{
                            fill: "#eddec3"
                          }}
                        />
                        <rect
                          x={713.76}
                          y={295.54}
                          width={478.79}
                          height={112.22}
                          rx={4}
                          style={{
                            fill: "none",
                            stroke: "#f2f2f2",
                            strokeMiterlimit: 10,
                            opacity: 0.30000000000000004
                          }}
                        />
                        <path
                          d="M744.78 327.62a24.25 24.25 0 1 1-24.24 24.24 24.25 24.25 0 0 1 24.24-24.24m0-4A28.25 28.25 0 1 0 773 351.86a28.27 28.27 0 0 0-28.25-28.24Z"
                          style={{
                            fill: "#eddec3"
                          }}
                        />
                        <text
                          transform="translate(779.43 372.51)"
                          style={{
                            fontSize: 40,
                            fill: "#fff",
                            fontFamily: "FuturaPT-Book,Futura PT",
                            fontWeight: 300
                          }}
                        >
                          {"Anthropos Token Drop"}
                        </text>
                        <text
                          transform="translate(779.43 332.99)"
                          style={{
                            fontSize: 18,
                            fill: "#fff",
                            fontFamily: "FuturaPT-Book,Futura PT"
                          }}
                        >
                          {"FEBRUARY 14th 2022"}
                        </text>
                      </g>
                    </a>
                  }
                >
                  <Tween
                    delay="0.005"
                    from={{
                      opacity: 0
                    }}
                    to={{
                      opacity: 3
                    }}
                  />
                </Timeline>

                <Timeline
                  duration="0.01"
                  progress={progress}
                  paused
                  target={
                    <a href="/tokens/hymns">
                      <g>
                        <rect
                          x={1257.02}
                          y={287.44}
                          width={493.82}
                          height={127.97}
                          rx={12}
                        />
                        <path
                          d="M1738.84 289.44a10 10 0 0 1 10 10v104a10 10 0 0 1-10 10H1269a10 10 0 0 1-10-10v-104a10 10 0 0 1 10-10h469.82m0-4H1269a14 14 0 0 0-14 14v104a14 14 0 0 0 14 14h469.82a14 14 0 0 0 14-14v-104a14 14 0 0 0-14-14Z"
                          style={{
                            fill: "#eddec3"
                          }}
                        />
                        <rect
                          x={1264.53}
                          y={295.32}
                          width={478.79}
                          height={112.22}
                          rx={4}
                          style={{
                            fill: "none",
                            stroke: "#f2f2f2",
                            strokeMiterlimit: 10,
                            opacity: 0.30000000000000004
                          }}
                        />
                        <path
                          d="M1295.55 327.4a24.25 24.25 0 1 1-24.24 24.24 24.25 24.25 0 0 1 24.24-24.24m0-4a28.25 28.25 0 1 0 28.25 28.24 28.27 28.27 0 0 0-28.25-28.24Z"
                          style={{
                            fill: "#eddec3"
                          }}
                        />
                        <text
                          transform="translate(1330.2 369.38)"
                          style={{
                            fontSize: 36,
                            fill: "#fff",
                            fontFamily: "FuturaPT-Book,Futura PT",
                            fontWeight: 300
                          }}
                        >
                          {"Hymnal Collection Drop"}
                        </text>
                        <text
                          transform="translate(1330.2 332.77)"
                          style={{
                            fontSize: 18,
                            fill: "#fff",
                            fontFamily: "FuturaPT-Book,Futura PT"
                          }}
                        >
                          {"MARCH 15th 2022"}
                        </text>
                      </g>
                    </a>
                  }
                >
                  <Tween
                    delay="0.005"
                    from={{
                      opacity: 0
                    }}
                    to={{
                      opacity: 3
                    }}
                  />
                </Timeline>

                <Timeline
                  duration="0.01"
                  progress={progress}
                  paused
                  target={
                    <g>
                      <rect
                        x={758.43}
                        y={577.5}
                        width={386.68}
                        height={127.97}
                        rx={12}
                      />
                      <path
                        d="M1133.11 579.5a10 10 0 0 1 10 10v104a10 10 0 0 1-10 10H770.43a10 10 0 0 1-10-10v-104a10 10 0 0 1 10-10h362.68m0-4H770.43a14 14 0 0 0-14 14v104a14 14 0 0 0 14 14h362.68a14 14 0 0 0 14-14v-104a14 14 0 0 0-14-14Z"
                        style={{
                          fill: "#eddec3"
                        }}
                      />
                      <rect
                        x={765.95}
                        y={585.37}
                        width={371.64}
                        height={112.22}
                        rx={4}
                        style={{
                          fill: "none",
                          stroke: "#f2f2f2",
                          strokeMiterlimit: 10,
                          opacity: 0.30000000000000004
                        }}
                      />
                      <path
                        d="M797 617.45a24.25 24.25 0 1 1-24.25 24.25A24.25 24.25 0 0 1 797 617.45m0-4a28.25 28.25 0 1 0 28.24 28.25A28.28 28.28 0 0 0 797 613.45Z"
                        style={{
                          fill: "#eddec3"
                        }}
                      />
                      <text
                        transform="translate(831.61 662.35)"
                        style={{
                          fontSize: 40,
                          fill: "#fff",
                          fontFamily: "FuturaPT-Book,Futura PT",
                          fontWeight: 300
                        }}
                      >
                        <tspan
                          style={{
                            letterSpacing: "-.03099365234375em"
                          }}
                        >
                          {"The Fool Auction!"}
                        </tspan>
                      </text>
                      <text
                        transform="translate(831.61 622.82)"
                        style={{
                          fontSize: 16,
                          fill: "#fff",
                          fontFamily: "FuturaPT-Book,Futura PT"
                        }}
                      >
                        {"APRIL FOOLS DAY 2022"}
                      </text>
                    </g>
                  }
                >
                  <Tween
                    delay="0.12"
                    from={{
                      opacity: 0
                    }}
                    to={{
                      opacity: 5
                    }}
                  />
                </Timeline>

                <Timeline
                  duration="0.01"
                  progress={progress}
                  paused
                  target={
                    <g>
                      <rect
                        x={242.31}
                        y={807.78}
                        width={547.85}
                        height={127.97}
                        rx={12}
                      />
                      <path
                        d="M778.16 809.78a10 10 0 0 1 10 10v104a10 10 0 0 1-10 10H254.31a10 10 0 0 1-10-10v-104a10 10 0 0 1 10-10h523.85m0-4H254.31a14 14 0 0 0-14 14v104a14 14 0 0 0 14 14h523.85a14 14 0 0 0 14-14v-104a14 14 0 0 0-14-14Z"
                        style={{
                          fill: "#eddec3"
                        }}
                      />
                      <text
                        transform="translate(315.5 911.85)"
                        style={{
                          fontSize: 16,
                          fill: "#fff",
                          fontFamily: "FuturaPT-Book,Futura PT"
                        }}
                      >
                        {"Innerspace Gallery, Los Angeles CA"}
                      </text>
                      <rect
                        x={249.83}
                        y={815.66}
                        width={532.81}
                        height={112.22}
                        rx={4}
                        style={{
                          fill: "none",
                          stroke: "#f2f2f2",
                          strokeMiterlimit: 10,
                          opacity: 0.30000000000000004
                        }}
                      />
                      <path
                        d="M280.85 847.74A24.25 24.25 0 1 1 256.6 872a24.24 24.24 0 0 1 24.25-24.24m0-4A28.25 28.25 0 1 0 309.09 872a28.28 28.28 0 0 0-28.24-28.24Z"
                        style={{
                          fill: "#eddec3"
                        }}
                      />
                      <text
                        transform="translate(315.5 889.72)"
                        style={{
                          fontSize: 36,
                          fill: "#fff",
                          fontFamily: "FuturaPT-Book,Futura PT",
                          fontWeight: 300
                        }}
                      >
                        {"Anthromancer Launch Party"}
                      </text>
                      <text
                        transform="translate(315.5 853.11)"
                        style={{
                          fontSize: 16,
                          fill: "#fff",
                          fontFamily: "FuturaPT-Book,Futura PT"
                        }}
                      >
                        {"APRIL FOOLS DAY"}
                      </text>
                    </g>
                  }
                >
                  <Tween
                    delay="0.2"
                    from={{
                      opacity: 0
                    }}
                    to={{
                      opacity: 5
                    }}
                  />
                </Timeline>

                <Timeline
                  duration="0.01"
                  progress={progress}
                  paused
                  target={
                    <g>
                      <rect
                        x={1091.37}
                        y={807.78}
                        width={547.85}
                        height={127.97}
                        rx={12}
                      />
                      <path
                        d="M1627.22 809.78a10 10 0 0 1 10 10v104a10 10 0 0 1-10 10h-523.85a10 10 0 0 1-10-10v-104a10 10 0 0 1 10-10h523.85m0-4h-523.85a14 14 0 0 0-14 14v104a14 14 0 0 0 14 14h523.85a14 14 0 0 0 14-14v-104a14 14 0 0 0-14-14Z"
                        style={{
                          fill: "#eddec3"
                        }}
                      />
                      <rect
                        x={1098.89}
                        y={815.66}
                        width={532.81}
                        height={112.22}
                        rx={4}
                        style={{
                          fill: "none",
                          stroke: "#f2f2f2",
                          strokeMiterlimit: 10,
                          opacity: 0.30000000000000004
                        }}
                      />
                      <path
                        d="M1129.91 847.74a24.25 24.25 0 1 1-24.25 24.26 24.24 24.24 0 0 1 24.25-24.24m0-4a28.25 28.25 0 1 0 28.24 28.24 28.28 28.28 0 0 0-28.24-28.24Z"
                        style={{
                          fill: "#eddec3"
                        }}
                      />
                      <text
                        transform="translate(1164.56 889.72)"
                        style={{
                          fontSize: 36,
                          fill: "#fff",
                          fontFamily: "FuturaPT-Book,Futura PT",
                          fontWeight: 300
                        }}
                      >
                        {"Anthromancer Launch Party"}
                      </text>
                      <text
                        transform="translate(1164.56 853.11)"
                        style={{
                          fontSize: 16,
                          fill: "#fff",
                          fontFamily: "FuturaPT-Book,Futura PT"
                        }}
                      >
                        APRIL 3rd 2022
                      </text>
                      <text
                        transform="translate(1164.56 911.89)"
                        style={{
                          fontSize: 16,
                          fill: "#fff",
                          fontFamily: "FuturaPT-Book,Futura PT"
                        }}
                      >
                        (POTENTIALLY) The Post Commons in Alton, MO
                      </text>
                    </g>
                  }
                >
                  <Tween
                    delay="0.3"
                    from={{
                      opacity: 0
                    }}
                    to={{
                      opacity: 5
                    }}
                  />
                </Timeline>

                <Timeline
                  duration="0.01"
                  progress={progress}
                  paused
                  target={
                    <g>
                      <rect
                        x={694.76}
                        y={1033.96}
                        width={530.48}
                        height={175.43}
                        rx={12}
                      />
                      <path
                        d="M1213.24 1036a10 10 0 0 1 10 10v151.42a10 10 0 0 1-10 10H706.76a10 10 0 0 1-10-10V1046a10 10 0 0 1 10-10h506.48m0-4H706.76a14 14 0 0 0-14 14v151.42a14 14 0 0 0 14 14h506.48a14 14 0 0 0 14-14V1046a14 14 0 0 0-14-14Z"
                        style={{
                          fill: "#eddec3"
                        }}
                      />
                      <rect
                        x={702.28}
                        y={1041.83}
                        width={515.44}
                        height={159.67}
                        rx={4}
                        style={{
                          fill: "none",
                          stroke: "#f2f2f2",
                          strokeMiterlimit: 10,
                          opacity: 0.30000000000000004
                        }}
                      />
                      <path
                        d="M733.3 1097.43a24.25 24.25 0 1 1-24.25 24.24 24.24 24.24 0 0 1 24.25-24.24m0-4a28.25 28.25 0 1 0 28.24 28.24 28.28 28.28 0 0 0-28.24-28.24Z"
                        style={{
                          fill: "#eddec3"
                        }}
                      />
                      <text
                        transform="translate(767.95 1102.93)"
                        style={{
                          fontSize: 24,
                          fill: "#fff",
                          fontFamily: "FuturaPT-Book,Futura PT",
                          fontWeight: 300
                        }}
                      >
                        Anthromancer
                        <tspan
                          style={{
                            fontSize: 40
                          }}
                        >
                          <tspan x={0} y={34}>
                            {"Marketing Push"}
                          </tspan>

                          <tspan x={0} y={74}>
                            {"+Community Expansion"}
                          </tspan>
                        </tspan>
                      </text>

                      <text
                        transform="translate(767.95 1075.07)"
                        style={{
                          fontSize: 16,
                          fill: "#fff",
                          fontFamily: "FuturaPT-Book,Futura PT"
                        }}
                      >
                        {"SPRING - SUMMER 2022"}
                      </text>
                    </g>
                  }
                >
                  <Tween
                    delay="0.47"
                    from={{
                      opacity: 0
                    }}
                    to={{
                      opacity: 5
                    }}
                  />
                </Timeline>

                <Timeline
                  duration="0.01"
                  progress={progress}
                  paused
                  target={
                    <g>
                      <rect
                        x={409.66}
                        y={1328.67}
                        width={380.51}
                        height={127.97}
                        rx={12}
                      />
                      <path
                        d="M778.16 1330.67a10 10 0 0 1 10 10v104a10 10 0 0 1-10 10h-356.5a10 10 0 0 1-10-10v-104a10 10 0 0 1 10-10h356.5m0-4h-356.5a14 14 0 0 0-14 14v104a14 14 0 0 0 14 14h356.5a14 14 0 0 0 14-14v-104a14 14 0 0 0-14-14Z"
                        style={{
                          fill: "#eddec3"
                        }}
                      />
                      <rect
                        x={417.17}
                        y={1336.55}
                        width={365.47}
                        height={112.22}
                        rx={4}
                        style={{
                          fill: "none",
                          stroke: "#f2f2f2",
                          strokeMiterlimit: 10,
                          opacity: 0.30000000000000004
                        }}
                      />
                      <path
                        d="M448.19 1368.41a24.25 24.25 0 1 1-24.19 24.25 24.25 24.25 0 0 1 24.24-24.25m0-4a28.25 28.25 0 1 0 28.25 28.25 28.28 28.28 0 0 0-28.25-28.25Z"
                        style={{
                          fill: "#eddec3"
                        }}
                      />
                      <text
                        transform="translate(482.84 1410.39)"
                        style={{
                          fontSize: 36,
                          fill: "#fff",
                          fontFamily: "FuturaPT-Heavy,Futura PT",
                          fontWeight: 800
                        }}
                      >
                        {"MDX Beta Testing"}
                      </text>
                      <text
                        transform="translate(482.84 1373.78)"
                        style={{
                          fontSize: 16,
                          fill: "#fff",
                          fontFamily: "FuturaPT-Book,Futura PT"
                        }}
                      >
                        <tspan
                          style={{
                            letterSpacing: "-.032989501953125em"
                          }}
                        >
                          {"FALL 2022"}
                        </tspan>
                      </text>
                    </g>
                  }
                >
                  <Tween
                    delay="0.58"
                    from={{
                      opacity: 0
                    }}
                    to={{
                      opacity: 5
                    }}
                  />
                </Timeline>

                <Timeline
                  duration="0.01"
                  progress={progress}
                  paused
                  target={
                    <g>
                      <rect
                        x={1091.37}
                        y={1304.94}
                        width={402.16}
                        height={175.43}
                        rx={12}
                      />
                      <path
                        d="M1481.53 1306.94a10 10 0 0 1 10 10v151.43a10 10 0 0 1-10 10h-378.16a10 10 0 0 1-10-10v-151.43a10 10 0 0 1 10-10h378.16m0-4h-378.16a14 14 0 0 0-14 14v151.43a14 14 0 0 0 14 14h378.16a14 14 0 0 0 14-14v-151.43a14 14 0 0 0-14-14Z"
                        style={{
                          fill: "#eddec3"
                        }}
                      />
                      <rect
                        x={1098.89}
                        y={1312.82}
                        width={387.13}
                        height={159.67}
                        rx={4}
                        style={{
                          fill: "none",
                          stroke: "#f2f2f2",
                          strokeMiterlimit: 10,
                          opacity: 0.30000000000000004
                        }}
                      />
                      <path
                        d="M1129.91 1368.41a24.25 24.25 0 1 1-24.25 24.25 24.25 24.25 0 0 1 24.25-24.25m0-4a28.25 28.25 0 1 0 28.24 28.25 28.28 28.28 0 0 0-28.24-28.25Z"
                        style={{
                          fill: "#eddec3"
                        }}
                      />
                      <text
                        transform="translate(1164.56 1375.97)"
                        style={{
                          fontSize: 24,
                          fill: "#fff",
                          fontFamily: "FuturaPT-Heavy,Futura PT",
                          fontWeight: 800
                        }}
                      >
                        {"Anth"}
                        <tspan
                          x={50.74}
                          y={0}
                          style={{
                            letterSpacing: "-.014994303385416666em"
                          }}
                        >
                          {"r"}
                        </tspan>
                        <tspan x={59.59} y={0}>
                          {"omancer"}
                        </tspan>
                        <tspan
                          style={{
                            fontSize: 40
                          }}
                        >
                          <tspan x={0} y={34}>
                            {"Game "}
                          </tspan>
                          <tspan
                            x={119.52}
                            y={34}
                            style={{
                              letterSpacing: "-.00999755859375em"
                            }}
                          >
                            {"E"}
                          </tspan>
                          <tspan x={139.2} y={34}>
                            {"xpa"}
                          </tspan>
                          <tspan
                            x={211.84}
                            y={34}
                            style={{
                              letterSpacing: "-.010986328125em"
                            }}
                          >
                            {"n"}
                          </tspan>
                          <tspan x={234.08} y={34}>
                            {"sion"}
                          </tspan>
                          <tspan x={0} y={74}>
                            {"THE "}
                          </tspan>
                          <tspan
                            x={76.6}
                            y={74}
                            style={{
                              letterSpacing: "-.02099609375em"
                            }}
                          >
                            {"L"}
                          </tspan>
                          <tspan x={93.68} y={74}>
                            {"ORDS DICE"}
                          </tspan>
                        </tspan>
                      </text>
                      <text
                        transform="translate(1164.56 1348.11)"
                        style={{
                          fontSize: 16,
                          fill: "#fff",
                          fontFamily: "FuturaPT-Book,Futura PT"
                        }}
                      >
                        {"WINTER "}
                        <tspan
                          x={57.81}
                          y={0}
                          style={{
                            letterSpacing: "-.024993896484375em"
                          }}
                        >
                          {"2"}
                        </tspan>
                        <tspan x={66.49} y={0}>
                          {"0"}
                        </tspan>
                        <tspan
                          x={75.58}
                          y={0}
                          style={{
                            letterSpacing: "-.037994384765625em"
                          }}
                        >
                          {"2"}
                        </tspan>
                        <tspan x={84.06} y={0}>
                          {"2"}
                        </tspan>
                      </text>
                    </g>
                  }
                >
                  <Tween
                    delay="0.87"
                    from={{
                      opacity: 0
                    }}
                    to={{
                      opacity: 5
                    }}
                  />
                </Timeline>

                <Timeline
                  duration="0.01"
                  progress={progress}
                  paused
                  target={
                    <g>
                      <rect
                        x={721.11}
                        y={1576.42}
                        width={477.78}
                        height={127.97}
                        rx={12}
                      />
                      <path
                        d="M1186.89 1578.42a10 10 0 0 1 10 10v104a10 10 0 0 1-10 10H733.11a10 10 0 0 1-10-10v-104a10 10 0 0 1 10-10h453.78m0-4H733.11a14 14 0 0 0-14 14v104a14 14 0 0 0 14 14h453.78a14 14 0 0 0 14-14v-104a14 14 0 0 0-14-14Z"
                        style={{
                          fill: "#eddec3"
                        }}
                      />
                      <rect
                        x={728.63}
                        y={1584.3}
                        width={462.74}
                        height={112.22}
                        rx={4}
                        style={{
                          fill: "none",
                          stroke: "#f2f2f2",
                          strokeMiterlimit: 10,
                          opacity: 0.30000000000000004
                        }}
                      />
                      <path
                        d="M759.65 1616.16a24.25 24.25 0 1 1-24.25 24.25 24.25 24.25 0 0 1 24.25-24.25m0-4a28.25 28.25 0 1 0 28.24 28.25 28.28 28.28 0 0 0-28.24-28.25Z"
                        style={{
                          fill: "#eddec3"
                        }}
                      />
                      <text
                        transform="translate(794.29 1658.14)"
                        style={{
                          fontSize: 36,
                          fill: "#fff",
                          fontFamily: "FuturaPT-Heavy,Futura PT",
                          fontWeight: 800
                        }}
                      >
                        {"MDX Formally Launched"}
                      </text>
                      <text
                        transform="translate(794.29 1621.53)"
                        style={{
                          fontSize: 16,
                          fill: "#fff",
                          fontFamily: "FuturaPT-Book,Futura PT"
                        }}
                      >
                        {"EARLY 2023"}
                      </text>
                    </g>
                  }
                >
                  <Tween
                    delay="1.75"
                    from={{
                      opacity: 0
                    }}
                    to={{
                      opacity: 5
                    }}
                  />
                </Timeline>

                <Timeline
                  duration="0.01"
                  progress={progress}
                  paused
                  target={
                    <g>
                      <rect
                        x={759.66}
                        y={1766.85}
                        width={400.67}
                        height={131.41}
                        rx={12}
                      />
                      <path
                        d="M1148.34 1768.85a10 10 0 0 1 10 10v107.41a10 10 0 0 1-10 10H771.66a10 10 0 0 1-10-10v-107.41a10 10 0 0 1 10-10h376.68m0-4H771.66a14 14 0 0 0-14 14v107.41a14 14 0 0 0 14 14h376.68a14 14 0 0 0 14-14v-107.41a14 14 0 0 0-14-14Z"
                        style={{
                          fill: "#eddec3"
                        }}
                      />
                      <rect
                        x={767.18}
                        y={1774.73}
                        width={385.64}
                        height={115.65}
                        rx={4}
                        style={{
                          fill: "none",
                          stroke: "#f2f2f2",
                          strokeMiterlimit: 10,
                          opacity: 0.30000000000000004
                        }}
                      />
                      <path
                        d="M798.2 1809.54a24.25 24.25 0 1 1-24.2 24.25 24.25 24.25 0 0 1 24.24-24.25m0-4a28.25 28.25 0 1 0 28.24 28.25 28.28 28.28 0 0 0-28.24-28.25Z"
                        style={{
                          fill: "#eddec3"
                        }}
                      />
                      <text
                        transform="translate(832.85 1845.89)"
                        style={{
                          fontSize: 40,
                          fill: "#fff",
                          fontFamily: "FuturaPT-Heavy,Futura PT",
                          fontWeight: 800
                        }}
                      >
                        <tspan
                          style={{
                            letterSpacing: "-.039990234375em"
                          }}
                        >
                          {"Web3 Tea House"}
                        </tspan>

                        <tspan
                          style={{
                            fontSize: 24
                          }}
                        >
                          <tspan x={0} y={24}>
                            {"Mercenarium Arcade"}
                          </tspan>
                        </tspan>
                      </text>
                      <text
                        transform="translate(832.85 1806.36)"
                        style={{
                          fontSize: 16,
                          fill: "#fff",
                          fontFamily: "FuturaPT-Book,Futura PT"
                        }}
                      >
                        <tspan
                          style={{
                            letterSpacing: "-.024993896484375em"
                          }}
                        >
                          {"2023"}
                        </tspan>
                      </text>
                    </g>
                  }
                >
                  <Tween
                    delay="2.2"
                    from={{
                      opacity: 0
                    }}
                    to={{
                      opacity: 5
                    }}
                  />
                </Timeline>

                <Timeline
                  duration="10.5"
                  progress={progress}
                  paused
                  target={
                    <g>
                      <rect
                        x={413.55}
                        y={2097.57}
                        width={257.1}
                        height={107.56}
                        rx={11.14}
                        style={{
                          fill: "#000000",
                          stroke: "#f2f2f2",
                          strokeMiterlimit: 10,
                          strokeWidth: 1
                        }}
                      />
                      <path
                        d="M659.51 2099.57a9.14 9.14 0 0 1 9.14 9.14V2194a9.14 9.14 0 0 1-9.14 9.14H424.69a9.14 9.14 0 0 1-9.14-9.14v-85.27a9.14 9.14 0 0 1 9.14-9.14h234.82m0-4H424.69a13.16 13.16 0 0 0-13.14 13.14V2194a13.16 13.16 0 0 0 13.14 13.14h234.82a13.15 13.15 0 0 0 13.14-13.14v-85.27a13.15 13.15 0 0 0-13.14-13.14Z"
                        style={{
                          fill: "#eddec3"
                        }}
                      />
                      <rect
                        x={420.59}
                        y={2103.58}
                        width={243.03}
                        height={95.53}
                        rx={4.17}
                        style={{
                          fill: "none",
                          stroke: "#f2f2f2",
                          strokeMiterlimit: 10,
                          opacity: 0.30000000000000004
                        }}
                      />
                      <text
                        transform="translate(460.59 2160.86)"
                        style={{
                          fontSize: 40,
                          fill: "#fff",
                          fontFamily: "FuturaPT-Heavy,Futura PT",
                          fontWeight: 800
                        }}
                      >
                        {"Solarium"}
                      </text>
                      <path d="M542.13 2227.58a26.25 26.25 0 1 1 26.25-26.25 26.28 26.28 0 0 1-26.25 26.25Z" />
                      <path
                        d="M542.13 2177.09a24.25 24.25 0 1 1-24.24 24.24 24.24 24.24 0 0 1 24.24-24.24m0-4a28.25 28.25 0 1 0 28.24 28.24 28.27 28.27 0 0 0-28.24-28.24Z"
                        style={{
                          fill: "#eddec3"
                        }}
                      />
                    </g>
                  }
                >
                  <Tween
                    delay="7"
                    from={{
                      opacity: 0
                    }}
                    to={{
                      opacity: 2
                    }}
                  />
                </Timeline>

                <Timeline
                  duration="10.5"
                  progress={progress}
                  paused
                  target={
                    <g>
                      <rect
                        x={812.15}
                        y={2102.69}
                        width={276.67}
                        height={95.53}
                        rx={4.17}
                        style={{
                          fill: "#000000",
                          stroke: "#f2f2f2",
                          strokeMiterlimit: 10,
                          strokeWidth: 1,
                          strokeOpacity: 0.25
                        }}
                      />

                      <path
                        d="M1084.72,2098.67a9.14,9.14,0,0,1,9.13,9.14v85.28a9.14,9.14,0,0,1-9.13,9.14H816.26a9.14,9.14,0,0,1-9.14-9.14v-85.28a9.14,9.14,0,0,1,9.14-9.14h268.46m0-4H816.26a13.16,13.16,0,0,0-13.14,13.14v85.28a13.16,13.16,0,0,0,13.14,13.14h268.46a13.15,13.15,0,0,0,13.13-13.14v-85.28a13.15,13.15,0,0,0-13.13-13.14Z"
                        style={{
                          fill: "#eddec3"
                        }}
                      />
                      <text
                        transform="translate(864.21 2160.09)"
                        style={{
                          fontSize: 40,
                          fill: "#fff",
                          fontFamily: "FuturaPT-Heavy,Futura PT",
                          fontWeight: 800
                        }}
                      >
                        {"Holodeck"}
                      </text>
                      <path d="M950.49 2228.47a26.25 26.25 0 1 1 26.24-26.24 26.27 26.27 0 0 1-26.24 26.24Z" />
                      <path
                        d="M950.49 2178a24.25 24.25 0 1 1-24.25 24.25 24.25 24.25 0 0 1 24.25-24.25m0-4a28.25 28.25 0 1 0 28.24 28.25 28.28 28.28 0 0 0-28.24-28.25Z"
                        style={{
                          fill: "#eddec3"
                        }}
                      />
                    </g>
                  }
                >
                  <Tween
                    delay="7"
                    from={{
                      opacity: 0
                    }}
                    to={{
                      opacity: 2
                    }}
                  />
                </Timeline>

                <Timeline
                  duration="10.5"
                  progress={progress}
                  paused
                  target={
                    <g>
                      <rect
                        x={1237.36}
                        y={2103.58}
                        width={243.03}
                        height={95.53}
                        rx={4.17}
                        style={{
                          fill: "#000000",
                          stroke: "#f2f2f2",
                          strokeMiterlimit: 10,
                          strokeOpacity: 0.25
                        }}
                      />
                      <path
                        d="M1476.28,2099.57a9.14,9.14,0,0,1,9.14,9.14V2194a9.14,9.14,0,0,1-9.14,9.14H1241.46a9.14,9.14,0,0,1-9.14-9.14v-85.27a9.14,9.14,0,0,1,9.14-9.14h234.82m0-4H1241.46a13.16,13.16,0,0,0-13.14,13.14V2194a13.16,13.16,0,0,0,13.14,13.14h234.82a13.15,13.15,0,0,0,13.14-13.14v-85.27a13.15,13.15,0,0,0-13.14-13.14Z"
                        style={{
                          fill: "#eddec3"
                        }}
                      />
                      <text
                        transform="translate(1289.74 2160.86)"
                        style={{
                          fontSize: 40,
                          fill: "#fff",
                          fontFamily: "FuturaPT-Heavy,Futura PT",
                          fontWeight: 800
                        }}
                      >
                        <tspan
                          style={{
                            letterSpacing: "-.03099365234375em"
                          }}
                        >
                          {"T"}
                        </tspan>
                        <tspan
                          x={17.16}
                          y={0}
                          style={{
                            letterSpacing: "-.02099609375em"
                          }}
                        >
                          {"h"}
                        </tspan>
                        <tspan x={39.16} y={0}>
                          {"e Gi"}
                        </tspan>
                        <tspan
                          x={112.08}
                          y={0}
                          style={{
                            letterSpacing: ".03099365234375em"
                          }}
                        >
                          {"f"}
                        </tspan>
                        <tspan x={126.36} y={0}>
                          {"t"}
                        </tspan>
                      </text>
                      <path d="M1358.9 2227.58a26.25 26.25 0 1 1 26.25-26.25 26.28 26.28 0 0 1-26.25 26.25Z" />
                      <path
                        d="M1358.9 2177.09a24.25 24.25 0 1 1-24.24 24.24 24.25 24.25 0 0 1 24.24-24.24m0-4a28.25 28.25 0 1 0 28.25 28.24 28.27 28.27 0 0 0-28.25-28.24Z"
                        style={{
                          fill: "#eddec3"
                        }}
                      />
                    </g>
                  }
                >
                  <Tween
                    delay="7"
                    from={{
                      opacity: 0
                    }}
                    to={{
                      opacity: 2
                    }}
                  />
                </Timeline>

                <Timeline
                  duration="5.5"
                  progress={progress}
                  paused
                  target={
                    <g>
                      <text
                        xmlns="http://www.w3.org/2000/svg"
                        transform="translate(825.72 2059.6)"
                        style={{
                          fontSize: 40,
                          fill: "#fff",
                          fontFamily: "FuturaPT-Heavy,Futura PT",
                          fontWeight: 800
                        }}
                      >
                        MOON SHOTS
                      </text>

                      <text
                        xmlns="http://www.w3.org/2000/svg"
                        transform="translate(890.02 2020.07)"
                        style={{
                          fontSize: 16,
                          fill: "#fff",

                          fontFamily: "FuturaPT-Book,Futura PT"
                        }}
                      >
                        <tspan>2023 AND BEYOND</tspan>
                      </text>
                    </g>
                  }
                >
                  <Tween
                    delay="3.5"
                    from={{
                      opacity: 0
                    }}
                    to={{
                      opacity: 2
                    }}
                  />
                </Timeline>

                <Timeline
                  duration="10.5"
                  progress={progress}
                  target={
                    <g>
                      <g xmlns="http://www.w3.org/2000/svg">
                        <g fill="#f9b700">
                          <circle cx="1636.29" cy="2165.71" r="3.45"></circle>
                          <path d="M1617.41 2161.26c1.64 0 3.28.09 4.91.19a17.63 17.63 0 016 1.32 5.82 5.82 0 011.59 1 2.35 2.35 0 010 3.92 5.82 5.82 0 01-1.59 1 17.62 17.62 0 01-6 1.31c-1.63.1-3.27.17-4.91.19-4.49.06-18.64-1-18.64-1-3.89-.3-5.92-.65-8.36-.83l-7.71-.81-8-.51-6.06-.05s-2.51 0-2.51-1.29 2.51-1.3 2.51-1.3h6.06l8-.51 7.71-.82c2.44-.17 4.47-.53 8.36-.82 0-.03 14.15-1.05 18.64-.99zM1585.36 2169.86c2.22.27 4.21.51 6.43.76 0 0 12.49 1.28 21.4 5.56 1.19.57 2.41 1.09 3.58 1.69a6.56 6.56 0 013.32 2.72s2.25 4.17-2.17 5.72a10.5 10.5 0 01-6.84-.89l-6.14-3.25a89.69 89.69 0 00-27-10.31c-2.37-.44-3.77-.85-5.51-1.12a1.43 1.43 0 01-.27-.09c-.25-.07-.64-.55-.55-.79a.92.92 0 01.43-.55 4 4 0 011.37-.33 93 93 0 0111.95.88zM1598.26 2189.62c-.3-.24-.59-.49-.89-.71a8.57 8.57 0 01-1-.86c-.14-.15-.29-.3-.46-.46a53.21 53.21 0 00-14.06-9.37c-.61-.26-1.1-.49-1.54-.7s-1-.45-1.46-.65a.67.67 0 01-.2-.12 1 1 0 01-.42-.6.82.82 0 010-.21.45.45 0 01.09-.29.92.92 0 01.59-.44 2.67 2.67 0 011 0 54.45 54.45 0 016.81 2.08l1 .37 2.55.91a47.83 47.83 0 0111.47 6.13l.72.56c.38.29.76.58 1.12.88l.22.18a5.22 5.22 0 011.67 1.94 2.4 2.4 0 01-.31 2.42 2.82 2.82 0 01-2 1.09 6.63 6.63 0 01-4.09-1.49c-.26-.21-.54-.43-.81-.66zM1560.63 2169.58a1.16 1.16 0 011.42-.23c8.57 5.28 14.13 9.21 17.53 12.64 1.87 1.89 3.61 3.81 5.17 5.7.65.77 1.31 1.59 2 2.45l.63.92.38.56a59.2 59.2 0 016.16 10.81 49.13 49.13 0 013.13 10.85 36.79 36.79 0 01-.57 13.68c-4.24 15.94-16.44 17.37-16.56 17.39a11.63 11.63 0 01-6.3-.24c-1.3-.34-5.61-1.92-3.88-7.39.87-2.74 2.09-3.23 4.37-3.61a15.15 15.15 0 012.87-.17c7.84 0 11.6-8.74 11.6-8.74s4.56-8.59-1.94-25.27c-.54-1.17-1.66-3.49-2.34-4.73l-.32-.46s-2.7-6-11.47-13.81a115.77 115.77 0 00-11.4-9 1.08 1.08 0 01-.48-1.35z"></path>
                          <path d="M1567.27 2177.53l.83.74c.7.63 1.6 1.47 2.33 2.27l.27.29c4.69 5.73 8.65 10.52 11 15.21a51.87 51.87 0 014 11 23.63 23.63 0 01.17 11.74c-1.44 6.52-5.45 9.35-8.3 10.57a18 18 0 01-4.13 1h-.73a4.48 4.48 0 01-1.1-.14 4.72 4.72 0 01-.9-.22 2.89 2.89 0 01-.93-.67 5.18 5.18 0 01-1.83-3.72 4.67 4.67 0 012.67-4.83l1.23-.42a5.31 5.31 0 001.94-1 10.15 10.15 0 003.89-5.6c1.2-4.57 1.45-8.69-.21-15.4a49.53 49.53 0 00-9.44-16.92c-.72-.8-1.48-1.6-2.21-2.37-1-1-1.68-1.71-1.69-1.72s-1.62-1.64-1.33-2.24 1.17-.28 1.45-.18h.13c.39.3 1.63 1.29 2.86 2.36zM1605.12 2213s.35 2.56-.74 3.86a2.61 2.61 0 01-2.37 1.21 2.54 2.54 0 01-1.15-.42 4.49 4.49 0 01-.82-.81s-.4-.7-.51-3.49c0 0 0-6.45-4.38-14.48-1.23-2.24-2.94-4.86-2.94-4.86-1.81-2.41-3.44-4.54-3.44-4.54-.34-.63-.54-.82-.23-1.19s1 0 1 0a44.64 44.64 0 018.61 8.74s6 7.51 6.84 15.18c.01.27.1.53.13.8zM1563.37 2234.12a3.79 3.79 0 11-3.78 3.78 3.79 3.79 0 013.78-3.78zM1562.29 2223.63a3.29 3.29 0 11-3.28 3.29 3.29 3.29 0 013.28-3.29z"></path>
                          <path d="M1563.93 2184c.09-.32 0-.32.31-.49a1.25 1.25 0 011.54.39 4.52 4.52 0 01.37.48l.06.09c2.24 3.33 4.12 5.91 5 7.94a36.36 36.36 0 013.5 15.74c-.24 8.86-5.83 9.38-5.83 9.38s-4 1.07-4.88-2.66a4.53 4.53 0 011.92-5.25s4-2.8 3.64-9.58a25.6 25.6 0 00-.58-3.53 30.1 30.1 0 00-4.69-11.39 1.67 1.67 0 01-.36-1.12zM1557.39 2165.8a1.86 1.86 0 111.86 1.86 1.86 1.86 0 01-1.86-1.86z"></path>
                          <circle cx="1609.37" cy="2193.65" r="2.79"></circle>
                          <path d="M1624.87 2184.92a3.06 3.06 0 11-3.07 3.06 3.06 3.06 0 013.07-3.06zM1600.06 2223.64a1.53 1.53 0 111.53 1.53 1.54 1.54 0 01-1.53-1.53z"></path>
                          <circle cx="1636.29" cy="2165.58" r="3.45"></circle>
                          <path d="M1617.41 2170c1.64 0 3.28-.08 4.91-.19a17.62 17.62 0 006-1.31 5.82 5.82 0 001.59-1 2.35 2.35 0 000-3.92 5.82 5.82 0 00-1.59-1 17.87 17.87 0 00-6-1.32c-1.63-.1-3.27-.17-4.91-.19-4.49-.05-18.64 1-18.64 1-3.89.29-5.92.65-8.36.82l-7.71.82-8 .51h-6.06s-2.51 0-2.51 1.3 2.51 1.3 2.51 1.3h6.06l8 .51 7.71.82c2.44.17 4.47.53 8.36.82 0 .1 14.15 1.11 18.64 1.03zM1585.36 2161.42c2.22-.26 4.21-.51 6.43-.76 0 0 12.49-1.28 21.4-5.55 1.19-.57 2.41-1.1 3.58-1.69a6.53 6.53 0 003.32-2.73s2.25-4.16-2.17-5.71a10.42 10.42 0 00-6.84.89l-6.14 3.24a89.86 89.86 0 01-27 10.32c-2.37.44-3.77.85-5.51 1.11-.09 0-.18.07-.27.09-.25.08-.64.56-.55.8a1 1 0 00.43.55 3.76 3.76 0 001.37.32 91.22 91.22 0 0011.95-.88zM1598.26 2141.66c-.3.25-.59.49-.89.72a7 7 0 00-1 .86l-.46.46a53 53 0 01-14.06 9.36c-.61.27-1.1.5-1.54.71s-1 .45-1.46.65a1 1 0 00-.2.11 1 1 0 00-.42.61.71.71 0 000 .2.51.51 0 00.09.3.87.87 0 00.59.43 2.49 2.49 0 001 0 54.44 54.44 0 006.81-2.09l1-.37 2.55-.9c.07 0 6.91-2.52 11.47-6.13l.72-.56c.38-.29.76-.58 1.12-.89l.22-.18a5.27 5.27 0 001.67-1.93 2.42 2.42 0 00-.31-2.43 2.78 2.78 0 00-2-1.08 6.51 6.51 0 00-4.09 1.48zM1560.63 2161.7a1.15 1.15 0 001.42.24c8.57-5.29 14.13-9.22 17.53-12.65 1.87-1.88 3.61-3.8 5.17-5.69q1-1.16 2-2.46l.63-.91c.17-.25.3-.44.38-.57a58.87 58.87 0 006.16-10.81A49.21 49.21 0 001597 2118a36.85 36.85 0 00-.57-13.69c-4.24-15.94-16.44-17.36-16.56-17.38a11.65 11.65 0 00-6.3.23c-1.3.35-5.61 1.93-3.88 7.39.87 2.75 2.09 3.24 4.37 3.62a15.11 15.11 0 002.87.16c7.84 0 11.6 8.75 11.6 8.75s4.56 8.59-1.94 25.26c-.54 1.18-1.66 3.5-2.34 4.74l-.32.46s-2.7 6-11.47 13.8a114.43 114.43 0 01-11.4 9 1.07 1.07 0 00-.43 1.36z"></path>
                          <path d="M1567.27 2153.75l.83-.74c.7-.63 1.6-1.47 2.33-2.26l.27-.29c4.69-5.74 8.65-10.52 11-15.22a52.1 52.1 0 004-11 23.68 23.68 0 00.17-11.75c-1.44-6.51-5.45-9.35-8.3-10.56a17.48 17.48 0 00-4.13-1h-.73a5 5 0 00-1.1.14 4 4 0 00-.9.23 2.87 2.87 0 00-.93.66 5.19 5.19 0 00-1.83 3.73 4.65 4.65 0 002.67 4.82l1.23.43a5.15 5.15 0 011.94 1 10.17 10.17 0 013.89 5.61c1.2 4.57 1.45 8.68-.21 15.39a49.56 49.56 0 01-9.44 16.93c-.72.79-1.48 1.6-2.21 2.37-1 1-1.68 1.71-1.69 1.72s-1.62 1.63-1.33 2.24 1.17.28 1.45.17h.13c.39-.29 1.63-1.28 2.86-2.35zM1605.12 2118.31s.35-2.56-.74-3.86a2.6 2.6 0 00-2.37-1.22 2.66 2.66 0 00-1.15.42 4.25 4.25 0 00-.82.82 9.25 9.25 0 00-.51 3.48s0 6.45-4.38 14.49c-1.23 2.23-2.94 4.86-2.94 4.86-1.81 2.4-3.44 4.54-3.44 4.54-.34.63-.54.82-.23 1.19s1 0 1 0a45 45 0 008.61-8.74s6-7.52 6.84-15.18c.01-.3.1-.56.13-.8zM1563.37 2097.16a3.78 3.78 0 10-3.78-3.78 3.79 3.79 0 003.78 3.78zM1562.29 2107.66a3.29 3.29 0 10-3.28-3.29 3.29 3.29 0 003.28 3.29z"></path>
                          <path d="M1563.93 2147.3c.09.32 0 .33.31.5a1.27 1.27 0 001.54-.4 4.57 4.57 0 00.37-.47l.06-.1c2.24-3.32 4.12-5.91 5-7.94a36.27 36.27 0 003.5-15.73c-.24-8.86-5.83-9.39-5.83-9.39s-4-1.06-4.88 2.67a4.52 4.52 0 001.92 5.24s4 2.8 3.64 9.59a25.84 25.84 0 01-.58 3.53 30.09 30.09 0 01-4.69 11.38 1.69 1.69 0 00-.36 1.12zM1557.39 2165.49a1.86 1.86 0 101.86-1.86 1.86 1.86 0 00-1.86 1.86z"></path>
                          <circle cx="1609.37" cy="2137.63" r="2.79"></circle>
                          <path d="M1624.87 2146.37a3.07 3.07 0 10-3.07-3.07 3.06 3.06 0 003.07 3.07zM1600.06 2107.64a1.53 1.53 0 101.53-1.53 1.53 1.53 0 00-1.53 1.53z"></path>
                        </g>
                        <path
                          stroke="#f9b700"
                          strokeMiterlimit="10"
                          strokeWidth="8"
                          d="M1555.14 2153.08a18.79 18.79 0 110 27.92"
                          className="fill-th-background"
                        ></path>
                        <path
                          fill="none"
                          stroke="#f9b700"
                          strokeMiterlimit="10"
                          strokeWidth="8"
                          d="M1555.15 2086.59L1555.15 2244.66"
                        ></path>
                      </g>
                      <g xmlns="http://www.w3.org/2000/svg">
                        <g fill="#f9b700">
                          <circle cx="253.1" cy="2165.71" r="3.45"></circle>
                          <path d="M272 2161.26c-1.64 0-3.28.09-4.91.19a17.63 17.63 0 00-6 1.32 6 6 0 00-1.6 1 2.35 2.35 0 000 3.92 6 6 0 001.6 1 17.62 17.62 0 006 1.31c1.63.1 3.27.17 4.91.19 4.49.06 18.64-1 18.64-1 3.89-.3 5.91-.65 8.36-.83l7.7-.81 8-.51 6.06-.05s2.51 0 2.51-1.29-2.51-1.3-2.51-1.3h-6.06l-8-.51-7.7-.89c-2.45-.17-4.47-.53-8.36-.82-.02.04-14.17-.98-18.64-.92zM304 2169.86c-2.22.27-4.21.51-6.43.76 0 0-12.5 1.28-21.4 5.56-1.19.57-2.41 1.09-3.58 1.69a6.56 6.56 0 00-3.32 2.72s-2.25 4.17 2.16 5.72a10.53 10.53 0 006.85-.89l6.14-3.25a89.57 89.57 0 0127-10.31c2.37-.44 3.78-.85 5.52-1.12a1.43 1.43 0 00.27-.09c.25-.07.63-.55.54-.79a.89.89 0 00-.43-.55 4 4 0 00-1.32-.31 93 93 0 00-12 .86zM291.13 2189.62c.29-.24.59-.49.89-.71a9.56 9.56 0 001-.86c.14-.15.28-.3.46-.46a52.81 52.81 0 0114.06-9.37c.6-.26 1.09-.49 1.54-.7s1-.45 1.46-.65a.67.67 0 00.2-.12 1 1 0 00.42-.6.82.82 0 000-.21.52.52 0 00-.09-.29.94.94 0 00-.59-.44 2.66 2.66 0 00-1 0 53.94 53.94 0 00-6.81 2.08l-1.05.37-2.55.91a47.83 47.83 0 00-11.47 6.13l-.72.56c-.38.29-.76.58-1.12.88l-.22.18a5.34 5.34 0 00-1.68 1.94 2.44 2.44 0 00.32 2.42 2.81 2.81 0 002 1.09 6.61 6.61 0 004.09-1.49c.31-.21.58-.43.86-.66zM328.75 2169.58a1.15 1.15 0 00-1.42-.23c-8.56 5.28-14.12 9.21-17.52 12.64a89.073 89.073 0 00-5.18 5.7c-.64.77-1.3 1.59-2 2.45l-.63.92-.39.56a59.66 59.66 0 00-6.15 10.81 49.19 49.19 0 00-3.14 10.85 37 37 0 00.57 13.68c4.24 15.94 16.45 17.37 16.56 17.39a11.62 11.62 0 006.3-.24c1.3-.34 5.62-1.92 3.88-7.39-.86-2.74-2.09-3.23-4.37-3.61a15.11 15.11 0 00-2.87-.17c-7.84 0-11.6-8.74-11.6-8.74s-4.56-8.59 1.95-25.27c.53-1.17 1.66-3.49 2.33-4.73l.33-.46s2.7-6 11.47-13.81a115.77 115.77 0 0111.4-9 1.06 1.06 0 00.48-1.35z"></path>
                          <path d="M322.12 2177.53l-.83.74c-.69.63-1.59 1.47-2.33 2.27l-.26.29c-4.69 5.73-8.65 10.52-10.95 15.21a50.6 50.6 0 00-4 11c-1.31 5.79-.82 8.83-.17 11.74 1.44 6.52 5.45 9.35 8.3 10.57a18 18 0 004.12 1h.74a4.34 4.34 0 001.09-.14 4.85 4.85 0 00.91-.22 2.74 2.74 0 00.92-.67 5.11 5.11 0 001.83-3.72 4.66 4.66 0 00-2.66-4.83l-1.23-.42a5.31 5.31 0 01-1.94-1 10 10 0 01-3.89-5.6c-1.21-4.57-1.45-8.69.21-15.4a49.2 49.2 0 019.44-16.92c.72-.8 1.47-1.6 2.2-2.37 1-1 1.68-1.71 1.7-1.72s1.62-1.64 1.33-2.24-1.18-.28-1.45-.18h-.13c-.39.3-1.64 1.29-2.86 2.36zM284.27 2213s-.35 2.56.74 3.86a2.6 2.6 0 002.36 1.21 2.53 2.53 0 001.16-.42 4.83 4.83 0 00.82-.81s.4-.7.51-3.49c0 0 0-6.45 4.38-14.48 1.22-2.24 2.94-4.86 2.94-4.86 1.8-2.41 3.43-4.54 3.43-4.54.34-.63.55-.82.23-1.19s-1 0-1 0a44.34 44.34 0 00-8.61 8.74s-6 7.51-6.84 15.18c-.04.27-.09.53-.12.8zM326 2234.12a3.79 3.79 0 103.78 3.78 3.79 3.79 0 00-3.78-3.78zM327.09 2223.63a3.29 3.29 0 103.29 3.29 3.28 3.28 0 00-3.29-3.29z"></path>
                          <path d="M325.45 2184c-.08-.32 0-.32-.3-.49a1.25 1.25 0 00-1.54.39 3.48 3.48 0 00-.37.48l-.06.09c-2.24 3.33-4.13 5.91-5 7.94a36.54 36.54 0 00-3.49 15.74c.24 8.86 5.82 9.38 5.82 9.38s4 1.07 4.88-2.66a4.53 4.53 0 00-1.92-5.25s-4-2.8-3.63-9.58a25.6 25.6 0 01.58-3.53 29.91 29.91 0 014.69-11.39 1.58 1.58 0 00.34-1.12zM332 2165.8a1.86 1.86 0 10-1.86 1.86 1.86 1.86 0 001.86-1.86z"></path>
                          <circle cx="280.02" cy="2193.65" r="2.79"></circle>
                          <path d="M264.52 2184.92a3.06 3.06 0 103.07 3.06 3.06 3.06 0 00-3.07-3.06zM289.33 2223.64a1.54 1.54 0 10-1.54 1.53 1.54 1.54 0 001.54-1.53z"></path>
                          <circle cx="253.1" cy="2165.58" r="3.45"></circle>
                          <path d="M272 2170c-1.64 0-3.28-.08-4.91-.19a17.62 17.62 0 01-6-1.31 6 6 0 01-1.6-1 2.35 2.35 0 010-3.92 6 6 0 011.6-1 17.87 17.87 0 016-1.32c1.63-.1 3.27-.17 4.91-.19 4.49-.05 18.64 1 18.64 1 3.89.29 5.91.65 8.36.82l7.7.82 8 .51h6.06s2.51 0 2.51 1.3-2.51 1.3-2.51 1.3h-6.06l-8 .51-7.7.82c-2.45.17-4.47.53-8.36.82-.02.1-14.17 1.11-18.64 1.03zM304 2161.42c-2.22-.26-4.21-.51-6.43-.76 0 0-12.5-1.28-21.4-5.55-1.19-.57-2.41-1.1-3.58-1.69a6.53 6.53 0 01-3.32-2.73s-2.25-4.16 2.16-5.71a10.45 10.45 0 016.85.89l6.14 3.24a89.74 89.74 0 0027 10.32c2.37.44 3.78.85 5.52 1.11.09 0 .18.07.27.09.25.08.63.56.54.8a1 1 0 01-.43.55 3.76 3.76 0 01-1.36.32 91.22 91.22 0 01-11.96-.88zM291.13 2141.66c.29.25.59.49.89.72a7.61 7.61 0 011 .86c.14.14.28.29.46.46a52.64 52.64 0 0014.06 9.36l1.54.71c.51.24 1 .45 1.46.65a1 1 0 01.2.11 1 1 0 01.42.61.71.71 0 010 .2.59.59 0 01-.09.3.89.89 0 01-.59.43 2.49 2.49 0 01-1 0 53.93 53.93 0 01-6.81-2.09l-1.05-.37-2.55-.9c-.07 0-6.91-2.52-11.47-6.13l-.72-.56c-.38-.29-.76-.58-1.12-.89l-.22-.18a5.38 5.38 0 01-1.68-1.93 2.46 2.46 0 01.32-2.43 2.77 2.77 0 012-1.08 6.49 6.49 0 014.09 1.48c.31.22.58.45.86.67zM328.75 2161.7a1.14 1.14 0 01-1.42.24c-8.56-5.29-14.12-9.22-17.52-12.65-1.87-1.88-3.61-3.8-5.18-5.69-.64-.77-1.3-1.59-2-2.46l-.63-.91q-.27-.37-.39-.57a59.33 59.33 0 01-6.15-10.81 49.27 49.27 0 01-3.14-10.84 37.09 37.09 0 01.57-13.69c4.24-15.94 16.45-17.36 16.56-17.38a11.63 11.63 0 016.3.23c1.3.35 5.62 1.93 3.88 7.39-.86 2.75-2.09 3.24-4.37 3.62a15.06 15.06 0 01-2.87.16c-7.84 0-11.6 8.75-11.6 8.75s-4.56 8.59 1.95 25.26c.53 1.18 1.66 3.5 2.33 4.74l.33.46s2.7 6 11.47 13.8a114.43 114.43 0 0011.4 9 1 1 0 01.48 1.35z"></path>
                          <path d="M322.12 2153.75l-.83-.74c-.69-.63-1.59-1.47-2.33-2.26l-.26-.29c-4.69-5.74-8.65-10.52-10.95-15.22a50.81 50.81 0 01-4-11c-1.31-5.79-.82-8.84-.17-11.75 1.44-6.51 5.45-9.35 8.3-10.56a17.45 17.45 0 014.12-1h.74a4.86 4.86 0 011.09.14 4.1 4.1 0 01.91.23 2.72 2.72 0 01.92.66 5.11 5.11 0 011.83 3.73 4.65 4.65 0 01-2.66 4.82l-1.23.43a5.15 5.15 0 00-1.94 1 10.08 10.08 0 00-3.89 5.61c-1.21 4.57-1.45 8.68.21 15.39a49.23 49.23 0 009.44 16.93c.72.79 1.47 1.6 2.2 2.37 1 1 1.68 1.71 1.7 1.72s1.62 1.63 1.33 2.24-1.18.28-1.45.17h-.13c-.39-.29-1.64-1.28-2.86-2.35zM284.27 2118.31s-.35-2.56.74-3.86a2.59 2.59 0 012.36-1.22 2.65 2.65 0 011.16.42 4.55 4.55 0 01.82.82 9.25 9.25 0 01.51 3.48s0 6.45 4.38 14.49c1.22 2.23 2.94 4.86 2.94 4.86 1.8 2.4 3.43 4.54 3.43 4.54.34.63.55.82.23 1.19s-1 0-1 0a44.66 44.66 0 01-8.61-8.74s-6-7.52-6.84-15.18c-.04-.3-.09-.56-.12-.8zM326 2097.16a3.78 3.78 0 113.78-3.78 3.78 3.78 0 01-3.78 3.78zM327.09 2107.66a3.29 3.29 0 113.29-3.29 3.29 3.29 0 01-3.29 3.29z"></path>
                          <path d="M325.45 2147.3c-.08.32 0 .33-.3.5a1.27 1.27 0 01-1.54-.4 3.5 3.5 0 01-.37-.47l-.06-.1c-2.24-3.32-4.13-5.91-5-7.94a36.44 36.44 0 01-3.49-15.73c.24-8.86 5.82-9.39 5.82-9.39s4-1.06 4.88 2.67a4.52 4.52 0 01-1.92 5.24s-4 2.8-3.63 9.59a25.84 25.84 0 00.58 3.53 29.9 29.9 0 004.69 11.38 1.59 1.59 0 01.34 1.12zM332 2165.49a1.86 1.86 0 11-1.86-1.86 1.87 1.87 0 011.86 1.86z"></path>
                          <circle cx="280.02" cy="2137.63" r="2.79"></circle>
                          <path d="M264.52 2146.37a3.07 3.07 0 113.07-3.07 3.06 3.06 0 01-3.07 3.07zM289.33 2107.64a1.54 1.54 0 11-1.54-1.53 1.53 1.53 0 011.54 1.53z"></path>
                        </g>
                      </g>
                      <path
                        stroke="#f9b700"
                        strokeMiterlimit="10"
                        strokeWidth="8"
                        d="M334.24 2153.08a18.79 18.79 0 100 27.92"
                        className="fill-th-background"
                      ></path>
                      <path
                        fill="none"
                        stroke="#f9b700"
                        strokeMiterlimit="10"
                        strokeWidth="8"
                        d="M334.24 2086.59L334.24 2244.66"
                      ></path>
                    </g>
                  }
                >
                  <Tween
                    delay="7"
                    from={{
                      opacity: 0
                    }}
                    to={{
                      opacity: 2
                    }}
                  />
                </Timeline>
              </svg>
            )}
          </Scene>
        </div>
      </Controller>
      <div className="section" />
    </div>
  );
}
