import { useState } from "react";
import { uploadImageToR2, type R2Folder } from "../services/testAPI";

const UploadTestPage = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [folder, setFolder] = useState<R2Folder>("club");
  const [uploadedUrl, setUploadedUrl] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setSelectedFile(file);
  };

  const handleFolderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFolder(e.target.value as R2Folder);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setErrorMessage("파일을 먼저 선택해주세요.");
      return;
    }

    try {
      setIsUploading(true);
      setErrorMessage("");

      const imageUrl = await uploadImageToR2(selectedFile, folder);
      setUploadedUrl(imageUrl);

      console.log("업로드 성공 URL:", imageUrl);
    } catch (error) {
      console.log("업로드 실패:", error);
      setErrorMessage("이미지 업로드에 실패했습니다.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div style={{ padding: "24px" }}>
      <h1>R2 업로드 테스트</h1>

      <div style={{ marginBottom: "16px" }}>
        <label>
          폴더:
          <select
            value={folder}
            onChange={handleFolderChange}
            style={{ marginLeft: "8px" }}
          >
            <option value="club">club</option>
            <option value="project">project</option>
            <option value="executive">executive</option>
          </select>
        </label>
      </div>

      <div style={{ marginBottom: "16px" }}>
        <input type="file" accept="image/*" onChange={handleFileChange} />
      </div>

      <button onClick={handleUpload} disabled={isUploading}>
        {isUploading ? "업로드 중..." : "업로드"}
      </button>

      {errorMessage && (
        <p style={{ color: "red", marginTop: "12px" }}>{errorMessage}</p>
      )}

      {uploadedUrl && (
        <div style={{ marginTop: "20px" }}>
          <p>업로드 성공 URL</p>
          <a href={uploadedUrl} target="_blank" rel="noreferrer">
            {uploadedUrl}
          </a>

          <div style={{ marginTop: "16px" }}>
            <img
              src={uploadedUrl}
              alt="uploaded"
              style={{ width: "300px", borderRadius: "8px" }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadTestPage;
