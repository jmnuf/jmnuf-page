type IconComponent = React.FC<{ size: string | number; className?: string }>;

// https://www.flaticon.com/free-icon-font/battery-quarter_9234402?page=1&position=4&term=battery&origin=search&related_id=9234402
export const LowBatterySVG: IconComponent = ({ size, className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_1"
      data-name="Layer 1"
      viewBox="0 0 24 24"
      width={size}
      height={size}
    >
      <path d="M23,8h-1.101c-.465-2.279-2.485-4-4.899-4H5C2.243,4,0,6.243,0,9v6c0,2.757,2.243,5,5,5h12c2.414,0,4.435-1.721,4.899-4h1.101c.552,0,1-.448,1-1v-6c0-.552-.448-1-1-1Zm-6,10H5c-1.654,0-3-1.346-3-3v-6c0-1.654,1.346-3,3-3h12c1.654,0,3,1.346,3,3v6c0,1.654-1.346,3-3,3ZM8,9v6c0,.552-.448,1-1,1h-2c-.552,0-1-.448-1-1v-6c0-.552,.448-1,1-1h2c.552,0,1,.448,1,1Z" />
    </svg>
  );
};

// https://www.flaticon.com/free-icon-font/code-branch_8778004?page=1&position=2&term=git&origin=search&related_id=8778004
export const GitBranchSVG: IconComponent = ({ size, className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_1"
      data-name="Layer 1"
      viewBox="0 0 24 24"
      width={size}
      height={size}
    >
      <path d="M24,4c0-2.206-1.794-4-4-4s-4,1.794-4,4c0,1.86,1.277,3.428,3,3.873v.127c0,1.654-1.346,3-3,3H8c-1.125,0-2.164,.374-3,1.002V7.873c1.723-.445,3-2.013,3-3.873C8,1.794,6.206,0,4,0S0,1.794,0,4c0,1.86,1.277,3.428,3,3.873v8.253c-1.723,.445-3,2.013-3,3.873,0,2.206,1.794,4,4,4s4-1.794,4-4c0-1.86-1.277-3.428-3-3.873v-.127c0-1.654,1.346-3,3-3h8c2.757,0,5-2.243,5-5v-.127c1.723-.445,3-2.013,3-3.873ZM2,4c0-1.103,.897-2,2-2s2,.897,2,2-.897,2-2,2-2-.897-2-2ZM6,20c0,1.103-.897,2-2,2s-2-.897-2-2,.897-2,2-2,2,.897,2,2ZM20,6c-1.103,0-2-.897-2-2s.897-2,2-2,2,.897,2,2-.897,2-2,2Z" />
    </svg>
  );
};

// https://www.flaticon.com/free-icon-font/screen-play_17818979?page=1&position=69&term=screen&origin=search&related_id=17818979
export const ScreenPlaySVG: IconComponent = ({ size, className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_1"
      data-name="Layer 1"
      viewBox="0 0 24 24"
      width={size}
      height={size}
    >
      <path d="M21.5,0H2.5C1.122,0,0,1.122,0,2.5v15.5H24V2.5c0-1.378-1.122-2.5-2.5-2.5Zm1.5,17H1V2.5c0-.827,.673-1.5,1.5-1.5H21.5c.827,0,1.5,.673,1.5,1.5v14.5Zm-15-3.065l8.633-4.935L8,4.066V13.935Zm1-8.145l5.618,3.21-5.618,3.211V5.79Zm-1,14.21c-.929,0-1.705,.64-1.929,1.5H0v1H6.071c.224,.86,1,1.5,1.929,1.5s1.705-.64,1.929-1.5h14.071v-1H9.929c-.224-.86-1-1.5-1.929-1.5Zm0,3c-.551,0-1-.448-1-1s.449-1,1-1,1,.448,1,1-.449,1-1,1Z" />
    </svg>
  );
};

// https://www.flaticon.com/free-icon-font/document-circle-wrong_15851968?page=1&position=17&term=cancel&origin=search&related_id=15851968
export const DocumentCircleWrongSVG: IconComponent = ({ size, className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_1"
      data-name="Layer 1"
      viewBox="0 0 24 24"
      width={size}
      height={size}
    >
      <path d="m10.5,23h-6c-1.93,0-3.5-1.57-3.5-3.5V4.5c0-1.93,1.57-3.5,3.5-3.5h5.515c.334,0,.663.03.985.087v5.413c0,1.378,1.121,2.5,2.5,2.5h5.813c.154,0,.3-.071.395-.193s.128-.281.09-.431c-.289-1.13-.878-2.163-1.702-2.987l-3.484-3.485c-1.229-1.228-2.861-1.904-4.597-1.904h-5.515C2.019,0,0,2.019,0,4.5v15c0,2.481,2.019,4.5,4.5,4.5h6c.276,0,.5-.224.5-.5s-.224-.5-.5-.5ZM12,1.368c.705.273,1.353.692,1.904,1.243l3.484,3.485c.543.542.965,1.192,1.24,1.904h-5.129c-.827,0-1.5-.673-1.5-1.5V1.368Zm5.5,9.632c-3.584,0-6.5,2.916-6.5,6.5s2.916,6.5,6.5,6.5,6.5-2.916,6.5-6.5-2.916-6.5-6.5-6.5Zm0,12c-3.032,0-5.5-2.468-5.5-5.5s2.468-5.5,5.5-5.5,5.5,2.468,5.5,5.5-2.468,5.5-5.5,5.5Zm2.854-7.646l-2.146,2.146,2.146,2.146c.195.195.195.512,0,.707-.098.098-.226.146-.354.146s-.256-.049-.354-.146l-2.146-2.146-2.146,2.146c-.098.098-.226.146-.354.146s-.256-.049-.354-.146c-.195-.195-.195-.512,0-.707l2.146-2.146-2.146-2.146c-.195-.195-.195-.512,0-.707s.512-.195.707,0l2.146,2.146,2.146-2.146c.195-.195.512-.195.707,0s.195.512,0,.707Z" />
    </svg>
  );
};

