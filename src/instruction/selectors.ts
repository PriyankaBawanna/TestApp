export const getCurrentTestSession = (state: any) => {
  const { currentTestSession, sessions } = state.session;
  if (currentTestSession) {
    return sessions[currentTestSession];
  }
  return null;
};
