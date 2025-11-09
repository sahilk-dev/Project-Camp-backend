import { Router } from "express";
import { changeCurrentPassword, forgotPasswordRequest, getCurrentUser, login, logoutUser, refreshAccessToken, registerUser, resendEmailVerification, resetForgotPassword, verifyEmail } from "../controllers/auth.controllers.js";
import { validate } from "../middlewares/validator.middleware.js";
import { userChangeCurrentPasswordValidator, userForgotPasswordValidator, userLoginValidator, userRegisterValidator, userResetForgotPasswordValidator } from "../validators/index.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";

const router = Router();

// unsecured routes
router.route("/register").post(userRegisterValidator(), validate, registerUser); //done
router.route("/login").post(userLoginValidator(), validate, login); //done
router.route("/verify-email/:verificationToken").get(verifyEmail);
router.route("/refresh-token").post(refreshAccessToken); //done
router.route("/forgot-password").post(userForgotPasswordValidator(), validate, forgotPasswordRequest); //done
router.route("/reset-password/:resetToken").post(userResetForgotPasswordValidator(), validate, resetForgotPassword); //done

// secure routes
router.route("/logout").post(verifyJWT, logoutUser); //done
router.route("/current-user").post(verifyJWT, getCurrentUser); //done
router.route("/change-password").post(verifyJWT, userChangeCurrentPasswordValidator(), validate, changeCurrentPassword); //done
router.route("/resend-email-verification").post(verifyJWT, resendEmailVerification) //done

export default router;