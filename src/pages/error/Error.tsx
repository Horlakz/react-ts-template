// baselayout component
import BaseLayout from "../../layouts/BaseLayout";

const Index = (): JSX.Element => {
  // page title
  document.title = "React TS Template";

  return (
    <BaseLayout>
      {/* baselayout.(any) are optional */}
      <BaseLayout.Container>
        <BaseLayout.Header />
        {/* your content goes here */}
        <main className="p-4 text-center">
          <p>This page cannot be found.</p>
          <p className="mb-4">Check if you have added the route or the route link is correct</p>

          <p>
            you can edit this error page in{" "}
            <code className="bg-[#ccc] p-1 rounded-md">pages/error</code>
          </p>
        </main>
        <BaseLayout.Footer />
      </BaseLayout.Container>
    </BaseLayout>
  );
};

export default Index;
