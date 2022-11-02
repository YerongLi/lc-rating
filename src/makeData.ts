import data from "./contest.json";

export type Question = {
  title: string;
  slug: string;
};
export type Contest = {
  ID: number;
  Contest: string;
  TitleSlug: string;
  A: any[];
  B: any[];
  C: any[];
  D: any[];
  A_Rating: number;
  B_Rating: number;
  C_Rating: number;
  D_Rating: number;
};

export function makeContests() {
  return data.map((d: any): Contest => {
    let questions: any[] = d.questions && d.questions.length === 4? d.questions : new Array(4).fill({title: ""})
    return {
      ID: d.contest.id,
      Contest: d.contest.title || "",
      TitleSlug: d.contest.title_slug,
      A: [ questions[0].title, questions[0].title_slug, questions[0].question_id, questions[0].rating ],
      B: [ questions[1].title, questions[1].title_slug, questions[1].question_id, questions[1].rating ],
      C: [ questions[2].title, questions[2].title_slug, questions[2].question_id, questions[2].rating ],
      D: [ questions[3].title, questions[3].title_slug, questions[3].question_id, questions[3].rating ],
      A_Rating: questions[0].rating,
      B_Rating: questions[1].rating,
      C_Rating: questions[2].rating,
      D_Rating: questions[3].rating,
    };
  });
}
