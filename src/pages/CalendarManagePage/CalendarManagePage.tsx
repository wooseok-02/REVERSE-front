import { useEffect, useState, type ChangeEvent } from "react";
import * as S from "./CalendarManagePage.styles";
import {
  createCalendarEvent,
  deleteCalendarEvent,
  getCalendarEventDetail,
  getEventList,
  updateCalendarEvent,
  type CalendarEventDetail,
  type CalendarEventPayload,
  type EventListItem,
} from "../../services/calendarAPI";

type CalendarForm = {
  eventId: string;
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  location: string;
};

const initialForm: CalendarForm = {
  eventId: "",
  title: "",
  description: "",
  startTime: "",
  endTime: "",
  location: "",
};

export default function CalendarManagePage() {
  const [form, setForm] = useState<CalendarForm>(initialForm);
  const [detailResponse, setDetailResponse] =
    useState<CalendarEventDetail | null>(null);
  const [listResponse, setListResponse] = useState<EventListItem[]>([]);
  const [submitResponse, setSubmitResponse] = useState<unknown>(null);
  const [deleteResponse, setDeleteResponse] = useState<unknown>(null);

  const [submitMessage, setSubmitMessage] = useState("");
  const [deleteMessage, setDeleteMessage] = useState("");
  const [detailMessage, setDetailMessage] = useState("");
  const [listMessage, setListMessage] = useState("");

  const [detailId, setDetailId] = useState("");
  const [deleteId, setDeleteId] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isFetchingDetail, setIsFetchingDetail] = useState(false);
  const [isFetchingList, setIsFetchingList] = useState(false);

  useEffect(() => {
    handleFetchList();
  }, []);

  const handleTextChange =
    (key: keyof CalendarForm) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { value } = event.target;

      setForm((prev) => ({
        ...prev,
        [key]: value,
      }));
    };

  const resetForm = () => {
    setForm(initialForm);
    setSubmitMessage("");
    setSubmitResponse(null);
  };

  const buildPayload = (): CalendarEventPayload => ({
    title: form.title.trim(),
    description: form.description.trim() || undefined,
    startTime: form.startTime.trim() || undefined,
    endTime: form.endTime.trim() || undefined,
    location: form.location.trim() || undefined,
  });

  const handleSubmit = async () => {
    if (!form.title.trim()) {
      setSubmitMessage("제목을 입력해주세요.");
      return;
    }

    try {
      setIsSubmitting(true);
      setSubmitMessage("");

      const payload = buildPayload();

      if (form.eventId.trim()) {
        const result = await updateCalendarEvent(form.eventId.trim(), payload);
        setSubmitResponse(result);
        setSubmitMessage("일정 수정이 완료되었습니다.");
      } else {
        const result = await createCalendarEvent(payload);
        setSubmitResponse(result);
        setSubmitMessage("일정 생성이 완료되었습니다.");
      }

      await handleFetchList();

      if (!form.eventId.trim()) {
        setForm(initialForm);
      }
    } catch (error) {
      console.error("calendar submit failed", error);
      setSubmitMessage(
        form.eventId.trim()
          ? "일정 수정에 실패했습니다."
          : "일정 생성에 실패했습니다."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteId.trim()) {
      setDeleteMessage("삭제할 일정 ID를 입력해주세요.");
      return;
    }

    try {
      setIsDeleting(true);
      setDeleteMessage("");

      const result = await deleteCalendarEvent(deleteId.trim());
      setDeleteResponse(result);
      setDeleteMessage("일정 삭제가 완료되었습니다.");

      if (detailResponse?.eventId === Number(deleteId.trim())) {
        setDetailResponse(null);
      }

      if (form.eventId === deleteId.trim()) {
        setForm(initialForm);
      }

      await handleFetchList();
    } catch (error) {
      console.error("calendar delete failed", error);
      setDeleteMessage("일정 삭제에 실패했습니다.");
    } finally {
      setIsDeleting(false);
    }
  };

  const handleFetchDetail = async () => {
    if (!detailId.trim()) {
      setDetailMessage("조회할 일정 ID를 입력해주세요.");
      return;
    }

    try {
      setIsFetchingDetail(true);
      setDetailMessage("");

      const result = await getCalendarEventDetail(detailId.trim());
      setDetailResponse(result);
      setDetailMessage("일정 상세 조회가 완료되었습니다.");
    } catch (error) {
      console.error("calendar detail failed", error);
      setDetailResponse(null);
      setDetailMessage("일정 상세 조회에 실패했습니다.");
    } finally {
      setIsFetchingDetail(false);
    }
  };

  const handleFetchList = async () => {
    try {
      setIsFetchingList(true);
      setListMessage("");

      const result = await getEventList();
      setListResponse(result);
      setListMessage("행사 일정 목록을 불러왔습니다.");
    } catch (error) {
      console.error("calendar list failed", error);
      setListResponse([]);
      setListMessage("행사 일정 목록 조회에 실패했습니다.");
    } finally {
      setIsFetchingList(false);
    }
  };

  const handleApplyDetailToForm = () => {
    if (!detailResponse) return;

    setForm({
      eventId: String(detailResponse.eventId ?? ""),
      title: detailResponse.title ?? "",
      description: detailResponse.description ?? "",
      startTime: detailResponse.startTime ?? "",
      endTime: detailResponse.endTime ?? "",
      location: detailResponse.location ?? "",
    });

    setSubmitMessage("상세 조회한 일정 내용을 폼에 반영했습니다.");
  };

  return (
    <S.Page>
      <S.Shell>
        <S.Header>
          <S.Eyebrow>Calendar Admin</S.Eyebrow>
          <S.Title>캘린더 관리</S.Title>
          <S.Description>
            행사 일정 목록 조회, 상세 조회, 생성/수정, 삭제를 한 화면에서 처리할 수
            있는 관리 페이지입니다.
          </S.Description>
        </S.Header>

        <S.Grid>
          <S.Card>
            <S.CardTitle>행사 일정 목록 조회</S.CardTitle>
            <S.CardText>
              <code>GET /api/events</code> 요청으로 외부 캘린더 행사 일정을
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

          <S.Card>
            <S.CardTitle>일정 상세 조회</S.CardTitle>
            <S.CardText>
              <code>GET /api/calendar/{`{eventId}`}</code> 요청으로 일정 상세
              내용을 조회합니다.
            </S.CardText>

            <S.Input
              value={detailId}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setDetailId(e.target.value);
                setDetailMessage("");
              }}
              placeholder="조회할 일정 ID"
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

          <S.Card>
            <S.CardTitle>일정 생성 / 수정</S.CardTitle>
            <S.CardText>
              <code>POST /api/calendar</code> 와{" "}
              <code>PATCH /api/calendar/{`{eventId}`}</code> 요청으로 일정을
              생성하거나 수정합니다.
            </S.CardText>

            <S.Input
              value={form.eventId}
              onChange={handleTextChange("eventId")}
              type="number"
              placeholder="수정할 때만 ID 입력"
            />

            <S.Input
              value={form.title}
              onChange={handleTextChange("title")}
              placeholder="제목"
            />

            <S.TextArea
              value={form.description}
              onChange={handleTextChange("description")}
              placeholder="설명"
            />

            <S.Input
              value={form.startTime}
              onChange={handleTextChange("startTime")}
              placeholder="시작 시간 (예: 2026-04-16T1300)"
            />

            <S.Input
              value={form.endTime}
              onChange={handleTextChange("endTime")}
              placeholder="종료 시간 (예: 2026-04-16T1500)"
            />

            <S.Input
              value={form.location}
              onChange={handleTextChange("location")}
              placeholder="장소"
            />

            <S.ButtonRow>
              <S.PrimaryButton type="button" onClick={handleSubmit}>
                {isSubmitting ? "처리 중..." : form.eventId ? "수정" : "생성"}
              </S.PrimaryButton>

              <S.SecondaryButton type="button" onClick={resetForm}>
                폼 초기화
              </S.SecondaryButton>
            </S.ButtonRow>

            {submitMessage ? <S.StatusText>{submitMessage}</S.StatusText> : null}

            <S.CodeBlock>{JSON.stringify(form, null, 2)}</S.CodeBlock>

            <S.CodeBlock>
              {submitResponse
                ? JSON.stringify(submitResponse, null, 2)
                : "생성/수정 응답이 없습니다."}
            </S.CodeBlock>
          </S.Card>

          <S.Card>
            <S.CardTitle>일정 삭제</S.CardTitle>
            <S.CardText>
              <code>DELETE /api/calendar/{`{eventId}`}</code> 요청으로 일정을
              삭제합니다.
            </S.CardText>

            <S.Input
              value={deleteId}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setDeleteId(e.target.value);
                setDeleteMessage("");
              }}
              placeholder="삭제할 일정 ID"
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