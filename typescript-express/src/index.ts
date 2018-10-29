import app from './app';

const PORT:number = 3001
app.listen(PORT, () => {
    console.log(`[SERVER] Running at http://localhost:${PORT}`);
});