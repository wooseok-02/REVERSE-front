import { useState, type ChangeEvent } from "react";
import * as S from "./ProjectManagePage.styles";
import {
  createProject,
  deleteProject,
  uploadProjectImage,
  type ClubProject,
  type ClubProjectPayload,
} from "../../services/projectAPI";

const initialForm: ClubProjectPayload = {
  title: "",
  description: "",
  thumbnailUrl: "",
  techStack: "",
  githubUrl: "",
  isActive: 1,
  updatedBy: 1,
};

export default function ProjectManagePage() {
  const [form, setForm] = useState<ClubProjectPayload>(initialForm);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadedUrl, setUploadedUrl] = useState("");
  const [response, setResponse] = useState<ClubProject | null>(null);
  const [deleteResponse, setDeleteResponse] = useState<unknown>(null);
  const [uploadMessage, setUploadMessage] = useState("");
  const [submitMessage, setSubmitMessage] = useState("");
  const [deleteMessage, setDeleteMessage] = useState("");
  const [deleteId, setDeleteId] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const activeThumbnailUrl = uploadedUrl || form.thumbnailUrl;

  const handleTextChange =
    (key: keyof ClubProjectPayload) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { value } = event.target;
      setForm((prev) => ({
        ...prev,
        [key]:
          key === "isActive" || key === "updatedBy"
            ? Number(value || 0)
            : value,
      }));
    };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ?? null;
    setSelectedFile(file);
    setUploadMessage("");
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setUploadMessage("업로드할 이미지를 먼저 선택해주세요.");
      return;
    }
    try {
      setIsUploading(true);
      setUploadMessage("");
      const imageUrl = await uploadProjectImage(selectedFile);
      setUploadedUrl(imageUrl);
      setForm((prev) => ({ ...prev, thumbnailUrl: imageUrl }));
      setUploadMessage("이미지 업로드가 완료되었습니다.");
    } catch (error) {
      console.error("image upload failed", error);
      setUploadMessage("이미지 업로드에 실패했습니다.");
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);
      setSubmitMessage("");
      const payload = { ...form, thumbnailUrl: activeThumbnailUrl };
      const result = await createProject(payload);
      setResponse(result);
      setSubmitMessage("프로젝트 등록이 완료되었습니다.");
    } catch (error) {
      console.error("project create failed", error);
      setSubmitMessage("프로젝트 등록에 실패했습니다.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteId.trim()) {
      setDeleteMessage("삭제할 프로젝트 ID를 입력해주세요.");
      return;
    }
    try {
      setIsDeleting(true);
      setDeleteMessage("");
      const result = await deleteProject(deleteId.trim());
      setDeleteResponse(result);
      setDeleteMessage("프로젝트 삭제가 완료되었습니다.");
    } catch (error) {
      console.error("project delete failed", error);
      setDeleteMessage("프로젝트 삭제에 실패했습니다.");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <S.Page>
      <S.Shell>
        <S.Header>
          <S.Eyebrow>Project Admin</S.Eyebrow>
          <S.Title>프로젝트 관리</S.Title>
          <S.Description>
            썸네일 이미지를 업로드하고, 프로젝트 등록과 삭제를 한 화면에서
            처리할 수 있는 관리 페이지입니다.
          </S.Description>
        </S.Header>

        <S.Grid>
          {/* 이미지 업로드 */}
          <S.Card>
            <S.CardTitle>썸네일 업로드</S.CardTitle>
            <S.CardText>
              이미지를 업로드한 뒤 반환된 URL을 등록 폼의
              <code> thumbnailUrl </code>값으로 자동 반영합니다.
            </S.CardText>

            <S.Field>
              <S.FieldLabel>이미지 파일</S.FieldLabel>
              <S.Input type="file" accept="image/*" onChange={handleFileChange} />
            </S.Field>

            <S.ButtonRow>
              <S.PrimaryButton type="button" onClick={handleUpload}>
                {isUploading ? "업로드 중..." : "이미지 업로드"}
              </S.PrimaryButton>
            </S.ButtonRow>

            {uploadMessage ? (
              <S.StatusText $error={!uploadedUrl}>{uploadMessage}</S.StatusText>
            ) : null}

            <S.PreviewPanel>
              {activeThumbnailUrl ? (
                <S.PreviewImage src={activeThumbnailUrl} alt="thumbnail preview" />
              ) : (
                <S.EmptyPreview>
                  업로드 후 미리보기가 여기에 표시됩니다.
                </S.EmptyPreview>
              )}
              <S.MetaList>
                <S.MetaLabel>선택 파일</S.MetaLabel>
                <S.MetaValue>
                  {selectedFile ? selectedFile.name : "선택된 파일이 없습니다."}
                </S.MetaValue>
                <S.MetaLabel>업로드 URL</S.MetaLabel>
                <S.MetaValue>
                  {activeThumbnailUrl || "아직 URL이 없습니다."}
                </S.MetaValue>
              </S.MetaList>
            </S.PreviewPanel>
          </S.Card>

          {/* 프로젝트 등록 */}
          <S.Card>
            <S.CardTitle>프로젝트 등록</S.CardTitle>
            <S.CardText>
              업로드한 썸네일 URL을 포함해 <code>/api/club-project</code>로
              프로젝트 정보를 등록합니다.
            </S.CardText>

            <S.Field>
              <S.FieldLabel>프로젝트 이름</S.FieldLabel>
              <S.Input
                value={form.title}
                onChange={handleTextChange("title")}
                placeholder="프로젝트 이름"
              />
            </S.Field>

            <S.Field>
              <S.FieldLabel>프로젝트 설명</S.FieldLabel>
              <S.TextArea
                value={form.description}
                onChange={handleTextChange("description")}
                placeholder="프로젝트 설명"
              />
            </S.Field>

            <S.Field>
              <S.FieldLabel>썸네일 URL</S.FieldLabel>
              <S.Input
                value={activeThumbnailUrl}
                onChange={handleTextChange("thumbnailUrl")}
                placeholder="업로드 후 자동 반영됩니다."
              />
            </S.Field>

            <S.Field>
              <S.FieldLabel>기술 스택</S.FieldLabel>
              <S.Input
                value={form.techStack}
                onChange={handleTextChange("techStack")}
                placeholder="예: React, Spring Boot"
              />
            </S.Field>

            <S.Field>
              <S.FieldLabel>깃헙 URL</S.FieldLabel>
              <S.Input
                value={form.githubUrl}
                onChange={handleTextChange("githubUrl")}
                placeholder="https://github.com/..."
              />
            </S.Field>

            <S.InlineFields>
              <S.Field>
                <S.FieldLabel>isActive</S.FieldLabel>
                <S.Input
                  type="number"
                  value={form.isActive}
                  onChange={handleTextChange("isActive")}
                />
              </S.Field>
              <S.Field>
                <S.FieldLabel>updatedBy</S.FieldLabel>
                <S.Input
                  type="number"
                  value={form.updatedBy}
                  onChange={handleTextChange("updatedBy")}
                />
              </S.Field>
            </S.InlineFields>

            <S.ButtonRow>
              <S.PrimaryButton type="button" onClick={handleSubmit}>
                {isSubmitting ? "등록 중..." : "프로젝트 등록"}
              </S.PrimaryButton>
              <S.SecondaryButton
                type="button"
                onClick={() => {
                  setForm(initialForm);
                  setUploadedUrl("");
                  setResponse(null);
                  setUploadMessage("");
                  setSubmitMessage("");
                  setSelectedFile(null);
                }}
              >
                폼 초기화
              </S.SecondaryButton>
            </S.ButtonRow>

            {submitMessage ? (
              <S.StatusText $error={!response}>{submitMessage}</S.StatusText>
            ) : null}

            <S.PreviewPanel>
              <S.CardTitle as="h3">요청 미리보기</S.CardTitle>
              <S.CodeBlock>
                {JSON.stringify({ ...form, thumbnailUrl: activeThumbnailUrl }, null, 2)}
              </S.CodeBlock>
              <S.CardTitle as="h3">응답</S.CardTitle>
              <S.CodeBlock>
                {response ? JSON.stringify(response, null, 2) : "아직 응답이 없습니다."}
              </S.CodeBlock>
            </S.PreviewPanel>
          </S.Card>

          {/* 프로젝트 삭제 */}
          <S.Card>
            <S.CardTitle>프로젝트 삭제</S.CardTitle>
            <S.CardText>
              삭제할 프로젝트의 ID를 입력한 뒤{" "}
              <code>DELETE /api/club-project/{`{id}`}</code> 요청을 보냅니다.
            </S.CardText>

            <S.Field>
              <S.FieldLabel>프로젝트 ID</S.FieldLabel>
              <S.Input
                value={deleteId}
                onChange={(e) => {
                  setDeleteId(e.target.value);
                  setDeleteMessage("");
                }}
                placeholder="삭제할 프로젝트 ID"
              />
            </S.Field>

            <S.ButtonRow>
              <S.DangerButton type="button" onClick={handleDelete}>
                {isDeleting ? "삭제 중..." : "프로젝트 삭제"}
              </S.DangerButton>
            </S.ButtonRow>

            {deleteMessage ? (
              <S.StatusText $error={!deleteResponse}>{deleteMessage}</S.StatusText>
            ) : null}

            <S.PreviewPanel>
              <S.CardTitle as="h3">삭제 요청</S.CardTitle>
              <S.CodeBlock>
                {deleteId.trim()
                  ? `DELETE /api/club-project/${deleteId.trim()}`
                  : "삭제할 ID를 입력하면 요청 경로가 여기에 표시됩니다."}
              </S.CodeBlock>
              <S.CardTitle as="h3">응답</S.CardTitle>
              <S.CodeBlock>
                {deleteResponse
                  ? JSON.stringify(deleteResponse, null, 2)
                  : "아직 삭제 응답이 없습니다."}
              </S.CodeBlock>
            </S.PreviewPanel>
          </S.Card>
        </S.Grid>
      </S.Shell>
    </S.Page>
  );
}