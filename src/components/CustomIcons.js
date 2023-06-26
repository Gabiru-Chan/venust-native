import * as React from "react"
import Svg, { Path, G } from "react-native-svg"

function SvgHome(props) {
    return (
        <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M9 21H7a4 4 0 01-4-4v-6.292a4 4 0 011.927-3.42l5-3.03a4 4 0 014.146 0l5 3.03A4 4 0 0121 10.707V17a4 4 0 01-4 4h-2m-6 0v-4a3 3 0 016 0v4m-6 0h6"
                stroke="#45D9A6"
                strokeWidth={2.25}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

function SvgCamera(props) {
    return (
        <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G
                stroke="#fff"
                strokeWidth={2.25}
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <Path d="M2 19V9a2 2 0 012-2h.5a2 2 0 001.6-.8l2.22-2.96A.6.6 0 018.8 3h6.4a.6.6 0 01.48.24L17.9 6.2a2 2 0 001.6.8h.5a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2z" />
                <Path d="M12 17a4 4 0 100-8 4 4 0 000 8z" />
            </G>
        </Svg>
    )
}

function SvgPerson(props) {
    return (
        <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M5 20v-1a7 7 0 017-7m0 0a7 7 0 017 7v1m-7-8a4 4 0 100-8 4 4 0 000 8z"
                stroke="#fff"
                strokeWidth={2.25}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

function SvgMap(props) {
    return (
        <Svg
            width={46}
            height={46}
            viewBox="0 0 46 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G fill="#ED7496">
                <Path
                    opacity={0.3}
                    d="M9.583 35.094l5.75-2.223V10.446l-5.75 1.936v22.712zm21.084.46l5.75-1.936V10.906l-5.75 2.242v22.406z"
                />
                <Path d="M39.292 5.75l-.307.058L28.75 9.774 17.25 5.75 6.44 9.392c-.403.134-.69.479-.69.92v28.98c0 .536.422.958.958.958l.307-.057 10.235-3.968 11.5 4.025 10.81-3.642c.402-.134.69-.479.69-.92V6.708a.949.949 0 00-.958-.958zM15.333 32.87l-5.75 2.224V12.382l5.75-1.936V32.87zm11.5 2.646l-7.666-2.683V10.484l7.666 2.684v22.348zm9.584-1.898l-5.75 1.936V13.148l5.75-2.223v22.693z" />
            </G>
        </Svg>
    )
}

function SvgHamburguer(props) {
    return (
        <Svg
            width={46}
            height={46}
            viewBox="0 0 46 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M35.938 15.333a1.437 1.437 0 01-1.438 1.438h-23a1.438 1.438 0 010-2.875h23a1.438 1.438 0 011.438 1.437zm0 7.667a1.437 1.437 0 01-1.438 1.437h-23a1.438 1.438 0 110-2.875h23A1.438 1.438 0 0135.938 23zm0 7.667a1.438 1.438 0 01-1.438 1.437h-23a1.438 1.438 0 010-2.875h23a1.438 1.438 0 011.438 1.438z"
                fill="#FFE28C"
            />
        </Svg>
    )
}

function SvgCut(props) {
    return (
        <Svg
            width={46}
            height={46}
            viewBox="0 0 46 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M31.393 10.26a1.438 1.438 0 00-1.966.513L23 21.746l-6.427-10.974a1.437 1.437 0 00-2.48 1.452l7.241 12.363-2.129 3.64a5.091 5.091 0 00-4.111-2.067c-2.722 0-5.031 2.134-5.031 4.888s2.307 4.887 5.03 4.887c1.902 0 3.604-1.04 4.455-2.606L23 27.435l3.454 5.896a5.07 5.07 0 004.452 2.606c2.722 0 5.032-2.133 5.032-4.887 0-2.754-2.308-4.888-5.032-4.888-1.673 0-3.19.805-4.11 2.067l-2.13-3.638 7.24-12.363a1.435 1.435 0 00-.513-1.968z"
                fill="#769FEF"
            />
        </Svg>
    )
}

function SvgChair(props) {
    return (
      <Svg
        width={46}
        height={46}
        viewBox="0 0 46 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <G fill="#A1F8E6">
          <Path d="M10.063 29.708a3.355 3.355 0 013.354-3.354h19.166a3.355 3.355 0 013.355 3.354 5.27 5.27 0 01-5.271 5.271H15.333a5.27 5.27 0 01-5.27-5.27zm2.64-16.74c.465-3.856.695-5.782 1.81-7.1a5.75 5.75 0 011.223-1.084c1.437-.95 3.38-.95 7.264-.95 3.883 0 5.825 0 7.264.95a5.75 5.75 0 011.223 1.085c1.116 1.317 1.347 3.243 1.81 7.1l.174 1.45c.479 4.002.72 6.003-.424 7.291C31.903 23 29.89 23 25.86 23h-5.718c-4.03 0-6.045 0-7.187-1.29-1.145-1.288-.905-3.289-.426-7.291l.175-1.45z" />
          <Path
            opacity={0.5}
            d="M3.833 20.604a1.438 1.438 0 000 2.875c1.585 0 2.473.176 3.017.418.477.21.786.508 1.114 1.048.057.096.082.136.107.184.025.046.06.111.12.244.097.21.145.345.288.774l1.656 4.974c.06.18.156.347.282.49a5.256 5.256 0 01-.354-1.903c0-1.238.67-2.319 1.667-2.9l-.537-1.604a8.997 8.997 0 00-.393-1.04 5.889 5.889 0 00-.38-.712c-.545-.899-1.256-1.679-2.41-2.185-1.085-.479-2.442-.663-4.177-.663zm20.604 5.75h-2.875V23h2.875v3.354zm11.146 5.257a5.232 5.232 0 00.355-1.903c0-1.238-.671-2.319-1.668-2.9l.537-1.604c.108-.355.24-.703.393-1.04.164-.355.249-.495.38-.712.545-.899 1.258-1.679 2.41-2.185 1.085-.479 2.442-.663 4.177-.663a1.438 1.438 0 010 2.875c-1.585 0-2.473.176-3.017.418-.477.21-.786.508-1.114 1.048-.057.096-.082.136-.107.184a4.3 4.3 0 00-.12.244c-.097.21-.145.345-.288.774l-1.656 4.974c-.06.18-.157.347-.282.49zm-14.02 3.368h2.875v2.235a6.957 6.957 0 014.716 4.498 1.437 1.437 0 01-2.725.909 4.083 4.083 0 00-1.991-2.33v1.876a1.438 1.438 0 01-2.875 0v-1.879a4.082 4.082 0 00-1.992 2.333 1.438 1.438 0 01-2.727-.909 6.959 6.959 0 014.718-4.498v-2.235z"
          />
        </G>
      </Svg>
    )
  }

export {
    SvgHome,
    SvgCamera,
    SvgPerson,
    SvgMap,
    SvgHamburguer,
    SvgCut,
    SvgChair
}