export const CaretLeftSVG: IconComponent = ({ size, className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_1"
      data-name="Layer 1"
      viewBox="0 0 24 24"
      width={size}
      height={size}
    >
      <path d="m14.751,19.002c-.314,0-.619-.122-.858-.354l-5.188-5.048c-.442-.396-.705-.984-.705-1.6s.263-1.203.72-1.613l5.173-5.033c.364-.355.881-.452,1.349-.255s.759.636.759,1.145v11.514c0,.508-.291.946-.759,1.145-.16.067-.326.101-.49.101Zm.003-13.002c-.05,0-.108.016-.164.07l-5.188,5.047c-.265.238-.402.547-.402.883s.138.645.388.869l5.202,5.062c.104.102.217.067.263.049.044-.019.147-.078.147-.223V6.243c0-.145-.104-.204-.147-.223-.021-.009-.057-.021-.099-.021Z" />
    </svg>
  );
};

export const CaretRightSVG: IconComponent = ({ size, className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_1"
      data-name="Layer 1"
      viewBox="0 0 24 24"
      width={size}
      height={size}
    >
      <path d="m10.249,19.002c-.164,0-.33-.033-.49-.101-.468-.197-.759-.636-.759-1.145V6.243c0-.509.291-.947.759-1.145.469-.198.984-.1,1.349.255l5.188,5.047c.442.396.705.984.705,1.6s-.263,1.203-.72,1.613l-5.173,5.033c-.239.233-.545.355-.858.355Zm-.003-13.002c-.043,0-.078.012-.099.021-.044.019-.147.078-.147.223v11.514c0,.145.104.204.147.223.045.02.16.051.263-.05l5.188-5.047c.265-.238.402-.547.402-.883s-.138-.645-.388-.869l-5.202-5.061c-.056-.055-.115-.07-.164-.07Z" />
    </svg>
  );
};

export const CaretFilledRightSVG: IconComponent = ({ size, className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      id="Bold"
      viewBox="0 0 24 24"
      width={size}
      height={size}
    >
      <path d="M9,17.879V6.707A1,1,0,0,1,10.707,6l5.586,5.586a1,1,0,0,1,0,1.414l-5.586,5.586A1,1,0,0,1,9,17.879Z" />
    </svg>
  );
};

export const CaretFilledLeftSVG: IconComponent = ({ size, className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      id="Bold"
      viewBox="0 0 24 24"
      width={size}
      height={size}
    >
      <path d="M13.293,18.586,7.707,13a1,1,0,0,1,0-1.414L13.293,6A1,1,0,0,1,15,6.707V17.879A1,1,0,0,1,13.293,18.586Z" />
    </svg>
  );
};

export const CaretFilledUpSVG: IconComponent = ({ size, className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      id="Bold"
      viewBox="0 0 24 24"
      width={size}
      height={size}
    >
      <path d="M6.414,15.586H17.586a1,1,0,0,0,.707-1.707L12.707,8.293a1,1,0,0,0-1.414,0L5.707,13.879A1,1,0,0,0,6.414,15.586Z" />
    </svg>
  );
};

export const CaretFilledDownSVG: IconComponent = ({ size, className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      id="Bold"
      viewBox="0 0 24 24"
      width={size}
      height={size}
    >
      <path d="M6.414,9H17.586a1,1,0,0,1,.707,1.707l-5.586,5.586a1,1,0,0,1-1.414,0L5.707,10.707A1,1,0,0,1,6.414,9Z" />
    </svg>
  );
};

export const CircleSVG: IconComponent = ({ size, className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_1"
      data-name="Layer 1"
      viewBox="0 0 24 24"
      width={size}
      height={size}
    >
      <path d="m12,24C5.383,24,0,18.617,0,12S5.383,0,12,0s12,5.383,12,12-5.383,12-12,12Zm0-23C5.935,1,1,5.935,1,12s4.935,11,11,11,11-4.935,11-11S18.065,1,12,1Z" />
    </svg>
  );
};

export const HomeSVG: IconComponent = ({ size, className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_1"
      data-name="Layer 1"
      viewBox="0 0 24 24"
      width={size}
      height={size}
    >
      <path d="M12,14a3,3,0,0,0-3,3v7.026h6V17A3,3,0,0,0,12,14Z" />
      <path d="M13.338.833a2,2,0,0,0-2.676,0L0,10.429v10.4a3.2,3.2,0,0,0,3.2,3.2H7V17a5,5,0,0,1,10,0v7.026h3.8a3.2,3.2,0,0,0,3.2-3.2v-10.4Z" />
    </svg>
  );
};
