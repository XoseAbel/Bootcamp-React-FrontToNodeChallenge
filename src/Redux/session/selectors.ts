export const selectSessionLogged = (mainState: any) =>
  mainState.session.isLogged;
export const selectSession = (mainState: any) => mainState.session.user;
export const selectSessionError = (mainState: any) => mainState.session.error;
