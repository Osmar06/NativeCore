export const Uris = {
  RESOURCE: 'unknown',
};

export default createApiResource = (api) => {
  const getResources = () => api.get(Uris.RESOURCE);

  return {
    getResources,
  };
};
