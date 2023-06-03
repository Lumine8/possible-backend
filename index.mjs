import Express from "express";
import { PythonShell } from "python-shell";

const router = Express.Router;

router.get("/", (req, res) => {
  let options = {
    args: ["sampleImg.jpeg"],
    pythonOptions: ["-u"],
    // mode: "text",
  };

  const pythonMessage = [];

  PythonShell.run("app.py", options, null).then((messages) => {
    console.log(messages);
    pythonMessage.push(messages[0]);
    res.send(pythonMessage);
  });
});

export {router}