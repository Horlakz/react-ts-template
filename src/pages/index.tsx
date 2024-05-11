import Navigate from "@/router/navigate";
import { useAuth } from "./auth/auth.hook";

const HomePage = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) return <Navigate to="/dashboard" />;

  return (
    <main>
      <section>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id architecto
        ipsam eum impedit veritatis at, minus nostrum iusto dolorem voluptates
        saepe beatae delectus, repudiandae quis quam consectetur aliquam minima
        laboriosam.
      </section>
    </main>
  );
};

export default HomePage;
