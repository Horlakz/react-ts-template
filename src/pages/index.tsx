import { Navigate } from "react-router-dom";

import { useAuth } from "@/hooks/auth";

const HomePage = (): JSX.Element => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) return <Navigate to={"/dashboard"} />;

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
