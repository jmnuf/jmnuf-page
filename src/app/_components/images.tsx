import Image from "next/image";

type ImageSizingProps = { width: number; height: number };

type BaseImageProps = {
  src: string;
  alt: string;
} & ImageSizingProps

export const BaseImage:React.FC<BaseImageProps> = ({ src, alt, width, height }) => {
  return <Image src={src} alt={alt} width={width} height={height} />;
};

export const JmLogoLettersSrc = "https://utfs.io/f/b434e469-fefd-4cfd-864b-0e3597a3562b-lilit1.png";
export const JmLogoLetters:React.FC<{ size: number }> = ({ size }) => {
  return <BaseImage src={JmLogoLettersSrc} alt="JM" width={size} height={size} />;
};

export const JmLogoCharaSrc = "https://utfs.io/f/3f1f395b-dc66-4ae2-81bb-ce5369d3816b-vxu3kw.png";
export const JmLogoChara:React.FC<{ size: number }> = ({ size }) => {
  return <BaseImage src={JmLogoCharaSrc} alt="JM Character" width={size} height={size} />;
};
