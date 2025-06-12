export function getImageSrcFromBlob(image?: { data: number[] } | null): string {
  if (!image || !image.data || image.data.length === 0) {
    return "/placeholder.png";
  }

  const byteArray = Uint8Array.from(image.data);
  const base64String = Buffer.from(byteArray).toString("base64");
  return `data:image/jpeg;base64,${base64String}`;
}