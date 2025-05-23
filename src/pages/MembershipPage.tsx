
import MembershipForm from "../components/MembershipForm";

const MembershipPage = () => {
  return (
    <div className="container py-12 mx-auto">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-10">Membership Application</h1>
        <MembershipForm />
      </div>
    </div>
  );
};

export default MembershipPage;
