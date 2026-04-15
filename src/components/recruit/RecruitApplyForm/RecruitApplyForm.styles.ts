import styled from "styled-components";

export const FormPanel = styled.form`
  width: 100%;
  padding-top: 6px;
  color: #f2f5fb;
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 22px 22px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const Field = styled.div`
  min-width: 0;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  color: rgba(255, 255, 255, 0.78);
  font-size: 12px;
  font-weight: 700;
  line-height: 1;
`;

export const Input = styled.input`
  width: 100%;
  height: 34px;
  padding: 0 10px;
  border: 1px solid rgba(230, 235, 245, 0.66);
  border-radius: 0;
  outline: none;
  background: rgba(48, 53, 66, 0.54);
  color: #ffffff;
  font-size: 14px;

  &:focus {
    border-color: #ffffff;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.14);
  }
`;

export const Fieldset = styled.fieldset`
  margin: 28px 0 0;
  padding: 0;
  border: none;
`;

export const Legend = styled.legend`
  margin-bottom: 14px;
  color: rgba(255, 255, 255, 0.78);
  font-size: 12px;
  font-weight: 700;
  line-height: 1;
`;

export const OptionRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 18px 44px;
`;

export const RadioLabel = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  min-width: 92px;
  color: rgba(255, 255, 255, 0.86);
  font-size: 12px;
  font-weight: 700;
  line-height: 1;
  cursor: pointer;

  input {
    width: 12px;
    height: 12px;
    accent-color: #ffffff;
  }
`;

export const EmailGroup = styled.div`
  margin-top: 28px;
`;

export const EmailRow = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto minmax(150px, 1fr);
  align-items: center;
  gap: 12px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 8px;
  }
`;

export const AtSign = styled.span`
  color: rgba(255, 255, 255, 0.82);
  font-size: 14px;
  font-weight: 700;

  @media (max-width: 640px) {
    display: none;
  }
`;

export const Select = styled.select`
  width: 100%;
  height: 34px;
  padding: 0 10px;
  border: 1px solid rgba(230, 235, 245, 0.66);
  border-radius: 0;
  outline: none;
  background: rgba(48, 53, 66, 0.72);
  color: #ffffff;
  font-size: 13px;

  option {
    color: #1e2430;
  }
`;

export const DomainControl = styled.div`
  position: relative;
  width: 100%;
  height: 34px;
  border: 1px solid rgba(230, 235, 245, 0.66);
  background: rgba(48, 53, 66, 0.72);

  &:focus-within {
    border-color: #ffffff;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.14);
  }
`;

export const DomainInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 0 38px 0 10px;
  border: none;
  outline: none;
  background: transparent;
  color: #ffffff;
  font-size: 13px;
`;

export const DomainSelectButton = styled.button`
  width: 100%;
  height: 100%;
  padding: 0 38px 0 10px;
  border: none;
  outline: none;
  background: transparent;
  color: #ffffff;
  font-size: 13px;
  text-align: left;
  cursor: pointer;
`;

export const DomainArrowButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 34px;
  height: 100%;
  padding: 0;
  border: none;
  border-left: 1px solid rgba(230, 235, 245, 0.22);
  background: transparent;
  cursor: pointer;
`;

export const DomainArrow = styled.span`
  display: block;
  width: 0;
  height: 0;
  margin: 0 auto;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 5px solid rgba(255, 255, 255, 0.86);
`;

export const DomainMenu = styled.div`
  position: absolute;
  top: calc(100% + 4px);
  left: -1px;
  right: -1px;
  z-index: 20;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(230, 235, 245, 0.5);
  background: rgba(45, 50, 64, 0.98);
  box-shadow: 0 10px 18px rgba(0, 0, 0, 0.18);
`;

export const DomainOption = styled.button`
  width: 100%;
  height: 30px;
  padding: 0 10px;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.86);
  font-size: 12px;
  text-align: left;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.12);
    color: #ffffff;
  }
`;

export const DateInput = styled(Input)`
  max-width: 220px;
  color-scheme: dark;

  @media (max-width: 640px) {
    max-width: none;
  }
`;

export const AgreeLabel = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 9px;
  margin-top: 24px;
  color: rgba(255, 255, 255, 0.78);
  font-size: 12px;
  font-weight: 600;
  line-height: 1.3;
  cursor: pointer;

  input {
    width: 12px;
    height: 12px;
    accent-color: #ffffff;
  }
`;

export const SubmitButton = styled.button`
  display: block;
  width: min(190px, 100%);
  height: 38px;
  margin: 24px auto 0;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 8px;
  background: linear-gradient(180deg, #50617f 0%, #3e4d6d 100%);
  color: #ffffff;
  font-size: 13px;
  font-weight: 700;
  line-height: 1;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    filter 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    filter: brightness(1.08);
  }
`;
