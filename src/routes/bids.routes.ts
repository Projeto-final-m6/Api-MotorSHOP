import { Express } from "express";
import createBidController from "../controllers/bids/createBid.controller";
import deleteBidController from "../controllers/bids/deleteBid.controller";
import listAnnouncementBidsController from "../controllers/bids/listAnnouncementBids.controller";
import listUserBidsController from "../controllers/bids/listUserBids.controller";
import verifyAuthMiddleware from "../middlewares/verifyAuth.middleware";

const bidsRoutes = (app: Express) => {
  app.get("/bids/user", verifyAuthMiddleware, listUserBidsController);
  app.post("/bids/:announcementId", verifyAuthMiddleware, createBidController);
  app.get("/bids/:announcementId", listAnnouncementBidsController);
  app.delete("/bids/:bidId", verifyAuthMiddleware, deleteBidController);
};

export default bidsRoutes;
