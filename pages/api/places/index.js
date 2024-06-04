import dbConnect from "../../../db/dbConnect.js";
import Place from "../../../db/models/Place.js";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const places = await Place.find();

    if (!places) {
      return response.status(404).json({ status: "Place Not Found" });
    }
    response.status(200).json(places);
  }
}
