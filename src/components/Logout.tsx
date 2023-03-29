export const Logout = () => {
  if (!localStorage.getItem('userLogged')) return;

  localStorage.removeItem('userLogged');
  localStorage.removeItem('userData');
  localStorage.removeItem('accessToken');
};
