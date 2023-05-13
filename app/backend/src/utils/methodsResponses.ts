const methodResponse = (status: number, message: unknown) => (
  {
    status,
    message,
  }
);

const methodResponseError = (status: number, message: unknown) => {
  methodResponse(status, { message });
};

export default { methodResponse, methodResponseError };
