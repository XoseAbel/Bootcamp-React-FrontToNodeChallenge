export const selectUsersLoading = (mainState: any) => mainState.users.isLoading;
export const selectUsers = (mainState: any) => mainState.users.data;
export const selectUsersError = (mainState: any) => mainState.users.error;
