
// baselayout component
import BaseLayout from "../layouts/BaseLayout";

const Index = (): JSX.Element => {
  // page title
  document.title = "React TS Template";

  return (
    <BaseLayout>
      {/* baselayout.(any) are optional */}
      <BaseLayout.Container>
        <BaseLayout.Header />
        {/* your content goes here */}
        <main className="p-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe veniam
          accusamus voluptatibus corrupti eaque quam ad doloremque quia nulla
          iste. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
          ducimus laudantium nesciunt voluptate repudiandae rerum voluptatibus
          aspernatur accusantium suscipit fugit ea, ab qui odio cumque eos a,
          mollitia pariatur minima ipsum similique deserunt incidunt est. Ullam
          cumque dolore officia corporis sed possimus? Officia id rerum officiis
          rem quod illum laboriosam vero, doloribus et accusamus tenetur veniam
          porro. Corrupti, natus cumque.
        </main>
        <BaseLayout.Footer />
      </BaseLayout.Container>
    </BaseLayout>
  );
};

export default Index;
