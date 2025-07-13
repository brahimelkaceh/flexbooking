import e from "express";
const PORT = process.env.PORT || 3000;

const app = e();

app.get("/", (req, res) => {
  res.json({ message: "Handled" });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
