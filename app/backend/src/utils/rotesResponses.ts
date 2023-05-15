const statusResponse = (status: number, message: unknown) => (
  {
    status,
    message,
  }
);

const statusResponseError = (status: number, message: unknown) => {
  statusResponse(status, { message });
};

export { statusResponse, statusResponseError };
