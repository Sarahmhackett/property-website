import PropertyAddForm from "@/app/components/PropertyAddForm";

const AddPropertyPage = () => {
  return (
    <section className="bg-blue">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 mb-4 shadow-md rounded-md border-m4 md:m-0">
          <PropertyAddForm />
        </div>
      </div>
    </section>
  );
};

export default AddPropertyPage;
