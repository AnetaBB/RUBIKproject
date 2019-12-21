export default () => ({
  headers: {
    'Content-Type': 'application/json',
    'x-auth-token': localStorage.getItem('token'),
  },
});
