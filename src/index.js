import express from 'express';
const PORT = 3002;

const app = express();

app.use((req, res, next) => {
  console.log(`Time: ${new Date().toLocaleString()}`);
  next();
});
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Hello world, again!',
  });
});

app.use((err, req, res, next) => {
  res.status(500).json({
    message: 'Something went wrong',
  });
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
