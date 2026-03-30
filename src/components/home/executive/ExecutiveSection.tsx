import * as S from "./ExecutiveSection.styles";
import { executiveData } from "./executiveData";

export default function ExecutiveSection() {
  return (
    <S.Section>
      <S.Inner>
        <S.Header>
          <S.Title>임원진</S.Title>
          <S.Subtitle>REVERSE 임원진을 소개합니다!</S.Subtitle>
        </S.Header>

        <S.TeamGrid>
          {executiveData.map((team) => (
            <S.TeamColumn key={team.id}>
              <S.TeamTitle>{team.teamName}</S.TeamTitle>

              <S.MemberList>
                {team.members.map((member) => (
                  <S.MemberCard key={member.id}>
                    <S.Avatar />
                    <S.MemberInfo>
                      <S.Name>{member.name}</S.Name>
                      <S.Role>{member.role}</S.Role>
                      <S.Email>{member.email}</S.Email>
                    </S.MemberInfo>
                  </S.MemberCard>
                ))}
              </S.MemberList>
            </S.TeamColumn>
          ))}
        </S.TeamGrid>
      </S.Inner>
    </S.Section>
  );
}
