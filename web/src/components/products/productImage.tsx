import Image from "next/image";

interface ProductImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}
export const ProductImage = ({ src, alt, width = 200, height = 280 }: ProductImageProps) => {
  return (
    <div className="mx-4">
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        className="w-[200px] h-[280px] object-contain rounded-md shadow-sm"
      />
    </div>
  );
};
