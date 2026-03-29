import mainProjectImg from "../../../assets/images/project-main.jpg";
import toyProjectImg from "../../../assets/images/project-toy.jpg";
import studyImg from "../../../assets/images/project-study.jpg";

export interface ProjectItem {
  id: number;
  title: string;
  image: string;
  detailText: string;
}

export const projectData: ProjectItem[] = [
  {
    id: 1,
    title: "메인 프로젝트",
    image: mainProjectImg,
    detailText: "메인 프로젝트 상세 내용",
  },
  {
    id: 2,
    title: "토이프로젝트",
    image: toyProjectImg,
    detailText: "토이프로젝트 상세 내용",
  },
  {
    id: 3,
    title: "스터디",
    image: studyImg,
    detailText: "스터디 상세 내용",
  },
];
