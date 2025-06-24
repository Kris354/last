import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class TicketController {
  static async create({ body }: { body: { title: string; price: number } }) {
    try {
      const ticket = await prisma.ticket.create({
        data: { title: body.title, price: body.price },
      });
      return ticket;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  static async getById({ params }: { params: { id: string } }) {
    try {
      const ticket = await prisma.ticket.findUnique({
        where: { id: Number(params.id) },
      });
      if (!ticket) throw new Error("Ticket not found");
      return ticket;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  static async getAll() {
    try {
      const tickets = await prisma.ticket.findMany();
      return tickets;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  static async delete({ params }: { params: { id: string } }) {
    try {
      const ticket = await prisma.ticket.delete({
        where: { id: Number(params.id) },
      });
      return { message: "Ticket deleted", ticket };
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export default TicketController;