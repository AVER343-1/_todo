/** @format */
import { getAllTasks } from "../../prisma/tasks";

export default async function handle(req: any, res: any) {
  try {
    switch (req.method) {
      case "GET": {
        // if (req.query.id) {
        //   // Get a single user if id is provided is the query
        //   // api/users?id=1
        //   const user = await getUser(req.query.id);
        //   return res.status(200).json(user);
        // } else {
        // Otherwise, fetch all users
        const users = await getAllTasks();
        return res.json(users);
        // }
      }

      default:
        break;
    }
  } catch (error: any) {
    return res.status(500).json({ ...error, message: error.message });
  }
}
