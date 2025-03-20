export function convertBlobToBase64(blob: {
  type: "Buffer";
  data: number[];
}): string {
  const buffer = Buffer.from(blob.data);
  return buffer.toString("base64");
}
