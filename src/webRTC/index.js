import { emitPreeOffer } from "../socketIo";

export const sendPreeOffer = (callType, calleeId) => {
  emitPreeOffer({ callType, _id: calleeId });
};
