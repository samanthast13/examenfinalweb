// ver si existe el usuario
import { visitors } from "../data/visitors";

export function findVisitor(username: string, password: string) {
  return visitors.find(
    (v) => v.username === username && v.password === password
  );
}