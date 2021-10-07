// validation : 검증한다.

export function fileValidation(file) {
  if (!file) {
    alert("파일이 없습니다.");
    return false;
  }

  if (file.size > 1100 * 1024 * 1024) {
    alert("파일 용량이 너무 큽니다. (제한 : 2GB)");
    return false;
  }

  if (!file.type.includes("jpeg") && !file.type.includes("png")) {
    alert("jpeg 또는 png만 업로드 가능 합니다.");
    return false;
  }

  return true;
}
