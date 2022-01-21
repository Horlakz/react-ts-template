import BaseLayout from "../layouts/BaseLayout";

const Index = (): JSX.Element => {
  return (
    <BaseLayout>
      <BaseLayout.Container>
        <BaseLayout.Header />
        <div>this is just a template</div>
        <BaseLayout.Footer />
      </BaseLayout.Container>
    </BaseLayout>
  );
};

export default Index;
