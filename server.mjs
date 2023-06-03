import Express from "express";
import { PythonShell } from "python-shell";

const app = Express();

const PORT = 3002

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    const pythonMessage = [];
    let options = {
        args: ["sampleImg.jpeg"],
        pythonOptions: ["-u"],
        // mode: "text",
      };

      PythonShell.run("app.py", options, null).then((messages) => {
        console.log(messages);
        pythonMessage.push[messages]
        res.render("index", { text: messages });
      });
  
});

app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});

