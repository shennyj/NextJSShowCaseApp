import path from "path";
import fs from "fs";

const buildPath = () => {
  return path.join(process.cwd(), "data", "data.json");
};

const extractData = (filePath) => {
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);
  return data;
};

export default function emailReg(req, res) {
  const { method } = req;

  //access data.json file and extract data
  //extract allEvents and get the eventId we get from body
  //and update emails registered
  const filePath = buildPath();
  const { events_categories, allEvents } = extractData(filePath);
  if (!allEvents) {
    return res.status(404).json({
      status: 404,
      message: "Events not found",
    });
  }
  if (method === "POST") {
    const { email, eventId } = req.body;
    if (!email | !email.includes("@")) {
      res.status(422).json({ message: "Invalid email address" });
      return;
    }
    //form submit. add email to json file based off what event we're on
    const newAllEvents = allEvents.map((ev) => {
      if (ev.id === eventId) {
        if (ev.emails_registered.includes(email)) {
          res
            .status(201)
            .json({ message: "This email has already been registered" });
          return ev;
        } else {
          return {
            ...ev,
            emails_registered: [...ev.emails_registered, email],
          };
        }
      }
      return ev;
    });
    fs.writeFileSync(
      filePath,
      JSON.stringify({ events_categories, allEvents: newAllEvents })
    );
    res
      .status(200)
      .json({ message: `You have registered with the email: ${email}` });
  }
}
