import Button from "@/components/ui/button";
import { useRouter } from "@/router/router.hook";

const ServerErrorPage = () => {
  const router = useRouter();

  return (
    <div>
      <h1>500 - Internal Server Error</h1>
      <p>Sorry, something went wrong.</p>
      <Button onClick={() => router.goTo("/")}>Go Back Home</Button>
    </div>
  );
};

export default ServerErrorPage;
