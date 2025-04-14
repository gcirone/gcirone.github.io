export const isPageRouteSegment = (route: string) => {
  const matcher = /^\/(?!.*\.\w+).*/;

  return !!route.match(matcher);
};
