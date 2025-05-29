export const myApplicationPromise = async (email) => {
  const res = await fetch(`http://localhost:3000/application?email=${email}`);
  return await res.json();
};
