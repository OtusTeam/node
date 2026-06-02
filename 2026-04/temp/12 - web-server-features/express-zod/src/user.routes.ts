import { Router } from "express";
import * as UserController from "../controllers/user.controller";
import { validate } from "../middleware/validate";
import {
  createUserSchema,
  updateUserSchema,
  idParamSchema
} from "../validation/user.schema";

const router = Router();

router.post("/", validate(createUserSchema), UserController.createUser);
router.get("/", UserController.listUsers);
router.get("/:id", validate(idParamSchema, "params"), UserController.getUser);
router.patch(
  "/:id",
  validate(updateUserSchema),
  UserController.updateUser
);
router.delete("/:id", validate(idParamSchema, "params"), UserController.deleteUser);

export default router;