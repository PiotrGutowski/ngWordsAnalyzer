export interface GetDistinctWordsResponseDto {
  links: HateoasLinkDto[];
  content: GetDistinctWordsResponseContentDto[];
}

export interface HateoasLinkDto {
  rel: string;
  href: string;
}

export interface GetDistinctWordsResponseContentDto {
  word: string;
  known: boolean;
  links: HateoasLinkDto[];
}

export interface WordDto {
  id: number;
  words: string;
}

