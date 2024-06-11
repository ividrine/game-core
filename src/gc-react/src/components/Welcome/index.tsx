import Button from "../Button";

const Welcome = () => {
  return (
    <>
      <h1>Game Core</h1>
      <p>Get started by syncing your games and launchers</p>
      <Button className="border border-light px-4 py-2 rounded">
        Sync Games
      </Button>
    </>
  );
};

export default Welcome;
