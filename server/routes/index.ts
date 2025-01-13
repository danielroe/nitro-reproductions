export default eventHandler(async (event) => {
  return await useStorage().getKeys()
});
