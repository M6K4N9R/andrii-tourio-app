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

  if (request.method === "POST") {
    try {
      const placeData = request.body;

      await Place.create(placeData);

      response.status(201).json({ status: "Joke created" });
    } catch (error) {
      console.log(error);
      response.status(400).json({ error: error.message });
    }
  }
}
