export enum SupportedFileType {
  MARKDOWN = "md",
  PICTURE_PNG = "png",
  PICTURE_JPEG = "jpeg",
  PICTURE_JPG = "jpg",
  PICTURE_GIF = "gif",
  TEXT = "txt",
  JSON = "json",
}

export const transFileTypeToString = (type: SupportedFileType) => {
  return type.toString();
};
