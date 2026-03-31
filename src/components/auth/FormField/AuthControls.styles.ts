import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 100%;
  height: 44px;
  padding: 0 14px;
  border-radius: 10px;
  border: 1px solid rgba(237, 241, 255, 0.34);
  background: rgba(255, 255, 255, 0.04);
  color: #ffffff;
  font-size: 12px;
  outline: none;

  &::placeholder {
    color: rgba(235, 239, 255, 0.38);
  }

  &:focus {
    border-color: rgba(184, 156, 255, 0.92);
  }
`;

export const Select = styled.select`
  width: 100%;
  height: 44px;
  padding: 0 14px;
  border-radius: 10px;
  border: 1px solid rgba(237, 241, 255, 0.34);
  background: rgba(255, 255, 255, 0.04);
  color: #ffffff;
  font-size: 12px;
  outline: none;

  option {
    color: #111111;
  }

  &:focus {
    border-color: rgba(184, 156, 255, 0.92);
  }
`;

export const PrimaryButton = styled.button`
  width: 100%;
  height: 42px;
  margin-top: 38px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 700;
  color: #ffffff;
  background: #6f3bf4;

  &:hover {
    opacity: 0.96;
  }
`;

export const GhostButton = styled.button`
  height: 44px;
  padding: 0 16px;
  border-radius: 10px;
  border: 1px solid rgba(237, 241, 255, 0.34);
  background: rgba(255, 255, 255, 0.3);
  color: #ffffff;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background: rgba(255, 255, 255, 0.12);
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 124px;
  gap: 12px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const EmailRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 24px 1fr 104px;
  gap: 12px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const At = styled.span`
  text-align: center;
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const TextButton = styled.button`
  border: none;
  background: none;
  padding: 0 0 0 6px;
  cursor: pointer;
  font-size: 11px;
  font-weight: 400;
  color: #ffffff;
`;
