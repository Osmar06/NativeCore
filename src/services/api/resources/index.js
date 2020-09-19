export const Uris = {
  RESOURCE: 'unknown',
};

export default createApiResource = (api) => {
  const get = () => api.get(Uris.RESOURCE);

  return {
    get,
  };
};
