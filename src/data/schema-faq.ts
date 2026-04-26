export interface FaqQuestionInput {
  question: string;
  answer: string;
}

export interface FaqInput {
  questions: FaqQuestionInput[];
}

interface AnswerSchema {
  '@type': 'Answer';
  text: string;
}

interface QuestionSchema {
  '@type': 'Question';
  name: string;
  acceptedAnswer: AnswerSchema;
}

interface FaqPageSchema {
  '@context': 'https://schema.org';
  '@type': 'FAQPage';
  mainEntity: QuestionSchema[];
}

export function createFaqSchema(input: FaqInput): FaqPageSchema;
export function createFaqSchema(questions: FaqQuestionInput[]): FaqPageSchema;
export function createFaqSchema(
  input: FaqInput | FaqQuestionInput[],
): FaqPageSchema {
  const questions = Array.isArray(input) ? input : input.questions;

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}
