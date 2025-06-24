import { Elysia, t } from "elysia";
import TicketController from "./controllers/TicketController";

interface TicketBody {
  title: string;
  price: number;
}

interface TicketParams {
  id: string;
}

export class Router {
  static tickets = new Elysia()
    .post(
      "/",
      ({ body }: { body: TicketBody }) => TicketController.create({ body }),
      {
        body: t.Object({
          title: t.String(),
          price: t.Number(),
        }),
      }
    )
    .get(
      "/:id",
      ({ params }: { params: TicketParams }) => TicketController.getById({ params }),
      {
        params: t.Object({
          id: t.String(),
        }),
      }
    )
    .get("/", () => TicketController.getAll())
    .delete(
      "/:id",
      ({ params }: { params: TicketParams }) => TicketController.delete({ params }),
      {
        params: t.Object({
          id: t.String(),
        }),
      }
    );
}

export default Router;