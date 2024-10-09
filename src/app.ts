import createServer from "./server/createServer";
import Env from "./utils/Env";

createServer.listen(Env.PORT, async () => {
  try {
    console.log(`Server started on port ${Env.PORT} with ${Env.NODE_ENV} environment`);
    console.log(`Visit http://localhost:${Env.PORT}`);
    console.log("Developed by Andry Pebrianto");
  } catch (error) {
    console.log(error); 
    process.exit(1);
  }
});
