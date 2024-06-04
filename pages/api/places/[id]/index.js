import dbConnect from "../../../../db/dbConnect.js";
import Place from "../../../../db/models/Place.js";

export default async function handler(request, response) {
  const { id } = request.query;
  await dbConnect();
  console.log("Id on dynamic page", id);

  if (request.method === "GET") {
    const place = await Place.findById(id);
    if (!id) {
      return;
    }
    if (!place) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(place);
  }

  // const place = db_places.find((place) => place._id.$oid === id);
  // const comment = place?.comments;
  // const allCommentIds = comment?.map((comment) => comment.$oid) || [];
  // const comments = db_comments.filter((comment) =>
  //   allCommentIds.includes(comment._id.$oid)
  // );

  // if (!place) {
  //   return response.status(404).json({ status: "Not found" });
  // }

  // response.status(200).json({ place: place, comments: comments });
}
