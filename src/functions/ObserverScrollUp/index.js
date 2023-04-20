export const ObserverScrollUp = (element, scrollElement) => {
  const callback = (entries) => {
    !entries[0].isIntersecting
      ? scrollElement.classList.add("scrollUp-active")
      : scrollElement.classList.remove("scrollUp-active");
  };
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };
  const observer = new IntersectionObserver(callback, options);
  observer.observe(element);
};
