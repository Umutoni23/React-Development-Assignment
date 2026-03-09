
import { useRef } from "react";

const EmployeeCard = ({ employee }) => {

  const { id, name, email, phone, website, company } = employee;

  const cardRef = useRef();

  // Online profile image
  const profileImage = `https://randomuser.me/api/portraits/men/${id}.jpg`;

  const downloadCard = async () => {
    const canvas = await html2canvas(cardRef.current);
    const link = document.createElement("a");
    link.download = `${name}-card.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div
      ref={cardRef}
      className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition duration-300 text-center"
    >

      {/* Profile Picture */}
      <div className="flex justify-center mb-4">
        <img
          src={profileImage}
          alt={name}
          className="w-24 h-24 rounded-full object-cover border-4 border-blue-500"
        />
      </div>

      <h2 className="text-xl font-bold mb-3">{name}</h2>

      <div className="text-gray-700 text-sm space-y-1">
        <p><strong>ID:</strong> {id}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone:</strong> {phone}</p>
        <p><strong>Website:</strong> {website}</p>
        <p><strong>Company:</strong> {company.name}</p>
      </div>

      <div className="flex justify-center gap-3 mt-4">
        <button
          onClick={() => window.print()}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          Print
        </button>

        <button
          onClick={downloadCard}
          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
        >
          Download
        </button>
      </div>

    </div>
  );
};

export default EmployeeCard;