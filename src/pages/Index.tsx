import BaseLayout from "../layouts/BaseLayout";

const Index = (): JSX.Element => {
  return (
    <BaseLayout>
      <BaseLayout.Container>
        <BaseLayout.Header />
        <div>this thing dey mad sha</div>
        <BaseLayout.Footer />
      </BaseLayout.Container>
    </BaseLayout>
  );
};

export default Index;
