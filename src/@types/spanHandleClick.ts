import { scrollToTop } from "@/exports";

export const spanHandleClick = (): void => {
  if (window.scrollY !== 0) {
    scrollToTop();
  }
};
