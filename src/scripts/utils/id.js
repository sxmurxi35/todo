export default function createID() {
  const generateID = Math.random().toString(16).substring(2);

  return "id_" + generateID;
}