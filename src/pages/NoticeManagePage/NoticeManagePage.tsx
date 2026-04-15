import { useEffect, useState, type ChangeEvent } from "react";
import * as S from "./NoticeManagePage.styles";
import {
  createNotice,
  deleteNotice,
  getNoticeDetail,
  getNoticeList,
  type Notice,
  type NoticeListItem,
  type NoticePayload,
} from "../../services/noticeAPI";

type NoticeForm = {
  title: string;
  content: string;
  isPinned: boolean;
  noticeId: string;
};

const initialForm: NoticeForm = {
  title: "",
  content: "",
  isPinned: false,
  noticeId: "",
};

export default function NoticeManagePage() {
  const [form, setForm] = useState<NoticeForm>(initialForm);
  const [deleteResponse, setDeleteResponse] = useState<unknown>(null);
  const [detailResponse, setDetailResponse] = useState<Notice | null>(null);
  const [listResponse, setListResponse] = useState<NoticeListItem[]>([]);

  const [submitMessage, setSubmitMessage] = useState("");
  const [deleteMessage, setDeleteMessage] = useState("");
  const [detailMessage, setDetailMessage] = useState("");
  const [listMessage, setListMessage] = useState("");

  const [deleteId, setDeleteId] = useState("");
  const [detailId, setDetailId] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isFetchingDetail, setIsFetchingDetail] = useState(false);
  const [isFetchingList, setIsFetchingList] = useState(false);

  useEffect(() => {
    handleFetchList();
  }, []);

  const handleTextChange =
    (key: keyof NoticeForm) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { value } = event.target;

      setForm((prev) => ({
        ...prev,
        [key]: value,
      }));
    };

  const handlePinnedChange = (event: ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      isPinned: event.target.checked,
    }));
  };

  const resetForm = () => {
    setForm(initialForm);
    setSubmitMessage("");
  };

  const handleSubmit = async () => {
    if (!form.title.trim() || !form.content.trim()) {
      setSubmitMessage("제목과 내용을 모두 입력해주세요.");
      return;
    }

    try {
      setIsSubmitting(true);
      setSubmitMessage("");

      const payload: NoticePayload = {
        title: form.title.trim(),
        content: form.content.trim(),
        isPinned: form.isPinned,
        ...(form.noticeId.trim()
          ? { noticeId: Number(form.noticeId.trim()) }
          : {}),
      };

      await createNotice(payload);

      setSubmitMessage(
        form.noticeId.trim()
          ? "공지사항 수정이 완료되었습니다."
          : "공지사항 등록이 완료되었습니다."
      );

      await handleFetchList();

      if (!form.noticeId.trim()) {
        setForm(initialForm);
      }
    } catch (error) {
      console.error("notice submit failed", error);
      setSubmitMessage(
        form.noticeId.trim()
          ? "공지사항 수정에 실패했습니다."
          : "공지사항 등록에 실패했습니다."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteId.trim()) {
      setDeleteMessage("삭제할 공지사항 ID를 입력해주세요.");
      return;
    }

    try {
      setIsDeleting(true);
      setDeleteMessage("");

      const result = await deleteNotice(deleteId.trim());
      setDeleteResponse(result);
      setDeleteMessage("공지사항 삭제가 완료되었습니다.");

      if (detailResponse?.id === Number(deleteId.trim())) {
        setDetailResponse(null);
      }

      if (form.noticeId === deleteId.trim()) {
        setForm(initialForm);
      }

      await handleFetchList();
    } catch (error) {
      console.error("notice delete failed", error);
      setDeleteMessage("공지사항 삭제에 실패했습니다.");
    } finally {
      setIsDeleting(false);
    }
  };

  const handleFetchDetail = async () => {
    if (!detailId.trim()) {
      setDetailMessage("조회할 공지사항 ID를 입력해주세요.");
      return;
    }

    try {
      setIsFetchingDetail(true);
      setDetailMessage("");

      const result = await getNoticeDetail(detailId.trim());
      setDetailResponse(result);
      setDetailMessage("공지사항 상세 조회가 완료되었습니다.");
    } catch (error) {
      console.error("notice detail failed", error);
      setDetailResponse(null);
      setDetailMessage("공지사항 상세 조회에 실패했습니다.");
    } finally {
      setIsFetchingDetail(false);
    }
  };

  const handleFetchList = async () => {
    try {
      setIsFetchingList(true);
      setListMessage("");

      const result = await getNoticeList();
      setListResponse(result);
      setListMessage("공지사항 목록을 불러왔습니다.");
    } catch (error) {
      console.error("notice list failed", error);
      setListResponse([]);
      setListMessage("공지사항 목록 조회에 실패했습니다.");
    } finally {
      setIsFetchingList(false);
    }
  };

  const handleApplyDetailToForm = () => {
    if (!detailResponse) return;

    setForm({
      title: detailResponse.title ?? "",
      content: detailResponse.content ?? "",
      isPinned: false,
      noticeId: String(detailResponse.id ?? ""),
    });

    setSubmitMessage("상세 조회한 공지사항 내용을 폼에 반영했습니다.");
  };

  return (
    <S.Page>
      <S.Shell>
        <S.Header>
          <S.Eyebrow>Notice Admin</S.Eyebrow>
          <S.Title>공지사항 관리</S.Title>
          <S.Description>
            공지사항 목록 조회, 상세 조회, 등록/수정, 삭제를 한 화면에서 처리할 수
            있는 관리 페이지입니다.
          </S.Description>
        </S.Header>

        <S.Grid>
          {/* 목록 */}
          <S.Card>
            <S.CardTitle>목록 조회</S.CardTitle>
            <S.CardText>
              <code>GET /api/notices</code> 요청으로 전체 공지사항 목록을
              조회합니다.
            </S.CardText>

            <S.PrimaryButton type="button" onClick={handleFetchList}>
              {isFetchingList ? "로딩..." : "새로고침"}
            </S.PrimaryButton>

            {listMessage ? <S.StatusText>{listMessage}</S.StatusText> : null}

            <S.CodeBlock>
              {listResponse.length
                ? JSON.stringify(listResponse, null, 2)
                : "목록 데이터가 없습니다."}
            </S.CodeBlock>
          </S.Card>

          {/* 상세 */}
          <S.Card>
            <S.CardTitle>상세 조회</S.CardTitle>
            <S.CardText>
              <code>GET /api/notices/{`{noticeId}`}</code> 요청으로 공지사항
              상세 내용을 조회합니다.
            </S.CardText>

            <S.Input
              value={detailId}
              onChange={(e) => {
                setDetailId(e.target.value);
                setDetailMessage("");
              }}
              placeholder="조회할 공지사항 ID"
            />

            <S.ButtonRow>
              <S.PrimaryButton type="button" onClick={handleFetchDetail}>
                {isFetchingDetail ? "조회 중..." : "조회"}
              </S.PrimaryButton>

              <S.SecondaryButton
                type="button"
                onClick={handleApplyDetailToForm}
                disabled={!detailResponse}
              >
                폼에 반영
              </S.SecondaryButton>
            </S.ButtonRow>

            {detailMessage ? <S.StatusText>{detailMessage}</S.StatusText> : null}

            <S.CodeBlock>
              {detailResponse
                ? JSON.stringify(detailResponse, null, 2)
                : "상세 데이터가 없습니다."}
            </S.CodeBlock>
          </S.Card>

          {/* 등록 / 수정 */}
          <S.Card>
            <S.CardTitle>등록 / 수정</S.CardTitle>
            <S.CardText>
              <code>POST /api/posts/notices</code> 요청으로 공지사항을
              등록하거나 수정합니다.
            </S.CardText>

            <S.Input
              value={form.noticeId}
              onChange={handleTextChange("noticeId")}
              type="number"
              placeholder="수정할 때만 ID 입력"
            />

            <S.Input
              value={form.title}
              onChange={handleTextChange("title")}
              placeholder="제목"
            />

            <S.TextArea
              value={form.content}
              onChange={handleTextChange("content")}
              placeholder="내용"
            />

            <S.CheckboxRow>
              <S.Checkbox
                type="checkbox"
                checked={form.isPinned}
                onChange={handlePinnedChange}
              />
              <S.CheckboxLabel>상단 고정</S.CheckboxLabel>
            </S.CheckboxRow>

            <S.ButtonRow>
              <S.PrimaryButton type="button" onClick={handleSubmit}>
                {isSubmitting ? "처리 중..." : form.noticeId ? "수정" : "등록"}
              </S.PrimaryButton>

              <S.SecondaryButton type="button" onClick={resetForm}>
                폼 초기화
              </S.SecondaryButton>
            </S.ButtonRow>

            {submitMessage ? <S.StatusText>{submitMessage}</S.StatusText> : null}

            <S.CodeBlock>{JSON.stringify(form, null, 2)}</S.CodeBlock>
          </S.Card>

          {/* 삭제 */}
          <S.Card>
            <S.CardTitle>삭제</S.CardTitle>
            <S.CardText>
              <code>DELETE /api/posts/notices/{`{noticeId}`}</code> 요청으로
              공지사항을 삭제합니다.
            </S.CardText>

            <S.Input
              value={deleteId}
              onChange={(e) => {
                setDeleteId(e.target.value);
                setDeleteMessage("");
              }}
              placeholder="삭제할 ID"
            />

            <S.DangerButton type="button" onClick={handleDelete}>
              {isDeleting ? "삭제 중..." : "삭제"}
            </S.DangerButton>

            {deleteMessage ? <S.StatusText>{deleteMessage}</S.StatusText> : null}

            <S.CodeBlock>
              {deleteResponse
                ? JSON.stringify(deleteResponse, null, 2)
                : "삭제 응답이 없습니다."}
            </S.CodeBlock>
          </S.Card>
        </S.Grid>
      </S.Shell>
    </S.Page>
  );
}