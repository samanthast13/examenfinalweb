// recubir los dtos 
import { Request, Response } from "express";
import { findVisitor } from "../controller/visitorController";

export function loginVisitor(req: Request, res: Response) {
  const { username, password } = req.body;

  if (!username || !password) {
    // revisa si falta algo
    return res.status(400).json({ message: "Faltan datos" });
  }

  const visitor = findVisitor(username, password);

  if (visitor) {
    // ve si lo encuentra
    return res.json({
      fullName: visitor.fullName,
      ticketNumber: visitor.ticketNumber,
    });
  } else {
    // si no lo encontro
    return res.status(401).json({ message: "Usuario o contraseña incorrectos" });
  }
}