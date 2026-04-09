import { useState, type ChangeEvent, type FormEvent } from "react";
import * as S from "./ClubIntroManagePage.styles";
import {
  createClubIntro,
  deleteClubIntro,
  uploadImageToR2,
  type ClubIntroPayload,
  type ClubIntroResponse,
  type R2Folder,
} from "../../services/testAPI";

const initialForm: ClubIntroPayload = {
  title: "",
  subTitle: "",
  bannerUrl: "",
  isActive: 1,
  updatedBy: 1,
};

export default function ClubIntroManagePage() {
  const [form, setForm] = useState<ClubIntroPayload>(initialForm);
  const [folder, setFolder] = useState<R2Folder>("club");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadedUrl, setUploadedUrl] = useState("");
  const [response, setResponse] = useState<ClubIntroResponse | null>(null);
  const [deleteResponse, setDeleteResponse] = useState<unknown>(null);
  const [uploadMessage, setUploadMessage] = useState("");
  const [submitMessage, setSubmitMessage] = useState("");
  const [deleteMessage, setDeleteMessage] = useState("");
  const [deleteId, setDeleteId] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const activeBannerUrl = uploadedUrl || form.bannerUrl;

  const handleTextChange =
    (key: keyof ClubIntroPayload) =>
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

  const handleFolderChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setFolder(event.target.value as R2Folder);
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ?? null;
    setSelectedFile(file);
    setUploadMessage("");
  };

  const handleDeleteIdChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDeleteId(event.target.value);
    setDeleteMessage("");
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setUploadMessage("업로드할 이미지를 먼저 선택해주세요.");
      return;
    }

    try {
      setIsUploading(true);
      setUploadMessage("");

      const imageUrl = await uploadImageToR2(selectedFile, folder);
      setUploadedUrl(imageUrl);
      setForm((prev) => ({ ...prev, bannerUrl: imageUrl }));
      setUploadMessage("이미지 업로드가 완료되었습니다.");
    } catch (error) {
      console.error("image upload failed", error);
      setUploadMessage("이미지 업로드에 실패했습니다.");
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      setIsSubmitting(true);
      setSubmitMessage("");

      const payload = {
        ...form,
        bannerUrl: activeBannerUrl,
      };

      const result = await createClubIntro(payload);
      setResponse(result);
      setSubmitMessage("동아리 소개 등록 요청이 완료되었습니다.");
    } catch (error) {
      console.error("club intro create failed", error);
      setSubmitMessage("동아리 소개 등록 요청에 실패했습니다.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteId.trim()) {
      setDeleteMessage("삭제할 소개 ID를 입력해주세요.");
      return;
    }

    try {
      setIsDeleting(true);
      setDeleteMessage("");

      const result = await deleteClubIntro(deleteId.trim());
      setDeleteResponse(result);
      setDeleteMessage("동아리 소개 삭제 요청이 완료되었습니다.");
    } catch (error) {
      console.error("club intro delete failed", error);
      setDeleteMessage("동아리 소개 삭제 요청에 실패했습니다.");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <S.Page>
      <S.Shell>
        <S.Header>
          <S.Eyebrow>Club Intro Admin</S.Eyebrow>
          <S.Title>동아리 소개 관리</S.Title>
          <S.Description>
            배너 이미지를 업로드하고, 소개 등록과 삭제를 한 화면에서 처리할 수
            있는 관리 페이지입니다. 테스트 도구이면서도 실제 관리자 화면처럼
            확장하기 쉽게 구성했습니다.
          </S.Description>
        </S.Header>

        <S.Grid>
          <S.Card>
            <S.CardTitle>배너 업로드</S.CardTitle>
            <S.CardText>
              R2에 이미지를 업로드한 뒤 반환된 URL을 소개 등록 폼의
              <code> bannerUrl </code>값으로 자동 반영합니다.
            </S.CardText>

            <S.Field>
              <S.FieldLabel>업로드 폴더</S.FieldLabel>
              <S.Select value={folder} onChange={handleFolderChange}>
                <option value='club'>club</option>
                <option value='project'>project</option>
                <option value='executive'>executive</option>
              </S.Select>
            </S.Field>

            <S.Field>
              <S.FieldLabel>이미지 파일</S.FieldLabel>
              <S.Input
                type='file'
                accept='image/*'
                onChange={handleFileChange}
              />
            </S.Field>

            <S.ButtonRow>
              <S.PrimaryButton type='button' onClick={handleUpload}>
                {isUploading ? "업로드 중..." : "이미지 업로드"}
              </S.PrimaryButton>
            </S.ButtonRow>

            {uploadMessage ? (
              <S.StatusText $error={!uploadedUrl}>{uploadMessage}</S.StatusText>
            ) : null}

            <S.PreviewPanel>
              {activeBannerUrl ? (
                <S.PreviewImage src={activeBannerUrl} alt='banner preview' />
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
                  {activeBannerUrl || "아직 URL이 없습니다."}
                </S.MetaValue>
              </S.MetaList>
            </S.PreviewPanel>
          </S.Card>

          <S.Card>
            <S.CardTitle>소개 등록</S.CardTitle>
            <S.CardText>
              업로드한 배너 URL을 포함해 <code>/api/club-intro</code>로 소개
              정보를 등록합니다.
            </S.CardText>

            <S.Form onSubmit={handleSubmit}>
              <S.Field>
                <S.FieldLabel>동아리 이름</S.FieldLabel>
                <S.Input
                  value={form.title}
                  onChange={handleTextChange("title")}
                  placeholder='동아리 이름'
                />
              </S.Field>

              <S.Field>
                <S.FieldLabel>한 줄 소개</S.FieldLabel>
                <S.TextArea
                  value={form.subTitle}
                  onChange={handleTextChange("subTitle")}
                  placeholder='동아리 한 줄 소개'
                />
              </S.Field>

              <S.Field>
                <S.FieldLabel>배너 URL</S.FieldLabel>
                <S.Input
                  value={activeBannerUrl}
                  onChange={handleTextChange("bannerUrl")}
                  placeholder='업로드 후 자동 반영되거나 직접 입력할 수 있습니다.'
                />
              </S.Field>

              <S.InlineFields>
                <S.Field>
                  <S.FieldLabel>isActive</S.FieldLabel>
                  <S.Input
                    type='number'
                    value={form.isActive}
                    onChange={handleTextChange("isActive")}
                  />
                </S.Field>

                <S.Field>
                  <S.FieldLabel>updatedBy</S.FieldLabel>
                  <S.Input
                    type='number'
                    value={form.updatedBy}
                    onChange={handleTextChange("updatedBy")}
                  />
                </S.Field>
              </S.InlineFields>

              <S.ButtonRow>
                <S.PrimaryButton type='submit'>
                  {isSubmitting ? "등록 중..." : "소개 등록"}
                </S.PrimaryButton>
                <S.SecondaryButton
                  type='button'
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
            </S.Form>

            {submitMessage ? (
              <S.StatusText $error={!response}>{submitMessage}</S.StatusText>
            ) : null}

            <S.PreviewPanel>
              <div>
                <S.CardTitle as='h3'>요청 미리보기</S.CardTitle>
              </div>
              <S.CodeBlock>
                {JSON.stringify(
                  {
                    ...form,
                    bannerUrl: activeBannerUrl,
                  },
                  null,
                  2
                )}
              </S.CodeBlock>

              <div>
                <S.CardTitle as='h3'>응답</S.CardTitle>
              </div>
              <S.CodeBlock>
                {response
                  ? JSON.stringify(response, null, 2)
                  : "아직 응답이 없습니다."}
              </S.CodeBlock>
            </S.PreviewPanel>
          </S.Card>

          <S.Card>
            <S.CardTitle>동아리 소개 삭제</S.CardTitle>
            <S.CardText>
              삭제할 소개의 ID를 입력한 뒤{" "}
              <code>DELETE /api/club-intro/{`{id}`}</code>
              요청을 보냅니다.
            </S.CardText>

            <S.Field>
              <S.FieldLabel>소개 ID</S.FieldLabel>
              <S.Input
                value={deleteId}
                onChange={handleDeleteIdChange}
                placeholder='삭제할 소개 ID'
              />
            </S.Field>

            <S.ButtonRow>
              <S.DangerButton type='button' onClick={handleDelete}>
                {isDeleting ? "삭제 중..." : "소개 삭제"}
              </S.DangerButton>
            </S.ButtonRow>

            {deleteMessage ? (
              <S.StatusText $error={!deleteResponse}>
                {deleteMessage}
              </S.StatusText>
            ) : null}

            <S.PreviewPanel>
              <div>
                <S.CardTitle as='h3'>삭제 요청</S.CardTitle>
              </div>
              <S.CodeBlock>
                {deleteId.trim()
                  ? `DELETE /api/club-intro/${deleteId.trim()}`
                  : "삭제할 ID를 입력하면 요청 경로가 여기에 표시됩니다."}
              </S.CodeBlock>

              <div>
                <S.CardTitle as='h3'>응답</S.CardTitle>
              </div>
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
